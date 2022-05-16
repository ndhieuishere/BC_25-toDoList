export default class Management {
  fetchData() {
    return axios({
      url: "https://6269c19bf2c0cdabac128cc5.mockapi.io/api/toDoList",
      method: "GET",
    });
  }
  deleteTaskById(id) {
    return axios({
      url: `https://6269c19bf2c0cdabac128cc5.mockapi.io/api/toDoList/${id}`,
      method: "DELETE",
    });
  }
  addTaskById(task) {
    return axios({
        url:"https://6269c19bf2c0cdabac128cc5.mockapi.io/api/toDoList",
        method:"POST",
        data:task
    });
  }
  checkedTaskById(task){
      return axios ({
        url: `https://6269c19bf2c0cdabac128cc5.mockapi.io/api/toDoList/${task.id}`,
        method:"PUT",
        data:task
      })
  }
}
