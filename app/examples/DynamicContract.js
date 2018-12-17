import React from "react";
import { Text, View, Button } from "react-native";
import abi from "./dynamicContractAbi";

// Fill in your own address for the contract you want to add
const address = "xxx";
const contractName = "DynamicContract";

class DynamicContract extends React.Component {
  addContract = () => {
    const { drizzle } = this.props;
    const contractInfo = {
      contractName,
      web3Contract: new drizzle.web3.eth.Contract(abi, address)
    };
    drizzle.addContract(contractInfo);
  };

  render() {
    const { drizzle } = this.props;
    return (
      <View>
        <Text>Dynamic Contract</Text>
        {drizzle.contracts[contractName] ? (
          <Text>{contractName} exists!</Text>
        ) : (
          <Button title="Add Contract" onPress={this.addContract} />
        )}
      </View>
    );
  }
}
export default DynamicContract;
