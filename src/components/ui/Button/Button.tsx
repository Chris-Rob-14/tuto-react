import style from "./Button.module.css";
import { useEffect, useState } from "react";

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
  };

  useEffect(() => {
    if (!isClicked) {
      return;
    }

    const timer = setTimeout(() => {
      setIsClicked(false);
      console.log("Rollback, state à false");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [isClicked]);

  return (
    <button
      className={
      style.Button +
      (isClicked ? style.clicked : "")
      }
      style={{ color }}
      onClick={handleClick}
      type={type}
    >
      {isClicked ? "Cliqué !" : children}
    </button>
  );
};

export default Button;