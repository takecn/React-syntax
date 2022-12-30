import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, // jsはプロパティ名と変数名が同じとき(color: color)は記述を省略できる．
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
