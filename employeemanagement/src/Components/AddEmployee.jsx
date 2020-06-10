import React, { Component } from "react";
import ApiService from "../service/ApiService";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
      mobile: "",
      address: "",
      birthdate: "",
      employment: "",
      message: null,
    };
    this.saveEmployee = this.saveEmployee.bind(this);
  }

  saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      mobile: this.state.mobile,
      address: this.state.address,
      birthdate: this.state.birthdate,
      employment: this.state.employment,
    };
    ApiService.addEmployee(employee).then((res) => {
      this.setState({ message: "Employee added successfully." });
      this.props.history.push("/EmployeeList");
    });
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <Typography variant="h4" style={style}>
          Add Employee
        </Typography>
        <form style={formContainer}>
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
const formContainer = {
  display: "flex",
  flexFlow: "row wrap",
};

const style = {
  display: "flex",
  justifyContent: "center",
};

export default AddEmployee;
