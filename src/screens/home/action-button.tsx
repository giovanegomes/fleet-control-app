import { Pressable, Text } from "react-native";
import { actionButtonStyles } from "./styles";
// TODO: substituir pela outra lib
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const ICON_SIZE = 60;
const ICON_COLOR = 'black';

const renderIcon = (icon: IconProp) => {
  if (icon.library === 'MaterialCommunityIcons') {
    return (
      <MaterialCommunityIcons 
        name={icon.name as MaterialCommunityIconName} 
        size={ICON_SIZE} 
        color={ICON_COLOR} 
      />
    );
  }

  return (
    <MaterialIcons 
      name={icon.name as MaterialIconName} 
      size={ICON_SIZE} 
      color={ICON_COLOR} 
    />
  );
};

export function ActionButton({ label, icon, onPress }: PropsType) {
  const Icon = renderIcon(icon);

  return (
    <Pressable
      onPress={onPress}
      style={actionButtonStyles.container}
      >
        {Icon}
        <Text style={actionButtonStyles.title}>{label}</Text>
    </Pressable>
  )
}

type MaterialCommunityIconName = keyof typeof MaterialCommunityIcons.glyphMap;
type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

interface IconProp {
  library: 'MaterialCommunityIcons' | 'MaterialIcons';
  name: MaterialCommunityIconName | MaterialIconName;
}

type PropsType = {
  label: string;
  icon: IconProp;
  onPress: () => void;
}