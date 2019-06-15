if (localStorage.getItem("token")!==null) {
  // redirect to dashboard
  window.location.href = "/dashboard.html";
}

function register() {
  let email = document.getElementById("registerEmail").value;
  let name = document.getElementById("registerName").value;
  let password = document.getElementById("registerPassword").value;

  let data = {
    email: email,
    name: name,
    password: password
  };
  axios.post(url + "/register", data)
    .then(function (res) {
    console.log(res.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let data = {
    email: email,
    password: password
  };
  axios.post(url + "/login", data)
    .then(function (res) {
    console.log(res.data);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard.html";
  })
  .catch(function (error) {
    console.log(error);
  });
}
