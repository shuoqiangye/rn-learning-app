import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '@/components/Themed';

const lessons = [
  { title: '组件演示', href: '/(tabs)/two', desc: 'Text、Button、Image 等' },
  { title: '状态与 Hooks', href: '/state', desc: 'useState / useEffect 基本用法' },
  { title: 'FlatList 列表 + 详情页', href: '/list', desc: '列表展示与跳转到详情' },
  { title: '导航与路由演示', href: '/nav', desc: 'Tabs、Stack、Link、router.push' },
  { title: '本地存储（AsyncStorage）', href: '/storage', desc: '记事本示例：保存/读取' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>学习清单</Text>
      <Text style={styles.subtitle}>欢迎来到 React Native 学习应用 👋</Text>
      <ScrollView contentContainerStyle={styles.list}>
        {lessons.map((item) => (
          <Link key={item.href} href={item.href} asChild>
            <Pressable style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.desc}</Text>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    opacity: 0.7,
    marginBottom: 8,
  },
  list: {
    paddingBottom: 24,
    gap: 12,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.15)',
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardDesc: {
    marginTop: 4,
    opacity: 0.7,
  },
});
