import axios from "axios";

const employeeData = {
  getEmployees: function () {
    return axios
      .get("https//randomuser.me/api/?inc=name,email,phone,picture&results=20")
      .then((res) => {
        const employees = res.data;
        return employees.map((employee) => {
          return {
            first: employee.results.name.first,
            last: employee.results.name.last,
            email: employee.results.email,
            picture: employee.picture.medium,
            phone: employee.results.phone,
          };
        });
      });
  },
};

export default employeeData;
