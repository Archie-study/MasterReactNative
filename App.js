import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import FirstScreen from "./src/screens/FirstScreen";
// import ChallengeScreenM1 from "./src/screens/FirstScreen";
// import SecondScreen from "./src/screens/SecondScreen";
// import ChallengeScreenM2 from "./src/screens/SecondScreen";
// import ThirdScreen from "./src/screens/ThirdScreen";
// import AddImage from "./src/screens/ThirdScreen";
// import HorizontalImage from "./src/screens/ThirdScreen";
// import ChallengeScreenM3 from "./src/screens/ThirdScreen";
// import FourthScreen from "./src/screens/FourthScreen";
// import ChallengeScreenM4 from "./src/screens/FourthScreen";
import InstagramHomeScreen from "./src/screens/InstagramHomeScreen";

const App = () => {
  return (
    <SafeAreaProvider>
      <InstagramHomeScreen />
    </SafeAreaProvider>
  )
}

export default App;