import React from 'react';

const StudentList = ({ students, deleteStudent, setCurrentStudent }) => {
  return (
    <div>
      <h2 style={styles.subtitle}>Student List</h2>
      <ul style={styles.list}>
        {students.map((student) => (
          <li key={student._id} style={styles.listItem}>
            <div>
              <strong>Name : </strong> {student.name}, <strong>Age:</strong> {student.age}, <strong>Email:</strong> {student.email}
            </div>
            <div>
              <button onClick={() => setCurrentStudent(student)} style={styles.editButton}>
                Edit
              </button>
              <button onClick={() => deleteStudent(student._id)} style={styles.deleteButton}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline Styles
const styles = {
  subtitle: {
    marginTop: '20px',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  editButton: {
    padding: '5px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  deleteButton: {
    padding: '5px',
    backgroundColor: '#f44336',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default StudentList;
