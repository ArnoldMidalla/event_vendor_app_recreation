import { Bell, ChevronDown, MapPin, Menu } from "lucide-react-native";
import React, { useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";

import { useRouter } from "expo-router";

const index = () => {
  const [selected, setSelected] = useState("Lekki phase 1, Lagos");

  const locations = [
    { key: "1", value: "Lekki phase 1, Lagos" },
    { key: "2", value: "Victoria Island, Lagos" },
    { key: "3", value: "Ikeja, Lagos" },
    { key: "4", value: "Yaba, Lagos" },
    { key: "5", value: "Surulere, Lagos" },
  ];

  const router = useRouter();

  return (
    <SafeAreaView className="px-6 flex-1 flex flex-col gap-6 bg-[#fbfafb]">
      <StatusBar barStyle="dark-content" />

      <View className="pt-10 flex flex-row justify-between">
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
        <TouchableOpacity
          className="bg-white rounded-xl border"
          onPress={() => router.push("/notifications/page")}
          style={{ padding: 8 }}
        >
          <Bell size={20} color={"grey"} />
        </TouchableOpacity>
      </View>
      <View className="max-w-64">
        <Text className="text-2xl font-dmsansMedium tracking-tighter leading-8 text-black/60">
          What do you want to do today{" "}
          <Text className="font-dmsansMedium text-black">Arnold?</Text>
        </Text>
      </View>
      <View className="flex flex-row items-center gap-4" style={{ height: 46 }}>
        <TextInput
          placeholder="Search for events or vendors"
          className="flex-1 font-dmsans border bg-white rounded-lg px-4 py-2 h-full"
        />
        <TouchableOpacity
          className="h-full w-12 flex flex-row justify-center items-center bg-sec rounded-lg"
          style={{ width: 46 }}
        >
          <Menu size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row w-full gap-4">
        <TouchableOpacity className="bg-sec border rounded-2xl h-full w-40"></TouchableOpacity>
        <TouchableOpacity className="bg-sec border rounded-2xl h-full"></TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=>router.push("/onboarding/page")}><Text>Test</Text></TouchableOpacity>
    </SafeAreaView>
  );
};

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

export default index;
