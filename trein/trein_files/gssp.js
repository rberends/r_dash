(function () {
        var callback = function (response) {
            logToConsole(response);
            if (typeof response !== 'undefined' && response != null) {
                var nsrDetection = "{\"nsr\":";
                if ((response + '').indexOf(nsrDetection) !== -1) {
                    try {
                        var nsrJSON = JSON.parse('' + response + '');
                        var nsr = nsrJSON ? nsrJSON.nsr : null;
                        var emailAddress = nsrJSON ? nsrJSON.emailAddress : null;
                        var personId = nsrJSON ? nsrJSON.personId : null;
                        if (nsr != null || emailAddress != null || personId != null) {
                            store(nsr, emailAddress, personId);
                            writeCacheSessionCookie(true);
                            handleNsr(nsr);
                            handleEmailAddress(emailAddress);
                            return null;
                        } else {
                            logToConsole('Error: NSR null.');
                        }
                    } catch (e) {
                        logToConsole(e);
                    }
                    clearStorage();
                } else {
                    //Not a message about user. Ignore this.
                }
            }
            return null;
        };

        function getUserInfo() {
            try {
                if (!inIframe()) {
                    if (isLoggedIn()) {
                        if (hasCacheFlag()) {
                            var userInfo = retrieveUserInfoFromStore();
                            if (typeof userInfo !== 'undefined' && userInfo != null) {
                                var nsrNumber = userInfo.nsr;
                                var emailAddress = userInfo.emailAddress;
                                logToConsole('Stored NSR sending...' + nsrNumber);
                                handleNsr(nsrNumber);
                                handleEmailAddress(emailAddress);
                            } else {
                                clearStorage();
                                loadData();
                            }
                        } else {
                            clearStorage();
                            loadData();
                        }
                    } else {
                        clearStorage();
                    }
                }
            }
            catch (ex) {
                logToConsole(ex.message);
            }
        }

        function handleNsr(nsr) {
            if (nsr != null) {
                var nsrObj = {'nsr': nsr};
                sendToDMP(nsrObj);
            }
        }

        function handleEmailAddress(emailAddress) {
            if (emailAddress != null) {
                window.eventBus.emitEvent('userInfoEvent', [{emailAddress: emailAddress}] );
            }
        }

        function inIframe() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        }

        function loadData() {
            loadWithIframe(callback, 'hidden', 'https://' + window.location.host + '/gssp/rest/user/getNSRJson');
        }

        function loadWithIframe(callback, display, url) {
            logToConsole('Load iframe');
            var iframe = document.createElement('iframe');
            iframe.id = 'redirectframe';
            iframe.style.width = 0;
            iframe.style.height = 0;
            iframe.style.border = 0;
            iframe.style.border = 'none';
            iframe.style.visibility = display;
            iframe.style.position = 'absolute';
            iframe.src = url;
            receiveContentFromIFrame(callback);
            document.body.appendChild(iframe);
            logToConsole('Append iframe: ' + url);
        }

        function receiveContentFromIFrame(callback) {
            var eventMethod = window.addEventListener ? 'addEventListener' : 'attachEvent';
            var eventer = window[eventMethod];
            var messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';
            eventer(messageEvent, function (e) {
                var event = e.originalEvent || e; // For Chrome, the origin property is in the event.originalEvent object.
                var actualOrigin = event.origin;
                logToConsole('Message from child. Origin:' + actualOrigin);
                var expOrigin = window.location.protocol + '//' + window.location.host;
                if (actualOrigin !== expOrigin) {
                    logToConsole('Wrong origin: ' + actualOrigin + ', ' + expOrigin);
                    return;
                }
                logToConsole('Received data from childframe: ' + e.data);
                callback(e.data);
            }, false);
        }

        function sendToDMP(nsrObj) {
            if (typeof _st !== 'undefined') {
                logToConsole('Published NSR.');
                _st('publishEvent', 'authentication', 'userknown', nsrObj);
            }
        }

        function isLoggedIn() {
            var idpLogin = readCookie('idplogin');
            logToConsole('Cookie found? ' + idpLogin);
            if (typeof idpLogin !== 'undefined' && idpLogin != null) {
                if (idpLogin === 'true') {
                    logToConsole('Detected login cookie');
                    return true;
                } else {
                    logToConsole('Login cookie says: logged out');
                }
            } else {
                logToConsole('Could not find login cookie');
            }
            return false;
        }

        function hasCacheFlag() {
            var gsspCache = readCookie('gsspcache');
            logToConsole('Cookie found? ' + gsspCache);
            if (typeof gsspCache !== 'undefined' && gsspCache != null) {
                if (gsspCache === 'true') {
                    logToConsole('Detected gssp cache cookie');
                    return true;
                } else {
                    logToConsole('GSSP cache cookie says: no cache');
                }
            } else {
                logToConsole('Could not find gssp cache cookie');
            }
            return false;
        }

        function clearStorage() {
            try {
                writeCacheSessionCookie(false);
                var storageProvider = getStorageProvider();
                if (typeof storageProvider !== 'undefined' && storageProvider != null) {
                    storageProvider.removeItem('userinfo-nsr');
                    storageProvider.removeItem('userinfo-ts');
                    storageProvider.removeItem('userinfo-emailAddress');
                    storageProvider.removeItem('userinfo-personId');
                }
            } catch (e) {
                //Ignore
                logToConsole(e);
            }
        }

        function retrieveUserInfoFromStore() {
            try {
                var storageProvider = getStorageProvider();
                if (storageProvider != null) {
                    var storedts = storageProvider.getItem('userinfo-ts');
                    if (storedts != null && storedts !== 'null') {
                        var tsNow = getCurrentTimeInMillis();
                        if (Number(tsNow) < Number(storedts)) {
                            var nsr = storageProvider.getItem('userinfo-nsr');
                            var emailAddress = storageProvider.getItem('userinfo-emailAddress');
                            var personId = storageProvider.getItem('userinfo-personId');
                            return {
                                nsr: nsr, emailAddress: emailAddress, personId: personId
                            };
                        } else {
                            clearStorage();
                        }
                    }
                }
            } catch (e) {
                //Ignore
                logToConsole(e);
            }
            return null;
        }

        function store(nsr, emailAddress, personId) {
            try {
                var storageProvider = getStorageProvider();
                if (typeof storageProvider !== 'undefined' && storageProvider != null) {
                    storageProvider.setItem('userinfo-nsr', nsr);
                    storageProvider.setItem('userinfo-emailAddress', emailAddress);
                    storageProvider.setItem('userinfo-personId', personId);
                    //Make sure this is bigger than the session timeout, checking sooner is of no use.
                    var dataMaxAge = 15 * 60 * 1000;
                    storageProvider.setItem('userinfo-ts', getCurrentTimeInMillis() + dataMaxAge);
                }
            } catch (e) {
                //Ignore
                logToConsole(e);
            }
        }

        function getCurrentTimeInMillis() {
            if (typeof Date !== 'undefined') {
                var dnow = new Date();
                if (typeof dnow !== 'undefined') {
                    return dnow.getTime();
                }
            }
            return 0;
        }

        function getStorageProvider() {
            if (typeof(Storage) !== 'undefined') {
                return sessionStorage;
            }
            return null;
        }

        function readCookie(name) {
            var nameEQ = name + '=';
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        function writeCacheSessionCookie(value) {
            try {
                document.cookie = 'gsspcache=' + value + ';domain=' + getCacheCookieDomain() + ';path=/;samesite=lax';
            } catch (e) {
                //Ignore
                logToConsole(e);
            }
        }

        function getCacheCookieDomain() {
            var domain = document.domain;
            var parts = domain.split('.');
            if (parts.length > 1) {
                return '.' + parts[parts.length-2] + '.' + parts[parts.length-1];
            }
            return domain;
        }

        function logToConsole(text) {
            if (typeof window.debugGSSP !== 'undefined' && window.debugGSSP) {
                console.info(text);
            }
        }

        getUserInfo();
    }

)();