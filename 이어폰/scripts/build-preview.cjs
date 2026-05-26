/**
 * npm 없이 브라우저에서 볼 수 있는 preview.html 생성.
 * 사용: node scripts/build-preview.cjs
 * (Cursor에 포함된 node.exe 경로로 실행해도 됩니다.)
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

function stripForBabelBundle(src) {
  return src
    .split("\n")
    .filter((line) => !/^\s*import\s/.test(line))
    .join("\n")
    .replace(/\bexport\s+default\s+function\s+/g, "function ")
    .replace(/\bexport\s+const\s+/g, "const ");
}

const dataFiles = [
  "src/data/menuItems.js",
  "src/data/productCards.js",
  "src/data/strengths.js",
  "src/data/reviews.js",
  "src/data/specs.js",
  "src/data/uiCopy.js",
  "src/data/brandVideo.js",
];

const dataBundle = dataFiles
  .map((rel) => stripForBabelBundle(fs.readFileSync(path.join(root, rel), "utf8")))
  .join("\n\n");

const appSrc = stripForBabelBundle(fs.readFileSync(path.join(root, "src", "App.jsx"), "utf8"));

const inlineScript = `${dataBundle}

${appSrc}

const __root = ReactDOM.createRoot(document.getElementById("root"));
__root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`;

const html = `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>UPIc — 미리보기 (npm 불필요)</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    html, body, #root { margin: 0; min-height: 100%; }
  </style>
  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel" data-presets="react">
${inlineScript.replace(/<\/script/gi, "<\\/script")}
  </script>
</body>
</html>
`;

const out = path.join(root, "preview.html");
fs.writeFileSync(out, html, "utf8");
console.log("Wrote:", out);
console.log("브라우저에서 preview.html 파일을 열면 됩니다. (최초 1회 인터넷으로 CDN 로드)");
