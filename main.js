function mostrarContador() {
  fetch("https://testcookies.fly.dev/", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => {
      inventarioVinateria = json;
      console.log(inventarioVinateria);
      let html = "";
      html += `

      <h1> vistas: ${inventarioVinateria.vistas} </h1>
      
      `;
      document.getElementById("counter").innerHTML = html;
    })
    .catch((e) => {
      console.log(e + "error");
    });
}
