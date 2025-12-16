import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const page = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-main flex-col justify-end px-6 py-6 gap-1">
      <View className="flex flex-col gap-4 mb-4">

      <Text className="font-dmsansMedium text-3xl leading-12 text-center text-neutral-900 tracking-tighter">Your go-to place for tickets and vendors</Text>
      <Text className="font-dmsansMedium text-neutral-600 leading-5.5 text-lg text-center tracking-tighter">Discover events you love and book vendors all in one app</Text>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/(tabs)")}
        className="flex items-center justify-center  bg-sec rounded-2xl py-4 "
        >
        <Text className="font-dmsansMedium text-white tracking-tight">
          Find what you need
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/(tabs)")}
        className="flex items-center justify-center  bg-transparent rounded-2xl py-4 "
      >
        <Text className="font-dmsansMedium text-black tracking-tight">
          Already have an account,{" "}
          <Text className="font-dmsansMedium text-sec underline">Sign in</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default page;
