/*
import style from "./Button.module.css";
import { useState } from "react";

interface IButtonProps {
  color?: "tomato" | "skyblue" | "green";
  type?: "submit" | "reset" | "button";
  onCliked?: () => void;
  children: React.ReactNode;
}

const Button = ({
  type = "button",
  children,
  color,
  onCliked = () => {},
}: IButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    console.log("Bouton cliqué, state à true");

    onCliked();

    setTimeout(() => {
      setIsClicked(false);
      console.log("Rollback, state à false");
    }, 2000);
  };

  return (
    <button
      className={style.Button + " DarkBackground"}
      style={{ color }}
      onClick={handleClick}
      type={type}
    >
      {isClicked ? "Cliqué !" : children}
    </button>
  );
};

export default Button;
*/