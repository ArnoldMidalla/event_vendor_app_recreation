import { useRouter } from "expo-router";
import {
  BellRing,
  BookUser,
  Headphones,
  LogOut,
  PenLine,
  Ruler,
} from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Buttons({ Icon, text }: { Icon: any; text: string }) {
  const router = useRouter();
  return (
    <Pressable className="flex flex-row gap-4" onPress={() => router.push("/")}>
      <View className="p-2 bg-neutral-300 rounded">
        <Icon size={18} />
      </View>
      <Text className="font-dmsansSemi tracking-tighter">{text}</Text>
    </Pressable>
  );
}

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 gap-6 pt-10 pb-6 bg-[#fcfbfc] px-6">
      <Text className="font-dmsansSemi text-2xl tracking-tighter">Profile</Text>
      <View className="bg-white border border-neutral-300 px-3 h-40 flex flex-row items-center">
        <Image
          source={require("@/public/pp.jpg")}
          className="w-8 h-8 rounded-full bg-red-900"
        />
        <View className="py-2">
          <View className="flex flex-row gap-1 items-center">
            <Text className="font-dmsansSemi tracking-tighter text-lg">
              Arnold Midalla
            </Text>
            <PenLine size={16} />
          </View>
          <Text className="text-black/60 font-dmsansMedium text-sm tracking-tighter">
            midallaarnold@gmail.com
          </Text>
        </View>
      </View>
      <View>
        <Buttons Icon={Ruler} text="Payment Method" />
        <View className="w-full h-[0.1rem] rounded-full bg-neutral-300" />
        <Buttons Icon={BellRing} text="Notifications" />
        <View className="w-full h-[0.1rem] rounded-full bg-neutral-300" />
        <Buttons Icon={BookUser} text="Saved Address" />
        <View className="w-full h-[0.1rem] rounded-full bg-neutral-300" />
        <Buttons Icon={Headphones} text="Support" />
        <View className="w-full h-[0.1rem] rounded-full bg-neutral-300" />
        <Buttons Icon={LogOut} text="Logout" />
      </View>
    </SafeAreaView>
  );
}
