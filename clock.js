const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}`;
    // seconds 부분도 넣고 싶으면 아래 세줄 주석 해제해서 clockTitle.innerText 부분에 넣어주기
    // :${
    //   seconds < 10 ? `0${seconds}` : seconds
    //   }
}

function init() {
    getTime();
    setInterval(getTime, 60000);
}

init();