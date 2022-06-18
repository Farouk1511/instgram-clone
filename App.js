import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "./components/Avatar";
import Constants from "expo-constants";
import AuthorRow from "./components/AuthorRow";
import Card from "./components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <Card
        fullname="First Last"
        linkText="Comments"
        onPressLinkText={() => {
          console.log("Presssed link");
        }}
        image={{ uri: "https://unsplash.it/600/600" }}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    marginTop: Constants.statusBarHeight,
  },
});
