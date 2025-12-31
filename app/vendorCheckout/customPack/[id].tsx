import Backbar from "@/app/components/backbar";
import { drink, main, starters } from "@/app/data";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ChevronDown } from "lucide-react-native";
import { useState } from "react";
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";

function Drop({ setSelect, type, select, name }: any) {
  return (
    <View className="px-6 h-24 gap-2">
      <Text className="font-dmsansSemi tracking-tight text-sm">
        Select {name}
      </Text>
      <SelectList
        // setSelected={setSelected}
        // data={starters}
        // placeholder={selected}

        setSelected={setSelect}
        data={type}
        placeholder={select}
        search={false}
        save="value"
        boxStyles={styles.boxStyles}
        // inputStyles={styles.inputStyles}
        inputStyles={{
          fontSize: 12,
          color: "#1f2937",
          fontFamily: "DMSans_600SemiBold",
          letterSpacing: -0.5,
          opacity: 0.8,
        }}
        dropdownStyles={styles.dropdownStyles}
        // dropdownItemStyles={styles.dropdownItemStyles}
        dropdownTextStyles={styles.dropdownTextStyles}
        arrowicon={<ChevronDown size={18} color="#1f2937" strokeWidth={2.5} />}
        defaultOption={{
          key: "1",
          // value: "Select starter"
          // value: selected,
          value: select,
        }}
      />
    </View>
  );
}

export default function CustomPackage() {
  const [selected, setSelected] = useState("Select starter");
  const [selected2, setSelected2] = useState("Select main");
  const [selected3, setSelected3] = useState("Select drink");

  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <SafeAreaView className="flex-1 bg-main pt-6 flex justify-between">
      <StatusBar barStyle="dark-content" />
      <View className="gap-6">
        <Backbar title="Customize Package" />
        <View className="w-full gap-2 px-6 flex flex-row">
          <View className="bg-sec rounded-full h-1 flex-1"></View>
          <View className="bg-neutral-300 rounded-full h-1 flex-1"></View>
          <View className="bg-neutral-300 rounded-full h-1 flex-1"></View>
        </View>
        <Text
          className="font-dmsansSemi text-center text-black/70 text-sm"
          style={{ letterSpacing: -0.6 }}
        >
          Choose 1 item from each category
        </Text>
        <View className="flex-1 h-full">
          <Drop setSelect={setSelected} select={selected} type={starters} name="starter" />
          <Drop setSelect={setSelected2} select={selected2} type={main} name="main" />
          <Drop setSelect={setSelected3} select={selected3} type={drink} name="drink" />

          <View className="px-6 h-40 gap-2">
            <Text className="font-dmsansSemi tracking-tight text-sm">
              Special requests (Dietary restrictions, allergies, e.t.c)
            </Text>
            <TextInput
              placeholder="Let us know about any special requirements"
              className="border-[1px] border-neutral-300 bg-white rounded-xl px-4 py-2"
              style={{
                fontSize: 12,
                color: "#1f2937",
                fontFamily: "DMSans_400Regular",
                letterSpacing: -0.5,
                minHeight: 43,
              }}
              // placeholderTextColor={"#d4d4d4"}
              numberOfLines={4}
              multiline={true}
            />
          </View>
        </View>
      </View>
      <View className="px-6">
        <Pressable
          className="bg-sec h-14 rounded-xl flex justify-center items-center"
          // onPress={() => router.push("/vendorCheckout/checkout/[id]")}
          onPress={() =>
            router.push({
              pathname: "/vendorCheckout/checkout/[id]",
              params: { id: id.toString() },
            })
          }
        >
          <Text className="font-dmsansMedium text-white tracking-tighter">
            Continue
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  boxStyles: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 0,
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#d4d4d4",
    flex: 1,
  },
  // inputStyles: {
  //   fontSize: 12,
  //   color: "#1f2937",
  //   marginLeft: 0,
  //   paddingLeft: 0,
  //   fontFamily: "DMSans_500Medium",
  //   letterSpacing: -0.5,
  // },
  dropdownStyles: {
    position: "absolute",
    top: 36,
    width: "100%",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d4d4d4",
    elevation: 5,
    zIndex: 1000,
  },
  // dropdownItemStyles: {
  //   paddingVertical: 12,
  //   paddingHorizontal: 16,
  //   borderRadius: 8,
  //   marginHorizontal: 4,
  // },
  dropdownTextStyles: {
    fontSize: 15,
    color: "#000",
    fontFamily: "DMSans_500Medium",
    letterSpacing: -0.5,
  },
});
