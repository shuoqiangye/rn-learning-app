import { useEffect, useState } from 'react';
import { StyleSheet, Button, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function StateHooksScreen() {
  const [name, setName] = useState('世界');
  const [greetCount, setGreetCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`你好，${name}！你已问候 ${greetCount} 次。`);
  }, [name, greetCount]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>状态与 Hooks</Text>
      <TextInput
        style={styles.input}
        placeholder="输入你的名字"
        value={name}
        onChangeText={setName}
      />
      <Button title="问候一下" onPress={() => setGreetCount((c) => c + 1)} />
      <Text style={styles.message}>{message}</Text>
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
  message: {
    marginTop: 8,
    fontSize: 16,
  },
});

