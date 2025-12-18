import { Stack } from "expo-router";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import "./globals.css";

import {
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
  useFonts,
} from "@expo-google-fonts/dm-sans";

export default function RootLayout() {
  const [loaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!loaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="notifications/page"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="onboarding/page" options={{ headerShown: false }} />
        <Stack.Screen name="events/page" options={{ headerShown: false }} />
        <Stack.Screen name="vendors/page" options={{ headerShown: false }} />
        <Stack.Screen
          name="singleEvent/[id]"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="checkout/[id]" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
