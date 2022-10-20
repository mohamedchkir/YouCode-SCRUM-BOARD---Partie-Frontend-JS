//call functions

printTasks(allTasks);

//printTasks function

function printTasks(AllTasks) {
  // vider tasks
  let toDo = document.querySelector("#toDo");
  toDo.innerHTML = "";
  let inProgress = document.querySelector("#inProgress");
  inProgress.innerHTML = "";
  let done = document.querySelector("#done");
  done.innerHTML = "";

  let number = 1;
  let taskcount = 0;

  let todoCount = 0;
  let inprogressCount = 0;
  let doneCount = 0;

  AllTasks.forEach((task) => {
    // AFFICHER TASKS
    if (task.status === "To Do") {
      toDo.innerHTML += ` <button class="bg-white w-100 d-flex border-0 pb-2">
                        <div class="px-2 text-start mt-3">
                          <i class="text-start bi bi-question-circle text-success fa-lg mt-4"></i>
                        </div>
                        <div class="text-start mt-2">
                          <div class="h6">${task.title}</div>
                          <div class="text-start">
                            <div>#${number} created ${task.date}</div>
                            <div
                              title="${task.description}" class="text-truncate" style="max-width: 16rem;">
                              ${task.description}
                            </div>
                          </div>
                          <div class="">
                            <span class="btn btn-primary" style="font-size: 0.6rem; padding: 2px 6px">${task.priority}</span>
                            <span class="btn btn-gray-400 text-dark" style="font-size: 0.6rem; padding: 2px 6px">${task.type}</span>
                          </div>
                        </div>
                      </button>`;
      taskcount++;
      todoCount++;
    } else if (task.status === "In Progress") {
      inProgress.innerHTML += `
                      <button class="bg-white w-100 d-flex border-0 pb-2">
                      <div class="px-2 text-start mt-3">
                          <i class="text-start fa fa-circle-notch text-success fa-lg"></i>
                        </div>
                      <div class="text-start mt-2">
                        <div class="h6">${task.title}</div>
                        <div class="text-start">
                          <div># ${number} created ${task.date}</div>
                          <div
                          title="${task.description}" class="text-truncate" style="max-width: 16rem;">
                          ${task.description}
                        </div>
                        </div>
                        <div class="">
                          <span class="btn btn-primary" style="font-size: 0.6rem; padding: 2px 6px">${task.priority}</span>
                          <span class="btn btn-gray-400 text-dark" style="font-size: 0.6rem; padding: 2px 6px">${task.type}</span>
                        </div>
                      </div>
                    </button>`;
      taskcount++;
      inprogressCount++;
    } else if (task.status === "Done") {
      done.innerHTML += ` 
              <button class="bg-white w-100 d-flex border-0 pb-2">
                      <div class="px-2 mt-3 text-start">
                      <i class="text-start far fa-check-circle text-success fa-lg"></i>
                    </div>
                      <div class="text-start mt-2">
                        <div class="h6">${task.title}</div>
                        <div class="text-start">
                          <div># ${number} created ${task.date}</div>
                          <div
                          title="${task.description}" class="text-truncate" style="max-width: 16rem;">
                          ${task.description}
                        </div>
                        </div>
                        <div class="">
                          <span class="btn btn-primary" style="font-size: 0.6rem; padding: 2px 6px">${task.priority}</span>
                          <span class="btn btn-gray-400 text-dark" style="font-size: 0.6rem; padding: 2px 6px">${task.type}</span>
                        </div>
                      </div>
                    </button>`;
      taskcount++;
      doneCount++;
    }
    number++;
  });

  document.querySelector("#todoCount").innerHTML = todoCount;
  // let num = document.querySelector("#todoCount")
  // num.innerHTML=todoCount;
  document.querySelector("#inprogressCount").innerHTML = inprogressCount;
  document.querySelector("#doneCount").innerHTML = doneCount;
}
var form = document.getElementById("form");
form.addEventListener("submit", (M) => {
  // to stop reload fo page
  M.preventDefault();
  // get all info from form

  var title = document.getElementById("title").value;
  var type = document.querySelector('input[name="type"]:checked').value;
  var priority = document.getElementById("priority").value;
  var option = document.getElementById("status").value;
  var date = document.getElementById("date").value;
  var description = document.getElementById("description").value;

  // truncate form
  document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("description").value = "";

  // create object of task
  var task = {
    title: title,
    type: type,
    priority: priority,
    status: option,
    date: date,
    description: description,
  };

  console.log(task);
  // add task to array of tasks
  allTasks.push(task);
  // print all tasks
  printTasks(allTasks);
});
