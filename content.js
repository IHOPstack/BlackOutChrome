const defaultBackgrounds = document.createElement(style);
defaultBackgrounds.innerhtml = `
html, body {
  background-color: #000000;
  color: #eaeaea;
}`;

document.head.appendChild(defaultBackgrounds);