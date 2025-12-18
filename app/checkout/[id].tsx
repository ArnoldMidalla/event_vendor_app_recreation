import { SafeAreaView } from "react-native-safe-area-context";
import Backbar from "../components/backbar";
import { useLocalSearchParams } from "expo-router";

export default function Checkout() {
    const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <SafeAreaView className="flex">
      <Backbar title="Checkout" />
    </SafeAreaView>
  );
}
