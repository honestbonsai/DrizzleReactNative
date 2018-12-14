import React from "react";
import { Drizzle, generateStore } from "drizzle";
import MyStringStore from "../../build/contracts/MyStringStore.json";
import TutorialToken from "../../build/contracts/TutorialToken.json";
import ComplexStorage from "../../build/contracts/ComplexStorage.json";
import Main from "../examples/Main";

const options = { contracts: [MyStringStore, TutorialToken, ComplexStorage] };
const drizzleStore = generateStore(options);
const drizzle = new Drizzle(options, drizzleStore);

const Core = () => <Main drizzle={drizzle} />;

export default Core;
