import { useLocalSearchParams, useRouter } from "expo-router";
import { BadgeCheck, MapPin, Star } from "lucide-react-native";
import React, { useState } from "react";
import { Image, Pressable, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TopNav from "../components/topNav";
import { VendorsData } from "../data";

export default function SingleVendor() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [hearted, setHearted] = useState(false);

  function flip() {
    setHearted(!hearted);
  }
  const test = VendorsData.find((p) => p.id === Number(id));
  // const test = VendorsData[parseInt(id) - 1];

  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 relative bg-main">
      <StatusBar barStyle={"default"} />

      {/* top image */}
      <Image
        source={{ uri: test?.image }}
        className="w-full h-96 absolute bg-emerald-900"
        style={{ zIndex: -10 }}
      />
      <TopNav flip={flip} hearted={hearted} />

      {/* main content */}
      <View className="flex-1 mt-80 rounded-t-3xl px-6 pt-8 pb-4 justify-between bg-main">
        <View className="bg-sec py-2 px-3 rounded-full self-start">
          <Text className="font-dmsansMedium text-xs text-white">
            {test?.type}
          </Text>
        </View>
        <View className="flex gap-2">
          <View className="flex flex-row gap-1 items-center">
            <Text className="font-dmsansMedium text-2xl tracking-tighter">
              {test?.title}
            </Text>
            {test?.isVerified && <BadgeCheck fill={"green"} color={"white"} />}
          </View>
          <View className="flex flex-row gap-3 items-center">
            <View className="flex flex-row gap-1 items-center">
              <Text className="font-dmsansMedium tracking-tight">
                {test?.rating}
              </Text>
              <Star color={"gold"} fill={"gold"} size={15} />
            </View>
            <Text className="font-dmsansMedium text-sm text-black/70 tracking-tight">
              {test?.bookings}+ bookings
            </Text>
          </View>

          <View className="flex flex-row gap-3 items-center">
            <View className="flex flex-row gap-1 items-center">
              <MapPin size={15} color={"#fd7e43"} />
              <Text className="font-dmsansMedium text-sm text-black/70 tracking-tight">
                {test?.address}
              </Text>
            </View>
            <Text className="font-dmsansMedium text-sm text-black/70 tracking-tight">
              {test?.subType}
            </Text>
          </View>
        </View>

        <View className="w-full h-[0.15rem] rounded-full bg-neutral-300" />

        {/* about vendor */}
        <View className="flex flex-col gap-1">
          <Text className="font-dmsansMedium text-lg tracking-tighter">
            About the vendor
          </Text>
          <Text className="font-dmsansMedium text-black/70 leading-tight text-sm">
            {test?.about}
          </Text>
        </View>

        <View className="w-full h-[0.15rem] rounded-full bg-neutral-300" />

        {/* services offered */}
        <View className="flex flex-col gap-1">
          <Text className="font-dmsansMedium text-lg tracking-tighter">
            Services Offered
          </Text>
          <View className="flex">
            {test?.service.map((serve) => (
              <Text
                key={serve}
                className="font-dmsansMedium text-sm tracking-tight text-black/70"
              >
                {serve}
              </Text>
            ))}
          </View>
        </View>

        <Pressable
          className="flex-1 max-h-14 flex justify-center items-center bg-sec rounded-xl"
          // onPress={() => router.push("/vendorCheckout/customPack/page")}
          onPress={() =>
            router.push({
              pathname: "/vendorCheckout/customPack/[id]",
              params: { id: id.toString() },
            })
          }
        >
          <Text className="font-dmsansMedium text-white tracking-tighter">
            Book package
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
