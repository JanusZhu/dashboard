const root = document.querySelector(":root");
let brightTheme = true;
let fontSize = 25;
function invertTheme() {
  if (brightTheme === true) {
    brightTheme = !brightTheme;
    root.style.setProperty("--color-1", "#d4d4d8");
    root.style.setProperty("--color-2", "#71717a");
    root.style.setProperty("--color-3", "#27272a");
    root.style.setProperty("--color-0", "#f4f4f5");
  } else {
    brightTheme = !brightTheme;
    root.style.setProperty("--color-1", "#e0f2fe");
    root.style.setProperty("--color-2", "#7dd3fc");
    root.style.setProperty("--color-3", "#0369a1");
    root.style.setProperty("--color-0", "#ff8400");
  }
}

function increaseFont() {
  if (fontSize <= 27) {
    fontSize += 2;
    root.style.setProperty("--default-size", `${fontSize}px`);
  }
}

function decreaseFont() {
  if (fontSize >= 10) {
    fontSize -= 2;
    root.style.setProperty("--default-size", `${fontSize}px`);
  }
}
