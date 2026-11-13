# Sign Your Way — Accessibility Feature Expansion

This update is additive. It preserves the existing five sections, navigation, ASL/ISL camera workflows, trained model assets, campus data, and emergency phrase/contact tools. New panels are placed inside the existing Communicate, Emergency, and SmartNav sections.

## Added features

### Communicate
- Live speech captions using the browser Speech Recognition API (where supported).
- Caption language selection, text-size control, background/contrast choices, and text alignment.
- Manual speaker labels for group discussions (not automatic voice diarisation).
- Editable caption correction and locally saved conversation/lecture notes with TXT export.
- Classroom and video-call companion modes using the same microphone caption engine.
- Personal communication QR card generated locally in the browser using a QRCode library loaded from CDN.
- Restaurant/shopping quick-message board.

### Emergency
- Microphone sound-activity monitor with sensitivity control and visual/vibration alert.
- Testable vibration patterns for doorbell, message, and emergency events.
- In-app missed-call/visitor alert log and optional browser notifications.
- SOS message links for every saved trusted contact; the user reviews and sends each message.

### SmartNav
- Personal visual announcement board saved on this device.
- Queue/token comparison and alerts while the page is open; the user updates the “now serving” value.
- User-maintained deaf-friendly places directory, saved locally.
- Personal accessibility profile saved locally.

## Important browser and integration limits

These are genuine web-app capabilities and should not be presented as more than they are:

- **Sound recognition:** the current implementation detects loud/sudden sound activity. It does not classify fire alarms, smoke alarms, sirens, glass breaking, or door knocks reliably. It is not a replacement for certified safety alarms.
- **Native missed calls / doorbells:** a normal website cannot read the phone's native call log or detect a physical doorbell without a device/OS integration. The added controls log in-app events and can show browser notifications.
- **Vibration:** `navigator.vibrate()` works only on supported devices/browsers and may be restricted by OS settings. It cannot intercept every native call or message.
- **Video-call captions:** captions listen through the device microphone. Capturing another app's internal audio directly is generally blocked by browser security; speaker volume and room acoustics affect results.
- **Classroom captions:** the current feature captions audio captured by the individual device. Broadcasting one lecturer's microphone feed to many student devices requires a server/live-stream integration.
- **Speaker identification:** users manually choose a speaker label. Automatic diarisation is not claimed.
- **Queue alerts:** the user enters their token and the currently served token. Automatic integration with a hospital/bank queue display requires that organisation's API or data feed.
- **Campus announcements:** announcements are saved on the current device. Official campus-wide announcements require an authorised institutional feed.
- **Places directory:** listings are user-submitted and stored locally; they are not independently verified or shared across users.
- **QR generation:** the QR library is loaded from a CDN. QR contents are generated in the browser; the profile message is not sent to a QR-generation API.

## Deployment

1. Extract `sign-your-way-enhanced.zip`.
2. Open the `signbridge-main` folder and deploy its contents as the project root (not the outer ZIP folder).
3. Push the updated files to the GitHub repository connected to Vercel, or upload the folder through your existing deployment workflow.
4. Hard-refresh the deployed site after Vercel finishes building.
5. Test camera permissions, microphone permissions, speech recognition, vibration, geolocation, and notifications on the actual target phone/browser.

The service-worker cache name was incremented so clients can fetch the updated app shell.
