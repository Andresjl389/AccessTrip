import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HeaderComponent, ThemedButton, ThemedInput } from "@/components/ui";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Campos incompletos", "Por favor ingresa tu correo y contraseña.");
      return;
    }
    console.log("Login button pressed", { email, password });
    router.push("/home/home");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent />
      <ThemedView
        style={{ flex: 1, padding: 20, alignItems: "center", gap: 10 }}
      >
        <ThemedText type="title">Inicio de Sesión</ThemedText>
        <ThemedText type="text">
          Por favor ingresa tus credenciales para continuar.
        </ThemedText>

        <View
          style={{
            display: "flex",
            gap: 20,
            marginVertical: 20,
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <ThemedInput
            placeholder="Correo"
            value={email}
            onChangeText={setEmail}
          />
          <ThemedInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View
          style={{
            width: "100%",
            display: "flex",
            marginBottom: 20,
            alignItems: "flex-end",
          }}
        >
          <ThemedText type="link" style={{ textAlign: "right", width: "100%" }}>
            ¿Olvidaste tu contraseña?
          </ThemedText>
        </View>

        <ThemedButton title="Iniciar Sesión" onPress={handleLogin} />
      </ThemedView>
    </SafeAreaView>
  );
};

export default LoginScreen;
