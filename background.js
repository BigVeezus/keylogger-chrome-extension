function handleMessage(request) {
  alert(request.key);
  alert(request.page);
}

chrome.runtime.onMessage.addListener(handleMessage);
