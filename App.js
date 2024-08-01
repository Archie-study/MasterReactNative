import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FirstScreen from "./src/screens/FirstScreen";
import ChallengeScreenM1 from "./src/screens/FirstScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      <ChallengeScreenM1 />
    </SafeAreaProvider>
  )
}

export default App;