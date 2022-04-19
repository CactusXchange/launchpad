const CactusLaunchpad = artifacts.require("CactusLaunchpad");

module.exports = async function (deployer) {
  await deployer.deploy(CactusLaunchpad, '0xDC20F6830620F00D3d8FF6fC64D8BbfA83F0d652', '0x186506Ce0E71D7E5EC07AD8B023c10F1A401cC5a');
};