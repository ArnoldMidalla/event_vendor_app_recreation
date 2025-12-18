import { Minus, Plus } from "lucide-react-native";
import { Pressable, Text, View } from "react-native";

export default function ChooseTicket({
  mainText,
  price,
  subText,
  ticketsNo,
  increase,
  decrease,
}: {
  mainText: string;
  price: number;
  subText: string;
  ticketsNo: number;
  increase: any;
  decrease: any;
}) {
  return (
    <>
      <View className="flex flex-row justify-between">
        <View>
          <Text className="font-dmsansMedium tracking-tight text-lg">
            {mainText} - N{price}
          </Text>
          <Text className="font-dmsans text-sm text-black/70 tracking-tight">
            {subText}
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <Pressable
            onPress={decrease}
            className="border h-8 w-8 flex justify-center items-center rounded-l-lg border-neutral-200 bg-neutral-100"
          >
            <Minus strokeWidth={2.5} size={15} />
          </Pressable>
          <View className="flex justify-center items-center h-8 w-8 border-y border-neutral-200">
            <Text className="font-dmsansMedium text-lg">{ticketsNo}</Text>
          </View>
          <Pressable
            onPress={increase}
            className="border h-8 w-8 flex justify-center items-center rounded-r-lg border-neutral-200 bg-neutral-100"
          >
            <Plus strokeWidth={2.5} size={15} />
          </Pressable>
        </View>
      </View>
      <View className="w-full h-0.5 bg-neutral-200" />
    </>
  );
}
