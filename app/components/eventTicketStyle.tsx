import { useRouter } from "expo-router";
import { Clock3, MapPin } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export default function EventTicketStyle({
  title,
  address,
  //   date,
  type,
  id,
  color,
  dateMon,
  dateDay,
  dateTime,
}: {
  title: string;
  address: string;
  //   date: string;
  type: string;
  id: string | number;
  color: string;
  dateMon: string;
  dateDay: string;
  dateTime: number;
}) {
  const router = useRouter();
  return (
    <Pressable
      className="bg-white  flex flex-row overflow-hidden"
      onPress={() =>
        router.push({
          pathname: "/singleTicket/[id]",
          params: { id: id.toString() },
        })
      }
    >
      <View className="flex flex-1 gap-1.5 py-3 pl-3 border border-neutral-300 border-r-0 rounded-l-xl rounded-y-xl">
        <View
          className={`px-3 rounded-full self-start`}
          style={{ paddingVertical: 6, backgroundColor: color }}
        >
          <Text className="text-white text-xs font-dmsansMedium">{type}</Text>
        </View>
        <Text
          className="font-dmsansSemi text-lg"
          style={{ letterSpacing: -0.6 }}
        >
          {title}
        </Text>
        <View className="flex flex-row items-center gap-1">
          <MapPin color={"#8e8e8e"} size={14} />
          <Text className="font-dmsansMedium text-sm text-black/60 tracking-tighter">
            {address}
          </Text>
        </View>
        <View className="flex flex-row items-center gap-1">
          <Clock3 color={"#8e8e8e"} size={14} />
          <Text className="font-dmsansMedium text-sm text-black/60 tracking-tighter">
            {dateTime}:00pm
          </Text>
        </View>
      </View>
      <View className="w-8 flex justify-between">
        <View className="bg-[#fcfbfc] rounded-b-full h-4 border border-t-0 border-neutral-300"/>
        <View className="bg-[#fcfbfc] rounded-t-full h-4 border border-b-0 border-neutral-300"/>
      </View>
      <View
        className={`rounded-r-xl border border-neutral-300 border-l-0 flex items-center justify-center`}
        style={{ width: 66, backgroundColor: color }}
      >
        <Text className="font-dmsansBold text-lg text-center text-white tracking-tighter leading-tight">
          {dateMon}
        </Text>
        <Text className="font-dmsansBold text-lg text-center text-white tracking-tighter">
          {dateDay}
        </Text>

        <Text className="font-dmsansMedium text-white/70 text-center tracking-tighter">
          2025
        </Text>
      </View>
    </Pressable>
  );
}
