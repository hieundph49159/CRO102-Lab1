import { View, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Button title="Bài 1: Header Component" onPress={() => router.push("/HeaderScreen")} />
      <Button title="Bài 2: Section Component" onPress={() => router.push("/SectionScreen")} />
      {/* <Button title="Bài 3: TextInput Component" onPress={() => router.push("/InputScreen")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 20 },
});
