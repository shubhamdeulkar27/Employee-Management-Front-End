import React, { Component } from "react";
import ApiService from "../service/ApiService";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      mobile: this.state.mobile,
      address: this.state.address,
      birthdate: this.state.birthdate,
      employment: this.state.employment,
    };
    this.saveEmplyoee = this.saveEmployee.bind(this);
    this.loadEmployee = this.loadEmployee.bind(this);
  }

  componentDidMount() {
    this.loadEmployee();
  }

  loadEmployee() {
    ApiService.fetchEmployeeById(window.localStorage.getItem("Id")).then(
      (res) => {
        let employee = res.data.result;
        this.setState({
          id: employee.id,
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailId: employee.emailId,
          mobile: employee.mobile,
          address: employee.address,
          birthdate: employee.birthdate,
          employment: employee.employment,
        });
      }
    );
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      mobile: this.state.mobile,
      address: this.state.address,
      birthdate: this.state.birthdate,
      employment: this.state.employment,
    };
    ApiService.editEmployee(employee).then((res) => {
      this.setState({ message: "Employee added successfully." });
      this.props.history.push("/employees");
    });
  };

  render() {
    return (
      <div>
        <Typography variant="h4" style={style}>
          Edit Employee
        </Typography>
        <form>
          <TextField
            placeholder="First Name"
            fullWidth
            margin="normal"
            name="firstName"
            value={this.state.firstName}
            onChange={this.onChange}
          />

          <TextField
            placeholder="Last name"
            fullWidth
            margin="normal"
            name="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
          />

          <TextField
            type="email"
            placeholder="EmailId"
            fullWidth
            margin="normal"
            name="emailId"
            value={this.state.emailId}
            onChange={this.onChange}
          />

          <TextField
            type="number"
            placeholder="Mobile"
            fullWidth
            margin="normal"
            name="mobile"
            value={this.state.mobile}
            onChange={this.onChange}
          />

          <TextField
            placeholder="Address"
            fullWidth
            margin="normal"
            name="address"
            value={this.state.address}
            onChange={this.onChange}
          />

          <TextField
            placeholder="Birthdate"
            fullWidth
            margin="normal"
            name="birthdate"
            value={this.state.birthdate}
            onChange={this.onChange}
          />

          <TextField
            placeholder="Employment"
            fullWidth
            margin="normal"
            name="employment"
            value={this.state.employment}
            onChange={this.onChange}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={this.saveEmployee}
          >
            Save
          </Button>
        </form>
      </div>
    );
  }
}

const style = {
  display: "flex",
  justifyContent: "center",
};

export default EditEmployee;
