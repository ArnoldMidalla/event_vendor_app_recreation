import { useLocalSearchParams } from "expo-router";
import {
  BadgePercent,
  CalendarDays,
  CreditCard,
  MapPin,
} from "lucide-react-native";
import {
  Image,
  Pressable,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Backbar from "../components/backbar";
import { Data } from "../data";

export default function Checkout() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const item = Data.find((p) => p.id === Number(id));
  return (
    <SafeAreaView className="flex-1 gap-6 pt-10 pb-6 bg-[#f8f8f8]">
      <StatusBar barStyle="dark-content" />
      <Backbar title="Checkout" />
      {/* top white box container */}
      <View className="px-6">
        {/* actual top white box */}
        <View className="flex gap-4 rounded-2xl bg-white border-[1.2px] border-neutral-200 p-3">
          {/* image and title */}
          <View className="flex flex-row gap-3 w-full">
            <Image
              source={{ uri: item?.image }}
              className="rounded-xl w-24 h-24"
            />
            <View className="flex justify-between pt-2 pb-3">
              <Text className="font-dmsansMedium text-lg tracking-tight">
                {item?.title}
              </Text>
              <View className="flex flex-row items-end gap-0.5">
                <MapPin color={"#8e8e8e"} size={13} />
                <Text className="font-dmsansMedium text-xs text-black/70">
                  {item?.address}
                </Text>
              </View>
              <View className="flex flex-row items-end gap-0.5">
                <CalendarDays color={"#8e8e8e"} size={13} />
                <Text className="font-dmsansMedium text-xs text-black/70">
                  {item?.date}
                </Text>
              </View>
            </View>
          </View>
          {/* hr divider */}
          <View className="w-full h-0.5 bg-neutral-200" />
          <View className="flex flex-row justify-between">
            <Text className="font-dmsansMedium tracking-tight ">
              Total price:
            </Text>
            {/* test price before i use state management. don't come after me */}
            <Text className="font-dmsansMedium tracking-tight ">N90,000</Text>
          </View>
        </View>
      </View>

      {/* bottom white box container */}
      <View className="px-6">
        <Text className="font-dmsansMedium pb-2 tracking-tight">
          Payment Details
        </Text>
        <View className="flex gap-4 rounded-2xl bg-white border-[1.2px] border-neutral-200 p-3">
          <View className="flex flex-row justify-between">
            <View className="flex flex-row gap-2 items-center">
              <CreditCard fill={"black"} color={"white"} />
              <Text className="font-dmsansMedium text-sm tracking-tight">
                Credit or Debit Card
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* anoda bottom box container */}
      <View className="px-6">
        <Text className="font-dmsansMedium pb-2 tracking-tight">
          Apply Coupon
        </Text>
        <View className="flex flex-row flex-1 rounded-2xl bg-white border-[1.2px] border-neutral-200 p-3">
          <BadgePercent />
          <TextInput
            className="border font-dmsansMedium tracking-tight text-sm w-full"
            placeholder="Enter coupon code"
          />
          <Pressable className="bg-sec">
            <Text className="font-dmsansMedium tracking-tight text-white">
              Apply
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
