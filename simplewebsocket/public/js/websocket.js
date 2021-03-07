const HOST = location.origin.replace(/^http/, "ws");
const ws = new WebSocket(HOST);

const ul = document.querySelector("ul");

ws.onmessage = (event) => {
    console.log(event.data);
    let li = document.createElement("li");
    li.innerText = event.data;
    ul.appendChild(li);
};
