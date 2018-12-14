import React from "react";
import { Text, View, Button, TextInput } from "react-native";

class TutorialToken extends React.Component {
  state = { dataKeyTotalSupply: null, dataKeyAcc0: null, dataKeyAcc1: null };

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
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

  render() {
    const { drizzleState } = this.props;
    const { TutorialToken } = drizzleState.contracts;
    const totalSupply =
      TutorialToken.totalSupply[this.state.dataKeyTotalSupply];

    const balAcc0 = TutorialToken.balanceOf[this.state.dataKeyAcc0];
    const balAcc1 = TutorialToken.balanceOf[this.state.dataKeyAcc1];

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
        <Button title="Submit" onPress={this.submit} />
      </View>
    );
  }
}
export default TutorialToken;
