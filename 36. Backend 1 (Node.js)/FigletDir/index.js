var figlet = require("figlet");

figlet("Suvajit Sadhukhan.", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});