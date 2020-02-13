import React from "react";

interface Props {
  title: string;
}

const TitleTile: React.SFC<Props> = ({ title }) => {
  return (
    <div className="box">
      <p className="has-text-weight-bold is-size-6-desktop">{title}</p>
    </div>
  );
};

export default TitleTile;
