import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useLocalSearchParams, useRouter } from "expo-router";
import { CalendarDays, ChevronLeft, Heart, MapPin } from "lucide-react-native";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ChooseTicket from "../components/chooseTicket";
import { Data } from "../data";

export default function SingleEvent() {
  const { id } = useLocalSearchParams<{ id: string }>();
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // snap points - define the heights where the sheet can snap to
  const snapPoints = useMemo(() => ["55%"], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const test = Data[parseInt(id) - 1];

  const [tickets, setTickets] = useState(1);
  function increase() {
    setTickets(tickets + 1);
  }
  function decrease() {
    if (tickets > 0) {
      setTickets(tickets - 1);
    }
  }

  const [vip, setVip] = useState(0);
  function increase2() {
    setVip(vip + 1);
  }
  function decrease2() {
    if (vip > 0) {
      setVip(vip - 1);
    }
  }

  const [backstage, setBackstage] = useState(0);
  function increase3() {
    setBackstage(backstage + 1);
  }
  function decrease3() {
    if (backstage > 0) {
      setBackstage(backstage - 1);
    }
  }

  let totalPrice =
    test.price * tickets + test.vipPrice * vip + test.backstagePass * backstage;

  const router = useRouter();

  // renders
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <StatusBar barStyle={"default"} />
        <View className="flex-1 relative">
          {/* {test.image ? (
            <Image
              source={{ uri: test.image }}
              className="w-full h-96 absolute"
              style={{ zIndex: -1 }}
            />
          ) : (
            <View className="w-full h-96 absolute bg-emerald-800"></View>
          )} */}
          <View className="w-full h-96 absolute bg-emerald-800"></View>
          {/* back */}
          <View className="flex w-full flex-row justify-between items-center px-6 absolute top-16">
            <Pressable
              className="bg-white rounded-xl border-[1px] border-neutral-300"
              onPress={() => router.back()}
              style={{ padding: 8, alignSelf: "flex-start" }}
            >
              <ChevronLeft size={20} color={"#262626"} />
            </Pressable>
            <Pressable
              className="bg-white rounded-xl border-[1px] border-neutral-300"
              onPress={() => router.back()}
              style={{ padding: 8, alignSelf: "flex-start" }}
            >
              <Heart size={20} color={"#262626"} />
            </Pressable>
          </View>
          <View className="flex-1 mt-80 bg-white rounded-t-3xl px-6 pt-8 gap-4">
            <View className="bg-sec py-2 px-3 rounded-full self-start">
              <Text className="font-dmsansMedium text-xs text-white">
                {test.type}
              </Text>
            </View>
            <View className="flex gap-2">
              <Text className="font-dmsansMedium text-2xl tracking-tight">
                {test.title}
              </Text>
              <View className="flex flex-row gap-1">
                <MapPin size={15} color={"#fd7e43"} />
                <Text className="font-dmsans text-sm text-black/70 tracking-tight">
                  {test.address}
                </Text>
              </View>

              <View className="flex flex-row gap-1">
                <CalendarDays size={15} color={"#fd7e43"} />
                <Text className="font-dmsans text-sm text-black/70 tracking-tight">
                  {test.date}
                </Text>
              </View>
            </View>
            <View className="w-full h-[0.15rem] rounded-full bg-neutral-300" />
            <View className="flex flex-col gap-1">
              <Text className="font-dmsansMedium text-xl tracking-tight">
                About the event
              </Text>
              <Text className="font-dmsansMedium text-black/70 leading-[1.2rem] text-sm">
                {test.about}
              </Text>
            </View>
            <View className="w-full h-[0.15rem] rounded-full bg-neutral-300" />

            <View className="bg-[#faf0ea] p-4 flex flex-col gap-2 rounded-lg">
              <Text className="text-sec tracking-tight font-dmsansBold">
                Please read the following
              </Text>
              <Text className="text-sec tracking-tight font-dmsansMedium leading-[1.2rem]">
                This is a high capacity event. Expect large crowds and limited
                sitting
              </Text>
              <Text className="text-sec tracking-tight font-dmsansMedium leading-[1.2rem]">
                Prohibited items include bottles, sharp objects and vapes
              </Text>
              <Text className="text-sec tracking-tight font-dmsansMedium leading-[1.2rem]">
                This concert may contain loud sounds and flashing lights
              </Text>
            </View>
          </View>
          <View className="flex flex-row justify-between absolute bottom-0 pt-4 pb-10 items-center flex-1 w-full px-6 bg-white">
            <Text className="font-dmsansBold text-2xl text-sec tracking-tighter">
              N{test.price}
              <Text className="font-dmsansMedium tracking-tight text-[1rem] text-black">
                /per person
              </Text>
            </Text>
            <Pressable
              className="bg-sec px-5 py-3 rounded-lg"
              onPress={handlePresentModalPress}
            >
              <Text className="font-dmsansMedium text-sm text-white tracking-tight">
                Buy ticket
              </Text>
            </Pressable>
          </View>
        </View>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enableDynamicSizing={false}
          backgroundStyle={{
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
          }}
        >
          <BottomSheetView className="flex-1 flex flex-col justify-between px-6 pb-10 h-full">
            {/* <View className=""> */}
            <Text className="font-dmsansMedium text-xl text-center tracking-tight">
              Choose your ticket
            </Text>
            <ChooseTicket
              mainText="General admission"
              price={test.price}
              subText="Access to main event areas"
              ticketsNo={tickets}
              increase={increase}
              decrease={decrease}
            />
            <ChooseTicket
              mainText="Vip access"
              price={test.vipPrice}
              subText="Front row access + 1 drink coupon"
              ticketsNo={vip}
              increase={increase2}
              decrease={decrease2}
            />
            <ChooseTicket
              mainText="General admission"
              price={test.backstagePass}
              subText="Access to main event areas"
              ticketsNo={backstage}
              increase={increase3}
              decrease={decrease3}
            />
            <View className="flex flex-row justify-between">
              <Text className="font-dmsansBold text-lg tracking-tighter">
                Total price:
              </Text>
              <Text className="font-dmsansBold text-lg tracking-tighter">
                N{totalPrice}
              </Text>
            </View>
            <Pressable
              onPress={() => router.push("/checkout/[id]")}
              // onPress={router.push({
              //   pathname: "/checkout/[id]",
              //   params: { id: test.id.toString() },
              // })}
              disabled={totalPrice === 0 ? true : false}
              className={`py-4 rounded-2xl ${
                totalPrice === 0 ? "bg-[#ffb98d]" : "bg-sec"
              } transition-all duration-300`}
            >
              <Text className="font-dmsansMedium text-white text-center">
                Continue to checkout
              </Text>
            </Pressable>
            {/* </View> */}
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
