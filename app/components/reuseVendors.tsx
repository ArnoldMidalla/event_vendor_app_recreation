import { Image, Pressable, Text, View } from "react-native";

import { useRouter } from "expo-router";

import { BlurView } from "expo-blur";
import { CalendarCheck2, CircleCheck, Star } from "lucide-react-native";

interface propsss {
  title: string;
  rating: number;
  image: string;
  bookings: number;
  type: string;
  subType: string;
  price: number;
}

export default function ReuseVendors({
  title,
  rating,
  image,
  bookings,
  type,
  subType,
  price,
}: propsss) {
  const router = useRouter();
  return (
    <Pressable
      className="p-2 border h-fit rounded-2xl border-neutral-300 bg-white flex flex-col gap-2 relative"
      onPress={() => router.push("/onboarding/page")}
    >
      <BlurView
        intensity={40}
        tint="dark"
        className="absolute top-4 left-4 backdrop-blur px-2 py-1 rounded-lg z-50 overflow-hidden"
        style={{ zIndex: 10 }}
      >
        <Text className="font-dmsansMedium text-white text-sm">{type}</Text>
      </BlurView>
      <Image source={{ uri: image }} className="w-52 h-32 rounded-xl" />
      <View className="flex flex-row items-center gap-1">
        <Text className="font-dmsansMedium tracking-tight">{title}</Text>
        <CircleCheck fill={"green"} color={"white"} size={17} />
      </View>
      <View className="flex flex-row gap-1 items-center">
        <Star color={"gold"} fill={"gold"} size={13} />
        <Text className="font-dmsansMedium tracking-tighter">{rating}</Text>
      </View>
      <View className="flex flex-row items-center gap-1">
        <CalendarCheck2 color={"#8e8e8e"} size={13} />
        <Text className="font-dmsansMedium text-sm text-black/70">
          {bookings}+ bookings
        </Text>
      </View>
      <View className="flex flex-row justify-between">
        <Text className="font-dmsans tracking-tight text-black/70 text-sm">
          {subType}
        </Text>
        <Text className="font-dmsansMedium tracking-tight text-black text-sm">
          From <Text className="font-dmsansBold text-[1rem]">{price}</Text>
        </Text>
      </View>
    </Pressable>
  );
}
