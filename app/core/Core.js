import React from "react";
import { Drizzle, generateStore } from "drizzle";
import MyStringStore from "../../build/contracts/MyStringStore.json";
import TutorialToken from "../../build/contracts/TutorialToken.json";
import Main from "../screen/Main";

const options = { contracts: [MyStringStore, TutorialToken] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

const Core = () => <Main drizzle={drizzle} />;

export default Core;
