addEventListener("DOMContentLoaded", () => {
  let logout = document.querySelector("#logout");

  logout.addEventListener("click", () => {
    localStorage.clear();
    window.location.replace("/pages/login.html");
  });
});
