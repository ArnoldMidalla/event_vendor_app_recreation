import { useRouter } from "expo-router";
import { ChevronLeft, Heart } from "lucide-react-native";
import { Pressable, View } from "react-native";

export default function TopNav({ flip, hearted }: any) {
  const router = useRouter();
  return (
    <View
      className="flex w-full flex-row justify-between items-center px-6 absolute top-16"
      style={{ zIndex: 50 }}
    >
      <Pressable
        className="bg-white rounded-xl border-[1px] border-neutral-300"
        onPress={() => router.back()}
        style={{ padding: 8, alignSelf: "flex-start" }}
      >
        <ChevronLeft size={20} color={"#262626"} />
      </Pressable>
      <Pressable
        className="bg-white rounded-xl border-[1px] border-neutral-300"
        // onPress={() => router.back()}
        onPress={flip}
        style={{ padding: 8, alignSelf: "flex-start" }}
      >
        <Heart
          size={20}
          color={hearted ? "red" : "#262626"}
          fill={hearted ? "red" : "transparent"}
        />
      </Pressable>
    </View>
  );
}
