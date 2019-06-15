function printResources(r) {
  let html = "";
  html += `Requires:`;
  if (r.Metal <= user.Resources.Metal) {
    html += ` Metal: <b style="color:lime;">` + r.Metal + `</b>`;
  } else {
    html += ` Metal: <b style="color:red;">` + r.Metal + `</b>`;
  }

  if (r.Crystal <= user.Resources.Crystal) {
    html += ` Crystal: <b style="color:lime;">` + r.Crystal + `</b>`;
  } else {
    html += ` Crystal: <b style="color:red;">` + r.Crystal + `</b>`;
  }

  if (r.Deuterium <= user.Resources.Deuterium) {
    html += ` Deuterium: <b style="color:lime;">` + r.Deuterium + `</b>`;
  } else {
    html += ` Deuterium: <b style="color:red;">` + r.Deuterium + `</b>`;
  }

  if (r.Energy <= user.Resources.Energy) {
    html += ` Energy: <b style="color: lime;">` + r.Energy + `</b>`;
  } else {
    html += ` Energy: <b style="color: red;">` + r.Energy + `</b>`;
  }

  return html;
}
function printPlanet(planet) {
  let r = {};
  document.getElementById("planetname").innerHTML = planet.Name;

  // metalmine
  document.getElementById("metalmineLevel").innerHTML = "(Level " + planet.Buildings.metalmine + ")";
  if (planet.Buildings.metalmine == undefined) {
    document.getElementById("btnBuildMetalMine").innerHTML = `<div onclick="buildBuilding('metalmine')">Build building</div>`;
    r = metalmineCost(1);
    document.getElementById("metalmineResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildMetalMine").innerHTML = `<div onclick="buildBuilding('metalmine')">Build level ` + (+ (planet.Buildings.metalmine) + + (1)) + `</div>`;
    r = metalmineCost((+ (planet.Buildings.metalmine) + + (1)));
    document.getElementById("metalmineResources").innerHTML = printResources(r);
  }

  // crystalmine
  document.getElementById("crystalmineLevel").innerHTML = "(Level " + planet.Buildings.crystalmine + ")";
  if (planet.Buildings.crystalmine == undefined) {
    document.getElementById("btnBuildCrystalMine").innerHTML = `<div onclick="buildBuilding('crystalmine')">Build building</div>`;
    r = crystalmineCost(1);
    document.getElementById("crystalmineResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildCrystalMine").innerHTML = `<div onclick="buildBuilding('crystalmine')">Build level ` + (+ (planet.Buildings.crystalmine) + + (1)) + `</div>`;
    r = crystalmineCost((+ (planet.Buildings.crystalmine) + + (1)));
    document.getElementById("crystalmineResources").innerHTML = printResources(r);
  }

  // deuteriummine
  document.getElementById("deuteriummineLevel").innerHTML = "(Level " + planet.Buildings.deuteriummine + ")";
  if (planet.Buildings.deuteriummine == undefined) {
    document.getElementById("btnBuildDeuteriumMine").innerHTML = `<div onclick="buildBuilding('deuteriummine')">Build building</div>`;
    r = deuteriummineCost(1);
    document.getElementById("deuteriummineResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildDeuteriumMine").innerHTML = `<div onclick="buildBuilding('deuteriummine')">Build level ` + (+ (planet.Buildings.deuteriummine) + + (1)) + `</div>`;
    r = deuteriummineCost((+ (planet.Buildings.deuteriummine) + + (1)));
    document.getElementById("deuteriummineResources").innerHTML = printResources(r);
  }

  // energymine
  document.getElementById("energymineLevel").innerHTML = "(Level " + planet.Buildings.energymine + ")";
  if (planet.Buildings.energymine == undefined) {
    document.getElementById("btnBuildEnergyMine").innerHTML = `<div onclick="buildBuilding('energymine')">Build building</div>`;
    r = energymineCost(1);
    document.getElementById("energymineResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildEnergyMine").innerHTML = `<div onclick="buildBuilding('energymine')">Build level ` + (+ (planet.Buildings.energymine) + + (1)) + `</div>`;
    r = energymineCost((+ (planet.Buildings.energymine) + + (1)));
    document.getElementById("energymineResources").innerHTML = printResources(r);
  }

  // fusionreactor
  document.getElementById("fusionreactorLevel").innerHTML = "(Level " + planet.Buildings.fusionreactor + ")";
  if (planet.Buildings.fusionreactor == undefined) {
    document.getElementById("btnBuildFusionReactor").innerHTML = `<div onclick="buildBuilding('fusionreactor')">Build building</div>`;
    r = fusionreactorCost(1);
    document.getElementById("fusionreactorResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildFusionReactor").innerHTML = `<div onclick="buildBuilding('fusionreactor')">Build level ` + (+ (planet.Buildings.fusionreactor) + + (1)) + `</div>`;
    r = fusionreactorCost((+ (planet.Buildings.fusionreactor) + + (1)));
    document.getElementById("fusionreactorResources").innerHTML = printResources(r);
  }

  // roboticsfactory
  document.getElementById("roboticsfactoryLevel").innerHTML = "(Level " + planet.Buildings.roboticsfactory + ")";
  if (planet.Buildings.roboticsfactory == undefined) {
    document.getElementById("btnBuildRoboticsFactory").innerHTML = `<div onclick="buildBuilding('roboticsfactory')">Build building</div>`;
    r = roboticsfactoryCost(1);
    document.getElementById("roboticsfactoryResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildRoboticsFactory").innerHTML = `<div onclick="buildBuilding('roboticsfactory')">Build level ` + (+ (planet.Buildings.roboticsfactory) + + (1)) + `</div>`;
    r = roboticsfactoryCost((+ (planet.Buildings.roboticsfactory) + + (1)));
    document.getElementById("roboticsfactoryResources").innerHTML = printResources(r);
  }

  // shipyard
  document.getElementById("shipyardLevel").innerHTML = "(Level " + planet.Buildings.shipyard + ")";
  if (planet.Buildings.shipyard == undefined) {
    document.getElementById("btnBuildShipyard").innerHTML = `<div onclick="buildBuilding('shipyard')">Build building</div>`;
    r = shipyardCost(1);
    document.getElementById("shipyardResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildShipyard").innerHTML = `<div onclick="buildBuilding('shipyard')">Build level ` + (+ (planet.Buildings.shipyard) + + (1)) + `</div>`;
    r = shipyardCost((+ (planet.Buildings.shipyard) + + (1)));
    document.getElementById("shipyardResources").innerHTML = printResources(r);
  }

  // metalstorage
  document.getElementById("metalstorageLevel").innerHTML = "(Level " + planet.Buildings.metalstorage + ")";
  if (planet.Buildings.metalstorage == undefined) {
    document.getElementById("btnBuildMetalStorage").innerHTML = `<div onclick="buildBuilding('metalstorage')">Build building</div>`;
    r = metalstorageCost(1);
    document.getElementById("metalstorageResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildMetalStorage").innerHTML = `<div onclick="buildBuilding('metalstorage')">Build level ` + (+ (planet.Buildings.metalstorage) + + (1)) + `</div>`;
    r = metalstorageCost((+ (planet.Buildings.metalstorage) + + (1)));
    document.getElementById("metalstorageResources").innerHTML = printResources(r);
  }

  // crystalstorage
  document.getElementById("crystalstorageLevel").innerHTML = "(Level " + planet.Buildings.crystalstorage + ")";
  if (planet.Buildings.crystalstorage == undefined) {
    document.getElementById("btnBuildCrystalStorage").innerHTML = `<div onclick="buildBuilding('crystalstorage')">Build building</div>`;
    r = crystalstorageCost(1);
    document.getElementById("crystalstorageResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildCrystalStorage").innerHTML = `<div onclick="buildBuilding('crystalstorage')">Build level ` + (+ (planet.Buildings.crystalstorage) + + (1)) + `</div>`;
    r = crystalstorageCost((+ (planet.Buildings.crystalstorage) + + (1)));
    document.getElementById("crystalstorageResources").innerHTML = printResources(r);
  }

  // deuteriumstorage
  document.getElementById("deuteriumstorageLevel").innerHTML = "(Level " + planet.Buildings.deuteriumstorage + ")";
  if (planet.Buildings.deuteriumstorage == undefined) {
    document.getElementById("btnBuildDeuteriumStorage").innerHTML = `<div onclick="buildBuilding('deuteriumstorage')">Build building</div>`;
    r = deuteriumstorageCost(1);
    document.getElementById("deuteriumstorageResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildDeuteriumStorage").innerHTML = `<div onclick="buildBuilding('deuteriumstorage')">Build level ` + (+ (planet.Buildings.deuteriumstorage) + + (1)) + `</div>`;
    r = deuteriumstorageCost((+ (planet.Buildings.deuteriumstorage) + + (1)));
    document.getElementById("deuteriumstorageResources").innerHTML = printResources(r);
  }

  // ressearchlab
  document.getElementById("ressearchlabLevel").innerHTML = "(Level " + planet.Buildings.ressearchlab + ")";
  if (planet.Buildings.ressearchlab == undefined) {
    document.getElementById("btnBuildRessearchLab").innerHTML = `<div onclick="buildBuilding('ressearchlab')">Build building</div>`;
    r = ressearchlabCost(1);
    document.getElementById("ressearchlabResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildRessearchLab").innerHTML = `<div onclick="buildBuilding('ressearchlab')">Build level ` + (+ (planet.Buildings.ressearchlab) + + (1)) + `</div>`;
    r = ressearchlabCost((+ (planet.Buildings.ressearchlab) + + (1)));
    document.getElementById("ressearchlabResources").innerHTML = printResources(r);
  }

  // alliancedepot
  document.getElementById("alliancedepotLevel").innerHTML = "(Level " + planet.Buildings.alliancedepot + ")";
  if (planet.Buildings.alliancedepot == undefined) {
    document.getElementById("btnBuildAllianceDepot").innerHTML = `<div onclick="buildBuilding('alliancedepot')">Build building</div>`;
    r = alliancedepotCost(1);
    document.getElementById("alliancedepotResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildAllianceDepot").innerHTML = `<div onclick="buildBuilding('alliancedepot')">Build level ` + (+ (planet.Buildings.alliancedepot) + + (1)) + `</div>`;
    r = alliancedepotCost((+ (planet.Buildings.alliancedepot) + + (1)));
    document.getElementById("alliancedepotResources").innerHTML = printResources(r);
  }

  // missilesilo
  document.getElementById("missilesiloLevel").innerHTML = "(Level " + planet.Buildings.missilesilo + ")";
  if (planet.Buildings.missilesilo == undefined) {
    document.getElementById("btnBuildMissileSilo").innerHTML = `<div onclick="buildBuilding('missilesilo')">Build building</div>`;
    r = missilesiloCost(1);
    document.getElementById("missilesiloResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildMissileSilo").innerHTML = `<div onclick="buildBuilding('missilesilo')">Build level ` + (+ (planet.Buildings.missilesilo) + + (1)) + `</div>`;
    r = missilesiloCost((+ (planet.Buildings.missilesilo) + + (1)));
    document.getElementById("missilesiloResources").innerHTML = printResources(r);
  }

  // spacedock
  document.getElementById("spacedockLevel").innerHTML = "(Level " + planet.Buildings.spacedock + ")";
  if (planet.Buildings.spacedock == undefined) {
    document.getElementById("btnBuildSpacedock").innerHTML = `<div onclick="buildBuilding('spacedock')">Build building</div>`;
    r = spacedockCost(1);
    document.getElementById("spacedockResources").innerHTML = printResources(r);
  } else {
    document.getElementById("btnBuildSpacedock").innerHTML = `<div onclick="buildBuilding('spacedock')">Build level ` + (+ (planet.Buildings.spacedock) + + (1)) + `</div>`;
    r = spacedockCost((+ (planet.Buildings.spacedock) + + (1)));
    document.getElementById("spacedockResources").innerHTML = printResources(r);
  }
}

let planetid = localStorage.getItem("mainplanet");
let planet = {};
// get user data
axios.get(url + "/planets/" + planetid, config).then(function(res) {
  console.log("buildings", res.data);
  planet = res.data.planet;
  printPlanet(planet);
}).catch(function(error) {
  console.log(error);
});


function buildBuilding(building) {
  console.log("build " + building);
  const data = {
    planetid: planetid,
    building: building
  }
  axios.post(url + "/buildings", data, config).then(function(res) {
    console.log("buildings", res.data);
    planet = res.data.planet;
    printPlanet(planet);
  }).catch(function(error) {
    console.log(error);
  });
}
