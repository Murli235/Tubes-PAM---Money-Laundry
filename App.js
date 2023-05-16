import {
  Home,
  splash,
  login,
  register,
  History,
  pengantaran,
  Akun,
  Menu,
  Pemesanan,
  Satuan,
  Kiloan,
  pembayaransatuan,
  pembayarankiloan,
  imagepic,
} from "./screen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="register"
          component={register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="History"
          component={History}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pengantaran"
          component={pengantaran}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Akun"
          component={Akun}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Pemesanan"
          component={Pemesanan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Satuan"
          component={Satuan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Kiloan"
          component={Kiloan}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="pembayaransatuan"
          component={pembayaransatuan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pembayarankiloan"
          component={pembayarankiloan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="imagepic"
          component={imagepic}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
