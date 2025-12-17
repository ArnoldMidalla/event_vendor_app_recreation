import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Backbar from "../components/backbar";
import ReusePromotions from "../components/reusePromotions";
import ReuseVendors from "../components/reuseVendors";
import SearchBar from "../components/searchbar";

const filters = [
  "All",
  "Catering",
  "Photography",
  "Logistics",
  "Decorations",
  "Lightening",
];

const Data = [
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

const promotionData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainText: "This weeks top catering discounts",
    subText: "10% off orders booked before Aug 6",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainText: "Capture the moment",
    subText: "Up to 20% off on select products",
  },
];

export default function Vendors() {
  const router = useRouter();
  const [selected, setSelected] = useState("All");
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 40,
          paddingBottom: 24,
          gap: 24,
        }}
      >
        <Backbar title="Vendors" />

        <SearchBar placeholder="Search for events" />
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 8, paddingHorizontal: 24 }}
          >
            {filters.map((filter, index) => {
              const isSelected = filter === selected;
              return (
                <Pressable
                  key={index}
                  onPress={() => setSelected(filter)}
                  className={`px-4 py-2 rounded-lg ${
                    isSelected ? "bg-sec" : "bg-main border border-neutral-300"
                  }`}
                >
                  <Text
                    className={`font-dmsansMedium ${
                      isSelected ? "text-white" : "text-neutral-500"
                    }`}
                  >
                    {filter}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
        <View className="flex flex-col gap-4">
          <View className="flex flex-row justify-between px-6">
            <Text className="font-dmsansMedium text-lg tracking-tighter">
              Vendors near you
            </Text>
            <Pressable onPress={() => router.push("/vendors/page")}>
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
        <View className="flex flex-col gap-4">
          <View className="flex flex-row justify-between px-6">
            <Text className="font-dmsansMedium text-lg tracking-tighter">
              Promotions
            </Text>
            <Pressable onPress={() => router.push("/vendors/page")}>
              <Text className="font-dmsansMedium tracking-tighter text-sec">
                View all
              </Text>
            </Pressable>
          </View>
          <View>
            <FlatList
              data={promotionData}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ReusePromotions
                  image={item.image}
                  mainText={item.mainText}
                  subText={item.subText}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
              contentContainerStyle={{
                paddingHorizontal: 24,
              }}
            />
          </View>
        </View>
        <View className="flex flex-col gap-4">
          <View className="flex flex-row justify-between px-6">
            <Text className="font-dmsansMedium text-lg tracking-tighter">
              Top vendors
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
