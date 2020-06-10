import React, { Component } from "react";
import ApiService from "../service/ApiService";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from "@material-ui/icons/Delete";
import Typography from "@material-ui/core/Typography";

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      message: null,
    };
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.reloadEmployeeList = this.reloadEmployeeList.bind(this);
  }

  componentDidMount() {
    this.reloadEmployeeList();
  }

  reloadEmployeeList() {
    ApiService.fetchEmployees().then((res) => {
      console.log(res);
      this.setState({ employees: res.data.data });
      console.log("Set State Emplpoyees",this.state);
    });
  }

  deleteEmployee(Id) {
    ApiService.deleteEmployee(Id).then((res) => {
      this.setState({ message: "Employee deleted successfully." });
      this.setState({
        employees: this.state.employees.filter(
          (employee) => employee.id !== Id
        ),
      });
    });
  }

  editEmployee(id) {
    window.localStorage.setItem("Id", id);
    this.props.history.push("/EditEmployee");
  }

  addEmployee() {
    window.localStorage.removeItem("Id");
    this.props.history.push("/AddEmployee");
    console.log("Props ",this.props);
    console.log("Props history",this.props.history);
  }

  render() {
    return (
      <div>
        <Typography variant="h4" style={style}>
          Employee Details
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.addEmployee()}
        >
          Add Employee
        </Button>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>FirstName</TableCell>
              <TableCell align="center">LastName</TableCell>
              <TableCell align="center">EmailId</TableCell>
              <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Birthdate</TableCell>
              <TableCell align="center">Employment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.employees.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.emailId}</TableCell>
                <TableCell align="center">{row.mobile}</TableCell>
                <TableCell align="center">{row.address}</TableCell>
                <TableCell align="center">{row.birthDate}</TableCell>
                <TableCell align="center">{row.employment}</TableCell>
                <TableCell
                  align="right"
                  onClick={() => this.editEmployee(row.id)}
                >
                  <CreateIcon />
                </TableCell>
                <TableCell
                  align="right"
                  onClick={() => this.deleteEmployee(row.id)}
                >
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const style = {
  display: "flex",
  justifyContent: "left",
};

export default EmployeeList;
