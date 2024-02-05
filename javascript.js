const docBody = document.querySelector("body");
const container = document.createElement("div");
docBody.appendChild(container);
container.classList.add("container");
container.style.cssText = "display: flex; flex-wrap: wrap;"

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.innerText = "";
    div.classList.add(i+1);
    div.classList.add("boxes");
    container.appendChild(div);
  }

