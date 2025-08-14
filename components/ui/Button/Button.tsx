import { ThemedText } from "@/components/ThemedText";
import { TouchableOpacity, useColorScheme } from "react-native";
import { styles } from "./Button.styles";


interface ThemedButtonProps {
  title: string;
  onPress: () => void;
}

const ThemedButton = ({ title, onPress }: ThemedButtonProps) => {
  const colorScheme = useColorScheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <ThemedText style={{ color: colorScheme === 'dark' ? '#fff' : '#fff' }}>
        {title}
      </ThemedText>
    </TouchableOpacity>
  );
};

export default ThemedButton;