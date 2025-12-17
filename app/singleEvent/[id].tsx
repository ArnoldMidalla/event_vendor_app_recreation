import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Data } from "../(tabs)";

export default function SinglePage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <SafeAreaView>
      <View>
        {/* <Text>{Data[parseInt(id) - 1].title}</Text> */}
      </View>
    </SafeAreaView>
  );
}
