import React from "react";
import { Platform, StyleSheet, Text, View } from 'react-native';

class ReadString extends React.Component {
    state = { dataKey: null };

    componentDidMount() {
        const { drizzle } = this.props;
        const contract = drizzle.contracts.MyStringStore;
        const dataKey = contract.methods["myString"].cacheCall();
        this.setState({ dataKey });
    }

    render() {
        const { MyStringStore } = this.props.drizzleState.contracts;
        const myString = MyStringStore.myString[this.state.dataKey];

        return <Text>My stored string: {myString && myString.value}</Text>;
    }
}

export default ReadString;