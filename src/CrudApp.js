import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudApp = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', age: '', class: '', rollNo: '' });
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch students from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students', error));
  }, []);

  // Create student
  const createStudent = () => {
    axios.post('http://localhost:5000/students', newStudent)
      .then(response => setStudents([...students, response.data]))
      .catch(error => console.error('Error creating student', error));
  };

  // Update student
  const updateStudent = (id) => {
    axios.put(`http://localhost:5000/students/${id}`, editingStudent)
      .then(response => {
        setStudents(students.map(student => student._id === id ? response.data : student));
        setEditingStudent(null);
      })
      .catch(error => console.error('Error updating student', error));
  };

  // Delete student
  const deleteStudent = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(() => setStudents(students.filter(student => student._id !== id)))
      .catch(error => console.error('Error deleting student', error));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Student Management</h1>

      {/* Form to add new student */}
      <div>
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          value={newStudent.age}
          onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Class"
          value={newStudent.class}
          onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
        />
        <input
          type="text"
          placeholder="Roll No"
          value={newStudent.rollNo}
          onChange={(e) => setNewStudent({ ...newStudent, rollNo: e.target.value })}
        />
        <button onClick={createStudent}>Add Student</button>
      </div>

      {/* Table to display student data */}
      <h2>Student List</h2>
      <table border="1" style={{ width: '100%', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Roll No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.class}</td>
              <td>{student.rollNo}</td>
              <td>
                {editingStudent && editingStudent._id === student._id ? (
                  <>
                    <input
                      type="text"
                      value={editingStudent.name}
                      onChange={(e) => setEditingStudent({ ...editingStudent, name: e.target.value })}
                    />
                    <input
                      type="text"
                      value={editingStudent.age}
                      onChange={(e) => setEditingStudent({ ...editingStudent, age: e.target.value })}
                    />
                    <input
                      type="text"
                      value={editingStudent.class}
                      onChange={(e) => setEditingStudent({ ...editingStudent, class: e.target.value })}
                    />
                    <input
                      type="text"
                      value={editingStudent.rollNo}
                      onChange={(e) => setEditingStudent({ ...editingStudent, rollNo: e.target.value })}
                    />
                    <button onClick={() => updateStudent(student._id)}>Save</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setEditingStudent(student)}>Edit</button>
                    <button onClick={() => deleteStudent(student._id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApp;
