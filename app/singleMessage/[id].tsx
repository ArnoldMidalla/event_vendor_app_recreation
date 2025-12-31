import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Backbar from "../components/backbar";
import { MessageData } from "../data";

export default function SingleMessage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const item = MessageData.find((p) => p.id === Number(id));
  if (item)
    return (
      <SafeAreaView className="flex-1 gap-6 pt-10 pb-6 bg-[#f8f8f8]">
        <Backbar title={item.name} isVerified={item.isVerified} />
      </SafeAreaView>
    );
}
