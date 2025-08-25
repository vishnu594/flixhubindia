const input = document.getElementById("titleInput");
const list = document.getElementById("watchlist");

function addItem() {
  const title = input.value.trim();
  if (title === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = title;
  span.onclick = () => li.classList.toggle("watched");

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(removeBtn);

  list.appendChild(li);
  input.value = "";
}
