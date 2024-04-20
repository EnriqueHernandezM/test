function mostrarContador() {
  fetch("https://testcookies.fly.dev/api/v1", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ tokenRes: 22222 }),
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
  fetch("https://testcookies.fly.dev", {
    method: "GET",
    credentials: "include",
  })
    .then((res) => res.json())
    .then((json) => {
      let represent;
      inventarioVinateria = json.cookie;
      if (inventarioVinateria.user) {
        represent = inventarioVinateria.user;
      } else {
        represent = "nadie";
      }
      console.log(inventarioVinateria);
      let html = "";
      html += `

      <h1> vistas: ${represent} </h1>
      
      `;
      document.getElementById("counter").innerHTML = html;
    })
    .catch((e) => {
      console.log(e + "error");
    });
}
