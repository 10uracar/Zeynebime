/*======================================================
    PROJECT ZEYON v2.0
    SCRIPT.JS
======================================================*/

"use strict";

/*======================================================
    DOM
======================================================*/

const body = document.body;

const themeButton = document.getElementById("themeButton");
const themePanel = document.getElementById("themePanel");

const lightBtn = document.getElementById("lightMode");
const darkBtn = document.getElementById("darkMode");

const customColor = document.getElementById("customColor");
const colorButtons = document.querySelectorAll(".themeColor");

const relationshipCounter = document.getElementById("relationshipCounter");

const zeynepBirthday = document.getElementById("zeynepBirthday");
const onurBirthday = document.getElementById("onurBirthday");

/*======================================================
    AYARLAR
======================================================*/

const CONFIG = {

    relationshipDate: "2019-09-09",

    birthdays:{

        zeynep:{
            day:4,
            month:7
        },

        onur:{
            day:19,
            month:1
        }

    }

};

/*======================================================
    YARDIMCI FONKSİYONLAR
======================================================*/

function $(selector){

    return document.querySelector(selector);

}

function save(key,value){

    localStorage.setItem(key,value);

}

function load(key){

    return localStorage.getItem(key);

}

function pad(number){

    return String(number).padStart(2,"0");

}

/*======================================================
    BAŞLAT
======================================================*/

console.log("❤️ Project ZeyOn v2.0 Başlatıldı");

/*======================================================
    TEMA PANELİ
======================================================*/

themeButton.addEventListener("click", (event)=>{

    event.stopPropagation();

    themePanel.classList.toggle("open");

});

document.addEventListener("click",(event)=>{

    if(

        !themePanel.contains(event.target)

    ){

        themePanel.classList.remove("open");

    }

});

/*======================================================
    DARK MODE
======================================================*/

function enableDarkMode(){

    body.classList.add("dark");

    save("theme-mode","dark");

}

function enableLightMode(){

    body.classList.remove("dark");

    save("theme-mode","light");

}

darkBtn.addEventListener("click",()=>{

    enableDarkMode();

});

lightBtn.addEventListener("click",()=>{

    enableLightMode();

});

/*======================================================
    SAYFA AÇILIRKEN
======================================================*/

const savedMode = load("theme-mode");

if(savedMode==="dark"){

    enableDarkMode();

}else{

    enableLightMode();

}

/*======================================================
    TEMA RENKLERİ
======================================================*/

function setTheme(color){

    document.documentElement
        .style
        .setProperty("--primary", color);

    save("primary-color", color);

}

/*======================================================
    RENK BUTONLARI
======================================================*/

colorButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const color = button.dataset.color;

        if(!color) return;

        setTheme(color);

    });

});

/*======================================================
    ÖZEL RENK
======================================================*/

if(customColor){

    customColor.addEventListener("input",(e)=>{

        setTheme(e.target.value);

    });

}

/*======================================================
    KAYITLI RENK
======================================================*/

const savedColor = load("primary-color");

if(savedColor){

    setTheme(savedColor);

    if(customColor){

        customColor.value = savedColor;

    }

}

/*======================================================
    TANIŞMA SAYACI
======================================================*/

function updateRelationshipCounter(){

    if(!relationshipCounter) return;

    const startDate = new Date(CONFIG.relationshipDate);

    const today = new Date();

    startDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0);

    const diff = today - startDate;

    const days = Math.floor(
        diff / (1000 * 60 * 60 * 24)
    );

    relationshipCounter.textContent = days;

}

updateRelationshipCounter();

/*======================================================
    DOĞUM GÜNÜ SAYAÇLARI
======================================================*/

function updateBirthdayCountdown(element, month, day){

    if(!element) return;

    const today = new Date();

    const currentYear = today.getFullYear();

    let birthday = new Date(currentYear, month - 1, day);

    birthday.setHours(0,0,0,0);

    const now = new Date();

    now.setHours(0,0,0,0);

    if(now.getTime() === birthday.getTime()){

        element.textContent = "🎉 Bugün doğum günü!";

        return;

    }

    if(now > birthday){

        birthday = new Date(currentYear + 1, month - 1, day);

        birthday.setHours(0,0,0,0);

    }

    const diff = birthday - now;

    const days = Math.ceil(

        diff / (1000 * 60 * 60 * 24)

    );

    element.textContent = `${days} gün kaldı :)`;

}

/*======================================================
    BAŞLAT
======================================================*/

updateBirthdayCountdown(

    onurBirthday,

    CONFIG.birthdays.onur.month,

    CONFIG.birthdays.onur.day

);

updateBirthdayCountdown(

    zeynepBirthday,

    CONFIG.birthdays.zeynep.month,

    CONFIG.birthdays.zeynep.day

);

/*======================================================
    SCROLL REVEAL
======================================================*/

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

       if(entry.isIntersecting){

    entry.target.classList.add("show");

    observer.unobserve(entry.target);

}

    });

},

{

    threshold:0.15

}

);

revealElements.forEach(element=>{

    observer.observe(element);

});

/*======================================================
    CLICK HEART
======================================================*/

const heartIcons = [

    "❤️",

    "💖",

    "💕",

    "💗",

    "💘"

];

document.addEventListener("click",(event)=>{

    if(

        event.target.closest("button") ||

        event.target.closest("a")

    ){

        return;

    }

    const heart = document.createElement("span");

    heart.className = "clickHeart";

    heart.textContent =

        heartIcons[

            Math.floor(

                Math.random()*heartIcons.length

            )

        ];

    heart.style.left = event.clientX + "px";

    heart.style.top = event.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },900);

});

/*======================================================
    SAKURA RAIN
======================================================*/

const sakuraContainer = document.getElementById("sakuraContainer");

function createSakura(){

    if(!sakuraContainer) return;

    const petal = document.createElement("span");

    petal.className = "sakura";

    petal.textContent = "🌸";

    petal.style.left = Math.random()*100 + "vw";

    petal.style.fontSize =

        (10 + Math.random()*10) + "px";

    petal.style.animationDuration =

        (10 + Math.random()*8) + "s";

    petal.style.opacity =

        (.08 + Math.random()*.18);

    sakuraContainer.appendChild(petal);

    petal.addEventListener("animationend",()=>{

        petal.remove();

    });

}

setInterval(createSakura,1300);

/*======================================================
    LIGHTBOX
======================================================*/

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

const galleryImages = document.querySelectorAll(".galleryImage");

galleryImages.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        lightboxImage.src = image.src;

    });

});

closeLightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(event)=>{

    if(event.target===lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown",(event)=>{

    if(event.key==="Escape"){

        lightbox.classList.remove("active");

    }

});


/*======================================================
    LIVE RELATIONSHIP STATS
======================================================*/

const relationshipStart = new Date("2019-09-09");

function updateLiveStats(){

    const now = new Date();

    const diff = now - relationshipStart;

    const totalSeconds = Math.floor(diff / 1000);

const days = Math.floor(totalSeconds / 86400);

const hours = Math.floor((totalSeconds % 86400) / 3600);

const minutes = Math.floor((totalSeconds % 3600) / 60);

const seconds = totalSeconds % 60;

    document.getElementById("daysLive").textContent = days;
    document.getElementById("hoursLive").textContent = hours;
    document.getElementById("minutesLive").textContent = minutes;
    document.getElementById("secondsLive").textContent = seconds;

}

updateLiveStats();

setInterval(updateLiveStats,1000);

/*======================================================
    WEATHER
======================================================*/

const cities = [
    {
        id: "weatherKarabuk",
        lat: 41.2061,
        lon: 32.6204
    },
    {
        id: "weatherKastamonu",
        lat: 41.3887,
        lon: 33.7827
    },
    {
        id: "weatherKayseri",
        lat: 38.7225,
        lon: 35.4875
    }
];

function weatherEmoji(code){

    if(code === 0) return "☀️";
    if(code <= 3) return "🌤️";
    if(code <= 48) return "☁️";
    if(code <= 67) return "🌧️";
    if(code <= 77) return "❄️";
    if(code <= 99) return "⛈️";

    return "🌍";
}

async function loadWeather(city){

    const url =
`https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;

    try{

        const response = await fetch(url);

        const data = await response.json();

        const current = data.current;

        document.getElementById(city.id).innerHTML = `
            <strong>${weatherEmoji(current.weather_code)} ${current.temperature_2m}°C</strong><br>
            💧 Nem: %${current.relative_humidity_2m}<br>
            💨 Rüzgar: ${current.wind_speed_10m} km/s
        `;

    }catch{

        document.getElementById(city.id).textContent =
        "Veri alınamadı.";
    }

}

cities.forEach(loadWeather);

/*======================================================
    TO DO LIST
======================================================*/

const todoCheckboxes = document.querySelectorAll("#todo input[type='checkbox']");
const todoProgress = document.getElementById("todoProgress");
const todoText = document.getElementById("todoText");

function updateTodoProgress(){

    const total = todoCheckboxes.length;

    let completed = 0;

    todoCheckboxes.forEach((checkbox,index)=>{

        if(localStorage.getItem("todo-"+index)==="true"){

            checkbox.checked = true;

        }

        if(checkbox.checked){

            completed++;

        }

    });

    const percent = (completed/total)*100;

    todoProgress.style.width = percent + "%";

    todoText.textContent = `${completed} / ${total} tamamlandı ❤️`;

}

todoCheckboxes.forEach((checkbox,index)=>{

    checkbox.addEventListener("change",()=>{

        localStorage.setItem(
            "todo-"+index,
            checkbox.checked
        );

        updateTodoProgress();

    });

});

updateTodoProgress();

/*======================================================
    HIZLI ERİŞİM
======================================================*/

const quickButton = document.getElementById("quickButton");
const quickPanel = document.getElementById("quickPanel");

if (quickButton && quickPanel) {

    quickButton.addEventListener("click", (e) => {

        e.stopPropagation();

        quickPanel.classList.toggle("open");

    });

    document.addEventListener("click", (e) => {

        if (
            !quickPanel.contains(e.target) &&
            e.target !== quickButton
        ) {

            quickPanel.classList.remove("open");

        }

    });

    quickPanel.querySelectorAll("button").forEach(button => {

        button.addEventListener("click", () => {

            const target = document.getElementById(button.dataset.target);

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

            quickPanel.classList.remove("open");

        });

    });

}