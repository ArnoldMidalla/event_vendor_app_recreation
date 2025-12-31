import Backbar from "@/app/components/backbar";
import { drink, main, starters, VendorsData } from "@/app/data";
import { useLocalSearchParams, useRouter } from "expo-router";
import { BadgePercent, CalendarDays, Circle } from "lucide-react-native";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomPackage() {
  const router = useRouter();
  // const item = VendorsData.find((p) => p.id === 1);

  const { id } = useLocalSearchParams<{ id: string }>();
  const item = VendorsData.find((p) => p.id === Number(id));
  const [selected, setSelected] = useState<Number>();
  return (
    <SafeAreaView className="flex-1 bg-main pt-6 flex justify-between">
      <StatusBar barStyle="dark-content" />
      <ScrollView className="">
        <View className="flex gap-6">
          <Backbar title="Checkout" />

          {/* progress/stage bar */}
          <View className="w-full gap-2 px-6 flex flex-row">
            <View className="bg-neutral-300 rounded-full h-1 flex-1"></View>
            <View className="bg-neutral-300 rounded-full h-1 flex-1"></View>
            <View className="bg-sec rounded-full h-1 flex-1"></View>
          </View>

          <View className="px-6 gap-6">
            {/* details */}
            <View className="bg-white rounded-2xl p-3 border border-neutral-300 gap-4">
              <View className="flex flex-row gap-2">
                <Image
                  source={{ uri: item?.image }}
                  className="h-24 rounded-xl"
                  style={{ width: 90 }}
                />
                <View>
                  <Text className="font-dmsansBold tracking-tighter">
                    {item?.title}
                  </Text>
                  <Text className="font-dmsansSemi tracking-tighter text-sm">
                    Premium 3-Course Meal (10 Guests)
                  </Text>
                  <View className="flex flex-row gap-1 items-center">
                    <CalendarDays color={"#8e8e8e"} size={13} />
                    <Text className="font-dmsansMedium tracking-tighter text-sm text-black/60">
                      {item?.dateTime}
                    </Text>
                  </View>
                  <Text className="font-dmsansMedium tracking-tighter text-sm text-black/60">
                    Includes: id is {typeof(id)+ id}
                  </Text>
                  <Text className="font-dmsansMedium tracking-tighter text-sm text-black/60">
                    1 Starter: {starters[0]}
                  </Text>
                  <Text className="font-dmsansMedium tracking-tighter text-sm text-black/60">
                    1 Main Course: {main[0]}
                  </Text>
                  <Text className="font-dmsansMedium tracking-tighter text-sm text-black/60">
                    1 Drink: {drink[0]}
                  </Text>
                </View>
              </View>
              <View className="w-full h-[0.15rem] rounded-full bg-neutral-300" />
              <View className="flex flex-row justify-between">
                <Text className="font-dmsansBold tracking-tighter">
                  Total Price:
                </Text>
                <Text className="font-dmsansBold tracking-tighter">
                  N{item?.price}
                </Text>
              </View>
            </View>

            {/* payment details */}
            <View className="gap-2">
              <Text className="font-dmsansBold tracking-tighter">
                Payment Details
              </Text>
              <View className="bg-white rounded-2xl p-3 py-4 border border-neutral-300 gap-6">
                <Pressable
                  onPress={() => setSelected(1)}
                  className="flex flex-row justify-between"
                >
                  <Text
                    className="font-dmsansSemi text-sm"
                    style={{ letterSpacing: -0.7 }}
                  >
                    Credit Or Debit Card
                  </Text>
                  <Circle
                    fill={selected === 1 ? "#fd7e43" : "white"}
                    color={selected === 1 ? "#fd7e43" : "#8e8e8e"}
                    strokeWidth={1.7}
                    size={19}
                  />
                </Pressable>
                <Pressable
                  onPress={() => setSelected(2)}
                  className="flex flex-row justify-between"
                >
                  <Text
                    className="font-dmsansSemi text-sm"
                    style={{ letterSpacing: -0.7 }}
                  >
                    Google Pay
                  </Text>
                  <Circle
                    fill={selected === 2 ? "#fd7e43" : "white"}
                    color={selected === 2 ? "#fd7e43" : "#8e8e8e"}
                    strokeWidth={1.7}
                    size={19}
                  />
                </Pressable>
                <Pressable
                  onPress={() => setSelected(3)}
                  className="flex flex-row justify-between"
                >
                  <Text
                    className="font-dmsansSemi text-sm"
                    style={{ letterSpacing: -0.7 }}
                  >
                    Apple pay
                  </Text>
                  <Circle
                    fill={selected === 3 ? "#fd7e43" : "white"}
                    color={selected === 3 ? "#fd7e43" : "#8e8e8e"}
                    strokeWidth={1.7}
                    size={19}
                  />
                </Pressable>
              </View>
            </View>

            {/* coupon */}
            <View className="gap-2">
              <Text className="font-dmsansBold tracking-tighter">
                Apply Coupon
              </Text>
              <View
                className="bg-white rounded-2xl border border-neutral-300 flex flex-row items-center pl-3"
                style={{ padding: 2, height: 42 }}
              >
                <BadgePercent
                  color={"#8e8e8e"}
                  size={17}
                  //   style={{ margin: 12 }}
                />
                <TextInput placeholder="Enter coupon code" className="flex-1" style={{
                fontSize: 12,
                color: "#1f2937",
                fontFamily: "DMSans_400Regular",
                letterSpacing: -0.5,
                minHeight: 43,
              }} />
                <Pressable className="bg-sec flex items-center justify-center w-20 rounded-xl h-full">
                  <Text className="font-dmsansMedium text-white tracking-tighter text-sm">
                    Apply
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="px-6">
        <Pressable
          className="bg-sec h-14 rounded-xl flex justify-center items-center"
          onPress={() => router.push("/")}
        >
          <Text className="font-dmsansMedium text-white tracking-tighter">
            Pay total N10,000
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
