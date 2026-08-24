# Terms of Service for RideOut

**Effective Date:** August 24, 2026  
**Last Updated:** August 24, 2026  
**Application Package ID:** `com.rideout.app`  

---

## 1. Acceptance of Terms

Welcome to **RideOut** ("we," "us," "our," or the "Application"), owned and operated by **Saiken Studio**, located in Taguig, Republic of the Philippines. 

These Terms of Service ("Terms") govern your access to and use of the RideOut mobile application, backend services, real-time location features, and related software applications (collectively, the "Services").

By downloading, installing, registering for, accessing, or using RideOut (including entering a ride session as an anonymous guest or registered user), you explicitly agree to be bound by these Terms and our [Privacy Policy](PRIVACY_POLICY_FINAL.md). If you do not agree to all of these Terms, you must not install, access, or use the Application.

> **Notice Regarding iOS / Apple Platform:** RideOut is currently released exclusively for the **Android** operating system via the Google Play Store. References to iOS, Apple App Store, or Apple App Attest are included for architectural context and future cross-platform deployment. Apple-specific distribution terms do not currently apply.

---

## 2. Eligibility & Account Creation

### 2.1 Minimum Age Requirement
You must be at least **thirteen (13) years of age** (or the minimum legal age required in your jurisdiction to use online services without parental consent) to access or use RideOut. By creating an account or using the Application, you represent and warrant that you are at least 13 years old. If you are under 18 years of age, you represent that you have reviewed these Terms with your parent or legal guardian and that they agree to these Terms on your behalf.

### 2.2 Account Types & Registration
RideOut provides two modes of access:
* **Anonymous Guest Mode:** Allows temporary session participation without email registration. Guest sessions are bound to a temporary device identifier (Guest UID) and do not support persistent friend lists, saved history, or public rider tags.
* **Registered Accounts (Google Sign-In or Email/Password):** Allows access to complete features, including unique Rider Tags (e.g., `ALEX#8920`), friend requests, direct ride invitations, saved favorite places, and persistent ride history logs.

### 2.3 Account Security
You are responsible for maintaining the confidentiality of your account credentials (if applicable) and for all activities that occur under your account or device session. You agree to notify us immediately at `saikenstudio.app@gmail.com` if you suspect any unauthorized access or breach of security.

---

## 3. Description of Service

RideOut is a real-time group location tracking, convoy walkie-talkie communication, and ride session organizer designed for riders of motorcycles 🏍️, scooters 🛵, bicycles 🚲, and cars 🚗. 

Core features provided by the Application include:
1. **Real-Time Convoy Map & Location Sharing:** Live positioning of convoy members during an active ride session, supporting both **Destination Mode** (route navigation, geofences, and arrival detection) and **Free Ride Mode** (follow-the-leader tracking without a fixed destination).
2. **Session Creation & Room Codes:** Hosting or joining group ride sessions via a unique 6-character room code or direct friend invite.
3. **Hands-Free Convoy Radio & Audio Readouts:** Glove-friendly walkie-talkie signal buttons (Gas Stop ⛽, Hazard ⚠️, Regroup 🐢, Rider Behind 🚨, Rest Stop ☕, Heavy Rain ⚡) broadcasting localized Text-To-Speech (TTS) voice announcements to connected convoy members.
4. **Emergency SOS & Mechanical Breakdown Beacons:** Broadcast alerts sending live GPS coordinates and emergency status to fellow riders in your active session.
5. **Saved / Favorite Places:** Storing user-scoped private locations (Home 🏠, Work 💼, Usual Spot 📍, Scenic Lookout 🏔️, Gas Station ⛽, Coffee ☕) for 1-tap ride pin selection.
6. **Friends & Direct Group Ride Invites:** Searching riders by unique tag, managing friend rosters, and dispatching 1-tap ride invitations.
7. **Ride Master Session Governance:** Room host tools for en route launch, geofence radius governance, leadership transfer, and synchronized session end commands.
8. **Interactive Spotlight App Tour & Mascot Advice:** Interactive map feature tutorial (`SpotlightTourOverlay`) and dynamic mascot Ryder persona safety guidance.
9. **Anti-GPS Spoofing & Hybrid Caching:** On-device validation filtering fake GPS apps (`position.isMocked`) and local disk caching (`CacheService`) for fast UI performance.

---

## 4. CRITICAL DISCLAIMER: Not an Emergency Service

> [!CAUTION]
> **RIDEOUT IS NOT A REPLACEMENT FOR EMERGENCY SERVICES (911 OR LOCAL EMERGENCY RESPONDERS).**

1. **No Connection to Emergency Responders:** The Emergency SOS and Mechanical Breakdown beacon features within RideOut function **exclusively as peer-to-peer notifications within your active app session**. Triggering an SOS or Breakdown alert notifies **only fellow RideOut users who are currently connected to your ride room**. It does **NOT** contact, dispatch, or notify municipal police, ambulance services, fire departments, highway patrol, or official emergency call centers (such as 911 in the Philippines or equivalent national emergency hotlines).
2. **Immediate Action Required in Emergencies:** In the event of a crash, personal injury, crime, or life-threatening crisis, you or someone on your behalf must immediately dial your local emergency telephone hotline directly.
3. **No Guarantee of Delivery or Accuracy:** SOS signals and location coordinates depend entirely on active cellular coverage, satellite GPS visibility, and server availability. Never rely solely on RideOut for safety, survival, or emergency rescue.

---

## 5. Safe Use, Distracted Driving Laws & Assumption of Risk

### 5.1 Prohibition of Distracted Driving
You must operate your vehicle safely, responsibly, and in strict compliance with all applicable traffic laws, speed limits, and road regulations, including the **Anti-Distracted Driving Act of 2016 (Republic Act No. 10913)** in the Philippines and equivalent laws in other jurisdictions.

* **Hands-Free Requirement:** You must **NEVER** type, tap, view, or physically manipulate your mobile device screen while actively driving, riding, or controlling a moving vehicle.
* **Pre-Ride Setup:** All ride session parameters, room codes, audio volumes, and route pins must be configured while your vehicle is safely parked in a lawful location.
* **Audio-First Operation:** Intercom communications, radio signals, and route updates are engineered for hands-free audio announcements through Bluetooth helmet headsets (e.g., Sena, Cardo, AirPods) or phone speakers.

### 5.2 Voluntary Location Sharing & Assumption of Risk
* **Voluntary Participation:** Sharing your live location with other users in a ride room is entirely voluntary. 
* **User Relationship Risk:** When you share a 6-character room code or accept a ride invite, your real-time GPS location, display name, vehicle choice, and speed are visible to everyone in that session. 
* **No Background Vetting:** Saiken Studio does **not** conduct criminal background checks, verify the identity, or validate the intentions of users who create or join ride rooms. You assume all risks associated with sharing your real-time location and riding on public roads with other individuals.

---

## 6. User Conduct & Acceptable Use Policy

You agree to use RideOut solely for lawful, non-commercial personal recreation. You agree **NOT** to engage in any of the following prohibited activities:

1. **Stalking & Non-Consensual Tracking:** Using the Application to track, monitor, locate, or stalk any individual without their explicit, informed consent.
2. **Distracted / Unsafe Vehicle Operation:** Interacting with the Application interface while physically operating a moving vehicle on public roads.
3. **Harassment & Abuse:** Transmitting abusive, vulgar, threatening, discriminatory, or harassing content via custom ride titles, display names, or emergency alert notes.
4. **Impersonation:** Creating an account or rider profile using another person's name, trademark, or identity without authorization.
5. **Security & App Check Circumvention:** Attempting to bypass, disable, decompile, or tamper with Firebase App Check attestation, Play Integrity checks, or anti-GPS spoofing controls (`position.isMocked`).
6. **Backend Exploitation & Automated Abuse:** Scripting, botting, rate-limit bypassing, or executing automated HTTP/API requests against our backend proxy server (`https://rideout-backend.onrender.com`), Firebase Realtime Database endpoints, or Google Maps APIs.
7. **Reverse Engineering:** Reverse-engineering, decompiling, disassembling, or attempting to derive the source code or underlying algorithms of the Application.
8. **Commercial Exploitation:** Renting, leasing, reselling, or using RideOut for commercial fleet management or commercial ride-hailing services without our prior written approval.

---

## 7. Subscriptions, Payments & RideOut PRO

### 7.1 RideOut PRO Subscription Tier
RideOut offers an optional premium subscription tier (**RideOut PRO**) providing enhanced features, such as custom rider showcase badges, advanced statistical history, and exclusive app personalization.

### 7.2 In-App Purchase Billing (Google Play Store)
* **Payment Processor:** All subscription transactions, currency conversions, billing cycles, and payments for RideOut PRO are processed exclusively through **Google Play Store In-App Billing** (`in_app_purchase`). Saiken Studio does not directly collect, store, or process credit card numbers or banking credentials.
* **Billing Cycles & Auto-Renewal:** RideOut PRO is offered on auto-renewing **Monthly** (`rideout_pro_monthly`) and **Annual** (`rideout_pro_annual`) subscription plans. Subscriptions automatically renew at the end of each billing period unless canceled at least twenty-four (24) hours prior to the expiration of the current period.
* **Pricing & Currency:** Prices are displayed in your local currency (e.g., Philippine Peso PHP ₱ or United States Dollar USD $) based on your Google Play account country settings and device locale. Applicable taxes are managed by Google Play.

### 7.3 Cancellation & Refund Policy
* **Cancellation Process:** You may cancel your RideOut PRO subscription at any time through your device's Google Play Store Subscription Settings (`Google Play Store > Profile > Payments & subscriptions > Subscriptions > RideOut PRO > Cancel subscription`). Cancellation stops future auto-renewals; you will maintain access to PRO features until the end of your current paid billing period.
* **Refund Policy:** All refund requests, chargebacks, and payment disputes are subject to the official **Google Play Store Refund Policy**. Saiken Studio cannot directly issue cash refunds for purchases made through the Google Play Store interface.

---

## 8. Location Data, Signal Availability & Accuracy Disclaimer

1. **GPS & Network Dependence:** Real-time location tracking, polyline breadcrumbs, turn-by-turn routes, and geofence arrival detection depend on device hardware, GPS satellite visibility, cellular data connectivity, and backend network operations.
2. **Signal Disruption:** Location accuracy may be compromised, delayed, or rendered completely unavailable due to environmental factors, including tunnels, underground passages, dense forest canopy, mountainous terrain, urban canyons, atmospheric interference, or mobile network dead zones.
3. **No Warranty of Accuracy:** Saiken Studio does **not** guarantee that real-time location telemetry, distance calculations, speed readings, route polylines, or geofence boundary alerts will be uninterrupted, error-free, continuous, or 100% accurate. You agree that you will not hold Saiken Studio liable for any consequences arising from inaccurate, delayed, or missing location data.

---

## 9. Third-Party Services & Infrastructure

RideOut integrates with third-party software development kits (SDKs) and cloud APIs to deliver mapping, database, authentication, and backend proxy services:
* **Google Maps Platform:** Provides map rendering, geocoding, and directions routing ([Google Maps Terms of Service](https://cloud.google.com/maps-platform/terms)).
* **Firebase Cloud Infrastructure (Google LLC):** Provides Realtime Database, Authentication, App Check, and Cloud Messaging ([Firebase Terms of Service](https://firebase.google.com/terms)).
* **Render Web Hosting (`onrender.com`):** Hosts the secure backend API proxy server for places autocomplete and geocoding requests.

Saiken Studio is not responsible for outages, service interruptions, API deprecations, or data errors originating from these third-party infrastructure providers.

---

## 10. Intellectual Property Rights

### 10.1 Ownership
Saiken Studio owns and retains all right, title, and interest in and to RideOut, including the software code, UI design, mascot Ryder artwork, graphics, logos, trademarks, database structures, and documentation.

### 10.2 Limited User License
Subject to your compliance with these Terms, Saiken Studio grants you a personal, non-exclusive, non-transferable, non-sublicensable, revocable license to download, install, and use one copy of the RideOut application on your personal mobile device for personal non-commercial use.

### 10.3 User Content License
You retain ownership of any display name, profile text, or saved locations you upload or submit to the Application ("User Content"). By submitting User Content, you grant Saiken Studio a worldwide, non-exclusive, royalty-free, transferable license to use, display, reproduce, and transmit such content solely to operate, maintain, and provide the Services to you and your designated ride convoy members.

---

## 11. Termination & Account Deletion

### 11.1 Termination by User
You may stop using RideOut at any time by uninstalling the Application from your device.

### 11.2 Account Deletion Process
To request permanent deletion of your registered user account, rider profile, and stored ride history:
1. Send an email to `saikenstudio.app@gmail.com` with the subject line: **"Account Deletion Request - RideOut"**.
2. Include your registered email address and unique Rider Tag (e.g., `ALEX#8920`).
3. Upon identity verification, we will permanently purge your user record from Firebase Authentication, Realtime Database (`users/$uid`, `user_history/$uid`, `user_saved_locations/$uid`), and server logs within **thirty (30) business days**, in alignment with Section 13.2 of our [Privacy Policy](PRIVACY_POLICY_FINAL.md).

### 11.3 Termination by Saiken Studio
We reserve the right, without prior notice or liability, to suspend, restrict, or terminate your access to RideOut if we determine in our sole discretion that you have violated these Terms, compromised platform security, engaged in fraudulent activity, or used the Application to harass or stalk others.

### 11.4 Post-Session Data Wiping Protocol
Upon session completion by the host, raw latitude and longitude telemetry coordinates are automatically and permanently deleted from `rides/$code/participants` nodes in accordance with our Post-Session Location Privacy protocol.

---

## 12. Disclaimer of Warranties

> [!IMPORTANT]
> **TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:**

1. **"AS IS" AND "AS AVAILABLE":** RIDEOUT IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITH ALL FAULTS AND WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
2. **NO WARRANTY:** SAIKEN STUDIO DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND QUIET ENJOYMENT.
3. **NO GUARANTEE OF UPTIME:** WE DO NOT WARRANT THAT THE SERVICES WILL MEET YOUR REQUIREMENTS, THAT OPERATION WILL BE UNINTERRUPTED OR ERROR-FREE, THAT GPS TELEMETRY WILL BE PERFECTLY TIMED, OR THAT SERVER DEFECTS WILL BE IMMEDIATELY CORRECTED.

---

## 13. Limitation of Liability

> [!WARNING]
> **READ THIS SECTION CAREFULLY AS IT LIMITS SAIKEN STUDIO'S LEGAL LIABILITY.**

1. **MAXIMUM LIABILITY CAP:** TO THE FULLEST EXTENT PERMITTED BY THE LAWS OF THE REPUBLIC OF THE PHILIPPINES, SAIKEN STUDIO, ITS DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AND DEVELOPERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO:
   * PERSONAL INJURY, PROPERTY DAMAGE, OR VEHICULAR ACCIDENTS ARISING FROM THE USE OR INABILITY TO USE THE APPLICATION WHILE DRIVING OR RIDING.
   * LOSS OF LIFE, MEDICAL EXPENSES, OR EMERGENCY RESCUE COSTS ARISING FROM RELIANCE ON THE EMERGENCY SOS OR BREAKDOWN BEACON FEATURES.
   * DAMAGES RESULTING FROM INACCURATE, DELAYED, MISSING, OR MISLEADING LOCATION TELEMETRY, GEOFENCE NOTIFICATIONS, OR SPEED READINGS.
   * THE CONDUCT, ACTIONS, OMISSIONS, OR INTENTIONS OF THIRD-PARTY USERS WITH WHOM YOU CHOOSE TO SHARE YOUR LOCATION OR PARTICIPATE IN A RIDE OUT SESSION.
   * UNAUTHORIZED ACCESS, ALTERATION, OR LOSS OF YOUR TELEMETRY DATA OR USER HISTORY.
2. **TOTAL AGGREGATE LIABILITY:** IN NO EVENT SHALL SAIKEN STUDIO'S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE APPLICATION EXCEED THE AMOUNT ACTUALLY PAID BY YOU TO SAIKEN STUDIO FOR RIDEOUT PRO SUBSCRIPTIONS IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE THOUSAND PHILIPPINE PESOS (PHP ₱1,000.00), WHICHEVER IS GREATER.

---

## 14. Indemnification

You agree to defend, indemnify, hold harmless, and release Saiken Studio, its officers, developers, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable legal and attorney fees) arising from or relating to:
1. Your access to, use of, or misuse of the RideOut Services.
2. Your violation of any provision of these Terms or applicable local laws, including traffic safety and anti-distracted driving laws (RA 10913).
3. Any vehicular collision, injury, property damage, or violation of third-party rights caused by your operation of a vehicle while using the Application.
4. Your sharing of live location coordinates with third-party riders in a ride session.

---

## 15. Governing Law & Dispute Resolution

### 15.1 Governing Law
These Terms shall be governed by, construed, and enforced in accordance with the laws of the **Republic of the Philippines**, including the Philippine Civil Code, the E-Commerce Act of 2000 (Republic Act No. 8792), the Consumer Act of the Philippines (Republic Act No. 7394), and the Data Privacy Act of 2012 (Republic Act No. 10173), without regard to its conflict of law principles.

### 15.2 Exclusive Jurisdiction & Venue
Any legal action, suit, or judicial proceeding arising out of or relating to these Terms or the Application shall be instituted exclusively in the competent courts of **Taguig City, Metro Manila, Philippines**. You hereby consent and submit to the personal jurisdiction and venue of such courts.

---

## 16. Modifications to Terms

We reserve the right to revise, update, or modify these Terms at any time. When material changes are made, we will update the "Last Updated" date at the top of these Terms and notify you by displaying an in-app banner or issuing a system tray status notification. 

Your continued use of RideOut after the posting of updated Terms constitutes your binding acceptance of the changes. If you do not agree to the modified Terms, you must discontinue your use of the Application immediately.

---

## 17. Severability & Entire Agreement

* **Severability:** If any provision of these Terms is found to be unlawful, void, or unenforceable under Philippine law by a court of competent jurisdiction, that provision shall be deemed severable and shall not affect the validity and enforceability of the remaining provisions.
* **Entire Agreement:** These Terms, together with our [Privacy Policy](PRIVACY_POLICY_FINAL.md), constitute the entire legal agreement between you and Saiken Studio regarding your use of RideOut, superseding any prior agreements or understandings.

---

## 18. Contact Information

If you have any questions, feedback, or legal inquiries regarding these Terms of Service, please contact us:

* **Developer / Operator:** Saiken Studio  
* **Location:** Taguig, Republic of the Philippines  
* **Official Repository / Website:** `https://github.com/LeeSinHanma/RideOut`  
* **Legal & Privacy Email:** `saikenstudio.app@gmail.com`  
