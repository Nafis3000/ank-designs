// const sendgrid = require("@sendgrid/mail");
// require("dotenv").config();

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

//  async function sendEmail(req, res){
//     const { name, email, message } = req.body;
//     const content = {
//       to: "ankdixit097@gmail.com",
//       from: "mailbot8008S@gmail.com",
//       subject: `Portfolio Website: New message from ${name}`,
//       text: message,
//       html: `<p>Email: ${email}</p>
//         <p>Message: ${message}</p>`,
//     };

//     try {
//         await sendgrid.send(content);
//         return res.status(200).end();
//     }
//     catch (error) {
//         console.log(error);
//         return res.status(400).end();
//     }
// };


// export default sendEmail;

import React from 'react'

function sendgrid() {
  return (
    <div>sendgrid</div>
  )
}

export default sendgrid