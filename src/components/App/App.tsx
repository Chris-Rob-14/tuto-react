import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import Navbar from "../ui/Navbar/Navbar";
import FlexH1Grow from "../layout/FlexH1Grow/FlexH1Grow";
import FlexV3Grow from "../layout/FlexV3Grow/FlexV3Grow";
import MemeSVGViewer from "../ui/MemeSVGViewer/MemeSVGViewer";
import MemeFormConnected from "../MemeForm/MemeForm.stored";
import Editor from "../../page/Editor";
import { Routes, Route } from "react-router";

const App: React.FC = () => {
  return (
    <FlexV3Grow>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/editor" Component={Editor} />
        <Route path="/editor/:id" Component={Editor} />
      </Routes>
      <Footer />
    </FlexV3Grow>
  );
};

export default App;
