import React from "react";
import Config from "react-native-config";
import { Drizzle, generateStore } from "drizzle";
import MyStringStore from "../../build/contracts/MyStringStore.json";
import TutorialToken from "../../build/contracts/TutorialToken.json";
import ComplexStorage from "../../build/contracts/ComplexStorage.json";
import Main from "../examples/Main";

const ropstenFalback = {
  type: "ws",
  url: `wss://ropsten.infura.io/ws/v3/${Config.INFURA_ROPSTEN_PROJECT_ID}`
};

const options = {
  contracts: [MyStringStore, TutorialToken, ComplexStorage]
  // web3: {
  //   fallback: ropstenFalback
  // }
};
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

const Core = () => <Main drizzle={drizzle} />;

export default Core;
