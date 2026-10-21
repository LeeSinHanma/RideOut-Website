Website UI captures come from the supplied `ride_out_assets` recordings. Crop coordinates below are `(left, top, right, bottom)` in source pixels. Only recording chrome and surrounding desktop space were removed; the app UI was not recreated.

| Asset | Recording | Time (seconds) | Crop |
| --- | --- | --- | --- |
| mapUI.webp | Screen_Recording_20261013_100814.mp4 | 178 | 0, 80, 720, 1594 |
| riderUI.webp | Screen_Recording_20261013_100814.mp4 | 144 | 0, 80, 720, 1594 |
| radio.webp | Screen_Recording_20261013_100814.mp4 | 262 | 0, 80, 720, 1594 |
| withinCircle.webp | Screen_Recording_20261013_100814.mp4 | 190 | 0, 80, 720, 1594 |
| outOfCircle.webp | Screen_Recording_20261013_100814.mp4 | 208 | 0, 80, 720, 1594 |
| SOS.webp | breakdown.mp4 | 18 | 0, 80, 720, 1594 |
| advancedTelemetry.webp | Screen_Recording_20261013_101727.mp4 | 21 | 36, 253, 685, 1026 |
| createRide.webp | Screen_Recording_20261013_100814.mp4 | 6 | 0, 80, 720, 1594 |
| rideRecap.webp | Screen_Recording_20261013_101727.mp4 | 14 | 0, 80, 720, 1594 |
| ride-setup-detail.webp | Screen_Recording_20261013_100814.mp4 | 34 | 70, 485, 650, 1300 |
| join-ride-detail.webp | Screen_Recording_20261013_100814.mp4 | 3 | 40, 990, 680, 1460 |
| convoy-map-detail.webp | Screen_Recording_20261013_100814.mp4 | 190 | 70, 530, 650, 1110 |
| separation-alert-detail.webp | Screen_Recording_20261013_100814.mp4 | 208 | 22, 80, 698, 640 |
| radio-signals-detail.webp | Screen_Recording_20261013_100814.mp4 | 262 | 26, 1005, 694, 1560 |
| emergency-beacon-detail.webp | breakdown2.mp4 | 8.1 | 614, 255, 1128, 720 |

`convoyRider1.webp` through `convoyRider3.webp` are web-sized copies of `Motor1.png` through `Motor3.png`. Existing mascot and logo artwork was retained.

`public/video/rideout-promo.mp4` is a 720 × 1280 H.264/AAC copy of `promo_video/output/RideOut_FINAL_Centered_1080x1920_30fps.mp4`, with fast-start metadata. `promoPoster.webp` is its frame at 32 seconds. The WebVTT captions are converted from `promo_video/review_final/captions.srt`. The player loads video only on user interaction (`preload="none"`).
