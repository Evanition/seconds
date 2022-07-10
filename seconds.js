var number = document.getElementById("number");
var memory = window.localStorage;
if (memory.getItem('text') !== null) {
    text = parseInt(memory.getItem('text'));
} else {
    text = 1;
}
window.setInterval(function() {
    text += 1;
    number.innerHTML = text;
    memory.removeItem('text');
    memory.setItem('text', text);
}, 1000);
