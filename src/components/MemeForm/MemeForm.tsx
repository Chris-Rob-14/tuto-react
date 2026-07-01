import React, { useEffect, type FC } from "react";
import styles from "./MemeForm.module.css";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { Button } from "react-bootstrap";

interface IMemeFormProps {
  meme: MemeInterface;
  onMemeChange: (meme: MemeInterface) => void;
  images: Array<ImageInterface>;
}

const MemeForm: FC<IMemeFormProps> = ({ meme, images, onMemeChange }) => {
  useEffect(() => {
    //montage

    return () => {
      //demontage
    };
  }, []);

  const onMemeTextValueChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    switch (evt.target.name) {
      case "fontSize":
      case "x":
      case "y":
      case "fontWeight":
      case "frameSizeX":
      case "frameSizeY":
        onMemeChange({
          ...meme,
          [evt.target.name]: parseInt(evt.target.value),
        });
        break;

      case "underline":
      case "italic":
        onMemeChange({
          ...meme,
          [evt.target.name]: (evt.target as HTMLInputElement).checked,
        });
        break;

      default:
        onMemeChange({ ...meme, [evt.target.name]: evt.target.value });
        break;
    }
  };

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          //onMemeChange(meme.);
        }}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={meme.titre}
          onChange={onMemeTextValueChange}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select name="imageId" id="imageId" onChange={onMemeTextValueChange}>
          <option value="-1">pas d'image</option>
          {images.map((e) => {
            return (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            );
          })}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={meme.text}
          onChange={onMemeTextValueChange}
        />
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          name="x"
          id="x"
          type="number"
          value={meme.x}
          onChange={onMemeTextValueChange}
        />
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          name="y"
          id="y"
          type="number"
          value={meme.y}
          onChange={onMemeTextValueChange}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={meme.color}
          onChange={onMemeTextValueChange}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          name="fontSize"
          id="fontSize"
          type="number"
          value={meme.fontSize}
          onChange={onMemeTextValueChange}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          name="fontWeight"
          id="fontWeight"
          type="number"
          value={meme.fontWeight}
          onChange={onMemeTextValueChange}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={meme.underline}
          onChange={onMemeTextValueChange}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>
        &nbsp;<h2 style={{ display: "inline" }}>/</h2>
        &nbsp;
        <label htmlFor="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          checked={meme.italic}
          onChange={onMemeTextValueChange}
        />
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 style={{ display: "inline" }}>frame size X :</h2>
        </label>
        <input
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          value={meme.frameSizeX}
          onChange={onMemeTextValueChange}
        />
        px <br />
        <label htmlFor="frameSizeY">
          <h2 style={{ display: "inline" }}>frame size y :</h2>
        </label>
        <input
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          value={meme.frameSizeY}
          onChange={onMemeTextValueChange}
        />
        px
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <Button children={"Cancel"} variant="danger" type="reset" />
          <Button children={"ok"} variant="success" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default MemeForm;
