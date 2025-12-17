import { Menu } from "lucide-react-native";
import React from "react";
import { View, Pressable, Text, TextInput } from "react-native";

export default function SearchBar({placeholder}:{placeholder:string}){
    return(
        <View className="flex flex-row items-center gap-4 px-6" style={{ height: 46 }}>
        <TextInput
          placeholder={placeholder}
          className="flex-1 font-dmsans border-[1px] border-neutral-300 bg-white rounded-xl px-4 py-2 h-full"
        />
        <Pressable
          className="h-full w-12 flex flex-row justify-center items-center bg-sec rounded-xl"
          style={{ width: 46 }}
        >
          <Menu size={24} color="#fff" />
        </Pressable>
      </View>
    )
}