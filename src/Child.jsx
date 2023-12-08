import { Component } from "react";

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllData: this.props.data,
            AllEmployee: this.props.employee
        }
    }

    render() {
        return (

            <>
                <center>
                    <h1>Student Data</h1>

                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Grid</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Course</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.AllData.map((val) => {
                                    return (
                                        <tr key={val.grid}>
                                            <td>{val.grid}</td>
                                            <td>{val.name}</td>
                                            <td>{val.email}</td>
                                            <td>{val.password}</td>
                                            <td>{val.course}</td>
                                            <td>{val.city}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                    <h1>Employee Data</h1>


                </center>

                <center>
                    <table border={1} className="employee-tbl">
                        <thead>
                            <tr>
                                <th>Empid</th>
                                <th>Empname</th>
                                <th>Empemail</th>
                                <th>Empphone</th>
                                <th>Empcountry</th>
                                <th>Empstate</th>
                                <th>Empcity</th>
                                <th>Emparea</th>
                                <th>Empempde</th>
                                <th>Empsalary</th>
                                <th>Empdepartment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.AllEmployee.map((val) => {
                                    return (
                                        <tr key={val.empid}>
                                            <td>{val.empid}</td>
                                            <td>{val.empname}</td>
                                            <td>{val.empemail}</td>
                                            <td>{val.empphone}</td>
                                            <td>{val.empaddress.country}</td>
                                            <td>{val.empaddress.state}</td>
                                            <td>{val.empaddress.city}</td>
                                            <td>{val.empaddress.area}</td>
                                            <td>{val.empdeg}</td>
                                            <td>{val.empsalary}</td>
                                            <td>{val.empdepartment}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </center>
            </>



        )
    }
}

export default Child;