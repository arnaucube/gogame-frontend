const chai = require('chai');
const calc = require('../calc.js');

const {expect} = chai;

describe('calc', () => {
  it('encrypt and decrypt', () => {
    // metalmine
    expect(60).to.be.equal(calc.metalmineCost(1).Metal);
    expect(15).to.be.equal(calc.metalmineCost(1).Crystal);
    expect(0).to.be.equal(calc.metalmineCost(1).Deuterium);
    expect(0).to.be.equal(calc.metalmineCost(1).Energy);

    expect(90).to.be.equal(calc.metalmineCost(2).Metal);
    expect(22).to.be.equal(calc.metalmineCost(2).Crystal);
    expect(0).to.be.equal(calc.metalmineCost(2).Deuterium);
    expect(0).to.be.equal(calc.metalmineCost(2).Energy);

    expect(17515).to.be.equal(calc.metalmineCost(15).Metal);
    expect(4378).to.be.equal(calc.metalmineCost(15).Crystal);
    expect(0).to.be.equal(calc.metalmineCost(15).Deuterium);
    expect(0).to.be.equal(calc.metalmineCost(15).Energy);

    // crystalmine
    expect(48).to.be.equal(calc.crystalmineCost(1).Metal);
    expect(24).to.be.equal(calc.crystalmineCost(1).Crystal);
    expect(0).to.be.equal(calc.crystalmineCost(1).Deuterium);
    expect(0).to.be.equal(calc.crystalmineCost(1).Energy);

    expect(76).to.be.equal(calc.crystalmineCost(2).Metal);
    expect(38).to.be.equal(calc.crystalmineCost(2).Crystal);
    expect(0).to.be.equal(calc.crystalmineCost(2).Deuterium);
    expect(0).to.be.equal(calc.crystalmineCost(2).Energy);

    expect(34587).to.be.equal(calc.crystalmineCost(15).Metal);
    expect(17293).to.be.equal(calc.crystalmineCost(15).Crystal);
    expect(0).to.be.equal(calc.crystalmineCost(15).Deuterium);
    expect(0).to.be.equal(calc.crystalmineCost(15).Energy);

    // deuteriummine
    expect(225).to.be.equal(calc.deuteriummineCost(1).Metal);
    expect(75).to.be.equal(calc.deuteriummineCost(1).Crystal);
    expect(0).to.be.equal(calc.deuteriummineCost(1).Deuterium);
    expect(0).to.be.equal(calc.deuteriummineCost(1).Energy);

    expect(337).to.be.equal(calc.deuteriummineCost(2).Metal);
    expect(112).to.be.equal(calc.deuteriummineCost(2).Crystal);
    expect(0).to.be.equal(calc.deuteriummineCost(2).Deuterium);
    expect(0).to.be.equal(calc.deuteriummineCost(2).Energy);

    expect(65684).to.be.equal(calc.deuteriummineCost(15).Metal);
    expect(21894).to.be.equal(calc.deuteriummineCost(15).Crystal);
    expect(0).to.be.equal(calc.deuteriummineCost(15).Deuterium);
    expect(0).to.be.equal(calc.deuteriummineCost(15).Energy);

    // energymine
    expect(75).to.be.equal(calc.energymineCost(1).Metal);
    expect(30).to.be.equal(calc.energymineCost(1).Crystal);
    expect(0).to.be.equal(calc.energymineCost(1).Deuterium);
    expect(0).to.be.equal(calc.energymineCost(1).Energy);

    expect(112).to.be.equal(calc.energymineCost(2).Metal);
    expect(45).to.be.equal(calc.energymineCost(2).Crystal);
    expect(0).to.be.equal(calc.energymineCost(2).Deuterium);
    expect(0).to.be.equal(calc.energymineCost(2).Energy);

    expect(21894).to.be.equal(calc.energymineCost(15).Metal);
    expect(8757).to.be.equal(calc.energymineCost(15).Crystal);
    expect(0).to.be.equal(calc.energymineCost(15).Deuterium);
    expect(0).to.be.equal(calc.energymineCost(15).Energy);
  });
});
