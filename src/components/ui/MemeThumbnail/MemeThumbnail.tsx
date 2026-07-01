import type { FC } from "react";
import styles from "./MemeThumbnail.module.css";
import {
  MemeSVGViewer,
  type ImageInterface,
  type MemeInterface,
} from "orsys-tjs-meme";

interface MemeThumbnailProps {
  memes: MemeInterface[];
  images: ImageInterface[];
}

const MemeThumbnail: FC<MemeThumbnailProps> = ({ memes, images }) => (
  <div className={styles.MemeThumbnail}>
    {memes.map((meme) => (
      <div key={meme.id} className={styles.Item}>
        <MemeSVGViewer
          meme={meme}
          image={images.find((image) => image.id === meme.imageId)}
          basePath=""
        />
      </div>
    ))}
  </div>
);

export default MemeThumbnail;
