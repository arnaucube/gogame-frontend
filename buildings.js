function secondsToTime(secs)
{
    var h = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var m = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var s = Math.ceil(divisor_for_seconds);

    return h + "h " + m + "m " + s + "s";
}

function printResources(r) {
  let enough = true;
  let html = "";
  html += `Requires:`;
  if (r.Metal <= user.Resources.Metal) {
    html += ` Metal: <b style="color:lime;">` + r.Metal + `</b>`;
  } else {
    enough = false;
    html += ` Metal: <b style="color:red;">` + r.Metal + `</b>`;
  }

  if (r.Crystal <= user.Resources.Crystal) {
    html += ` Crystal: <b style="color:lime;">` + r.Crystal + `</b>`;
  } else {
    enough = false;
    html += ` Crystal: <b style="color:red;">` + r.Crystal + `</b>`;
  }

  if (r.Deuterium <= user.Resources.Deuterium) {
    html += ` Deuterium: <b style="color:lime;">` + r.Deuterium + `</b>`;
  } else {
    enough = false;
    html += ` Deuterium: <b style="color:red;">` + r.Deuterium + `</b>`;
  }

  if (r.Energy <= user.Resources.Energy) {
    html += ` Energy: <b style="color: lime;">` + r.Energy + `</b>`;
  } else {
    enough = false;
    html += ` Energy: <b style="color: red;">` + r.Energy + `</b>`;
  }

  return {html, enough};
}
function printPlanet(planet) {
  let r = {};
  document.getElementById("planetname").innerHTML = planet.Name;

  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("currentBuild").innerHTML = `
      Currently building: <b>` + planet.CurrentBuild.Title + `</b>
      <br>
      Finishes at: <b>` + planet.CurrentBuild.Ends + `</b>
    `
  } else {
    document.getElementById("currentBuild").innerHTML = "";
  }

  // metalmine
  if (planet.Buildings.metalmine == undefined) {
    document.getElementById("btnBuildMetalMine").innerHTML = `<div style="color:lime;" onclick="buildBuilding('metalmine')">Build building</div>`;
    r = metalmineCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("metalmineResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("metalmineLevel").innerHTML = "(Level " + planet.Buildings.metalmine + ")";
    document.getElementById("btnBuildMetalMine").innerHTML = `<div style="color:lime;" onclick="buildBuilding('metalmine')">Build level ` + (+ (planet.Buildings.metalmine) + + (1)) + `</div>`;
    r = metalmineCost((+ (planet.Buildings.metalmine) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.metalmine) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("metalmineResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildMetalMine").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildMetalMine").innerHTML = `<span style="color: red;">building</span>`;
  }

  // crystalmine
  if (planet.Buildings.crystalmine == undefined) {
    document.getElementById("btnBuildCrystalMine").innerHTML = `<div style="color:lime;" onclick="buildBuilding('crystalmine')">Build building</div>`;
    r = crystalmineCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("crystalmineResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("crystalmineLevel").innerHTML = "(Level " + planet.Buildings.crystalmine + ")";
    document.getElementById("btnBuildCrystalMine").innerHTML = `<div style="color:lime;" onclick="buildBuilding('crystalmine')">Build level ` + (+ (planet.Buildings.crystalmine) + + (1)) + `</div>`;
    r = crystalmineCost((+ (planet.Buildings.crystalmine) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.crystalmine) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("crystalmineResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildCrystalMine").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildCrystalMine").innerHTML = `<span style="color: red;">building</span>`;
  }

  // deuteriummine{
  if (planet.Buildings.deuteriummine == undefined) {
    document.getElementById("btnBuildDeuteriumMine").innerHTML = `<div style="color:lime;" onclick="buildBuilding('deuteriummine')">Build building</div>`;
    r = deuteriummineCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("deuteriummineResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("deuteriummineLevel").innerHTML = "(Level " + planet.Buildings.deuteriummine + ")";
    document.getElementById("btnBuildDeuteriumMine").innerHTML = `<div style="color:lime;" onclick="buildBuilding('deuteriummine')">Build level ` + (+ (planet.Buildings.deuteriummine) + + (1)) + `</div>`;
    r = deuteriummineCost((+ (planet.Buildings.deuteriummine) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.deuteriummine) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("deuteriummineResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildDeuteriumMine").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildDeuteriumMine").innerHTML = `<span style="color: red;">building</span>`;
  }

  // energymine
  if (planet.Buildings.energymine == undefined) {
    document.getElementById("btnBuildEnergyMine").innerHTML = `<div style="color:lime;" onclick="buildBuilding('energymine')">Build building</div>`;
    r = energymineCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("energymineResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("energymineLevel").innerHTML = "(Level " + planet.Buildings.energymine + ")";
    document.getElementById("btnBuildEnergyMine").innerHTML = `<div style="color:lime;" onclick="buildBuilding('energymine')">Build level ` + (+ (planet.Buildings.energymine) + + (1)) + `</div>`;
    r = energymineCost((+ (planet.Buildings.energymine) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.energymine) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("energymineResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildEnergyMine").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildEnergyMine").innerHTML = `<span style="color: red;">building</span>`;
  }

  // fusionreactor
  if (planet.Buildings.fusionreactor == undefined) {
    document.getElementById("btnBuildFusionReactor").innerHTML = `<div style="color:lime;" onclick="buildBuilding('fusionreactor')">Build building</div>`;
    r = fusionreactorCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("fusionreactorResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("fusionreactorLevel").innerHTML = "(Level " + planet.Buildings.fusionreactor + ")";
    document.getElementById("btnBuildFusionReactor").innerHTML = `<div style="color:lime;" onclick="buildBuilding('fusionreactor')">Build level ` + (+ (planet.Buildings.fusionreactor) + + (1)) + `</div>`;
    r = fusionreactorCost((+ (planet.Buildings.fusionreactor) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.fusionreactor) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("fusionreactorResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildFusionReactor").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildFusionReactor").innerHTML = `<span style="color: red;">building</span>`;
  }

  // roboticsfactory
  if (planet.Buildings.roboticsfactory == undefined) {
    document.getElementById("btnBuildRoboticsFactory").innerHTML = `<div style="color:lime;" onclick="buildBuilding('roboticsfactory')">Build building</div>`;
    r = roboticsfactoryCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("roboticsfactoryResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("roboticsfactoryLevel").innerHTML = "(Level " + planet.Buildings.roboticsfactory + ")";
    document.getElementById("btnBuildRoboticsFactory").innerHTML = `<div style="color:lime;" onclick="buildBuilding('roboticsfactory')">Build level ` + (+ (planet.Buildings.roboticsfactory) + + (1)) + `</div>`;
    r = roboticsfactoryCost((+ (planet.Buildings.roboticsfactory) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.roboticsfactory) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("roboticsfactoryResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildRoboticsFactory").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildRoboticsFactory").innerHTML = `<span style="color: red;">building</span>`;
  }

  // shipyard
  if (planet.Buildings.shipyard == undefined) {
    document.getElementById("btnBuildShipyard").innerHTML = `<div style="color:lime;" onclick="buildBuilding('shipyard')">Build building</div>`;
    r = shipyardCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("shipyardResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("shipyardLevel").innerHTML = "(Level " + planet.Buildings.shipyard + ")";
    document.getElementById("btnBuildShipyard").innerHTML = `<div style="color:lime;" onclick="buildBuilding('shipyard')">Build level ` + (+ (planet.Buildings.shipyard) + + (1)) + `</div>`;
    r = shipyardCost((+ (planet.Buildings.shipyard) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.shipyard) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("shipyardResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildShipyard").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildShipyard").innerHTML = `<span style="color: red;">building</span>`;
  }

  // metalstorage
  if (planet.Buildings.metalstorage == undefined) {
    document.getElementById("btnBuildMetalStorage").innerHTML = `<div style="color:lime;" onclick="buildBuilding('metalstorage')">Build building</div>`;
    r = metalstorageCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("metalstorageResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("metalstorageLevel").innerHTML = "(Level " + planet.Buildings.metalstorage + ")";
    document.getElementById("btnBuildMetalStorage").innerHTML = `<div style="color:lime;" onclick="buildBuilding('metalstorage')">Build level ` + (+ (planet.Buildings.metalstorage) + + (1)) + `</div>`;
    r = metalstorageCost((+ (planet.Buildings.metalstorage) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.metalstorage) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("metalstorageResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildMetalStorage").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildMetalStorage").innerHTML = `<span style="color: red;">building</span>`;
  }

  // crystalstorage
  if (planet.Buildings.crystalstorage == undefined) {
    document.getElementById("btnBuildCrystalStorage").innerHTML = `<div style="color:lime;" onclick="buildBuilding('crystalstorage')">Build building</div>`;
    r = crystalstorageCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("crystalstorageResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("crystalstorageLevel").innerHTML = "(Level " + planet.Buildings.crystalstorage + ")";
    document.getElementById("btnBuildCrystalStorage").innerHTML = `<div style="color:lime;" onclick="buildBuilding('crystalstorage')">Build level ` + (+ (planet.Buildings.crystalstorage) + + (1)) + `</div>`;
    r = crystalstorageCost((+ (planet.Buildings.crystalstorage) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.crystalstorage) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("crystalstorageResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildCrystalStorage").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildCrystalStorage").innerHTML = `<span style="color: red;">building</span>`;
  }

  // deuteriumstorage
  if (planet.Buildings.deuteriumstorage == undefined) {
    document.getElementById("btnBuildDeuteriumStorage").innerHTML = `<div style="color:lime;" onclick="buildBuilding('deuteriumstorage')">Build building</div>`;
    r = deuteriumstorageCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("deuteriumstorageResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("deuteriumstorageLevel").innerHTML = "(Level " + planet.Buildings.deuteriumstorage + ")";
    document.getElementById("btnBuildDeuteriumStorage").innerHTML = `<div style="color:lime;" onclick="buildBuilding('deuteriumstorage')">Build level ` + (+ (planet.Buildings.deuteriumstorage) + + (1)) + `</div>`;
    r = deuteriumstorageCost((+ (planet.Buildings.deuteriumstorage) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.deuteriumstorage) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("deuteriumstorageResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildDeuteriumStorage").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildDeuteriumStorage").innerHTML = `<span style="color: red;">building</span>`;
  }

  // ressearchlab
  if (planet.Buildings.ressearchlab == undefined) {
    document.getElementById("btnBuildRessearchLab").innerHTML = `<div style="color:lime;" onclick="buildBuilding('ressearchlab')">Build building</div>`;
    r = ressearchlabCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("ressearchlabResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("ressearchlabLevel").innerHTML = "(Level " + planet.Buildings.ressearchlab + ")";
    document.getElementById("btnBuildRessearchLab").innerHTML = `<div style="color:lime;" onclick="buildBuilding('ressearchlab')">Build level ` + (+ (planet.Buildings.ressearchlab) + + (1)) + `</div>`;
    r = ressearchlabCost((+ (planet.Buildings.ressearchlab) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.ressearchlab) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("ressearchlabResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildRessearchLab").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildRessearchLab").innerHTML = `<span style="color: red;">building</span>`;
  }

  // alliancedepot
  if (planet.Buildings.alliancedepot == undefined) {
    document.getElementById("btnBuildAllianceDepot").innerHTML = `<div style="color:lime;" onclick="buildBuilding('alliancedepot')">Build building</div>`;
    r = alliancedepotCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("alliancedepotResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("alliancedepotLevel").innerHTML = "(Level " + planet.Buildings.alliancedepot + ")";
    document.getElementById("btnBuildAllianceDepot").innerHTML = `<div style="color:lime;" onclick="buildBuilding('alliancedepot')">Build level ` + (+ (planet.Buildings.alliancedepot) + + (1)) + `</div>`;
    r = alliancedepotCost((+ (planet.Buildings.alliancedepot) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.alliancedepot) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("alliancedepotResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildAllianceDepot").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildAllianceDepot").innerHTML = `<span style="color: red;">building</span>`;
  }

  // missilesilo
  if (planet.Buildings.missilesilo == undefined) {
    document.getElementById("btnBuildMissileSilo").innerHTML = `<div style="color:lime;" onclick="buildBuilding('missilesilo')">Build building</div>`;
    r = missilesiloCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("missilesiloResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("missilesiloLevel").innerHTML = "(Level " + planet.Buildings.missilesilo + ")";
    document.getElementById("btnBuildMissileSilo").innerHTML = `<div style="color:lime;" onclick="buildBuilding('missilesilo')">Build level ` + (+ (planet.Buildings.missilesilo) + + (1)) + `</div>`;
    r = missilesiloCost((+ (planet.Buildings.missilesilo) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.missilesilo) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("missilesiloResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildMissileSilo").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildMissileSilo").innerHTML = `<span style="color: red;">building</span>`;
  }

  // spacedock
  if (planet.Buildings.spacedock == undefined) {
    document.getElementById("btnBuildSpacedock").innerHTML = `<div style="color:lime;" onclick="buildBuilding('spacedock')">Build building</div>`;
    r = spacedockCost(1);
    t = constructionTime(r, 1);
    resrourcesHtml = printResources(r);
    document.getElementById("spacedockResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  } else {
    document.getElementById("spacedockLevel").innerHTML = "(Level " + planet.Buildings.spacedock + ")";
    document.getElementById("btnBuildSpacedock").innerHTML = `<div style="color:lime;" onclick="buildBuilding('spacedock')">Build level ` + (+ (planet.Buildings.spacedock) + + (1)) + `</div>`;
    r = spacedockCost((+ (planet.Buildings.spacedock) + + (1)));
    t = constructionTime(r, (+ (planet.Buildings.spacedock) + + (1)));
    resrourcesHtml = printResources(r);
    document.getElementById("spacedockResources").innerHTML = resrourcesHtml.html + `
      <br>
      Construction time: ` + secondsToTime(t);
  }
  if (!resrourcesHtml.enough) {
    document.getElementById("btnBuildSpacedock").innerHTML = `<span style="color: red;">not enough resources</span>`;
  }
  if (planet.CurrentBuild.Title !== "") {
    document.getElementById("btnBuildSpacedock").innerHTML = `<span style="color: red;">building</span>`;
  }
}

let planetid = localStorage.getItem("mainplanet");
let planet = {};
// get user data
function getPlanet() {
  axios.get(url + "/planets/" + planetid, config).then(function(res) {
    console.log("buildings", res.data);
    planet = res.data.planet;
    printPlanet(planet);
  }).catch(function(error) {
    console.log(error);
  });
}
getPlanet();
setInterval(getPlanet, 5000);

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
