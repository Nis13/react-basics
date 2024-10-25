import React from "react";

interface btnProps {
  btnText: string;
  btnSX?: React.CSSProperties;
}

const Button = ({ btnText, btnSX }: btnProps) => {
  const DEFAULT_BTN_STYLES = {
    margin: "0.5rem",
    padding: "0.7rem 2.5rem",
    borderRadius: "2.5rem",
    backgroungColor: "grey",
    border: "none",
  };
  return <button style={{ ...DEFAULT_BTN_STYLES, ...btnSX }}>{btnText}</button>;
};

export default Button;
