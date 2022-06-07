#!/usr/bin/env node

const path = require("path");
const proxy = require("node-global-proxy").default;
// TODO: it would be better if can configurable
proxy.setConfig("http://127.0.0.1:7890");
proxy.start();

global.__rootDirectory = path.resolve(__dirname + "core") + "/";

main();

function main() {
  require("./core/agent");
}
