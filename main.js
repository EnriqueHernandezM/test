function mostrarContador() {
  fetch("https://testcookies.fly.dev/api/v1", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Host": "https://testcookies.fly.dev",
    },
    body: JSON.stringify({ name: "Enrique", password: 123 }),
  })
    .then((res) => res.json())
    .then((json) => {
      inventarioVinateria = json;
      console.log(inventarioVinateria);
      let represent = inventarioVinateria;
      let html = "";
      html += `

      <h1> vistas: ${represent} </h1>
      
      `;
      document.getElementById("counter").innerHTML = html;
    })
    .catch((e) => {
      console.log(e);
    });
}
function verUser() {
  fetch("https://testcookies.fly.dev/see", {
    //method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Host": "https://testcookies.fly.dev",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      let represent;
      console.log(json);
      inventarioVinateria = json.user;
      if (inventarioVinateria) {
        represent = inventarioVinateria.user;
      } else {
        represent = "nadie";
      }

      let html = "";
      html += `

      <h1> vistas: ${represent} </h1>
      
      `;
      document.getElementById("counter").innerHTML = html;
    })
    .catch((e) => {
      console.log(e);
    });
}
