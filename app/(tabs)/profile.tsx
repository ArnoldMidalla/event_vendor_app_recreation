import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  return (
    <SafeAreaView className="flex-1 gap-6 pt-10 pb-6 bg-[#fcfbfc] px-6">
      <Text className="font-dmsansSemi text-2xl tracking-tighter">Profile</Text>
      <View className="flex flex-row items-center gap-4 p-3 border border-neutral-200 bg-white rounded-lg">
        <View className="size-16 rounded-full bg-green-800 "></View>
        <View className="flex gap-1.5">
          <Text className="font-dmsansBold text-lg tracking-tighter leading-3 border">
            Annie Cooper
          </Text>
          <Text className="font-dmsansMedium tracking-tight text-black/60 text-sm border leading-3">
            anniecooper2025@gmail.com
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
