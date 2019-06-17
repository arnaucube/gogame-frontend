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


    // if (localStorage.getItem("mainplanet") === null) {
      localStorage.setItem("mainplanet", res.data.user.Planets[0]);
    // }
    getPlanet();
  }).catch(function(error) {
    console.log(error);
  });
}


let planetid = localStorage.getItem("mainplanet");
let planet = {};
// get user data
function getPlanet() {
  axios.get(url + "/planets/" + planetid, config).then(function(res) {
    console.log("planet", res.data);
    planet = res.data.planet;
    console.log("planet", planet);
    printResources(planet.Resources);
    if (window.location.href.includes("buildings.html")) {
      printBuildings(planet);
    }

  }).catch(function(error) {
    console.log(error);
  });
}

getUser();
setInterval(getUser, 5000);
