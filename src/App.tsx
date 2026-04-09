import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, ScrollView, Image } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

const AVATAR_URL = 'https://i.pravatar.cc/80?img=12';

const UPCOMING_SESSIONS = [
  { id: '1', title: 'Morning HIIT', time: '7:00 AM', clients: 8, capacity: 12 },
  { id: '2', title: 'Strength Basics', time: '9:30 AM', clients: 5, capacity: 8 },
  { id: '3', title: 'Yoga Flow', time: '12:00 PM', clients: 12, capacity: 12 },
  { id: '4', title: 'Boxing Cardio', time: '3:00 PM', clients: 3, capacity: 10 },
];

const STATS = [
  { label: 'Clients', value: '47' },
  { label: 'Sessions', value: '128' },
  { label: 'Rating', value: '4.9' },
];

export default function App() {
  const toggleTheme = () => {
    const currentTheme = UnistylesRuntime.themeName;
    UnistylesRuntime.setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View testID="header" style={styles.header}>
          <View testID="coach-info" style={styles.coachInfo}>
            <Image source={{ uri: AVATAR_URL }} style={styles.avatar} />
            <View testID="coach-text" style={styles.coachText}>
              <Text style={styles.name}>Sarah Mitchell</Text>
              <Text style={styles.role}>Senior Fitness Coach</Text>
            </View>
          </View>
          <Pressable onPress={toggleTheme} style={styles.themeButton}>
            <Text style={styles.themeButtonText}>
              {UnistylesRuntime.themeName === 'light' ? '🌙' : '☀️'}
            </Text>
          </Pressable>
        </View>

        {/* Stats row */}
        <View testID="stats-row" style={styles.statsRow}>
          {STATS.map((stat) => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Upcoming sessions */}
        <Text style={styles.sectionTitle}>Upcoming Sessions</Text>
        {UPCOMING_SESSIONS.map((session) => (
          <View key={session.id} style={styles.sessionCard}>
            <View style={styles.sessionInfo}>
              <Text style={styles.sessionTitle}>{session.title}</Text>
              <Text style={styles.sessionTime}>{session.time}</Text>
            </View>
            <View style={styles.sessionMeta}>
              <View
                style={[
                  styles.capacityBadge,
                  session.clients === session.capacity && styles.capacityFull,
                ]}
              >
                <Text
                  style={[
                    styles.capacityText,
                    session.clients === session.capacity && styles.capacityTextFull,
                  ]}
                >
                  {session.clients}/{session.capacity}
                </Text>
              </View>
            </View>
          </View>
        ))}

        {/* Quick actions */}
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View testID="actions-row" style={styles.actionsRow}>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionIcon}>📋</Text>
            <Text style={styles.actionLabel}>New Session</Text>
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionIcon}>👤</Text>
            <Text style={styles.actionLabel}>Add Client</Text>
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionIcon}>📊</Text>
            <Text style={styles.actionLabel}>Reports</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create(({ sizes, colors }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: sizes['size-200'],
    paddingTop: 60,
  },

  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: sizes['size-300'],
  },
  coachInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizes['size-200'],
    width: 'fit-content', // CSS-only keyword — crashes on iOS when theme changes
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.surfaceSecondary,
  },
  coachText: {
    gap: sizes['size-025'],
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
  role: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  themeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  themeButtonText: {
    fontSize: 18,
  },

  // Stats
  statsRow: {
    flexDirection: 'row',
    gap: sizes['size-100'],
    marginBottom: sizes['size-300'],
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: sizes['size-200'],
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: sizes['size-025'],
  },

  // Sessions
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: sizes['size-200'],
  },
  sessionCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: sizes['size-200'],
    marginBottom: sizes['size-100'],
    borderWidth: 1,
    borderColor: colors.border,
  },
  sessionInfo: {
    gap: sizes['size-025'],
  },
  sessionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  sessionTime: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  sessionMeta: {
    alignItems: 'flex-end',
  },
  capacityBadge: {
    backgroundColor: colors.surfaceSecondary,
    paddingHorizontal: sizes['size-100'],
    paddingVertical: sizes['size-050'],
    borderRadius: 8,
  },
  capacityFull: {
    backgroundColor: colors.accent,
  },
  capacityText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  capacityTextFull: {
    color: '#FFFFFF',
  },

  // Quick Actions
  actionsRow: {
    flexDirection: 'row',
    gap: sizes['size-100'],
  },
  actionButton: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: sizes['size-200'],
    alignItems: 'center',
    gap: sizes['size-100'],
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionIcon: {
    fontSize: 24,
  },
  actionLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },
}));
