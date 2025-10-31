import { View } from "react-native";
import styles from "./styles";
import { useAppNavigation } from "../../hooks/use-app-navigation";
import { ActionButton } from "./action-button";

const ACTIONS = [
  {
    label: 'Abastecer',
    icon: {
      library: 'MaterialCommunityIcons',
      name: 'fuel',
    },
    route: 'fuelLog',
  },
  {
    label: 'Deslocamento',
    icon: {
      library: 'MaterialIcons',
      name: 'route',
    },
    route: 'trips',
  },
  {
    label: 'Vistoria',
    icon: {
      library: 'MaterialIcons',
      name: 'checklist',
    },
    route: 'checklist',
  },
];

export function HomeScreen() {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      {
        ACTIONS.map(({ label, icon, route }) => (
          <ActionButton
            key={label}
            label={label}
            onPress={() => navigation.navigate(route)}
            icon={icon}
          />
        ))
      }
    </View>
  )
}