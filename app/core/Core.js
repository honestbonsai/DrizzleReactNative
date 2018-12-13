import React from "react";
import { Drizzle, generateStore } from "drizzle";
import MyStringStore from "../../build/contracts/MyStringStore.json";
import Screen from "../screen/Screen";

const options = { contracts: [MyStringStore] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

const Core = () => <Screen drizzle={drizzle} />;

export default Core;
