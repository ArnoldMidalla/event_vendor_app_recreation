import { Tabs } from "expo-router";
import {
  CalendarCheck2,
  Heart,
  Home,
  MessageCircle,
  UserRound,
} from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

function TabIcon({ focused, icon: Icon, title }: any) {
  return (
    <View className="items-center justify-center min-w-[70px] flex flex-col gap-1">
      <Icon
        // outside border
        color={focused ? "#fd7e43" : "#a6a6a6"}
        // inside color
        fill={focused ? "#fd7e43" : "#fbfafb"}
        size={20}
        strokeWidth={2}
      />
      <Text
        className={`text-xs text-center tracking-tight ${
          focused ? "text-sec font-dmsansBold" : "font-dmsans text-black/70"
        }`}
      >
        {title}
      </Text>
    </View>
  );
}

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fbfafb",
          height: 90,
          position: "absolute",
          overflow: "hidden",
          paddingHorizontal: 10,
          borderTopWidth: 0,
        },
        tabBarIconStyle: {
          marginTop: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          title: "Bookings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={CalendarCheck2} title="Bookings" />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={Heart} title="Favourites" />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={MessageCircle} title="Messages" />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={UserRound} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
