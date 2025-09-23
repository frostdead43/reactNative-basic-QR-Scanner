import { CameraView } from "expo-camera";
import { Stack } from "expo-router";
import { Linking, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Overview", headerShown: false }} />
      <CameraView
        style={styles.camera}
        facing="back"
        onBarcodeScanned={({ data }) => {
          setTimeout(async() =>{
             console.log(data);
             await Linking.openURL(data);
          },300);
         
        }}
      />
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  camera: { flex: 1 },
});
