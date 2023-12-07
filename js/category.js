addEventListener("DOMContentLoaded", async () => {
  let form = document.querySelector("form");
  let tbody = document.querySelector("tbody");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let uz = e.target[0].value;
    let ru = e.target[1].value;
    let image = e.target[2].value;

    await axios.post(
      "/categories",
      { uz, ru, image },
      {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    e.target.reset();
    window.location.reload();
  });
  axios.defaults.baseURL = "http://localhost:5050/api/v1";
  let { data } = await axios.get("/categories", {
    headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
  });

  data.forEach((item, index) => {
    let td1 = document.createElement("td");
    td1.innerText = index + 1;
    // let td2 = document.createElement("td");
    // td2.classList.add("w-25");
    // td2.setAttribute("src", item.image);
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td3.innerText = item.uz;
    td4.innerText = item.ru;
    let tr = document.createElement("tr");
    tr.append(td1, td3, td4);

    tbody.append(tr);
  });
  console.log(data);
});
