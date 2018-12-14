const MyStringStore = artifacts.require("MyStringStore");
const TutorialToken = artifacts.require("TutorialToken.sol");

module.exports = function(deployer) {
  deployer.deploy(MyStringStore);
  deployer.deploy(TutorialToken);
};
