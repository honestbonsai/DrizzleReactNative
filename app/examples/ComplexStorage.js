import React from "react";
import { Text, View } from "react-native";

class ComplexStorage extends React.Component {
  state = { dataKeyString1: null, dataKeyString2: null, dataKeySingleDD: null };

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.ComplexStorage;

    const dataKeyString1 = contract.methods["string1"].cacheCall();
    const dataKeyString2 = contract.methods["string2"].cacheCall();
    const dataKeySingleDD = contract.methods["singleDD"].cacheCall();

    this.setState({ dataKeyString1, dataKeyString2, dataKeySingleDD });
  }

  render() {
    const { drizzle, drizzleState } = this.props;
    const { ComplexStorage } = drizzleState.contracts;

    const string1 = ComplexStorage.string1[this.state.dataKeyString1];
    const string2 = ComplexStorage.string2[this.state.dataKeyString2];
    const singleDD = ComplexStorage.singleDD[this.state.dataKeySingleDD];

    return (
      <View>
        <Text>ComplexStorage</Text>
        <Text>
          string1: {string1 && drizzle.web3.utils.hexToUtf8(string1.value)}
        </Text>
        <Text>
          string2: {string2 && drizzle.web3.utils.hexToUtf8(string2.value)}
        </Text>
        <Text>
          singleDD: {singleDD && JSON.stringify(singleDD.value, null, 2)}
        </Text>
      </View>
    );
  }
}

export default ComplexStorage;
