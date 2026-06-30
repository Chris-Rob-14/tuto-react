import { useEffect, useState } from "react";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import Navbar from "../ui/Navbar/Navbar";
import MemeForm from "../MemeForm/MemeForm"
import FlexH1Grow from "../layout/FlexH1Grow/FlexH1Grow";
import FlexV3Grow from "../layout/FlexV3Grow/FlexV3Grow";

const App:React.FC = () => {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    console.log(counter)
},[counter])
useEffect(() => {
  setCounter(-1000)
}, [])
  return (
 <FlexV3Grow>
  <Header />
    <Navbar />
    <FlexH1Grow><div>Viewer</div><MemeForm /></FlexH1Grow>
    <Footer />
 </FlexV3Grow>
  );
};

export default App;

