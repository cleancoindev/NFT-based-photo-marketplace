const PhotoMarketPlace = artifacts.require("./PhotoMarketPlace.sol");

// Contract address of swXDAI at xDAI
let DaiContractAddr = '0x5f49887120c883917A7aC192997bd2E98033Af62'

module.exports = function(deployer, network, accounts) {
  deployer.deploy(
    PhotoMarketPlace,
    DaiContractAddr
  );
};
