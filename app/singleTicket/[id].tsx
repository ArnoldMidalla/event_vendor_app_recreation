import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Backbar from "../components/backbar";
import { Data } from "../data";

export default function SingleTicket() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const item = Data.find((p) => p.id === Number(id));
  return (
    <SafeAreaView className="flex-1 pt-10 pb-6 gap-6 bg-[#fcfbfc]">
      <Backbar title="Ticket" />
      <View className="px-6">
        <View className={`bg-${item?.color} rounded-t-2xl p-2 flex gap-4`}>
          <Image
            // source={require("@/public/on.jpg")}
            source={{ uri: item?.image }}
            className="w-full rounded-xl"
            style={{ height: 190 }}
          />
          <View className="px-2 flex gap-2">
            <Text
              className="font-dmsansSemi text-white text-2xl"
              style={{ letterSpacing: -0.7 }}
            >
              {item?.title}
            </Text>
            <View className="flex flex-row justify-between">
              <View className="flex gap-2">
                <View>
                  <Text className="font-dmsansSemi text-white tracking-tight">
                    Venue
                  </Text>
                  <Text className="font-dmsansMedium text-white/80 tracking-tight text-sm">
                    {item?.address}
                  </Text>
                </View>
                <View>
                  <Text className="font-dmsansSemi text-white tracking-tight">
                    Ticket
                  </Text>
                  <Text className="font-dmsansMedium text-white/80 tracking-tight text-sm">
                    2 ticket
                  </Text>
                </View>
              </View>
              <View className="flex gap-2">
                <View>
                  <Text className="font-dmsansSemi text-white tracking-tight">
                    Date
                  </Text>
                  <Text className="font-dmsansMedium text-white/80 tracking-tight text-sm">
                    {item?.dateDay} {item?.dateMon} 2025
                  </Text>
                </View>
                <View>
                <Text className="font-dmsansSemi text-white tracking-tight">
                  Order ID
                </Text>
                <Text className="font-dmsansMedium text-white/80 tracking-tight text-sm">
                  PPEN0992319
                </Text>
              </View>
              </View>
            </View>
          </View>
        </View>
        <View className={`bg-${item?.color} h-8 flex flex-row justify-between`}>
          <View className="w-4 bg-[#fcfbfc] rounded-full rounded-l-none" />
          <View className="w-4 bg-[#fcfbfc] rounded-full rounded-r-none" />
        </View>
        <View
          className={`bg-${item?.color} rounded-b-2xl p-2 flex items-center justify-center`}
        >
          <Text className="font-dmsansMedium text-white tracking-tight">
            Scan QR code
          </Text>
          <Image
            source={require("@/public/qrwhite.png")}
            className="w-20 h-20"
            style={{ width: 170, height: 170 }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
