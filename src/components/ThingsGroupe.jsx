import React from "react";
import Thing from "./Thing";

export default function ThingsGroupe({ things }) {
  return (
    <div className="things">
      {things.map((thing) => {
        return <Thing key={thing.id} thing={thing} />;
      })}
    </div>
  );
}
