import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

function StudentSearch(props) {
  const [studentlist, setStudentlist] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(studentlist);

  const apiUrl = "http://localhost:3000/studentlist";

  // exclude column list from filter
  const excludeColumns = ["type", "lastname"];

  // handle change event of search input
  const handleChange = (value) => {
    setSearchText(value);
    filterData(value);
  };

  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(studentlist);
    else {
      const filteredData = studentlist.filter((item) => {
        return Object.keys(item).some((key) =>
          excludeColumns.includes(key)
            ? false
            : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  };

  const StudentListChecker = async () => {
    try {
      const result = await axios(apiUrl);
      setStudentlist(result.data);
      setData(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    StudentListChecker();
  }, []);

  return (
    <div className="App">
      <div className="row" style={{ marginTop: "30px" }}>
        <div className="col-3"></div>
        <div className="col-6">
          Search:{" "}
          <input
            style={{ marginLeft: 5 }}
            type="text"
            placeholder="Type to search..."
            value={searchText}
            onChange={(e) => handleChange(e.target.value)}
          />
          <div style={{ marginTop: "30px", display: "flex" }}>
            {data.map((d, i) => {
              return (
                <div
                  key={i}
                  style={{
                    margin: "20px",
                    border: "2px solid black",
                    padding: "20px",
                  }}
                >
                  <b>type: </b>
                  {d.type}
                  <br />
                  <b>firstname: </b>
                  {d.firstname}
                  <br />
                  <b>lastname: </b>
                  {d.lastname}
                </div>
              );
            })}
            <div className="clearboth"></div>
            {data.length === 0 && <span>No records found to display!</span>}
          </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default withRouter(StudentSearch);
