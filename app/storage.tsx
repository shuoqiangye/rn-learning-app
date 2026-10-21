import { useEffect, useState } from 'react';
import { StyleSheet, Button, TextInput, Alert } from 'react-native';
import { Text, View } from '@/components/Themed';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'demo-notes';

export default function StorageScreen() {
  const [text, setText] = useState('');
  const [saved, setSaved] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const v = await AsyncStorage.getItem(STORAGE_KEY);
        setSaved(v);
      } catch (e) {
        console.warn(e);
      }
    })();
  }, []);

  const save = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, text);
      setSaved(text);
      Alert.alert('已保存', '你的内容已写入本地存储。');
    } catch (e) {
      Alert.alert('错误', '保存失败，请重试。');
    }
  };

  const clear = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setSaved(null);
    } catch (e) {
      Alert.alert('错误', '清除失败，请重试。');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>本地存储（AsyncStorage）</Text>
      <TextInput
        style={styles.input}
        placeholder="输入要保存的内容..."
        value={text}
        onChangeText={setText}
      />
      <Button title="保存" onPress={save} />
      <Button title="清除" onPress={clear} />
      <Text style={styles.savedTitle}>已保存内容：</Text>
      <Text>{saved ?? '（暂无）'}</Text>
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
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.15)',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  savedTitle: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
  },
});

