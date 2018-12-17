import React from "react";
import { Text, View, Button, TextInput } from "react-native";

class TutorialToken extends React.Component {
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
      Object.keys(drizzleState.accounts).length < 2 &&
      this.state.dataKeyTotalSupply === null
    ) {
      const contract = drizzle.contracts.TutorialToken;

      // let drizzle know we want to watch the `myString` method
      const dataKeyTotalSupply = contract.methods["totalSupply"].cacheCall();
      const dataKeyAcc0 = contract.methods["balanceOf"].cacheCall(
        drizzleState.accounts[0]
      );
      const dataKeyAcc1 = contract.methods["balanceOf"].cacheCall(
        drizzleState.accounts[1]
      );
      // save the `dataKey` to local component state for later reference
      this.setState({ dataKeyTotalSupply, dataKeyAcc0, dataKeyAcc1 });
    }
  };

  submit = () => {
    const { drizzle, drizzleState } = this.props;
    const { numTokens } = this.state;
    const contract = drizzle.contracts.TutorialToken;
    const stackId = contract.methods["transfer"].cacheSend(
      drizzleState.accounts[1],
      Number.parseInt(numTokens),
      { from: drizzleState.accounts[0] }
    );
    this.setState({ stackId });
  };

  getTxStatus = () => {
    // get the transaction states from the drizzle state
    const { transactions, transactionStack } = this.props.drizzleState;

    // get the transaction hash using our saved `stackId`
    const txHash = transactionStack[this.state.stackId];

    // if transaction hash does not exist, don't display anything
    if (!txHash) return null;

    // otherwise, return the transaction status
    return `Transaction status: ${transactions[txHash].status}`;
  };

  render() {
    const { drizzleState } = this.props;
    const { TutorialToken } = drizzleState.contracts;
    const totalSupply =
      TutorialToken.totalSupply[this.state.dataKeyTotalSupply];

    const balAcc0 = TutorialToken.balanceOf[this.state.dataKeyAcc0];
    const balAcc1 = TutorialToken.balanceOf[this.state.dataKeyAcc1];

    const numAccounts = Object.keys(drizzleState.accounts).length;
    if (numAccounts < 2)
      return (
        <View>
          <Text>TutorialToken</Text>
          <Text>{numAccounts} accounts found. Need at least 2.</Text>
        </View>
      );
    return (
      <View>
        <Text>TutorialToken</Text>
        <Text>Total Supply: {totalSupply && totalSupply.value}</Text>
        <Text>Balances</Text>
        <Text>
          {drizzleState.accounts[0]}: {balAcc0 && balAcc0.value}
        </Text>
        <Text>
          {drizzleState.accounts[1]}: {balAcc1 && balAcc1.value}
        </Text>

        <Text>Send tokens</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={numTokens => this.setState({ numTokens })}
          value={this.state.numTokens}
          placeholder="Enter a number"
          keyboardType="numeric"
        />
        <Button title="Submit" onPress={this.submit} />
        <Text>{this.getTxStatus()}</Text>
      </View>
    );
  }
}
export default TutorialToken;
