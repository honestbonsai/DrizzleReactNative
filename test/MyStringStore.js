const MyStringStore = artifacts.require("./MyStringStore.sol");

contract("MyStringStore", accounts => {
  it("should store the string 'Hey there!'", async () => {
    const myStringStore = await MyStringStore.deployed();
    await myStringStore.set("Hey there!", { from: accounts[0] });
    const storedString = await myStringStore.myString.call();

    assert.equal(storedString, "Hey there!", "The string was not stored");
  });
});
