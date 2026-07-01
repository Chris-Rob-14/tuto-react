import MemeFormConnected from "../components/MemeForm/MemeForm.stored";
import MemeSVGViewer from "../components/ui/MemeSVGViewer/MemeSVGViewer";
import FlexH1Grow from "../components/layout/FlexH1Grow/FlexH1Grow";
import { useParams } from "react-router";
const Editor = () => {
  const params = useParams;
  console.log(params);
  return (
    <FlexH1Grow>
      <MemeSVGViewer />
      <MemeFormConnected />
    </FlexH1Grow>
  );
};

export default Editor;
