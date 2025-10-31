import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppRoutes } from "../routes";

export const useAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<AppRoutes>>();