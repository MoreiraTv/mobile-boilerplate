import { useColorScheme } from "@/components/useColorScheme";
import { Text, View } from "react-native";

export default function Home() {
  const colorScheme = useColorScheme();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }} >
      <Text style={{color: colorScheme === 'light' ? 'black' : 'white', fontSize: 20}}>Hello World</Text>
    </View>
  );
}