function metalmineCost(lvl) {
  const base = {
		Metal:     60,
		Crystal:   15,
		Deuterium: 0,
		Energy:    0,
	};
  // cost = base * 1.5^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 1.5**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 1.5**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 1.5**(lvl-1));
  cost.Energy = Math.round(base.Energy * 1.5**(lvl-1));
  return cost;
}
function crystalmineCost(lvl) {
  const base = {
		Metal:     48,
		Crystal:   24,
		Deuterium: 0,
		Energy:    0,
	};
	// cost = base * 1.6^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 1.6**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 1.6**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 1.6**(lvl-1));
  cost.Energy = Math.round(base.Energy * 1.6**(lvl-1));
  return cost;
}
function deuteriummineCost(lvl) {
  const base = {
		Metal:     225,
		Crystal:   75,
		Deuterium: 0,
		Energy:    0,
	};
  // cost = base * 1.5^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 1.5**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 1.5**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 1.5**(lvl-1));
  cost.Energy = Math.round(base.Energy * 1.5**(lvl-1));
  return cost;
}
function energymineCost(lvl) {
  const base = {
		Metal:     75,
		Crystal:   30,
		Deuterium: 0,
		Energy:    0,
	};
  // cost = base * 1.5^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 1.5**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 1.5**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 1.5**(lvl-1));
  cost.Energy = Math.round(base.Energy * 1.5**(lvl-1));
  return cost;
}
function fusionreactorCost(lvl) {
  const base = {
		Metal:     900,
		Crystal:   360,
		Deuterium: 180,
		Energy:    0,
	};
  // cost = base * 1.8^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 1.8**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 1.8**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 1.8**(lvl-1));
  cost.Energy = Math.round(base.Energy * 1.8**(lvl-1));
  return cost;
}
function roboticsfactoryCost(lvl) {
  const base = {
		Metal:     400,
		Crystal:   120,
		Deuterium: 200,
		Energy:    0,
	};
  // cost = base * 2^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 2**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 2**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 2**(lvl-1));
  cost.Energy = Math.round(base.Energy * 2**(lvl-1));
  return cost;
}
function shipyardCost(lvl) {
  const base = {
		Metal:     400,
		Crystal:   200,
		Deuterium: 100,
		Energy:    0,
	};
  // cost = base * 2^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 2**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 2**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 2**(lvl-1));
  cost.Energy = Math.round(base.Energy * 2**(lvl-1));
  return cost;
}
function metalstorageCost(lvl) {
  const base = {
		Metal:     1000,
		Crystal:   0,
		Deuterium: 0,
		Energy:    0,
	};
  // cost = base * 2^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 2**(lvl-1));
  cost.Crystal = 0;
  cost.Deuterium = 0;
  cost.Energy = 0;
  return cost;
}
function crystalstorageCost(lvl) {
  const base = {
		Metal:     1000,
		Crystal:   500,
		Deuterium: 0,
		Energy:    0,
	};
  // cost = base * 2^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 2**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 2**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 2**(lvl-1));
  cost.Energy = Math.round(base.Energy * 2**(lvl-1));
  return cost;
}
function deuteriumstorageCost(lvl) {
  const base = {
		Metal:     1000,
		Crystal:   1000,
		Deuterium: 0,
		Energy:    0,
	};
  // cost = base * 2^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 2**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 2**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 2**(lvl-1));
  cost.Energy = Math.round(base.Energy * 2**(lvl-1));
  return cost;
}
function ressearchlabCost(lvl) {
  const base = {
		Metal:     200,
		Crystal:   400,
		Deuterium: 200,
		Energy:    0,
	};
  // cost = base * 1.5^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 1.5**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 1.5**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 1.5**(lvl-1));
  cost.Energy = Math.round(base.Energy * 1.5**(lvl-1));
  return cost;
}

function alliancedepotCost(lvl) {
  const base = {
		Metal:     20000,
		Crystal:   40000,
		Deuterium: 0,
		Energy:    0,
	};
  // cost = base * 2^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 2**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 2**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 2**(lvl-1));
  cost.Energy = Math.round(base.Energy * 2**(lvl-1));
  return cost;
}
function missilesiloCost(lvl) {
  const base = {
		Metal:     20000,
		Crystal:   20000,
		Deuterium: 1000,
		Energy:    0,
	};
  // cost = base * 2^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 2**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 2**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 2**(lvl-1));
  cost.Energy = Math.round(base.Energy * 2**(lvl-1));
  return cost;
}
function spacedockCost(lvl) {
  const base = {
		Metal:     20000,
		Crystal:   20000,
		Deuterium: 1000,
		Energy:    0,
	};
  // cost = base * 2^(lvl-1)
  let cost = {};
  cost.Metal = Math.round(base.Metal * 2**(lvl-1));
  cost.Crystal = Math.round(base.Crystal * 2**(lvl-1));
  cost.Deuterium = Math.round(base.Deuterium * 2**(lvl-1));
  cost.Energy = Math.round(base.Energy * 2**(lvl-1));
  return cost;
}
