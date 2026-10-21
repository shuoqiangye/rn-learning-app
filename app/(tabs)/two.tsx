import { useState } from 'react';
import { StyleSheet, Button, Image, Switch, View as RNView } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function ComponentsDemoScreen() {
  const [count, setCount] = useState(0);
  const [enabled, setEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>组件演示</Text>
      <RNView style={styles.block}>
        <Text>这是 Text 文本组件。</Text>
      </RNView>
      <RNView style={styles.block}>
        <Button title={`按钮（点击次数：${count}）`} onPress={() => setCount((c) => c + 1)} />
      </RNView>
      <RNView style={styles.blockRow}>
        <Text>开关：</Text>
        <Switch value={enabled} onValueChange={setEnabled} />
      </RNView>
      <RNView style={styles.block}>
        <Text>图片：</Text>
        <Image
          source={require('@/assets/images/icon.png')}
          style={{ width: 64, height: 64, marginTop: 8, borderRadius: 12 }}
          resizeMode="contain"
        />
      </RNView>
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
  block: {
    padding: 16,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  blockRow: {
    padding: 16,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.15)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
