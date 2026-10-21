import { StyleSheet, Button } from 'react-native';
import { Text, View } from '@/components/Themed';
import { Link, useRouter } from 'expo-router';

export default function NavigationDemoScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>导航与路由演示</Text>

      <Link href="/(tabs)/two" asChild>
        <Button title="切换到『组件』Tab" onPress={() => {}} />
      </Link>

      <Button title="打开一个详情页（/list/5）" onPress={() => router.push('/list/5')} />

      <Button title="打开模态页（/modal）" onPress={() => router.push('/modal')} />
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
});

