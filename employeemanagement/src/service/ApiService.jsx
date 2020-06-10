import axios from "axios";

const Employee_API_BASE_URL = "https://localhost:44315/api/employee";

class ApiService {
  fetchEmployees() {
    return axios.get(Employee_API_BASE_URL);
  }

  fetchEmployeeById(Id) {
    return axios.get(Employee_API_BASE_URL + "/" + Id);
  }

  deleteEmployee(Id) {
    return axios.delete(Employee_API_BASE_URL + "/" + Id);
  }

  addEmployee(employee) {
    return axios.post("" + Employee_API_BASE_URL, employee);
  }

  editEmployee(employee) {
    return axios.put(Employee_API_BASE_URL + "/" + employee.id, employee);
  }

  loginUser(user) {
    console.log("Data", user);
    return axios.post(Employee_API_BASE_URL + "/login", user);
  }

  registerUser(user) {
    console.log("Data", user);
    return axios.post(Employee_API_BASE_URL + "/registeruser", user);
  }
}

export default new ApiService();
