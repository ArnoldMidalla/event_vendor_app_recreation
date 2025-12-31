import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BookingsVendor from "../components/bookingsVendor";
import EventTicketStyle from "../components/eventTicketStyle";
import SearchBar from "../components/searchbar";
import { Data, VendorsData } from "../data";

export default function Bookings() {
  const router = useRouter();
  const [topBar, setTopBar] = useState(true);
  return (
    <SafeAreaView className="flex-1 gap-6 pt-10 pb-6 bg-[#fcfbfc]">
      <Text
        className="font-dmsansSemi text-2xl px-6"
        style={{ letterSpacing: -1 }}
      >
        My Bookings
      </Text>

      {/* top bar selector */}
      <View className="px-6">
        <View
          className="bg-neutral-200 rounded-2xl w-full p-1 flex flex-row gap-1"
          style={{ height: 48 }}
        >
          <Pressable
            className={`flex flex-1 items-center justify-center rounded-xl transition-colors duration-300 ${
              topBar ? "bg-white" : "bg-neutral-200"
            }`}
            onPress={() => setTopBar(true)}
          >
            <Text
              className={`font-dmsansSemi tracking-tighter transition-colors duration-300 ${
                topBar ? "text-black" : "text-black/45"
              }`}
            >
              Events
            </Text>
          </Pressable>
          <Pressable
            className={`flex flex-1 items-center justify-center rounded-xl transition-colors duration-300 ${
              topBar ? "bg-neutral-200" : "bg-white"
            }`}
            onPress={() => setTopBar(false)}
          >
            <Text
              className={`font-dmsansSemi tracking-tighter transition-colors duration-300 ${
                topBar ? "text-black/45" : "text-black"
              } `}
            >
              Vendors
            </Text>
          </Pressable>
        </View>
      </View>

      <SearchBar placeholder={`Search for ${topBar ? "events" : "vendors"}`} />

      {topBar ? (
        <View>
          <FlatList
            data={Data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <EventTicketStyle
                title={item.title}
                address={item.address}
                dateMon={item.dateMon}
                dateDay={item.dateDay}
                dateTime={item.dateTime}
                type={item.type}
                id={item.id}
                color={item.color}
              />
            )}
            keyExtractor={(item) => item.id.toString()} // Extracts a unique key for each item . id must be string, so this or convert id to "1"
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            contentContainerStyle={{
              paddingHorizontal: 24,
            }}
          />
        </View>
      ) : (
        <View>
          <FlatList
            data={VendorsData}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <BookingsVendor
                title={item.title}
                id={item.id}
                image={item.image}
                packageVal={item.packageVal}
                isVerified={item.isVerified}
                dateTime={item.dateTime}
                address={item.address}
              />
            )}
            keyExtractor={(item) => item.id.toString()} // Extracts a unique key for each item . id must be string, so this or convert id to "1"
            ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
            contentContainerStyle={{
              paddingHorizontal: 24,
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
