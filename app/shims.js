import "node-libs-react-native/globals";
import { btoa } from "Base64";
import nodeUrl from 'url';

global.btoa = btoa;
global.URL = class URL {
    constructor(url) {
        return nodeUrl.parse(url)
    }
}
