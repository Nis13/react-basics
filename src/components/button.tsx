import React from "react";

interface btnProps {
  btnText: string;
  onClick?: () => void;
  backgroundColor?: string;
  btnSX?: React.CSSProperties;
}

const Button = ({ btnText, btnSX, backgroundColor, onClick }: btnProps) => {
  const DEFAULT_BTN_STYLES = {
    margin: "0.5rem",
    padding: "0.7rem 2.5rem",
    borderRadius: "2.5rem",
    backgroungColor: "grey",
    border: "none",
  };
  return (
    <button
      style={{ ...DEFAULT_BTN_STYLES, ...btnSX, backgroundColor }}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
