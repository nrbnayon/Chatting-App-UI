import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import   BottonTabNavigation from './navigation/ButtonTabNavigation';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Walkthrough, PhoneNumber, ProfileAccount, Verification, PersonalChat } from "./screens";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    blak: require('./assets/fonts/Mulish-Black.ttf'),
    regular: require('./assets/fonts/Mulish-Regular.ttf'),
    bold: require('./assets/fonts/Mulish-Bold.ttf'),
    medium: require('./assets/fonts/Mulish-Medium.ttf'),
    mediumItalic: require('./assets/fonts/Mulish-MediumItalic.ttf'),
    semiBold: require('./assets/fonts/Mulish-SemiBold.ttf'),
    semiBoldItalic: require('./assets/fonts/Mulish-SemiBoldItalic.ttf'),
  })

  const onLayoutRootView = useCallback( async () => {
      if(fontsLoaded){
        await SplashScreen.hideAsync()
      }
  },[fontsLoaded]);
  
  if(!fontsLoaded) {
    return null
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="Walkthrough"
        >
          <Stack.Screen name='BottonTabNavigation' component={BottonTabNavigation} />
          <Stack.Screen name="Walkthrough" component={Walkthrough} />
          <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
          <Stack.Screen name="ProfileAccount" component={ProfileAccount} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="PersonalChat" component={PersonalChat} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
