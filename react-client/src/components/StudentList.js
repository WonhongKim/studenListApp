import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";

function StudentList(props) {
  const [studentlist, setStudentlist] = useState([]);
  const apiUrl = "http://localhost:3000/studentlist";

  const StudentListChecker = async () => {
    try {
      const result = await axios(apiUrl);
      setStudentlist(result.data);
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    StudentListChecker();
  }, []);

  return (
    <div className="App">
      Student list page
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col-4"></div>
        <div className="col-4">
          <ListGroup>
            {studentlist.map((item, idx) => (
              <ListGroup.Item key={idx}>
                Student :{item.firstname}
                {item.lastname}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default withRouter(StudentList);
