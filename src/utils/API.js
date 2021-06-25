import axios from "axios";

const URL = "https://randomuser.me/api/?inc=picture,name,phone,email&results=20";

const getEmployees = {
  getEmployees: function() {
    return axios.get(URL);
  }
}

  export default getEmployees;