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
import ReuseEvents from "../components/reuseEvents";
import ReusePromotions from "../components/reusePromotions";
import SearchBar from "../components/searchbar";

const filters = ["All", "Food", "Concert", "Art", "Festivals", "Sports"];

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

const promotionData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainText: "Lagos Food Festival",
    subText: "Landmark Centre, Ikeja",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1628336707631-68131ca720c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mainText: "Ibadan wine tasting",
    subText: "Market Road, Ibadan",
  },
];

export default function Events() {
  const [selected, setSelected] = useState("All");
  const router = useRouter();
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
        <Backbar title="Events" />

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
                  className={`px-4 py-2 rounded-lg border ${
                    isSelected
                      ? "bg-sec border-sec"
                      : "bg-main border-neutral-300"
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
              Events near you
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
              Latest Events
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
      </ScrollView>
    </SafeAreaView>
  );
}
