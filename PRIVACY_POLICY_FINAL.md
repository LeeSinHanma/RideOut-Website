# Privacy Policy for RideOut

**Effective Date:** August 24, 2026  
**Last Updated:** August 24, 2026  
**Application Name:** RideOut  
**Package Identifier:** `com.rideout.app`  
**Data Controller / Operating Entity:** Saiken Studio  
**Official Repository & Website:** [https://github.com/LeeSinHanma/RideOut](https://github.com/LeeSinHanma/RideOut)  
**Privacy Contact Email:** [saikenstudio.app@gmail.com](mailto:saikenstudio.app@gmail.com)  

---

## Table of Contents

1. [Introduction & Scope](#1-introduction--scope)
2. [Responsible Entity & Compliance Framework](#2-responsible-entity--compliance-framework)
3. [Information We Collect](#3-information-we-collect)
4. [How We Collect Information & Legal Bases for Processing](#4-how-we-collect-information--legal-bases-for-processing)
5. [How We Use Your Information](#5-how-we-use-your-information)
6. [Location Services & Device Permissions Disclosures](#6-location-services--device-permissions-disclosures)
7. [On-Device Local Processing & Offline Telemetry Buffering](#7-on-device-local-processing--offline-telemetry-buffering)
8. [Cloud Infrastructure & Server Storage](#8-cloud-infrastructure--server-storage)
9. [Post-Session Location Privacy & Data Retention Protocol](#9-post-session-location-privacy--data-retention-protocol)
10. [Data Sharing, Disclosure & Third-Party Processors](#10-data-sharing-disclosure--third-party-processors)
11. [Third-Party Services & Privacy Policy Links](#11-third-party-services--privacy-policy-links)
12. [Technical & Organizational Data Security Safeguards](#12-technical--organizational-data-security-safeguards)
13. [Your Legal Data Rights & Account/Data Deletion Instructions](#13-your-legal-data-rights--accountdata-deletion-instructions)
14. [Children's Data Privacy](#14-childrens-data-privacy)
15. [Cookies, Local Storage & Tracking Disclosures](#15-cookies-local-storage--tracking-disclosures)
16. [International Data Transfers & Cross-Border Processing](#16-international-data-transfers--cross-border-processing)
17. [Policy Revisions & Material Change Notices](#17-policy-revisions--material-change-notices)
18. [Contacting the Data Protection Office](#18-contacting-the-data-protection-office)

---

## 1. Introduction & Scope

Welcome to **RideOut** ("we," "us," "our," or the "Application"), operated and maintained by **Saiken Studio**. RideOut is a real-time group location tracking, convoy communication, and ride session telemetry platform engineered specifically for motorcycle, scooter, bicycle, and automobile riders.

This Privacy Policy governs the collection, processing, storage, transmission, protection, and deletion of personal and telemetry data when you access or use the **RideOut** mobile application (available on Google Play and Apple App Store), our official web interfaces, and associated cloud backends (collectively, the "Services").

By downloading, installing, registering, or using RideOut, you acknowledge that you have read, understood, and agreed to the practices described in this Privacy Policy. If you do not agree with the terms outlined herein, please immediately cease using the Application and uninstall it from your device.

---

## 2. Responsible Entity & Compliance Framework

### 2.1 Primary Jurisdiction & Legal Framework
RideOut operates primarily under the laws of the **Republic of the Philippines**. Our data processing practices strictly comply with:
* **Republic Act No. 10173**, otherwise known as the **Data Privacy Act of 2012 (DPA)**;
* The **Implementing Rules and Regulations (IRR)** issued by the **National Privacy Commission (NPC)** of the Philippines.

### 2.2 Global Compliance Standards (GDPR & CCPA/CPRA)
To ensure international compliance for global riders, RideOut aligns its operational standards with major international privacy legislation:
* **General Data Protection Regulation (GDPR) (EU/UK 2016/679):** Enforcing strict lawful processing bases, user rights, data minimisation, and right-to-erasure mechanisms for European Economic Area (EEA) and UK users.
* **California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA):** Providing transparent disclosures regarding personal data collection, non-sale of personal data, and user opt-out mechanisms.
* **Google Play Developer Policy & Apple App Privacy Standards:** Meeting all explicit disclosures required for background location usage, app attestation, and data safety disclosures.

### 2.3 Data Controller Contact Details
The designated Data Controller responsible for your personal information is:
* **Entity Name:** Saiken Studio
* **Operating Address:** Taguig City, Metro Manila, Philippines
* **Data Protection & Privacy Email:** `saikenstudio.app@gmail.com`
* **Official Code Repository:** `https://github.com/LeeSinHanma/RideOut`

---

## 3. Information We Collect

We collect information directly provided by you, telemetry generated automatically by device sensors during active ride sessions, and technical authentication identifiers.

### 3.1 Account & Identity Data
* **Authenticated Account Information:** When registering or signing in via Google Sign-In or Email/Password, we collect your email address, display name, unique Firebase User Identifier (`UID`), and profile photo URL (if provided by Google). Passwords are encrypted directly by Firebase Authentication and are never accessible to us.
* **Guest Account Session Data:** If you utilize RideOut in Guest Mode, an anonymous session UID is generated locally. Guests are not required to provide email addresses or register public rider handles.
* **Rider Profile & Vehicle Preferences:** Display name, active vehicle category (Motorcycle, Scooter, Bicycle, or Car), and auto-assigned unique Rider Tag (e.g., `ALEX#8920`) used for direct friend discovery.

### 3.2 Real-Time Location & Telemetry Sensor Data
* **Live GPS Coordinates:** During an active ride session, we collect real-time latitude, longitude, altitude, and accuracy radius (meters).
* **Movement Dynamics:** Real-time speed (km/h), bearing heading angle (degrees 0–360°), online presence heartbeats, and timestamped breadcrumb telemetry.
* **Geofence & Milestone Events:** Proximity calculations relative to designated convoy departure points, lead rider anchors, and arrival destinations.

### 3.3 Convoy Communications & Safety Alerts
* **Glove Radio Signals:** Preset walkie-talkie signal triggers (Gas Stop Needed, Hazard Ahead, Regroup, Rest Stop, Heavy Rain) including sender UID, vehicle category, and timestamp.
* **Emergency SOS & Breakdown Beacons:** High-priority safety alerts containing alert category, optional rider text notes, and exact pinned latitude/longitude coordinates.

### 3.4 User-Saved Places & Favorites
* **Saved Spots:** Custom location records saved by users (such as Home, Work, Usual Spot, Scenic View, Gas Station, or Coffee) including custom labels, formatted addresses, and geographical coordinates. Saved places are strictly private and user-scoped.

### 3.5 Post-Session Ride Summaries
* **Aggregate Metrics:** Aggregate ride records compiled after session completion: total distance covered (km), average velocity (km/h), maximum velocity (km/h), total ride duration (minutes), participant counts, departure/arrival timestamps, and unlocked milestone trophies.

### 3.6 Social & Relationship Data
* **Rider Connections:** Unique Rider Tags, pending friend requests (`pending_sent`, `pending_received`), accepted friend lists, and mutual convoy history.
* **Direct Session Invites:** Sent and received room invitations containing room code, ride title, host display name, destination preview, and RSVP status.

### 3.7 Device Integrity & Technical Diagnostics
* **Push Notification Routing:** Firebase Cloud Messaging (FCM) device registration tokens used to route push notifications.
* **App Check Attestation Tokens:** Device integrity payloads generated via Google Play Integrity (Android) and Apple App Attest (iOS) to combat API abuse and spoofed clients.
* **Application Settings:** Local preferences stored on device including dark mode state, custom geofence radius settings, and onboarding flags.

---

## 4. How We Collect Information & Legal Bases for Processing

### 4.1 Collection Channels
1. **Direct User Submission:** Inputs provided when creating an account, updating profiles, saving favorite locations, or dispatching radio signals.
2. **Automated Sensor Polling:** GPS location, accelerometer, and movement telemetry polled during active ride sessions.
3. **Third-Party Authentication APIs:** Account identity metadata returned by Google OAuth 2.0 services.

### 4.2 Lawful Bases under GDPR (Article 6)
* **Performance of Contract (Art. 6(1)(b)):** Processing location coordinates, convoy signals, and room codes is strictly necessary to deliver real-time group navigation services requested by you.
* **Consent (Art. 6(1)(a)):** Processing background location updates and sending push notifications relies on your explicit consent granted via OS permission prompts.
* **Legitimate Interests (Art. 6(1)(f)):** Verifying app integrity (App Check) and preventing fraudulent API usage to secure our infrastructure.
* **Legal Obligation (Art. 6(1)(c)):** Retaining minimal transaction/audit records where required under applicable tax or data protection legislation.

---

## 5. How We Use Your Information

We process your data strictly for legitimate operational, safety, and core functional purposes:

1. **Real-Time Group Convoy Tracking:** Rendering participant markers on map views, drawing route lines, and synchronizing position vectors across riders.
2. **Audio & Visual Safety Alerts:** Synthesizing Text-To-Speech (TTS) voice announcements and displaying system tray alerts for radio callouts, hazard warnings, and Emergency SOS beacons.
3. **Geofence Boundary Monitoring:** Calculating rider proximity to convoy lead anchors and automatically notifying riders who fall behind.
4. **Social & Group Connectivity:** Enabling rider searches by unique Rider Tag, delivering direct ride invitations, and managing friend rosters.
5. **Personalized Places & Ride History:** Storing private favorite spots and generating post-ride summary logs.
6. **Infrastructure Security & Anti-Spoofing:** Enforcing Firebase App Check attestation and validating mock location flags locally to prevent GPS spoofing.
7. **Pro Subscription Verification:** Validating RideOut PRO billing entitlements via Google Play and Apple App Store in-app purchase receipts.

We do **NOT** sell, rent, monetize, or trade your personal data or real-time location telemetry to data brokers, ad networks, or marketing partners.

---

## 6. Location Services & Device Permissions Disclosures

RideOut requests specific Android and iOS runtime permissions essential for real-time tracking:

### 6.1 Precise & Background Location (`ACCESS_FINE_LOCATION`, `ACCESS_COARSE_LOCATION`, `ACCESS_BACKGROUND_LOCATION`)
* **Purpose:** To stream your location to convoy members, update map markers, calculate speed/distance metrics, trigger geofence alerts, and maintain continuous group tracking while your phone screen is locked or the app is running in the background during an active ride.
* **User Control:** You may grant, restrict, or revoke location permissions at any time via device settings (`Settings > Apps > RideOut > Permissions > Location`).
* **Consequence of Denial:** Denying location access prevents participation in active group ride sessions and real-time map tracking.

### 6.2 Foreground Location Service (`FOREGROUND_SERVICE_LOCATION`)
* **Purpose:** Displays a mandatory persistent status bar notification while background location services are actively running during a ride, ensuring complete transparency that location tracking is active.

### 6.3 System Notifications (`POST_NOTIFICATIONS`)
* **Purpose:** Delivers notifications for incoming ride invites, convoy radio callouts, emergency SOS alerts, and departure reminders.

### 6.4 Screen Wake Lock (`WAKE_LOCK`)
* **Purpose:** Keeps the display active while viewing the live navigation screen to ensure hands-free visibility while riding.

### 6.5 Permissions Not Used
RideOut does **NOT** access your device Camera, Microphone (TTS uses system voice output), Contacts, SMS, Photos/Media files, Calendar, or Biometric sensors.

---

## 7. On-Device Local Processing & Offline Telemetry Buffering

To protect user privacy and conserve bandwidth, RideOut performs processing locally whenever feasible:

* **Local Anti-GPS Spoofing Filter:** Location updates generated by developer mock location apps are detected locally (`position.isMocked`) and dropped before cloud transmission.
* **Offline Telemetry Buffering:** If cellular service is lost during a ride, location points and completed ride summaries are cached securely in local device storage (`SharedPreferences` / disk persistence).
* **Automatic Cloud Sync:** When connectivity resumes, buffered offline telemetry is synchronized to Firebase.
* **Local TTS Synthesis:** Voice readouts for radio callouts are rendered locally using the device Text-To-Speech engine without uploading audio data.

---

## 8. Cloud Infrastructure & Server Storage

When data is transmitted to the cloud, it is encrypted in transit via HTTPS/TLS 1.3 to Google Firebase Realtime Database. Cloud storage nodes include:

* `users/$uid`: Display name, rider tag, vehicle category, online status, FCM token, aggregate stats, and PRO subscription status.
* `rides/$sessionCode`: Active room metadata, start/destination pins, host settings, and participant telemetry during active rides.
* `user_history/$uid/$sessionCode`: Completed ride summaries (distance, velocity, duration, trophies).
* `user_saved_locations/$uid`: Private saved places.
* `friends/$uid`, `invites/$uid`, `user_notifications/$uid`: Relationship and invite records.

---

## 9. Post-Session Location Privacy & Data Retention Protocol

### 9.1 Automatic Post-Session GPS Coordinate Wiping
RideOut operates a strict **Post-Session Privacy Protocol**. The moment a ride session is ended by the host (via `endSession()`), all raw latitude, longitude, and elevation coordinates recorded under `rides/$code/participants` are **permanently and automatically wiped** from our cloud servers. Only non-sensitive aggregate summary metrics (total distance, max/avg speed, total duration, and trophies) remain in your private `user_history/$uid` node.

### 9.2 Data Retention Timeline
* **Active Profile Data:** Retained for the duration of your registered account.
* **Live GPS Coordinates:** Retained only during an active ride session; purged immediately upon session completion.
* **Ride History & Saved Places:** Retained until manually deleted by you or upon account closure.
* **Inactive Session Rooms:** Abandoned or inactive room nodes older than 30 days are automatically purged by automated cleanup scripts.

---

## 10. Data Sharing, Disclosure & Third-Party Processors

### 10.1 Convoy Members
During an active ride session, your display name, vehicle icon, online status, and live GPS location are shared exclusively with riders who join the same private 6-character room code.

### 10.2 Public Rider Search
Your display name, unique Rider Tag (e.g., `ALEX#8920`), vehicle category, and online status are searchable by other registered users to enable friend requests. Guest accounts are excluded from search indexes.

### 10.3 Third-Party Service Processors
We share data with trusted infrastructure providers bound by strict data processing agreements:
* **Google Cloud & Firebase (Google LLC):** Cloud hosting, database storage, user authentication, FCM notifications, and Play Integrity app check.
* **Google Maps API (Google LLC):** Map tile rendering, reverse geocoding, and directions processing.
* **Backend API Proxy (`onrender.com`):** Secure proxy backend for place autocomplete and geocoding requests.
* **Google Play / Apple App Store:** In-app purchase verification for RideOut PRO subscriptions.

### 10.4 Statutory & Legal Disclosures
We may disclose information if required by law, court order, subpoena, or to protect the safety of users or the public during life-threatening emergencies.

---

## 11. Third-Party Services & Privacy Policy Links

* **Google Privacy Policy:** [https://policies.google.com/privacy](https://policies.google.com/privacy)
* **Firebase Privacy & Security:** [https://firebase.google.com/support/privacy](https://firebase.google.com/support/privacy)
* **OpenStreetMap Foundation:** [https://wiki.osmfoundation.org/wiki/Privacy_Policy](https://wiki.osmfoundation.org/wiki/Privacy_Policy)

---

## 12. Technical & Organizational Data Security Safeguards

1. **End-to-End Transport Encryption:** All cloud communications use TLS 1.3 / HTTPS encryption.
2. **Granular Database Governance:** Firebase Realtime Database Security Rules enforce strict user-scoped read/write permissions (`database.rules.json`).
3. **App Check Attestation:** Verified via Play Integrity (Android) and App Attest (iOS) to block spoofed API calls.
4. **API Key Restriction:** Maps API keys are locked to our app package signature (`com.rideout.app`) and SHA-1 fingerprint.
5. **No Password Storage:** Account credentials are handled exclusively by Firebase Authentication.

---

## 13. Your Legal Data Rights & Account/Data Deletion Instructions

### 13.1 Overview of User Rights
You hold full statutory rights under the Philippine Data Privacy Act of 2012, GDPR, and CCPA:
* **Right to Access / Data Portability:** Request a copy of all personal data associated with your UID.
* **Right to Rectification:** Update your display name, vehicle category, and saved places in-app.
* **Right to Erasure (Right to be Forgotten):** Delete saved spots, friend lists, or request complete account purge.
* **Right to Object / Opt-Out:** Leave active ride rooms or disable location permissions at any time.

### 13.2 Account & Data Deletion Procedure
To request permanent deletion of your account, profile, and associated ride history:
1. Send an email to **`saikenstudio.app@gmail.com`** with the subject line: **`Account Deletion Request - RideOut`**.
2. Include your registered email address and unique Rider Tag (e.g., `ALEX#8920`).
3. Following identity verification, your data will be permanently deleted from Firebase Authentication, Realtime Database, and server logs within **thirty (30) calendar days**.

---

## 14. Children's Data Privacy

RideOut is intended for general audiences who operate vehicles or bicycles. The Application is **not directed to children under 13 years of age** (or under 16 in the EEA). We do not knowingly collect personal data from children. If we discover data submitted by a child under 13, it will be deleted immediately. Contact us at `saikenstudio.app@gmail.com` to report concerns.

---

## 15. Cookies, Local Storage & Tracking Disclosures

RideOut mobile applications do **NOT** use browser tracking cookies or advertising identifiers (IDFA/GAID). Local storage (`SharedPreferences` / disk cache) is used strictly for technical session maintenance and offline telemetry buffering.

---

## 16. International Data Transfers & Cross-Border Processing

Data collected by RideOut is processed on Google Cloud Infrastructure located in encrypted data centers in the United States and global edge locations. By using RideOut, you consent to cross-border data transfers protected by standard contractual clauses.

---

## 17. Policy Revisions & Material Change Notices

We reserve the right to update this Privacy Policy. Material changes will be communicated via in-app banners or push notifications, with the "Last Updated" date revised accordingly.

---

## 18. Contacting the Data Protection Office

For privacy inquiries, rights execution, or data deletion requests, contact our privacy team:

* **Data Protection Officer / Developer:** Saiken Studio  
* **Privacy Contact Email:** `saikenstudio.app@gmail.com`  
* **Official Repository:** `https://github.com/LeeSinHanma/RideOut`  
* **Operating Jurisdiction:** Taguig City, Philippines  
