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
import { Data, promotionData, eventFilter } from "../data";

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
            {eventFilter.map((filter, index) => {
              const isSelected = filter === selected;
              return (
                <Pressable
                  key={index}
                  onPress={() => setSelected(filter)}
                  className={`px-4 py-2 rounded-lg border duration-300 transition-all ${
                    isSelected
                      ? "bg-sec border-sec"
                      : "bg-main border-neutral-300"
                  }`}
                >
                  <Text
                    className={`font-dmsansMedium duration-300 transition-all ${
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
                  id={item.id}
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
                  id={item.id}
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
