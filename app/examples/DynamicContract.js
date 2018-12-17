import React from "react";
import { Text, View, Button } from "react-native";
import abi from "./dynamicContractAbi";

// Fill in your own address for the contract you want to add
const address = "0x7726f3f5f437dc75462d762cf58d42a5d8e3c8d4";
const contractName = "DynamicContract";

class DynamicContract extends React.Component {
  state = {
    dataKeyTotalSupply: null,
    dataKeyAcc0: null,
    dataKeyAcc1: null,
    numTokens: "0"
  };

  componentDidMount() {
    this.setDataKeys();
  }

  componentDidUpdate() {
    this.setDataKeys();
  }

  setDataKeys = () => {
    const { drizzle, drizzleState } = this.props;

    if (
      this.state.dataKeyTotalSupply === null &&
      drizzle.contracts[contractName]
    ) {
      const contract = drizzle.contracts[contractName];

      const dataKeyTotalSupply = contract.methods["totalSupply"].cacheCall();

      this.setState({ dataKeyTotalSupply });
    }
  };

  addContract = () => {
    const { drizzle } = this.props;
    const contractInfo = {
      contractName,
      web3Contract: new drizzle.web3.eth.Contract(abi, address)
    };
    drizzle.addContract(contractInfo);
  };

  render() {
    const { drizzleState } = this.props;
    const totalSupply = drizzleState.contracts[contractName]
      ? drizzleState.contracts[contractName].totalSupply[
          this.state.dataKeyTotalSupply
        ]
      : 0;

    return (
      <View>
        <Text>Dynamic Contract</Text>
        {drizzleState.contracts[contractName] ? (
          <View>
            <Text>Total Supply: {totalSupply && totalSupply.value}</Text>
          </View>
        ) : (
          <Button title="Add Contract" onPress={this.addContract} />
        )}
      </View>
    );
  }
}
export default DynamicContract;
