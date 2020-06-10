import React, { Component } from "react";
import axios from "axios";
import MaterialTable from "material-table";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Employees: [],
      response: {},
    };
  }

  componentDidMount() {
    axios
      .get("https://localhost:44315/api/employee")
      .then((response) => response.data)
      .then(
        (result) => {
          this.setState({
            Employees: result,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  deleteEmployee(Id) {
    const { Employees } = this.state;
    axios
      .delete("https://localhost:44315/api/employee/" + Id)
      .then((result) => {
        alert(result.data);
        this.setState({
          response: result,
          Employees: Employees.filter((Employee) => Employee.Id !== Id),
        });
      });
  }

  render() {
    const [state, setState] = React.useState({
      columns: [
        { title: "First Name", field: "FirstName" },
        { title: "Last Name", field: "LastName" },
        { title: "EmailId", field: "EmailId", type: "email" },
        { title: "Mobile", field: "Mobile" },
        { title: "Address", field: "Address" },
        { title: "Birthdate", field: "Birthdate" },
        {
          title: "Employment",
          field: "Employment",
          lookup: { 1: "Full-Time", 2: "Part-Time" },
        },
      ],
      data: ([] = this.state.Employees),
    });

    const { error, Employees } = this.state;
    if (error) {
      return <div>Error:{error.message}</div>;
    } else {
      return (
        <div>
          <MaterialTable
            title="Editable Example"
            columns={state.columns}
            data={state.data}
            editable={{
              onRowAdd: (newData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data.push(newData);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    if (oldData) {
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                      });
                    }
                  }, 600);
                }),
              onRowDelete: (oldData) =>
                new Promise((resolve) => {
                  setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return { ...prevState, data };
                    });
                  }, 600);
                }),
            }}
          />
        </div>
      );
    }
  }
}

export default Dashboard;
