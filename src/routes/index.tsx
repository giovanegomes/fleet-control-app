import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { HomeScreen } from "../screens/home";

export type AppRoutes = {
  home: undefined;
};

function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View style={{ marginTop: 20 }}>
        <DrawerItem
          label="Sair"
          labelStyle={{ color: "red" }}
          onPress={() => console.log('logout')}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator<AppRoutes>();

export function Router() {
  return (
    <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen
        name="home"
        options={{ title: "Health App", drawerLabel: "Início" }}
        component={HomeScreen}
      />
    </Drawer.Navigator>  
    </NavigationContainer>
  );
}