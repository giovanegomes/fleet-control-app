import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../screens/home";
import { ChecklistScreen } from "../screens/checklist";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FuelLogScreen } from "../screens/fuel-logs";
import { TripsScreen } from "../screens/trips";

export type AppRoutes = {
  home: undefined;
  checklist: undefined;
  fuelLog: undefined;
  trips: undefined;
};

const Stack = createNativeStackNavigator<AppRoutes>();

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          headerTitleAlign: "center",
          statusBarStyle: undefined,
          statusBarAnimation: undefined,
        }}
      >
        <Stack.Screen
          name="home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="checklist"
          options={{ title: "Vistoria" }}
          component={ChecklistScreen}
        />
        <Stack.Screen
          name="fuelLog"
          options={{ title: "Abastecimento" }}
          component={FuelLogScreen}
        />
        <Stack.Screen
          name="trips"
          options={{ title: "Deslocamento" }}
          component={TripsScreen}
        />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}