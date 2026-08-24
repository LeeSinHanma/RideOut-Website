# 🎨 RideOut UI Style Guide & Visual Reference

> **Single Source of Truth** for maintaining visual, structural, and architectural consistency across the RideOut Flutter app codebase.
> 
> *Generated based on empirical analysis of all Dart screens, widgets, assets, and constants in `lib/`.*

---

## 1. Design Tokens

### Color Palette

RideOut operates on a modern dark-first design system heavily inspired by **Tailwind CSS Slate** tones combined with vibrant electric accents.

#### Central Theme Colors (`lib/main.dart`)
In [lib/main.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/main.dart#L109-L126), the application declares basic light and dark MaterialApp themes:
* **Dark Scaffold Background**: `Color(0xFF0F172A)` (Slate 900)
* **Light Scaffold Background**: `Color(0xFFF8FAFC)` (Slate 50)
* **Seed Color**: `Colors.blue`

#### Raw Hex Palette Used Across Widgets & Screens
Because `ThemeData` text/color schemes are under-utilized, widgets rely directly on raw `Color(0xFF...)` literals. The dominant colors in the codebase are:

| Category | Color Name / Code | Hex Value | Primary Usage Context |
| :--- | :--- | :--- | :--- |
| **Scaffold / Deep BG** | Slate 900 | `Color(0xFF0F172A)` | Screen background, dark header, modal sheet background |
| **Card / Surface BG** | Slate 800 | `Color(0xFF1E293B)` | Cards, input fields, container boxes, sheet surface |
| **Elevated Surface** | Slate 700 | `Color(0xFF334155)` | Active tab highlights, card borders, subtle dividers |
| **Borders & Lines** | Slate 600 / 200 | `Color(0xFF475569)` / `Color(0xFFE2E8F0)` | Sheet handles, outlined borders, card dividers |
| **Primary Accent** | Sky 500 / Blue 500 | `Color(0xFF0EA5E9)` / `Color(0xFF3B82F6)` | Action buttons, active icons, tabs, primary CTAs |
| **Ride Master Cyan** | Electric Cyan | `Color(0xFF00F0FF)` | Host trail polyline, host map highlights, radio waves |
| **Success / Green** | Emerald 500 | `Color(0xFF10B981)` | Meetup pin, active online status, success toasts |
| **Warning / Amber** | Amber 500 | `Color(0xFFF59E0B)` | Geofence circles, pending states, warning alerts |
| **Error / Red** | Crimson 500 | `Color(0xFFEF4444)` | Destination pins, emergency beacons, end session |
| **Pro / Premium** | Purple / Pink | `Color(0xFF8B5CF6)` / `Color(0xFFEC4899)` | RideOut PRO badges, paywall cards, achievements |

#### ⚠️ Flagged Inconsistencies
1. **No Central `AppColors` File**: Color constants are scattered as raw hex literals across all 25+ widget files and 11 screen files instead of being centralized in `lib/constants/app_colors.dart`.
2. **Material Color Mixing**: Several widgets mix raw hex Slate colors with Material palette shades (e.g. `Colors.blue.shade50`, `Colors.grey.shade300`, `Colors.redAccent`), creating subtle light/dark visual misalignment.

---

### Typography

RideOut relies on system native fonts (Roboto on Android, SF Pro on iOS, Segoe UI on Windows). No custom `fontFamily` or `TextTheme` is defined in `ThemeData`. Every single text element uses inline `TextStyle(...)` definitions.

#### Font Weight Scale
* **Black / Heavy (`FontWeight.w900`)**: Hero headers, stat numbers, modal titles, achievement popups.
* **ExtraBold (`FontWeight.w800`)**: Section titles, action buttons, ride titles.
* **Bold (`FontWeight.bold` / `w700`)**: Card titles, tab labels, list item headers, toast titles.
* **SemiBold (`FontWeight.w600`)**: Subtitles, input field labels, key-value labels.
* **Regular (`FontWeight.normal` / `w400`)**: Body descriptions, snippets, timestamps.

#### Size Hierarchy
```dart
// Display / Hero Headings
TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: isDark ? Colors.white : Color(0xFF0F172A))

// Screen & Sheet Titles
TextStyle(fontSize: 20, fontWeight: FontWeight.w900, color: isDark ? Colors.white : Color(0xFF0F172A))

// Card Titles & Section Headers
TextStyle(fontSize: 16, fontWeight: FontWeight.bold)

// Body & Subtitles
TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: isDark ? Colors.white70 : Color(0xFF475569))

// Captions, Badges & Timestamps
TextStyle(fontSize: 11, fontWeight: FontWeight.bold)
```

---

### Spacing, Radii & Icon Sizing

RideOut follows a soft **8pt grid system** for spacing and generous border radiuses for a friendly, modern mobile feel.

#### Padding & Margins
* **Screen Outer Padding**: `EdgeInsets.symmetric(horizontal: 20, vertical: 16)` or `EdgeInsets.all(16)`
* **Card Inner Content Padding**: `EdgeInsets.all(16)` or `EdgeInsets.symmetric(horizontal: 16, vertical: 12)`
* **Modal Bottom Sheet Padding**: `EdgeInsets.symmetric(horizontal: 24, vertical: 20)`
* **Element Spacing (`SizedBox`)**: `height: 8`, `12`, `16`, `20`, `24`

#### Border Radius Scale
```dart
// Micro Badges & Small Chips
BorderRadius.circular(6) // or 8, 10

// Buttons, Input Fields & Cards
BorderRadius.circular(14) // or 12, 16

// Outer Feature Cards & Highlight Panels
BorderRadius.circular(18) // or 20, 22

// Bottom Sheet Top Corners & Full Dialogs
BorderRadius.vertical(top: Radius.circular(24)) // or 28, 32
```

#### Standard Icon Sizes
* **Inline Chips / Subtext**: `14`–`16` px
* **List Tile / Button Leading**: `20`–`24` px
* **Feature Header Icons**: `28`–`32` px
* **Hero Dialog Icons**: `48`–`64` px

---

### Elevation & Shadows

Standard Material `elevation` is set to `0` across AppBars and Cards. Shadows are implemented manually via `BoxShadow`.

```dart
// Card Soft Shadow (Dark Mode friendly)
BoxShadow(
  color: Colors.black.withValues(alpha: isDark ? 0.3 : 0.08),
  blurRadius: 12,
  offset: const Offset(0, 4),
)

// Accent Glow Shadow (e.g. Host Cyan / Pro Purple)
BoxShadow(
  color: const Color(0xFF00F0FF).withValues(alpha: 0.35),
  blurRadius: 16,
  spreadRadius: 2,
)
```

---

## 2. Theming Setup

### Central ThemeData Application
The app root in [lib/main.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/main.dart#L99-L131) wraps `MaterialApp` in a `ValueListenableBuilder<ThemeMode>` bound to a global `themeNotifier`:

```dart
final ValueNotifier<ThemeMode> themeNotifier = ValueNotifier<ThemeMode>(ThemeMode.system);

MaterialApp(
  themeMode: currentMode,
  theme: ThemeData(
    useMaterial3: true,
    brightness: Brightness.light,
    colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue, brightness: Brightness.light),
    scaffoldBackgroundColor: const Color(0xFFF8FAFC),
  ),
  darkTheme: ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue, brightness: Brightness.dark),
    scaffoldBackgroundColor: const Color(0xFF0F172A),
  ),
  home: const SplashScreen(),
);
```

### Theme Value Consumption
Widgets inspect dark mode primarily via:
```dart
final isDark = Theme.of(context).brightness == Brightness.dark;
```
Color selection is then performed using inline ternary expressions:
```dart
color: isDark ? const Color(0xFF1E293B) : Colors.white
```

#### ⚠️ Flagged Inconsistencies
* **No `ThemeExtension`**: No custom `ThemeExtension` is defined for RideOut-specific tokens (e.g., geofence colors, vehicle avatar backgrounds, radio wave gradients).
* **Hardcoded Backgrounds**: Widgets often bypass `Theme.of(context).scaffoldBackgroundColor` or `colorScheme.surface`, re-specifying `const Color(0xFF0F172A)` manually.

---

## 3. Widget Structure & Conventions

### Folder Structure
The codebase follows a modular, feature-scoped directory hierarchy under `lib/`:

```text
lib/
├── constants/     # AppConstants, configuration defaults, shared keys
├── models/        # Data classes (Rider, RideSession, ConvoySignal, SavedLocation)
├── screens/       # Full screen pages (11 screens)
├── services/      # Business logic & Firebase services (Auth, Session, ConvoyRadio, etc.)
└── widgets/       # Shared reusable UI components & modal sheets (25 widgets)
```

### File & Class Naming Conventions
* **Screen Files**: `snake_case_screen.dart` ➔ Class: `SomeFeatureScreen` (e.g., [lib/screens/create_ride_screen.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/screens/create_ride_screen.dart))
* **Widget Files**: `snake_case_widget.dart` or `snake_case_sheet.dart` ➔ Class: `SomeWidget` (e.g., [lib/widgets/rider_profile_sheet.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/rider_profile_sheet.dart))
* **Private Sub-Widgets**: Prefixed with `_` (e.g. `_ProfileSkeletonView`, `_RideMapScreenState`)

### Statefulness Patterns
* **Screens (`lib/screens/`)**: 100% of screens are `StatefulWidget` because they manage subscriptions, map controllers, form controllers, and local animations.
* **Reusable Sheets (`lib/widgets/*_sheet.dart`)**: `StatefulWidget` with static factory launchers `static void show(BuildContext context, ...)`.
* **Stateless Presentation Components**: Used for pure data presentation (e.g. `RiderStatsDashboardCard`, `ConvoyStoryCard`, `BadgeShowcaseWidget`) and skeleton loaders (`SkeletonContainer`).

### Breakdown of `build()` vs Private Sub-Builders
Complex screens break large layouts into private helper methods returning `Widget`:
```dart
Widget _buildSectionTitle(String title, IconData icon) { ... }
Widget _buildHeader() { ... }
Widget _buildQuickActionsMenu() { ... }
```

### Common Screen Scaffold Pattern
```dart
@override
Widget build(BuildContext context) {
  final isDark = Theme.of(context).brightness == Brightness.dark;

  return Scaffold(
    backgroundColor: isDark ? const Color(0xFF0F172A) : const Color(0xFFF8FAFC),
    appBar: AppBar(
      backgroundColor: Colors.transparent,
      elevation: 0,
      title: Text('Title', style: TextStyle(color: isDark ? Colors.white : const Color(0xFF0F172A), fontWeight: FontWeight.bold)),
    ),
    body: SafeArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(20),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [ ... ],
        ),
      ),
    ),
  );
}
```

---

## 4. Reusable Components

The project includes 25 shared components located in `lib/widgets/`.

### 1. `AppToast` ([lib/widgets/app_toast.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/app_toast.dart))
Custom top-floating snackbar toast with 4 severity levels (`info`, `success`, `warning`, `error`).
```dart
AppToast.show(
  context,
  title: 'Friend Request Accepted! 🤝',
  message: 'You are now friends with Alex.',
  type: AppToastType.success,
);
```

### 2. `SkeletonShimmer` & `SkeletonLoader` ([lib/widgets/skeleton_loader.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/skeleton_loader.dart))
Animated shimmer placeholders (`SkeletonContainer`, `SkeletonAvatar`, `SkeletonLine`, `SkeletonCard`, `SkeletonListTile`).

### 3. `RiderProfileSheet` ([lib/widgets/rider_profile_sheet.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/rider_profile_sheet.dart))
Modal bottom sheet displaying rider stats, rider tag, vehicle avatar, and friend request action buttons.
```dart
RiderProfileSheet.show(context, friendProfile);
```

### 4. `ConvoyRadioSheet` ([lib/widgets/convoy_radio_sheet.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/convoy_radio_sheet.dart))
Glove-friendly walkie-talkie signal grid sheet for sending 1-tap convoy audio signals (Gas Stop, Hazard, Regroup, etc.).

### 5. `ConvoyRadioBanner` ([lib/widgets/convoy_radio_banner.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/convoy_radio_banner.dart))
Top animated radio wave banner displaying active convoy signal readouts over the map.

### 6. `GlobalConnectionBanner` ([lib/widgets/global_connection_banner.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/global_connection_banner.dart))
Root wrapper overlay indicating live connection vs offline status across all app screens.

### 7. `InviteListenerWidget` ([lib/widgets/invite_listener_widget.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/invite_listener_widget.dart))
Root listener wrapper popping up incoming ride invitation bottom sheets in real time.

### 8. `RiderStatsDashboardCard` ([lib/widgets/rider_stats_card.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/rider_stats_card.dart))
Dashboard card displaying Total Distance Ridden, Rides Hosted, and Squad Count.

### 9. `SavedLocationsSheet` ([lib/widgets/saved_locations_sheet.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/saved_locations_sheet.dart))
Favorite place selector and creator sheet (Home 🏠, Work 💼, Gas Station ⛽, Coffee ☕).

### 10. `EmergencyBeaconSheet` ([lib/widgets/emergency_beacon_sheet.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/emergency_beacon_sheet.dart))
1-Tap SOS and mechanical breakdown trigger sheet with emergency note input.

### 11. `RideOutProPaywallSheet` ([lib/widgets/pro_paywall_sheet.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/pro_paywall_sheet.dart))
Subscription paywall sheet unlocking unlimited squad size and advanced features.

### 12. `PulsingEndSessionButton` ([lib/widgets/pulsing_end_session_button.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/pulsing_end_session_button.dart))
Animated pulsing button for hosts to end session safely.

### 13. `RideCompletionCelebrationDialog` ([lib/widgets/ride_completion_dialog.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/ride_completion_dialog.dart))
Animated hero alert dialog displayed when arriving at destination.

### 14. `SpotlightTourOverlay` ([lib/widgets/spotlight_tour_overlay.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/spotlight_tour_overlay.dart))
Interactive onboarding tour highlight mask overlay.

### 15. `BadgeShowcaseWidget` ([lib/widgets/badge_showcase_widget.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/badge_showcase_widget.dart))
Grid of unlocked vs locked rider achievement badges.

### 16. `ScheduledRidePreviewSheet` ([lib/widgets/scheduled_ride_preview_sheet.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/scheduled_ride_preview_sheet.dart))
Modal preview card for upcoming scheduled ride sessions.

### 17. `TrailStyleCustomizerSheet` ([lib/widgets/trail_style_sheet.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/trail_style_sheet.dart))
Selector sheet for polyline trail styles (Solid Cyan, Neon Rainbow, Speed Heatmap).

### 18. `NotificationCenterSheet` ([lib/widgets/notification_center_sheet.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/notification_center_sheet.dart))
In-app notification history panel sheet.

### 19. `EmailAuthSheet` & `EmailVerificationSheet` ([lib/widgets/email_auth_sheet.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/email_auth_sheet.dart))
Authentication modal sheets for email/password sign-in and verification.

### 20. `ConvoyStoryCard` ([lib/widgets/convoy_story_card.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/convoy_story_card.dart))
Card rendering interactive ride summary stories.

### 21. `AllRidersArrivedBanner` ([lib/widgets/all_riders_arrived_banner.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/all_riders_arrived_banner.dart))
Banner notification shown when the entire pack reaches meetup/destination points.

### 22. `AddWaypointSheet` ([lib/widgets/add_waypoint_sheet.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/add_waypoint_sheet.dart))
Sheet for adding intermediate stop points to ride routes.

### 23. `AchievementUnlockedToast` ([lib/widgets/achievement_unlocked_toast.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/achievement_unlocked_toast.dart))
Toast pop-up for unlocking new rider badges.

### 24. `buildRiderMarkers` ([lib/widgets/rider_markers.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/widgets/rider_markers.dart))
Helper function generating live map markers for participants.

---

## 5. Layout Patterns

### Lists, Grids & Map Overlays
* **Lists**: Built with `ListView.separated` or `SingleChildScrollView` + `Column`.
* **Grids**: Built using `GridView.builder` or `Wrap` with `runSpacing: 12`, `spacing: 12`.
* **Map with Overlays**: Implemented in [lib/screens/ride_map_screen.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/screens/ride_map_screen.dart) using a `Stack`:

```dart
Stack(
  children: [
    // 1. Fullscreen Google Map
    GoogleMap( ... ),

    // 2. Top Status Bar & Convoy Radio Banner
    Positioned(
      top: MediaQuery.of(context).padding.top + 8,
      left: 16,
      right: 16,
      child: ConvoyRadioBanner( ... ),
    ),

    // 3. Floating Action Buttons (Recenter, Walkie-Talkie, SOS)
    Positioned(
      right: 16,
      bottom: 120,
      child: Column( ... ),
    ),

    // 4. Bottom Collapsible Rider Drawer
    Positioned(
      bottom: 0,
      left: 0,
      right: 0,
      child: _buildRiderDrawer( ... ),
    ),
  ],
)
```

### Bottom Sheet Modal Pattern
All bottom sheets share a uniform presentation structure:

```dart
static Future<T?> show<T>(BuildContext context) {
  return showModalBottomSheet<T>(
    context: context,
    isScrollControlled: true,
    useSafeArea: true,
    backgroundColor: Colors.transparent,
    builder: (_) => const MyCustomSheet(),
  );
}

// Widget Layout Inside Sheet
Container(
  decoration: BoxDecoration(
    color: isDark ? const Color(0xFF0F172A) : Colors.white,
    borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
  ),
  child: SafeArea(
    child: Padding(
      padding: EdgeInsets.fromLTRB(20, 16, 20, MediaQuery.of(context).padding.bottom + 20),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Drag Handle
          Center(
            child: Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(
                color: isDark ? Colors.white24 : Colors.grey.shade300,
                borderRadius: BorderRadius.circular(2),
              ),
            ),
          ),
          const SizedBox(height: 16),
          // Content
        ],
      ),
    ),
  ),
)
```

---

## 6. Interaction & State-Driven UI

### Loading, Empty & Error State Patterns

#### Loading States
Every major screen provides a dedicated skeleton loader view (e.g. `_ProfileSkeletonView`, `HistorySkeletonListView`, `MapSkeletonOverlay`).

```dart
if (_isLoading) {
  return const HistorySkeletonListView();
}
```

#### Empty States
Empty lists present a centered illustration/icon, a bold title, a descriptive subtitle, and a primary CTA:

```dart
Widget _buildEmptyState() {
  return Center(
    child: Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Image.asset(AppConstants.assetSadFullBody, height: 140),
        const SizedBox(height: 16),
        const Text('No Rideouts Logged Yet', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
        const SizedBox(height: 8),
        const Text('Start or join a ride to record your convoy history!', style: TextStyle(color: Colors.grey)),
        const SizedBox(height: 20),
        ElevatedButton.icon(
          onPressed: _openCreateRide,
          icon: const Icon(Icons.add),
          label: const Text('Create Ride Out'),
        ),
      ],
    ),
  );
}
```

---

### Map Elements & Live Location Styling

RideOut's primary feature is live map telemetry:
* **Host Polyline Trail**: Cyan line (`Color(0xFF00F0FF)`), width 5.
* **Rider Vehicle Avatars**: Custom Bitmaps displaying vehicle icons (🏍️ Motorcycle, 🛵 Scooter, 🚲 Bicycle, 🚗 Car) with online state rings.
* **Geofence Circles**:
  * **Ride Master Radius**: Amber fill (`Colors.amber.withValues(alpha: 0.15)`), stroke `Colors.amber.shade700`.
  * **Meetup Radius**: Emerald fill (`Colors.green.withValues(alpha: 0.15)`), stroke `Colors.green.shade600`.
  * **Destination Radius**: Crimson fill (`Colors.red.withValues(alpha: 0.15)`), stroke `Colors.redAccent`.

---

### Form Field Styling Pattern

Form inputs (e.g. Join Code entry, Ride Title, Search input) use uniform `TextField` styling:

```dart
TextField(
  controller: _controller,
  decoration: InputDecoration(
    hintText: 'e.g. Weekend Coastal Highway Ride',
    labelText: 'Ride Title',
    prefixIcon: const Icon(Icons.directions_bike_rounded, color: Color(0xFF0EA5E9)),
    filled: true,
    fillColor: isDark ? const Color(0xFF1E293B) : const Color(0xFFF1F5F9),
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(14),
      borderSide: BorderSide.none,
    ),
    enabledBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(14),
      borderSide: BorderSide(color: isDark ? Colors.white10 : const Color(0xFFE2E8F0)),
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(14),
      borderSide: const BorderSide(color: Color(0xFF0EA5E9), width: 2),
    ),
  ),
)
```

---

## 7. Iconography & Imagery

### Icon Sets
* **Material Design Icons (`Icons.x`)**: Standard UI actions across all screens (e.g., `Icons.directions_bike_rounded`, `Icons.location_on_outlined`, `Icons.shield_outlined`).
* **Cupertino Icons (`CupertinoIcons.x`)**: Included via `cupertino_icons: ^1.0.8`.

### Image Assets (`assets/images/`)
Centralized constants in [lib/constants/app_constants.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/constants/app_constants.dart#L12-L23):
* `AppConstants.assetIcon`: App icon with wink (`assets/images/appIconWink.png`)
* `AppConstants.assetAppLogo`: Main logo graphic (`assets/images/appLogo.png`)
* `AppConstants.assetWelcome`: Onboarding welcome hero image (`assets/images/welcomeWhole.png`)
* `AppConstants.assetReady`: Ride ready hero image (`assets/images/readyWhole.png`)
* `AppConstants.assetApprove`: Approval verification graphic (`assets/images/approve.png`)
* `AppConstants.assetSadFullBody`: Empty state mascot (`assets/images/sadFullBody.png`)
* `AppConstants.assetProIcon`: RideOut PRO crown graphic (`assets/images/proIcon.png`)

---

## 8. Animations & Transitions

### Custom Page Route Transitions
Smooth Scale + Fade transitions are used when launching map and summary screens (e.g., in [lib/screens/ride_map_screen.dart](file:///c:/Users/Ken/Desktop/RideOut/ride_out/lib/screens/ride_map_screen.dart#L2128-L2163)):

```dart
Navigator.of(context).pushReplacement(
  PageRouteBuilder(
    transitionDuration: const Duration(milliseconds: 650),
    pageBuilder: (context, animation, secondaryAnimation) => const SessionSummaryScreen( ... ),
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      final fadeAnim = CurvedAnimation(parent: animation, curve: Curves.easeOutCubic);
      final scaleAnim = Tween<double>(begin: 0.90, end: 1.0).animate(fadeAnim);

      return FadeTransition(
        opacity: fadeAnim,
        child: ScaleTransition(scale: scaleAnim, child: child),
      );
    },
  ),
);
```

### Micro-Animations & Pulsing Effects
* **Pulsing End Session Button**: SingleTickerProviderStateMixin driving a repeating 0.95 to 1.05 scale pulse.
* **Radio Wave Banner**: Animated wave bar height fluctuations during TTS playback.
* **Shimmer Skeleton**: `ShaderMask` with continuous horizontal `LinearGradient` sweep.

---

## 📋 Reconciliation & Future Improvement Checklist

To bring 100% architectural elegance and consistency to future UI work, address the following itemized recommendations:

- [ ] **Create `lib/constants/app_colors.dart`**: Consolidate all raw hex values (`0xFF0F172A`, `0xFF1E293B`, `0xFF0EA5E9`, etc.) into a centralized color constants file.
- [ ] **Define `ThemeExtension`**: Implement a `RideOutThemeExtension` for specialized domain colors (Geofences, Radio Signals, Vehicle Status).
- [ ] **Unify Form Field Styling**: Create a shared `AppTextField` widget to avoid duplicating `InputDecoration` border code in every sheet.
- [ ] **Adopt `Theme.of(context).textTheme`**: Replace hardcoded inline `TextStyle` declarations with a structured `TextTheme`.
