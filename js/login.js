addEventListener("DOMContentLoaded", async () => {
  let form = document.querySelector("form");
  axios.defaults.baseURL = "http://localhost:5050/api/v1";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let phoneNumber = e.target[0].value;
    let password = e.target[1].value;

    let {
      data: { token },
    } = await axios.post("/auth", {
      phoneNumber,
      password,
    });

    localStorage.setItem("token", token);
    window.location.replace("/");
    console.log(token);
  });
});
