# r_dash
An info dashboard Flutter app, meant to be hosted on a specific display tied to a Raspberry (Zero 2W). It displays the Dutch Rainfal radar and real time train schedule for a specific station of your choosing.

# Dependencies

- Flutter
- Flutter-pi
- A Display - I use a basic HDMI model as well, but should work with any other no problem.
- A Raspberry in Kiosk mode with the Lite OS. I use the Zero 2w myself.

## Notes
- r_dash displays in portrait mode.
- r_dash works natively only. flutter web is unable to work due to [CORS errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors).
