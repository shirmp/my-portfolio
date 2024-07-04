function sendEmail() {
  const inputName = document.getElementById("name");
  const inputEmail = document.getElementById("email");
  const inputSubject = document.getElementById("subject");
  const inputMessage = document.getElementById("message");

  const userName = inputName.value;
  const userEmail = inputEmail.value;
  const userSubject = inputSubject.value;
  const userMessage = inputMessage.value;

  if (
    userName.trim() !== "" &&
    userEmail.trim() != "" &&
    userSubject.trim() !== "" &&
    userMessage.trim() !== ""
  ) {
    let params = {
      from_name: userName,
      from_email: userEmail,
      subject: userSubject,
      message: userMessage,
    };

    emailjs
      .send("service_airn8gh", "template_go6prpq", params)
      .then((result) => {
        if (result.status === 200) {
          alert("Email sent");
          inputName.value = "";
          inputEmail.value = "";
          inputSubject.value = "";
          inputMessage.value = "";
        }
      });
  } else alert("All files are required");
}
