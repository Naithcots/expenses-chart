const container = document.querySelector(".graph-container");
import Data from "./data.json";

const amounts = Data.map((e) => e.amount);
const maxAmount = Math.max(...amounts);

const items = container.children;
[...items].forEach((item) => {
  const graph = item.querySelector(".graph");
  const tooltip = item.querySelector(".hover");
  const day = item.querySelector(".day").textContent;

  const data = Data.find((e) => e.day === day);

  tooltip.textContent = "$" + data.amount;

  if (data.amount === maxAmount) {
    graph.classList.add("cyan");
  }

  const ratio = (data.amount / maxAmount).toPrecision(2);
  const newHeight = ratio * 150 + "px";
  setTimeout(() => {
    graph.style.height = newHeight;
  }, 250);
});
