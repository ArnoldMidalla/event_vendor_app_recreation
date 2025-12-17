import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function ReusePromotions({
  image,
  mainText,
  subText,
}: {
  image: string;
  mainText: string;
  subText: string;
}) {
    const router = useRouter()
  return (
    <Pressable onPress={()=> router.push("/vendors/page")} className="relative h-36 w-60 rounded-2xl overflow-hidden">
      <Image
        source={{ uri: image }}
        className="h-full w-full"
        resizeMode="cover"
      />
      {/* Black → Transparent Overlay */}
      <LinearGradient
        colors={["rgba(0,0,0,0.6)", "transparent"]}
        start={{ x: 0, y: 1 }} // bottom
        end={{ x: 0, y: 0 }} // top
        className="absolute inset-0"
      />
      <View className="absolute bottom-3 left-3 right-3">
        <Text className="text-white font-dmsansMedium font-semibold">
          {mainText}
        </Text>
        <Text className="text-white font-dmsans text-xs opacity-90">
          {subText}
        </Text>
      </View>
    </Pressable>
  );
}
