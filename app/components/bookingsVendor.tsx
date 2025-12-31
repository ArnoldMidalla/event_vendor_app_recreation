import { useRouter } from "expo-router";
import { BadgeCheck, Box, CalendarDays, MapPin } from "lucide-react-native";
import { Image, Pressable, Text, View } from "react-native";

export default function BookingsVendor({
  id,
  image,
  title,
  packageVal,
  isVerified,
  dateTime,
  address,
}: {
  id: string | number;
  image: string;
  title: string;
  packageVal: string;
  isVerified: boolean;
  dateTime: string;
  address: string;
}) {
  const router = useRouter();
  return (
    <Pressable
      className="bg-white flex flex-row gap-2 border border-neutral-300 rounded-xl overflow-hidden p-2"
      style={{ height: 110 }}
      onPress={() =>
        router.push({
          pathname: "/singleBooking/[id]",
          params: { id: id.toString() },
        })
      }
    >
      <Image
        source={{ uri: image }}
        className="bg-emerald-900 rounded-lg w-[105px]"
        style={{ width: 105 }}
      />
      <View className="flex flex-col justify-between py-2">
        <View className="flex flex-row gap-1 items-center">
          <Text className="font-dmsansSemi tracking-tighter">{title}</Text>
          {isVerified && (
            <BadgeCheck color={"white"} fill={"green"} size={17} />
          )}
        </View>
        <View className="flex flex-row gap-1 items-center">
          <Box color={"#a3a3a3"} size={14} />
          <Text className="font-dmsansMedium tracking-tighter text-black/60 text-sm">
            {packageVal}
          </Text>
        </View>
        <View className="flex flex-row gap-1 items-center">
          <MapPin color={"#a3a3a3"} size={14} />
          <Text className="font-dmsansMedium tracking-tighter text-black/60 text-sm">
            {address}
          </Text>
        </View>
        <View className="flex flex-row gap-1 items-center">
          <CalendarDays color={"#a3a3a3"} size={14} />
          <Text className="font-dmsansMedium tracking-tighter text-black/60 text-sm">
            {dateTime}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
