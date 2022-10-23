

//call functions

printTasks();

//printTasks function

function printTasks() {
  // vider tasks
  let toDo = document.querySelector("#toDo");
  toDo.innerHTML = "";
  let inProgress = document.querySelector("#inProgress");
  inProgress.innerHTML = "";
  let done = document.querySelector("#done");
  done.innerHTML = "";

  let number = 0;

  let todoCount = 0;
  let inprogressCount = 0;
  let doneCount = 0;

  
  allTasks.forEach((task) => {
    let text = ` <button class=" Task bg-white w-100 d-flex border-0 pb-2">
      <div class="px-2 text-start mt-3 ">
            ${task.status == "To Do" ? '<i class="text-start bi bi-question-circle text-success fa-lg mt-4"></i>' : task.status == "In Progress" ? '<i class="text-start fa fa-circle-notch text-success fa-lg"></i>' : '<i class="text-start far fa-check-circle text-success fa-lg"></i>'}
        </div>
      <div class="text-start mt-2">
        <div class="h6">${task.title}</div>
        <div class="text-start">
          <div># ${number+1} created ${task.date}</div>
          <div
          title="${task.description}" class="text-truncate" style="max-width: 16rem;">
          ${task.description}
        </div>
        </div>
        <div class="">
          <span class="btn btn-primary" style="font-size: 0.6rem; padding: 2px 6px">${task.priority}</span>
          <span class="btn btn-gray-400 text-dark" style="font-size: 0.6rem; padding: 2px 6px">${task.type}</span>
          <i class="icon fa-regular fa-trash-can" onclick="deleteTask(${number})"></i>
          <i class=" icon1 fa-solid fa-pen-to-square" onclick="editTask(${number})"></i> 
            
          </div>
      </div>
    </button>`;

    if (task.status === "To Do") {
      toDo.innerHTML += text;
      todoCount++;
    } else if (task.status === "In Progress") {
      inProgress.innerHTML += text;
      inprogressCount++;
    } else if (task.status === "Done") {
      done.innerHTML += text;
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
let add_task = document.getElementById("add_task");
add_task.onclick = ()=>{
  document.getElementById("button_update").style.display = "none";
  document.getElementById("button_save").style.display = "block";
  document.getElementById("form").reset();
  addTask();
};

function addTask(){
  let button_save = document.getElementById("button_save");
  

  button_save.onclick = () => {
  
    // get all info from form
    let title = document.getElementById("title").value;
    let type = document.querySelector('input[name="type"]:checked').value;
    let priority = document.getElementById("priority").value;
    let option = document.getElementById("status").value;
    let date = document.getElementById("date").value;
    let description = document.getElementById("description").value;
  
    // create object of task
    let task = {
      title: title,
      type: type,
      priority: priority,
      status: option,
      date: date,
      description: description,
    };
  
    // add task to array of tasks
    allTasks.push(task);
  
    // print all tasks
    printTasks();
    //cacher modal
    $("#modal-task").modal("hide");
  };
  
}

function deleteTask(index) {
    allTasks.splice(index, 1);
    printTasks();
}


function editTask(index){
    console.log(index);
    console.log(allTasks[index]);
    $("#modal-task").modal("show");
    document.getElementById("button_save").style.display = "none";
    document.getElementById("button_update").style.display = "block";
  
let title = document.getElementById("title");
let type_feature = document.getElementById('feature');
let type_bug = document.getElementById('bug');
let priority = document.getElementById("priority");
let status = document.getElementById("status");
let date = document.getElementById("date");
let description = document.getElementById("description");


title.value = allTasks[index].title;
//condition pour selectionner la boutton checker 
if(allTasks[index].type == "Feature"){
  type_feature.checked = true;
}else{
  type_bug.checked = true;
}
priority.value = allTasks[index].priority;
status.value = allTasks[index].status;
date.value = allTasks[index].date;
description.value = allTasks[index].description;



document.getElementById("button_update").onclick = ()=>{
  updateTask(index);
};

  
}

function updateTask(index){
  let title = document.getElementById("title").value;
    let type = document.querySelector('input[name="type"]:checked').value;
    let priority = document.getElementById("priority").value;
    let option = document.getElementById("status").value;
    let date = document.getElementById("date").value;
    let description = document.getElementById("description").value;
  
    // create object of task
    let task = {
      title: title,
      type: type,
      priority: priority,
      status: option,
      date: date,
      description: description,
    };

    allTasks[index] = task;
    printTasks();
    $("#modal-task").modal("hide");
}
