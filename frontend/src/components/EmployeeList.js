import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetch("https://employesystem-6.onrender.com/api/employee")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);
  const deleteEmployee = (id) => {
    fetch(`https://employesystem-6.onrender.com/api/employee/${id}`, {
      method: "DELETE",
    }).then(() => setEmployee(employee.filter((emp) => emp._id !== id)));
  };

  return (
    <div className="container">
      <h2>Employees</h2>
      <Link to="/add">Add Employee</Link>
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Positon</th>
        </thead>
      </table>
      {
        <ul>
          {employee.map((emp) => (
            <tr key={emp._id}>
              <td> {emp.name}</td>
              <td>{emp.email}</td>
              
              <td> {emp.salary}</td>
              <td>{emp.position}</td>

              <Link to={`/edit/${emp._id}`}>
                <button className="edit">Edit</button>
              </Link>

              <button
                className="delete"
                onClick={() => deleteEmployee(emp._id)}
              >
                Delete
              </button>
            </tr>
          ))}
        </ul>
      }
    </div>
  );
};

export default EmployeeList;
