import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Image, TouchableOpacity } from "react-native";

interface HeaderProps {
  isLoggedIn?: boolean;
  photoUrl?: string;
}

const HeaderComponent = ({ isLoggedIn, photoUrl }: HeaderProps) => {
  const colorScheme = useColorScheme();

  return (
    <ThemedView
      style={{
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#E9E9E9",
          borderRadius: 50,
          padding: 2,
        }}
      >
        {colorScheme === "dark" ? (
          <Image
            source={require("../../../assets/images/left-arrow-dark.png")}
            style={{ width: 40, height: 40 }}
          />
        ) : (
          <Image
            source={require("../../../assets/images/left-arrow.png")}
            style={{ width: 40, height: 40 }}
          />
        )}
      </TouchableOpacity>
      {isLoggedIn && (
        <TouchableOpacity>
          {photoUrl ? (
            <Image
              source={{ uri: photoUrl }}
              style={{
                width: 40,
                height: 40,
                marginRight: 20,
                borderRadius: 20,
              }}
            />
          ) : null}
        </TouchableOpacity>
      )}
    </ThemedView>
  );
};

export default HeaderComponent;
