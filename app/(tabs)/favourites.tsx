import { useRouter } from "expo-router";
import { BadgeCheck, Calendar, Heart, MapPin, Star } from "lucide-react-native";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Data, VendorsData } from "../data";

function EventsCard({
  title,
  id,
  address,
  date,
  time,
  image,
}: {
  title: string;
  id: string | number;
  image: string;
  date: string;
  time: any;
  address: string;
}) {
  const router = useRouter();
  return (
    <Pressable
      className="bg-white flex flex-row gap-2 border border-neutral-300 rounded-xl overflow-hidden p-2"
      style={{ height: 110 }}
      onPress={() =>
        router.push({
          pathname: "/singleEvent/[id]",
          params: { id: id.toString() },
        })
      }
    >
      <Image
        source={{ uri: image }}
        className="bg-emerald-900 rounded-lg w-[105px]"
        style={{ width: 105 }}
      />
      <View className="flex flex-col justify-between py-4 flex-1">
        <View className="flex flex-row justify-between">
          <Text className="font-dmsansSemi tracking-tighter">{title}</Text>
          <Heart fill={"red"} color={"red"} size={16} />
        </View>
        <View className="flex flex-row gap-1 items-center">
          <MapPin color={"#a3a3a3"} size={14} />
          <Text className="font-dmsansMedium tracking-tighter text-black/60 text-sm">
            {address}
          </Text>
        </View>
        <View className="flex flex-row gap-1 items-center">
          <Calendar color={"#a3a3a3"} size={14} />
          <Text className="font-dmsansMedium tracking-tighter text-black/60 text-sm">
            {date}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

function VendorsCard({
  title,
  id,
  image,
  rating,
  bookings,
  isVerified,
}: {
  rating: number;
  bookings: number;
  isVerified: boolean;
  title: string;
  id: string | number;
  image: string;
}) {
  const router = useRouter();
  return (
    <Pressable
      className="bg-white flex flex-row gap-2 border border-neutral-300 rounded-xl overflow-hidden p-2"
      style={{ height: 110 }}
      onPress={() =>
        router.push({
          pathname: "/singleBooking/[id]",
          params: { id: id.toString() },
        })
      }
    >
      <Image
        source={{ uri: image }}
        className="bg-emerald-900 rounded-lg w-[105px]"
        style={{ width: 105 }}
      />
      <View className="flex flex-col justify-between py-4 flex-1">
        <View className="flex flex-row justify-between">
          <View className="flex flex-row gap-1 items-center">
            <Text className="font-dmsansSemi tracking-tighter">{title}</Text>
            {isVerified && (
              <BadgeCheck color={"white"} fill={"green"} size={17} />
            )}
          </View>
          <Heart fill={"red"} color={"red"} size={16} />
        </View>

        <View className="flex flex-row gap-1 items-center">
          <Text className="font-dmsansMedium tracking-tighter text-black/60 text-sm">
            {rating}
          </Text>
          <Star fill={"gold"} color={"white"} size={16} strokeWidth={0} />
        </View>
        <View className="flex flex-row gap-1 items-center">
          <Calendar color={"#a3a3a3"} size={14} />
          <Text className="font-dmsansMedium tracking-tighter text-black/60 text-sm">
            {bookings}+ bookings
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default function Favourites() {
  const router = useRouter();

  const [topBar, setTopBar] = useState(true);

  return (
    <SafeAreaView className="flex-1 gap-6 pt-10 pb-6 bg-[#fcfbfc]">
      <Text
        className="font-dmsansSemi text-2xl px-6"
        style={{ letterSpacing: -1 }}
      >
        My Favourites
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

      {/* search bar */}
      <View className="px-6" style={{ height: 46 }}>
        <TextInput
          placeholder={`Search for ${topBar ? "events" : "vendors"}`}
          className="flex-1 font-dmsans border-[1px] border-neutral-300 bg-white rounded-xl px-4 py-2 h-full"
        />
      </View>

      {topBar ? (
        <View>
          <FlatList
            data={Data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <EventsCard
                title={item.title}
                address={item.address}
                image={item.image}
                id={item.id}
                date={item.date}
                time={item.dateTime}
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
              <VendorsCard
                title={item.title}
                id={item.id}
                image={item.image}
                isVerified={item.isVerified}
                bookings={item.bookings}
                rating={item.noStars}
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
