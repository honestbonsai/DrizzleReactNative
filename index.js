/** @format */
import "./app/core/shims";
import { AppRegistry } from "react-native";
import Core from "./app/core/Core";
import { name as appName } from "./app/core/app.json";

AppRegistry.registerComponent(appName, () => Core);
