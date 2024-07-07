import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

const sortCPUs = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];
    if (tab.id) {
      chrome.tabs.sendMessage(
          tab.id,
          'sortCPUs',
          (msg) => {
            console.log("result message:", msg);
          }
      );
    }
  });
};
const checkCPUs = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];
    if (tab.id) {
      chrome.tabs.sendMessage(
          tab.id,
          'checkCPUs',
          (msg) => {
            console.log("result message:", msg);
          }
      );
    }
  });
};

const Popup = () => {
  return (
    <>
      <button onClick={sortCPUs} style={{width:"max-content"}}>Sort CPUs</button>
      <button onClick={checkCPUs} style={{width:"max-content"}}>checkCPUs</button>
    </>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
