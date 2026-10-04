const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const searchInput = document.getElementById("searchInput");

addBtn.addEventListener("click", function () {
  const title = document.getElementById("taskTitle").value.trim();
  const desc = document.getElementById("taskDescription").value.trim();
  if (title === "") return;
  const li = document.createElement("li");
  li.textContent = title + (desc ? " - " + desc : "");
  taskList.appendChild(li);
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDescription").value = "";
});

searchInput.addEventListener("input", function () {
  const text = searchInput.value.toLowerCase();
  document.querySelectorAll("#taskList li").forEach(function (li) {
    li.style.display = li.textContent.toLowerCase().includes(text) ? "" : "none";
  });
});