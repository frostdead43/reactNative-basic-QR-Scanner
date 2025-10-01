import { Link, Stack } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useCameraPermissions } from "expo-camera";

export default function Index() {

  const [permission, requestPermission] = useCameraPermissions();

  const isPermissionGranted = Boolean(permission?.granted);
  
  console.log(permission, isPermissionGranted);

  return (
    <SafeAreaView style= {styles.container}>
      <Stack.Screen options = {{title: "Overview", headerShown:false}}/>
      <Text style = {styles.title}>QR Code Scanner</Text>
      <View style = {styles.innerContainer}>
        <Pressable  onPress={requestPermission}>
          <Text style= {styles.h2} >{permission ? "Permission Granted" : "Request Permission"}</Text>
        </Pressable>
        <Link href={"/scanner"} asChild>
         <Pressable style = {styles.btn} disabled={!isPermissionGranted}>
          <Text>Scan Code</Text>
         </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: "black"
  },
  title: {
    fontSize: 40,
    color: "white",
    textAlign:"center",
    marginTop: 40
  },
  innerContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
  },
  h2: {
    color: "white",
  },
  btn: {
     backgroundColor: "#ffffffff", 
    paddingVertical: 12,          
    paddingHorizontal: 25,      
    borderRadius: 8,            
    alignItems: "center",         
    justifyContent: "center",  
    marginTop: 40,
  }
  
})
