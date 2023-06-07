import React from "react";

function Section({
  heading,
  text,
  btnText,
  imgSrc,
  imgSize,
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
  hasBtn = true,
}) {
  return (
    <section className="section" style={{ backgroundColor: backgroundColor }}>
      <div style={{ backgroundColor: backgroundColor }}>
        <h3 style={{ color: headingColor }}>{heading}</h3>
        <p style={{ color: textColor }}>{text}</p>
        {hasBtn && (
          <button style={{ backgroundColor: btnBgColor, color: btnColor }}>
            {btnText}
          </button>
        )}
        <div>
          <img
            src={imgSrc}
            alt="img"
            style={{ height: imgSize, width: imgSize }}
          />
        </div>
      </div>
    </section>
  );
}

export default Section;
