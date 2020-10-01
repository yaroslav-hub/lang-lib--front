import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge";
import Page from './App.js';

bridge.send("VKWebAppInit", {});

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
