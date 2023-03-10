window.localStorage;

window.addEventListener("load", () => {
  const form = document.querySelector("#newform");
  const input = document.querySelector("#newinput");
  const listEl = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const tasked = input.value;

    if (!tasked) {
      alert("please fill out the task");
      return;
    }

    const taskEl = document.createElement("div");
    taskEl.classList.add("task");

    const taskContentEl = document.createElement("div");
    taskContentEl.classList.add("content");

    taskEl.appendChild(taskContentEl);

    const taskInputEl = document.createElement("input");
    taskInputEl.classList.add("text");
    taskInputEl.type = "text";
    taskInputEl.value = tasked;
    taskInputEl.setAttribute("readonly", "readonly");

    taskContentEl.appendChild(taskInputEl);

    const taskActionsel = document.createElement("div");
    taskActionsel.classList.add("actions");

    const taskEditEl = document.createElement("button");
    taskEditEl.classList.add("edit");
    taskEditEl.innerHTML = "Edit";

    const taskDeleteEl = document.createElement("button");
    taskDeleteEl.classList.add("delete");
    taskDeleteEl.innerHTML = "Delete";

    taskActionsel.appendChild(taskEditEl);
    taskActionsel.appendChild(taskDeleteEl);

    taskEl.appendChild(taskActionsel);

    listEl.appendChild(taskEl);

    input.value = "";

    taskEditEl.addEventListener("click", () => {
      if (taskEditEl.innerText.toLowerCase() == "edit") {
        taskInputEl.removeAttribute("readonly");
        taskInputEl.focus();
        taskEditEl.innerText = "save";
      } else {
        taskInputEl.setAttribute("readonly", "readonly");
        taskEditEl.innerText = "Edit";
      }
    });

    taskDeleteEl.addEventListener("click", () => {
      listEl.removeChild(taskEl);
    });
  });
});
