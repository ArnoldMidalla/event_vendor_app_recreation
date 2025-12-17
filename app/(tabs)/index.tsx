import { Bell, ChevronDown, MapPin } from "lucide-react-native";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";

import { useRouter } from "expo-router";

import ReuseEvents from "../components/reuseEvents";
import ReuseVendors from "../components/reuseVendors";
import SearchBar from "../components/searchbar";

const locations = [
  { key: "1", value: "Lekki phase 1, Lagos" },
  { key: "2", value: "Victoria Island, Lagos" },
  { key: "3", value: "Ikeja, Lagos" },
  { key: "4", value: "Yaba, Lagos" },
  { key: "5", value: "Surulere, Lagos" },
];

const Data = [
  {
    id: 1,
    title: "Asake's Nu Tour",
    address: "Teslim Balogun Stadium, Surulere",
    date: "02.August.2025 - 5:00pm",
    // image: "/main.jpg",
    image:
      "https://images.unsplash.com/photo-1522158637959-30385a09e0da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "45,000",
    type: "Concert",
  },
  {
    id: 2,
    title: "Lagos Food Festival",
    address: "Landmark Centre, Ikeja",
    date: "03.August.2025 - 5:00pm",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "15,000",
    type: "Food",
  },
];

const VendorsData = [
  {
    id: 1,
    title: "Chef Ireti's kitchen",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bookings: 100,
    type: "Catering",
    subType: "Caterer",
    price: "8,000",
  },
  {
    id: 2,
    title: "DJ Shakur",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1599423424751-54e0c1187a02?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bookings: 80,
    type: "Music",
    subType: "DJ",
    price: "20,000",
  },
];

export default function Index() {
  const [selected, setSelected] = useState("Lekki phase 1, Lagos");

  const router = useRouter();

  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // paddingHorizontal: 24,
          paddingTop: 32,
          paddingBottom: 100,
          gap: 24,
        }}
      >
        <View className="flex flex-row justify-between px-6">
          <View style={styles.locationWrapper}>
            <MapPin size={20} color="#FF6B35" strokeWidth={2.5} />
            <SelectList
              setSelected={setSelected}
              data={locations}
              placeholder={selected}
              search={false}
              save="value"
              boxStyles={styles.boxStyles}
              inputStyles={styles.inputStyles}
              dropdownStyles={styles.dropdownStyles}
              dropdownItemStyles={styles.dropdownItemStyles}
              dropdownTextStyles={styles.dropdownTextStyles}
              arrowicon={
                <ChevronDown size={18} color="#1f2937" strokeWidth={2.5} />
              }
              defaultOption={{ key: "1", value: "Lekki phase 1, Lagos" }}
            />
          </View>
          <Pressable
            className="bg-white rounded-xl border-[1px] border-neutral-300"
            onPress={() => router.push("/notifications/page")}
            style={{ padding: 8 }}
          >
            <Bell size={20} color={"#262626"} />
          </Pressable>
        </View>
        <View className="px-6">
          <View className="max-w-64">
            <Text className="text-2xl font-dmsansMedium tracking-tighter leading-8 text-black/60">
              What do you want to do today{" "}
              <Text className="font-dmsansMedium text-black">Arnold?</Text>
            </Text>
          </View>
        </View>
        <SearchBar placeholder="Search for events or vendors" />
        <View className="flex flex-row w-full justify-between h-28 px-6">
          <Pressable className="bg-sec h-full w-[10.6rem] rounded-xl relative">
            <Text className="font-dmsans top-2 left-2 text-white">
              Find Event
            </Text>
          </Pressable>
          <Pressable className="border border-sec  h-full w-[10.6rem] rounded-xl relative">
            <Text className="font-dmsans top-2 left-2 text-sec">
              Find Event
            </Text>
          </Pressable>
        </View>
        <View className="flex flex-col gap-4">
          <View className="flex flex-row justify-between px-6">
            <Text className="font-dmsansMedium text-lg tracking-tighter">
              Latest events
            </Text>
            <Pressable onPress={() => router.push("/events/page")}>
              <Text className="font-dmsansMedium tracking-tighter text-sec">
                View all
              </Text>
            </Pressable>
          </View>
          <View>
            <FlatList
              data={Data}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ReuseEvents
                  title={item.title}
                  address={item.address}
                  date={item.date}
                  image={item.image}
                  price={item.price}
                  type={item.type}
                />
              )}
              keyExtractor={(item) => item.id.toString()} // Extracts a unique key for each item . id must be string, so this or convert id to "1"
              ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
              contentContainerStyle={{
                paddingHorizontal: 24,
              }}
            />
          </View>
        </View>
        {/* <Pressable onPress={() => router.push("/onboarding/page")}>
        <Text>onboarding</Text>
      </Pressable> */}
        <View className="flex flex-col gap-4">
          <View className="flex flex-row justify-between px-6">
            <Text className="font-dmsansMedium text-lg tracking-tighter">
              Top vendors
            </Text>
            <Pressable onPress={() => router.push("/vendors/page")}>
              <Text className="font-dmsansMedium tracking-tighter text-sec">
                View all
              </Text>
            </Pressable>
          </View>
          <View>
            <FlatList
              data={VendorsData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ReuseVendors
                  title={item.title}
                  rating={item.rating}
                  image={item.image}
                  bookings={item.bookings}
                  type={item.type}
                  subType={item.subType}
                  price={item.price}
                />
              )}
              keyExtractor={(item) => item.id.toString()} // Extracts a unique key for each item . id must be string, so this or convert id to "1"
              ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
              contentContainerStyle={{
                paddingHorizontal: 24,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  locationWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  boxStyles: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 32,
    borderWidth: 0,
    borderRadius: 0,
    // backgroundColor: "transparent",
    flex: 1,
  },
  inputStyles: {
    fontSize: 16,
    fontWeight: "400",
    color: "#1f2937",
    marginLeft: 0,
    paddingLeft: 0,
    fontFamily: "DMSans_400Regular",
  },
  dropdownStyles: {
    position: "absolute",
    top: 42,
    left: -28,
    right: -16,
    width: "auto",
    minWidth: 180,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
    paddingVertical: 4,
    zIndex: 1000,
  },
  dropdownItemStyles: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  dropdownTextStyles: {
    fontSize: 15,
    color: "#374151",
    fontFamily: "DMSans_400Regular",
  },
});
