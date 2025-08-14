// ThemedInput.tsx
import { TextInput, TextInputProps } from "react-native";
import { styles } from "./Input.styles";

interface ThemedInputProps extends TextInputProps {
  placeholder: string;
}

const ThemedInput = ({ placeholder, ...rest }: ThemedInputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default ThemedInput;
