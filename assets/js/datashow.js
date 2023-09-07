
const userBB = [
    
  ];

  
    userBB.push({
      studentName: req.query.studentName,
      studentIDvalue: req.query.studentIDvalue,
      Marks: req.query.Marks,
      co1: req.query.co1,
      co2: req.query.co2,
      co3: req.query.co3,
      co4: req.query.co4,
      co5: req.query.co5,
      co6: req.query.co6,
      co7: req.query.co7,
    });
 
  
  function createStudentRow(student) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.studentName}</td>
      <td>${student.studentIDvalue}</td>
      <td>${student.Marks}</td>
      <td>${student.co1}</td>
      <td>${student.co2}</td>
      <td>${student.co3}</td>
      <td>${student.co4}</td>
      <td>${student.co5}</td>
      <td>${student.co6}</td>
      <td>${student.co7}</td>
    `;
    return row;
  }
  
  
  function populateStudentTable() {
    const table = document.getElementById('student-table');
    userBB.forEach(student => {
      const row = createStudentRow(student);
      table.appendChild(row);
    });
  }
  
  window.onload = populateStudentTable;
  