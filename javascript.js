const docBody = document.querySelector("body");
const container = document.createElement("div");
docBody.appendChild(container);
container.classList.add("container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.innerText = "";
    div.classList.add(i+1);
    div.classList.add("boxes");
    container.appendChild(div);
  }

const div = document.querySelector("div");


div.addEventListener(
  "mouseover",
  (event) => {
    // highlight the mouseover target
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;
  },
  false,
);

const btn = document.querySelector("button")
btn.addEventListener("click", () => {
  let gridSize = prompt("What size grid do you want?")
  container.innerHTML = "";
  for (let i = 0; i < (gridSize*gridSize) ; i++) {
    const div = document.createElement("div");
    div.innerText = "";
    div.classList.add(i+1);
    div.classList.add("boxes");
    container.appendChild(div);
    div.style.cssText="flex: 1 0 "+(100/gridSize)+"%;"
  }
}
)