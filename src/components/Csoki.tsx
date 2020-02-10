import React, { ReactElement } from "react";

interface Props {
  csoki: string;
}

export default function Csoki({ csoki }: Props): ReactElement {
  return (
    <div>
      <p>{csoki}</p>
    </div>
  );
}
