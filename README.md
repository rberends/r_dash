![Header](https://github.com/rberends/r_dash/blob/082bb40c86477a960b0d3071d04685835c0ee6a6/readme/index.png)

# r_dash
An info dashboard Flutter app, meant to be run on a display tied to a Raspberry (Zero 2W). It displays the Dutch Rainfall radar from [Buienradar](https://www.buienradar.nl/) and real time train schedule from the [Nationale Spoorwegen](https://www.ns.nl/) for a specific station of your choosing.


I.e. the dashboard tells you when to leave for the train and whether to bring a raincoat or not. It does this while being color tuned to your own living room, with over 20 color modes.

## Dependencies

- Flutter
- Flutter-pi
- A Display - I use a basic HDMI model, but should work with any other no problem.
- A Raspberry in kiosk mode with the Lite OS. I use the Zero 2w myself.

## Notes
- r_dash displays in portrait mode.
- r_dash works native only. Flutter web is unable to work due to [CORS errors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors) for the HTTP requests we do.
