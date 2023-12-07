addEventListener("DOMContentLoaded", async () => {
  axios.defaults.baseURL = axios.defaults.baseURL =
    "http://localhost:5050/api/v1";
  let tbody = document.querySelector("tbody");
  let logout = document.querySelector("#logout");
  let form = document.querySelector("form");

  logout.addEventListener("click", () => {
    localStorage.clear();
    window.location.replace("/pages/login.html");
  });
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let name = e.target[0].value;
    let phoneNumber = e.target[1].value;
    let password = e.target[2].value;

    await axios.post(
      "/users",
      { name, phoneNumber, password },
      {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    e.target.reset();
    window.location.reload();
  });

  let { data } = await axios.get("/users", {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  });

  data.forEach((user, i) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = user.name;
    let td2 = document.createElement("td");
    td2.innerText = user.phoneNumber;
    let td3 = document.createElement("td");
    td3.innerText = user.role;
    let td = document.createElement("td");
    td.innerText = `${1 + i}. `;
    tr.append(td, td1, td3, td2);
    tbody.append(tr);
    console.log(user.name);
  });
});
