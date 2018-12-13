/** @format */
import "./app/shims";
import { AppRegistry } from "react-native";
import Core from "./app/Core";
import { name as appName } from "./app/app.json";

AppRegistry.registerComponent(appName, () => Core);
