/** @format */
import "./shims";
import { AppRegistry } from "react-native";
import Core from "./Core";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Core);
