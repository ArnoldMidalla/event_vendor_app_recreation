import { Image, Pressable, Text, View } from "react-native";

import { useRouter } from "expo-router";

import { BlurView } from "expo-blur";
import { CalendarDays, Heart, MapPin } from "lucide-react-native";

interface propsss {
  title: string;
  address: string;
  date: string;
  image: string;
  price: number;
  type: string;
  id: number;
}

export default function ReuseEvents({
  title,
  address,
  date,
  image,
  price,
  type,
  id,
}: propsss) {
  const router = useRouter();
  return (
    <Pressable
      className="p-2 border h-fit rounded-2xl border-neutral-300 bg-white flex flex-col gap-2 relative"
      onPress={() =>
        router.push({
          pathname: "/singleEvent/[id]",
          params: { id: id.toString() },
        })
      }
    >
      <BlurView
        intensity={40}
        tint="dark"
        className="absolute top-4 left-4 backdrop-blur px-2 py-1 rounded-lg z-50 overflow-hidden"
        style={{ zIndex: 10 }}
      >
        <Text className="font-dmsansMedium text-white text-sm">{type}</Text>
      </BlurView>
      <Image
        source={{ uri: image }}
        className="w-52 h-32 rounded-xl"
        // style={{width: 200, height: 140}}
      />
      <View className="flex flex-row justify-between items-center">

      <Text className="font-dmsansMedium tracking-tight">{title}</Text>
      <Heart color={"#8e8e8e"} size={17} />
      </View>
      <View className="flex flex-row items-end gap-0.5">
        <MapPin color={"#8e8e8e"} size={13} />
        <Text className="font-dmsansMedium text-xs text-black/70">
          {address}
        </Text>
      </View>
      <View className="flex flex-row items-end gap-0.5">
        <CalendarDays color={"#8e8e8e"} size={13} />
        <Text className="font-dmsansMedium text-xs text-black/70">{date}</Text>
      </View>
      <View className="flex flex-row items-center justify-end">
        <Text className="font-dmsansBold text-lg tracking-tighter">
          {price}/
        </Text>
        <Text className="font-dmsansMedium text-xs text-nowrap tracking-tight">
          per person
        </Text>
      </View>
    </Pressable>
  );
}
