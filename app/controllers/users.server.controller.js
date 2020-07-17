const config = require("../../config/config");
const studentData = require("../../students.json");

console.log(studentData);
exports.studentlist = function (req, res) {
  res.status(200).send(studentData).end();
};
