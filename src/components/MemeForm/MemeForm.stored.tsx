import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { update } from "../../store/slices/current";
import MemeFormU from "./MemeForm";

const MemeFormConnected = () => {
  const dispatch = useDispatch();

  const current = useSelector((s: RootState) => s.current.meme);
  const images = useSelector((s: RootState) => s.ressources.images);
  return (
    <MemeFormU
      meme={current}
      images={images}
      onMemeChange={(newCurrent) => {
        console.log("newCurrent imageId", newCurrent.imageId);
        dispatch(update(newCurrent));
      }}
    />
  );
};

export default MemeFormConnected;
