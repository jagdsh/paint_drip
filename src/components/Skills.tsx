import React from "react";

export const Skills: React.FC<any> = ({onChange}) => {
  return (
    <>
      <div>
        <input id='skill1' type="range" name="volume" min="0" max="200" onChange={(e) => onChange(e.target.value)} />
        <label>Skill 1</label>
      </div>
    </>
  );
};
