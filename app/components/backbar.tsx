import { useRouter } from "expo-router";
import { BadgeCheck, ChevronLeft } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export default function Backbar({
  title,
  isVerified,
}: {
  title: string;
  isVerified?: boolean;
}) {
  const router = useRouter();
  return (
    <View className="flex flex-row justify-between items-center px-6">
      <View style={{ minWidth: 42 }}>
        <Pressable
          className="bg-white rounded-full border-[1px] border-neutral-300"
          onPress={() => router.back()}
          style={{ padding: 8, alignSelf: "flex-start" }}
        >
          <ChevronLeft size={20} color={"#262626"} />
        </Pressable>
      </View>
      <View className="flex flex-row justify-center items-center flex-1 gap-1">
        <Text className="font-dmsansSemi tracking-tighter text-2xl text-center">
          {title}
        </Text>
        {isVerified && <BadgeCheck fill={"green"} color={"white"} />}
      </View>
      <View style={{ minWidth: 42 }}></View>
    </View>
  );
}
