import React from "react";

export const Toolbar: React.FC<any> = ({
  handleDownload,
  dateUrl,
  handleClear,
  setCurrentSaturation,
  setCurrentLightness,
}) => {
  return (
    <aside>
      <div>
        <div className="tool-section tool-section--lrg">
          <div className="tool-section">
            <label>
              <small>Saturation</small>
            </label>
            <input
              defaultValue="100"
              type="range"
              min="0"
              max="100"
              onChange={setCurrentSaturation}
            />
          </div>
          <label>
            <small>Lightness</small>
          </label>
          <input
            defaultValue="50"
            type="range"
            min="0"
            max="100"
            onChange={setCurrentLightness}
          />
        </div>
      </div>
      <div>
        <a
          className="btn btn--main btn--block"
          download="image.png"
          onClick={handleDownload}
          href={dateUrl}
        >
          Save Image
        </a>
        <button className="btn btn--block" onClick={handleClear}>
          Clear
        </button>
      </div>
    </aside>
  );
};
