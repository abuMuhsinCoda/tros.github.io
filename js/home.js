
function displayClock(){
    const now = new Date();
    const hour = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds = now.getSeconds().toString().padStart(2,'0');

    const time = `${hour}:${minutes}`
    document.getElementById("clock").textContent = time
}
displayClock()
setInterval(displayClock, 60000)