import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import FirstScreen from "./src/screens/FirstScreen";
// import ChallengeScreenM1 from "./src/screens/FirstScreen";
// import SecondScreen from "./src/screens/SecondScreen";
// import ChallengeScreenM2 from "./src/screens/SecondScreen";
import ThirdScreen from "./src/screens/ThirdScreen";
import AddImage from "./src/screens/ThirdScreen";


const App = () => {
  return (
    <SafeAreaProvider>
      <AddImage />
    </SafeAreaProvider>
  )
}

export default App;