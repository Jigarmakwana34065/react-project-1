import { Component } from "react";
import Child from "./Child";

class Parent extends Component {

    constructor() {
        super();

        this.data = [
            {
                grid: 1,
                name: 'kishan',
                email: 'kishan@gmail.com',
                password: 'kishan@123',
                course: ["html", "css", "bootstrap", "js"],
                city: "surat"
            },
            {
                grid: 2,
                name: 'jay',
                email: 'jay@gmail.com',
                password: 'kishan@123',
                course: ["photosho", "figma", "illustrator", "adobe xd"],
                city: "rajkot"
            },
            {
                grid: 3,
                name: 'ajay',
                email: 'ajay@gmail.com',
                password: 'ajay@123',
                course: ["html", "css", "bootstrap", "nodejs"],
                city: "amareli"
            },
            {
                grid: 4,
                name: 'nisha',
                email: 'nisha@gmail.com',
                password: 'nisha@123',
                course: ["html", "css", "bootstrap", "python"],
                city: "vadodara"
            }
        ]

        this.employee = [
            {
                empid: 1,
                empname: "abc",
                empemail: "abc@gmail.com",
                empphone: 12345,
                empaddress: {
                    country: "india",
                    state: "gujarat",
                    city: "surat",
                    area: "motavarachha"
                },
                empdeg: "junior",
                empsalary: 23000,
                empdepartment: "ui/ux"
            },
            {
                empid: 2,
                empname: "def",
                empemail: "def@gmail.com",
                empphone: 2121,
                empaddress: {
                    country: "india",
                    state: "rajasthan",
                    city: "jaypur",
                    area: "jaypurabc"
                },
                empdeg: "junior",
                empsalary: 21000,
                empdepartment: "web design"
            },
            {
                empid: 3,
                empname: "ghi",
                empemail: "ghi@gmail.com",
                empphone: 2212,
                empaddress: {
                    country: "india",
                    state: "maharashtra",
                    city: "pune",
                    area: "abcpune"
                },
                empdeg: "seniour",
                empsalary: 65000,
                empdepartment: "backend developer"
            },
            {
                empid: 4,
                empname: "jkl",
                empemail: "jkl@gmail.com",
                empphone: 212112,
                empaddress: {
                    country: "india",
                    state: "karnatak",
                    city: "bengaluru",
                    area: "kgf"
                },
                empdeg: "tl",
                empsalary: 150000,
                empdepartment: "frontend developer"
            }
        ]
    }

    render() {
        return (
            <>
                <Child
                    data={this.data}
                    employee={this.employee}
                />
            </>

        )
    }
}

export default Parent;