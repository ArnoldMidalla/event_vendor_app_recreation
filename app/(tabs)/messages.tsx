import { useRouter } from "expo-router";
import { BadgeCheck, CheckCheck, Search } from "lucide-react-native";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MessageData } from "../data";

export default function Messages() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 gap-6 pt-10 pb-6 bg-[#fcfbfc] px-6">
      <Text className="font-dmsansSemi text-2xl" style={{letterSpacing: -1}}>
        Messages
      </Text>
      <View className="border border-neutral-200 bg-white rounded-xl flex flex-row gap-2 px-3 items-center h-14">
        <Search opacity={0.7} size={16} strokeWidth={2.6} />
        <TextInput
          placeholder="Search messages"
          className="font-dmsans flex-1 text-black"
          placeholderTextColor={"#737373"}
        />
      </View>
      <View className="flex gap-6">
        {MessageData.map((message) => (
          <Pressable
            key={message.id}
            className="flex flex-row gap-2"
            // onPress={() => router.push(`/singleMessage/${message.id}`)}
            onPress={() =>
              router.push({
                pathname: "/singleMessage/[id]",
                params: { id: message.id.toString() },
              })
            }
          >
            <View className="size-12 rounded-full bg-purple-900"></View>
            <View className="flex-1 flex  justify-between py-0.5">
              <View className="flex flex-row gap-1 items-center">
                <Text className="font-dmsansBold tracking-tighter">
                  {message.name}
                </Text>
                {message.isVerified && (
                  <BadgeCheck fill={"green"} color={"white"} size={17} />
                )}
              </View>
              <View className="flex flex-row gap-1">
                {message.delivered && <CheckCheck size={14} opacity={0.7} />}
                <Text className="text-black/70 font-dmsans tracking-tight text-sm line-clamp-1">
                  {message.message}
                </Text>
              </View>
            </View>
            <View className="flex items-end justify-between py-0.5">
              <Text className="font-dmsansMedium text-sm text-black/70 tracking-tight">
                {message.time}
              </Text>
              {message.unread && (
                <View className="size-5 bg-sec rounded-full flex items-center justify-center">
                  <Text className="font-dmsansMedium text-white tracking-tight text-xs">
                    {message.unread}
                  </Text>
                </View>
              )}
            </View>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
}
