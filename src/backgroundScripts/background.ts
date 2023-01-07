export {};

console.log("background script loaded");

chrome.runtime.onMessage.addListener(function async(
  func,
  sender,
  sendResponse
) {
  processContentScriptFunctions(func, sender, sendResponse);
});

// todo improve types here
async function processContentScriptFunctions(
  func: any,
  sender: any,
  sendResponse: any
) {
  console.log("processContentScriptFunctions", func);
  let msg = {
    functionName: func.functionName,
    data: "",
  };
  switch (func.functionName) {
    case "exampleFetch":
      msg.data = await exampleFetch();
      chrome.tabs.sendMessage(sender.tab.id, msg);
      break;
    default:
      break;
  }
}

async function exampleFetch() {
  //gen a random number between 1 and 10
  const randomNum = Math.floor(Math.random() * 10) + 1;
  return fetch(`https://jsonplaceholder.typicode.com/users/${randomNum}`).then(
    (response) => response.json()
  );
}
