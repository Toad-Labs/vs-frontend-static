import request from "../api";

function getAll() {
  return request({
    url: "/data/emails.json",
    method: "GET",
  })
    .then((response) => {
      let emails = [];
      const emailList = response.mailObject;
      if (Array.isArray(emailList) && emailList?.length > 0) {
        emailList.forEach((mail) => {
          // Here we can use the response adapter to create a objects of each email.
          emails.push(mail);
        });
      }
      return emails;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
}

const EmailService = {
  getAll, //, update, delete, etc. ...
};

export default EmailService;
