document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#create-task-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const task = event.target["new-task-description"].value;
    const priority = event.target["priority"].value;

    buildTask(task, priority);
    event.target.reset();
  });
});

function buildTask(task, priority) {
  let li = document.createElement("li");
  let btn = document. createElement("button");

  btn.textContent = "x";

  btn.addEventListener("click", () => {
    li.remove();
  })

  li.textContent = `${task} `;
  li.appendChild(btn);

  if (priority === "high") {
    li.style.color = "red";
  } else if (priority === "medium") {
    li.style.color = "orange";
  } else {
    li.style.color = "green";
  }

  li.dataset.priority = priority;

  document.querySelector("#tasks").appendChild(li);
}


document.querySelector("#sort-asc").addEventListener("click", () => {
  sortTasks("asc");
})

document.querySelector("#sort-desc").addEventListener("click", () => {
  sortTasks("desc");
})

function sortTasks(direction) {
  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3
  };

  const ul = document.querySelector("#tasks");
  const tasks = Array.from(ul.children);

  tasks.sort((a, b) => {
    const aPriority = priorityOrder[a.dataset.priority];
    const bPriority = priorityOrder[b.dataset.priority];

    return direction === "asc" ? aPriority - bPriority : bPriority - aPriority
  });

  tasks.forEach(task => ul.appendChild(task));
}