const token = localStorage.getItem("token");
console.log(token);

if (localStorage.getItem("token") === null) {
  // redirect to dashboard
  window.location.href = "/index.html";
}
function logout() {
  localStorage.removeItem("token");
  window.location.href = "/index.html";
}

let config = {
  "crossdomain": true,
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer " + token
  }
};

let user = {};
// get user data
function getUser() {
  axios.get(url + "/", config).then(function(res) {
    console.log(res.data);
    user = res.data.user;
    console.log(user);
    document.getElementById("name").innerHTML = user.Name;

    document.getElementById("metal").innerHTML = user.Resources.Metal;
    document.getElementById("crystal").innerHTML = user.Resources.Crystal;
    document.getElementById("deuterium").innerHTML = user.Resources.Deuterium;
    document.getElementById("energy").innerHTML = user.Resources.Energy;

    if (localStorage.getItem("mainplanet") === null) {
      localStorage.setItem("mainplanet", res.data.user.Planets[0]);
    }
  }).catch(function(error) {
    console.log(error);
  });
}
getUser();
setInterval(getUser, 5000);
