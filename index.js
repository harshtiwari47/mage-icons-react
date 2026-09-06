"use strict";

const stroke = require("./stroke");
const bulk = require("./bulk");
const socialBw = require("./social-bw");
const socialColor = require("./social-color");
const iconList = require("./iconList.json");

const exportsObject = {
  stroke,
  bulk,
  socialBw,
  socialColor,
  iconList
};

for (const [name, component] of Object.entries(stroke)) {
  exportsObject[`Stroke${name}`] = component;
}
for (const [name, component] of Object.entries(bulk)) {
  exportsObject[`Bulk${name}`] = component;
}
for (const [name, component] of Object.entries(socialBw)) {
  exportsObject[`SocialBw${name}`] = component;
}
for (const [name, component] of Object.entries(socialColor)) {
  exportsObject[`SocialColor${name}`] = component;
}

module.exports = exportsObject;
module.exports.default = exportsObject;
