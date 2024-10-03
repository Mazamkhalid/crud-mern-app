import React, { useState, useEffect } from 'react';

const StudentForm = ({ addStudent, updateStudent, currentStudent, setCurrentStudent }) => {
  const [student, setStudent] = useState({ name: '', age: '', email: '' });

  useEffect(() => {
    if (currentStudent) {
      setStudent(currentStudent);
    } else {
      setStudent({ name: '', age: '', email: '' });
    }
  }, [currentStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStudent) {
      updateStudent(student);
    } else {
      addStudent(student);
    }
    setStudent({ name: '', age: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
        style={styles.input}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
        style={styles.input}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>
        {currentStudent ? 'Update Student' : 'Add Student'}
      </button>
      {currentStudent && (
        <button type="button" onClick={() => setCurrentStudent(null)} style={styles.cancelButton}>
          Cancel
        </button>
      )}
    </form>
  );
};

// Inline Styles
const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '1rem',
  },
  button: {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  cancelButton: {
    padding: '10px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default StudentForm;
