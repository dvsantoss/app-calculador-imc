import { StyleSheet, Text, View } from "react-native";
import Form from "./src/components/Form";
import Title from "./src/components/Title";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0e5e5",
    paddingTop: 40,
  },
});
