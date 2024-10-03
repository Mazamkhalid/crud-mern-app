import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';

const App = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:5000/students');
    const data = await response.json();
    setStudents(data);
  };

  const addStudent = async (student) => {
    await fetch('http://localhost:5000/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    fetchStudents();
  };

  const updateStudent = async (student) => {
    await fetch(`http://localhost:5000/students/${currentStudent._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    });
    fetchStudents();
    setCurrentStudent(null);
  };

  const deleteStudent = async (id) => {
    await fetch(`http://localhost:5000/students/${id}`, {
      method: 'DELETE',
    });
    fetchStudents();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Student CRUD App</h1>
      <StudentForm
        addStudent={addStudent}
        updateStudent={updateStudent}
        currentStudent={currentStudent}
        setCurrentStudent={setCurrentStudent}
      />
      <StudentList students={students} deleteStudent={deleteStudent} setCurrentStudent={setCurrentStudent} />
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#4CAF50',
  },
};

export default App;
