import React from "react";
import { Text, View, Button, TextInput } from "react-native";

class TutorialToken extends React.Component {
  state = { dataKey: null };

  componentDidMount() {
    const { drizzle, drizzleState } = this.props;
    const contract = drizzle.contracts.TutorialToken;

    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods["totalSupply"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  render() {
    const { TutorialToken } = this.props.drizzleState.contracts;
    const totalSupply = TutorialToken.totalSupply[this.state.dataKey];
    return (
      <View>
        <Text>TutorialToken</Text>
        <Text>Total Supply: {totalSupply && totalSupply.value}</Text>
      </View>
    );
  }
}
export default TutorialToken;
