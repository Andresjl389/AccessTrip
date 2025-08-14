import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemedText>Home Screen</ThemedText>
    </View>
  );
};

export default Home;