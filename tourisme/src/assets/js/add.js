
// Requiring fs module
const fs = require("fs");
function AddLieu(newData) {
  // Storing the JSON format data in myObject
  var data = fs.readFileSync("assets/js/add.js");
  var myObject = JSON.parse(data);

  // Adding the new data to our object
  myObject.push(newData);

  // Writing to our JSON file
  var newData2 = JSON.stringify(myObject);
  fs.writeFile("assets/js/add.js", newData2, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  });
}
