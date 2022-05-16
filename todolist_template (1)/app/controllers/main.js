import Management from "./../models/manage.js";
import Tasks from "./../models/task.js";

const getId = (id) => document.getElementById(id);
const getClass = (id) => document.getElementsByClassName(id);

const manage = new Management();

// lấy danh sách việc cần làm
const getListTask = () => {
  manage
    .fetchData()
    .then((result) => {
      renderHTML(result.data, "todo");
    })
    .catch((error) => {
      console.log(error);
    });
};

// render html
const renderHTML = (data, id) => {
  let content = "";
  data.forEach((item) => {
    content += `
    <tr>
    <td id="soThuTu">${item.id}</td>
    <td id="viecCanLam">${item.viecCanLam}</td>
    <td>
    <button class="btn btn-success" onclick="checkedTask(${item.id})">Checked</button>
    <button class="btn btn-danger" onclick="deleteTask(${item.id})">Delete</button></td>
    </tr>
    `;
  });
  getId(id).innerHTML = content;
};

getListTask();
getId("two").addEventListener("click", () => {
  getListTask.data.viecCanLam.sort();
});

// xóa việc
const deleteTask = (id) => {
  manage
    .deleteTaskById(id)
    .then(() => {
      getListTask();
    })
    .catch((error) => {
      console.log(error);
    });
};

window.deleteTask = deleteTask;

// thêm việc mới

const addTask = () => {
  const viecCanLam = getId("newTask").value;
  const task = new Tasks("", viecCanLam);
  manage
    .addTaskById(task)
    .then(() => {
      getListTask();
    })
    .catch((error) => {
      console.log(error);
    });
};

window.addTask = addTask;

// đánh dấu việc đã xong

const checkedTask = () => {};

window.checkedTask = checkedTask;
