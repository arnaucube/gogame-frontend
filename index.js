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
      document.getElementById("register").innerHTML = `
	<br><br>
	<div class="alert alert-success" role="alert">
	  Registration complete. You can now Login
	</div>
	<br><br>
      `;

  })
  .catch(function (error) {
    console.log(error);
      document.getElementById("registerErr").innerHTML = `
	<br><br>
	<div class="alert alert-danger" role="alert">
	  Something went wrong on register
	</div>
	<br><br>
      `;
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
      document.getElementById("loginErr").innerHTML = `
	<br><br>
	<div class="alert alert-danger" role="alert">
	  Something went wrong on login
	</div>
	<br><br>
      `;
  });
}
