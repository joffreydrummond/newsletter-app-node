// import Axios from "axios";

//when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  //this looks for the form submission event
  document.querySelector("form").addEventListener("submit", event => {
    event.stopPropagation();
    event.preventDefault(); //stops page from auto reloading page

    //select form data from DOM
    const name = document.querySelectorAll('form input[name="name"]')[0].value;
    const email = document.querySelectorAll('form input[name="email"]')[0]
      .value;

    console.log(name, email);

    axios.post("/form", {
      name,
      email
    });
  });
});
