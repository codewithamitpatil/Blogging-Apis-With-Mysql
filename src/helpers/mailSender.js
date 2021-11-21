
// for sending mails

const nodemailer   = require('nodemailer');

// importing config
const { nodemailerOptions ,adminMail } = require('../config');


// module exports
module.exports = SendMail = async(To,Subject,title,description,createdAt)=>{

   const transport = nodemailer.createTransport(nodemailerOptions);


 let template = `
 
 <!DOCTYPE html>
<html>
<head>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  color:grey;
}
h2{
  color:grey;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
</head>
<body>

<h2>Your Post Is Created And Send To All Authores SuccessFully</h2>

<table>
  <tr>
    <th>Title</th>
    <th>Description</th>
      <th>Created At</th>
  <tr>
    <td>${title}</td>
    <td>${description}</td>
    <td>${createdAt}</td>
  </tr>
 
</table>

</body>
</html>


 `;


    transport.sendMail({
        from: adminMail,
        to: To,
        subject:Subject,
        html:template
    });
  return 'ok';
}

