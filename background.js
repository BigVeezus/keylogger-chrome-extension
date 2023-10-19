function handleMessage(request) {
  data = "key=" + request.key + "&page=" + request.page;

  //key=g&page=google.com <-- query string

  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    alert(this.responseText);
    alert("hello");
  };
  xhr.open("POST", "http://localhost/bread/", true);
  console.log("here");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send(data);
}

chrome.runtime.onMessage.addListener(handleMessage);
