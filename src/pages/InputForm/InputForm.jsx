import React, { useState } from 'react';
import axios from 'axios';
import './InputForm.css';

const UserDataForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    dateOfBirth: '',
    email: '',
    contactPhone: '',
    educationLevel: '',
    role: '',
    skill: '',
    projects: '',
    ideal: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('Submitting...');
    try {
      const response = await axios.post('http://localhost:4000/submit-form', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
      setSubmitStatus('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('Error submitting form. Please try again.');
    }
  };

  return (
    <form className="user-data-form" onSubmit={handleSubmit}>
      <h2>User Data Form</h2>
      
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="contactPhone">Contact Phone Number:</label>
        <input type="tel" id="contactPhone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>Education Level:</label>
        <div className="radio-group">
          <label>
            <input type="radio" name="educationLevel" value="highschool" checked={formData.educationLevel === 'highschool'} onChange={handleChange} /> High School
          </label>
          <label>
            <input type="radio" name="educationLevel" value="campus" checked={formData.educationLevel === 'campus'} onChange={handleChange} /> Campus
          </label>
          <label>
            <input type="radio" name="educationLevel" value="bootcamp" checked={formData.educationLevel === 'bootcamp'} onChange={handleChange} /> Bootcamp
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="role">Role:</label>
        <select id="role" name="role" value={formData.role} onChange={handleChange} required>
          <option value="">Select a role</option>
          <option value="Data Scientist">Data Scientist</option>
          <option value="Front-End Developer">Front-End Developer</option>
          <option value="Machine Learning Engineer">Machine Learning Engineer</option>
          <option value="Devops Engineer">Devops Engineer</option>
          <option value="Cloud Engineer">Cloud Engineer</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="skill">Skill:</label>
        <input type="text" id="skill" name="skill" value={formData.skill} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="projects">Projects:</label>
        <textarea id="projects" name="projects" value={formData.projects} onChange={handleChange} required></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="ideal">Ideal:</label>
        <textarea id="ideal" name="ideal" value={formData.ideal} onChange={handleChange} required></textarea>
      </div>

      <button type="submit">Submit</button>
      {submitStatus && <p className="submit-status">{submitStatus}</p>}
    </form>
  );
};

export default UserDataForm;