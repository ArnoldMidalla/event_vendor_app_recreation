import { useLocalSearchParams } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Backbar from "../components/backbar";
import { VendorsData } from "../data";

function Info({ main, sub }: { main: string; sub?: string }) {
  return (
    <View>
      <Text className="font-dmsansSemi tracking-tighter">{main}</Text>
      <Text
        className="font-dmsansMedium tracking-tighter text-sm text-neutral-500"
        style={{ fontSize: 11.5 }}
      >
        {sub}
      </Text>
    </View>
  );
}

export default function SingleBooking() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const item = VendorsData.find((p) => p.id === Number(id));
  return (
    <SafeAreaView className="flex-1 pt-10 pb-6 gap-6 bg-[#fcfbfc]">
      <Backbar title="Booking Summary" />
      <View className="px-6 flex gap-6">
        <View className="bg-white rounded-xl border border-neutral-300 p-4 flex flex-row gap-4 items-center">
          <Image
            source={{ uri: item?.image }}
            className="rounded-full bg-purple-900"
            style={{ width: 50, height: 50 }}
          />
          <View className="flex justify-between py-2">
            <Text
              className="font-dmsansSemi tracking-tighter"
              style={{ fontSize: 16, letterSpacing: -0.7 }}
            >
              {item?.title}
            </Text>
            <Text className="text-neutral-500 font-dmsansMedium text-sm tracking-tight">
              {item?.packageVal} - {item?.price}
            </Text>
            <Text className="text-neutral-500 font-dmsansMedium text-sm tracking-tight">
              Order ID: OIENWPVIOP20932
            </Text>
          </View>
        </View>

        <View className="bg-white rounded-xl border border-neutral-300 p-4 flex gap-4">
          <Info main="Delivery address" sub={item?.address} />
          <View className="w-full h-[0.15rem] rounded-full bg-neutral-200" />
          <Info main="Date & time" sub={item?.dateTime} />
          <View className="w-full h-[0.15rem] rounded-full bg-neutral-200" />
          <Info main="Delivery method" sub="To be delivered" />
          <View className="w-full h-[0.15rem] rounded-full bg-neutral-200" />
          <Info main="Special requests" sub="None" />
        </View>

        <View className="bg-white rounded-xl border border-neutral-300 p-4 flex gap-2">
          <Text className="font-dmsansSemi tracking-tighter">
            Meal selection
          </Text>
          <View className="flex flex-row" style={{ gap: 32 }}>
            <View>
              <Text className="font-dmsansMedium tracking-tighter text-sm text-neutral-500">
                Starter
              </Text>
              <Text className="font-dmsansMedium tracking-tighter text-sm text-neutral-500">
                Main course
              </Text>
              <Text className="font-dmsansMedium tracking-tighter text-sm text-neutral-500">
                Drink
              </Text>
            </View>
            <View>
              <Text className="font-dmsansSemi tracking-tighter text-sm">
                Caesar salad
              </Text>
              <Text className="font-dmsansSemi tracking-tighter text-sm">
                Jollof rice
              </Text>
              <Text className="font-dmsansSemi tracking-tighter text-sm">
                Soda
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
