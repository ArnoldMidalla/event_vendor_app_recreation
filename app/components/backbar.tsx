import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export default function Backbar({ title }: { title: string }) {
  const router = useRouter();
  return (
    <View className="flex flex-row justify-between items-center px-6">
      <View className="flex-1">
        <Pressable
          className="bg-white rounded-xl border-[1px] border-neutral-300"
          onPress={() => router.back()}
          style={{ padding: 8, alignSelf: "flex-start" }}
        >
          <ChevronLeft size={20} color={"#262626"} />
        </Pressable>
      </View>
      <Text className="font-dmsansMedium tracking-tighter text-2xl text-center flex-1">{title}</Text>
      <View className="flex-1"></View>
    </View>
  );
}
