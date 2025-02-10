import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    salary: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/employee/${id}`)
        .then((res) => res.json())
        .then((data) => setFormData(data));
    }
  }, [id]);
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    await fetch(`http://localhost:5000/api/employee/${id || ""}`, {
      method:id ? "put" : "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    }).then(() => navigate("/"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter the Name"
        required
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter the Email"
        required
      />
      <input
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Enter the Position"
        required
      />
      <input
        name="salary"
        value={formData.salary}
        onChange={handleChange}
        placeholder="Enter the Salary"
        required
      />
      <button className="btn"
      type="submit">{id ? "Update" : "Add"}Employee</button>
    </form>
  );
};

export default EmployeeForm;
