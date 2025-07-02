"use strict";
const isEmpty = (value) => {
  return value == null || value === void 0 || value === "";
};
const prettyPrint = (title, text, color) => {
  if (typeof text === "string") {
    console.log(
      `%c ${title} %c ${text} %c`,
      `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
      `border:1px solid ${color}; padding: 1px; border-radius: 0 2px 2px 0; color: ${color};`,
      "background:transparent"
    );
  } else {
    console.log(
      `%c ${title}`,
      `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`,
      text
    );
  }
};
const titlePrint = (title) => {
  console.log(`%c ${title}`, "font-size: 20px; font-weight: bold; color: #333;");
};
const tablePrint = (title, data, color = "#3498db") => {
  console.groupCollapsed(
    `%c ${title}`,
    `background:${color};border:1px solid ${color}; padding: 1px; border-radius: 2px 0 0 2px; color: #fff;`
  );
  console.table(data);
  console.groupEnd();
};
const imagePrint = (title, url, scale = 1) => {
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.onload = () => {
    const c = document.createElement("canvas");
    const ctx = c.getContext("2d");
    if (ctx) {
      c.width = img.width;
      c.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataUri = c.toDataURL("image/png");
      console.log(
        `%c ${title}`,
        `font-size: 1px;
         padding: ${Math.floor(img.height * scale / 2)}px ${Math.floor(img.width * scale / 2)}px;
         background-image: url(${dataUri});
         background-repeat: no-repeat;
         background-size: ${img.width * scale}px ${img.height * scale}px;
         color: transparent;
        `
      );
    }
  };
  img.src = url;
};
const prettyLog = () => {
  const info = (textOrTitle, content = "") => {
    const title2 = isEmpty(content) ? "Info" : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title2, text, "#3498db");
  };
  const error = (textOrTitle, content = "") => {
    const title2 = isEmpty(content) ? "Error" : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title2, text, "#F56C6C");
  };
  const warning = (textOrTitle, content = "") => {
    const title2 = isEmpty(content) ? "Warning" : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title2, text, "#E6A23C");
  };
  const success = (textOrTitle, content = "") => {
    const title2 = isEmpty(content) ? "Success" : textOrTitle;
    const text = isEmpty(content) ? textOrTitle : content;
    prettyPrint(title2, text, "#67C23A");
  };
  const title = (text) => {
    titlePrint(text);
  };
  const table = (title2, data) => {
    tablePrint(title2, data);
  };
  const image = (title2, imageUrl) => {
    imagePrint(title2, imageUrl);
  };
  return {
    info,
    error,
    warning,
    success,
    title,
    table,
    image
  };
};
const log = prettyLog();
exports.log = log;
//# sourceMappingURL=prettyLog.js.map
