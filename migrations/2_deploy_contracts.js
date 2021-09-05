const MyContract = artifacts.require("./MyContract.sol");
const MyContractEvents = artifacts.require("./MyContractEvents.sol");

module.exports = function (deployer) {
  deployer.deploy(MyContract);
  deployer.deploy(MyContractEvents);
};
