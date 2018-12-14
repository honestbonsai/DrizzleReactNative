const MyStringStore = artifacts.require("MyStringStore");
const TutorialToken = artifacts.require("TutorialToken.sol");
const ComplexStorage = artifacts.require("ComplexStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(MyStringStore);
  deployer.deploy(TutorialToken);
  deployer.deploy(ComplexStorage);
};
