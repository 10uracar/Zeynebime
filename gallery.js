/*======================================================
        PROJECT ZEYON v2.2
        GALLERY.JS
======================================================*/

"use strict";

function updatePlayerIcons(){

const folder = document.body.classList.contains("dark")
    ? "light"
    : "dark";

    playPauseIcon.src =
        `icons/${folder}/${videoPlayer.paused ? "play" : "pause"}.svg`;

    muteIcon.src =
        `icons/${folder}/${videoPlayer.muted ? "volume-x" : "volume-2"}.svg`;

    fullscreenIcon.src =
        `icons/${folder}/maximize.svg`;

prevVideoIcon.src =
    `icons/${folder}/skip-back.svg`;

nextVideoIcon.src =
    `icons/${folder}/skip-forward.svg`;

}

/*======================================
        DOM
======================================*/

const galleryTabs = document.querySelector(".galleryTabs");

const tabButtons = document.querySelectorAll(".tabButton");

const photosTab = document.getElementById("photosTab");

const videosTab = document.getElementById("videosTab");

const lightboxStage = document.getElementById("lightboxStage");

const videoGrid = document.getElementById("videoGrid");

const videoModal = document.getElementById("videoModal");

const videoPlayer = document.getElementById("videoPlayer");

const closeVideo = document.getElementById("closeVideo");

const playPause=document.getElementById("playPause");

const videoProgress=document.getElementById("videoProgress");

const currentTime =
document.getElementById("currentTime");

const duration =
document.getElementById("duration");

const playPauseIcon=document.getElementById("playPauseIcon");

const muteButton=document.getElementById("muteButton");

const muteIcon=document.getElementById("muteIcon");

const fullscreenButton=document.getElementById("fullscreenButton");

const fullscreenIcon=document.getElementById("fullscreenIcon");

const prevVideoButton =
document.getElementById("prevVideo");

const nextVideoButton =
document.getElementById("nextVideo");

const videoWrapper =
document.querySelector(".videoWrapper");
let hideTimer;

const videoControls =
document.querySelector(".videoControls");

const prevVideoIcon =
document.getElementById("prevVideoIcon");

const nextVideoIcon =
document.getElementById("nextVideoIcon");

const centerIcon =
document.getElementById("centerIcon");

const centerIconImage =
document.getElementById("centerIconImage");

updatePlayerIcons();

/*======================================================
        THEME
======================================================*/

const themeButton =
    document.getElementById("themeButton");

const themePanel =
    document.getElementById("themePanel");

const lightBtn =
    document.getElementById("lightMode");

const darkBtn =
    document.getElementById("darkMode");

const customColor =
    document.getElementById("customColor");

const colorButtons =
    document.querySelectorAll(".themeColor");

function save(key,value){

    localStorage.setItem(key,value);

}

function load(key){

    return localStorage.getItem(key);

}

/*======================================================
        THEME PANEL
======================================================*/

themeButton.addEventListener("click",(event)=>{

    event.stopPropagation();

    themePanel.classList.toggle("open");

});

document.addEventListener("click",(event)=>{

    if(

        !themePanel.contains(event.target) &&
        event.target !== themeButton

    ){

        themePanel.classList.remove("open");

    }

});

/*======================================================
        DARK MODE
======================================================*/

function enableDarkMode(){

    document.body.classList.add("dark");

    save("theme-mode","dark");

    updatePlayerIcons();

}

function enableLightMode(){

    document.body.classList.remove("dark");

    save("theme-mode","light");

    updatePlayerIcons();

}

darkBtn.addEventListener("click",()=>{

    enableDarkMode();

});

lightBtn.addEventListener("click",()=>{

    enableLightMode();

});

/*======================================================
        COLOR
======================================================*/

function setTheme(color){

    document.documentElement
        .style
        .setProperty("--primary",color);

    save("primary-color",color);

}

colorButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        const color =
            button.dataset.color;

        if(!color) return;

        setTheme(color);

    });

});

customColor.addEventListener("input",(e)=>{

    setTheme(e.target.value);

});

/*======================================================
        LOAD
======================================================*/

const savedMode =
    load("theme-mode");

if(savedMode==="dark"){

    enableDarkMode();

}else{

    enableLightMode();

}

const savedColor =
    load("primary-color");

if(savedColor){

    setTheme(savedColor);

    customColor.value =
        savedColor;

}

/*======================================
        TAB SYSTEM
======================================*/

tabButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        // Aktif butonu kaldır

        tabButtons.forEach(btn=>{

            btn.classList.remove("active");

        });

        // Yeni aktif buton

        button.classList.add("active");

        // İçerikleri gizle

        photosTab.classList.remove("active");

        videosTab.classList.remove("active");

        // Sekme kontrolü

        if(button.dataset.tab==="photos"){

            galleryTabs.classList.remove("video");

            photosTab.classList.add("active");

        }

        else{

            galleryTabs.classList.add("video");

            videosTab.classList.add("active");

        }

    });

});

const photos = [

    {
        src: "images/photo1.jpg",
        alt: "ZeyOn Fotoğraf 1"
    },

    {
        src: "images/photo2.jpg",
        alt: "ZeyOn Fotoğraf 2"
    },

    {
        src: "images/photo3.jpg",
        alt: "ZeyOn Fotoğraf 3"
    },

    {
        src: "images/photo4.jpg",
        alt: "ZeyOn Fotoğraf 4"
    },

    {
        src: "images/photo5.jpg",
        alt: "ZeyOn Fotoğraf 5"
    },

    {
        src: "images/photo6.jpg",
        alt: "ZeyOn Fotoğraf 6"
    },

    {
        src: "images/photo7.jpg",
        alt: "ZeyOn Fotoğraf 7"
    },

    {
        src: "images/photo8.jpg",
        alt: "ZeyOn Fotoğraf 8"
    },

    {
        src: "images/photo9.jpg",
        alt: "ZeyOn Fotoğraf 9"
    },

    {
        src: "images/photo10.jpg",
        alt: "ZeyOn Fotoğraf 10"
    },

    {
        src: "images/photo11.jpg",
        alt: "ZeyOn Fotoğraf 11"
    },

    {
        src: "images/photo12.jpg",
        alt: "ZeyOn Fotoğraf 12"
    },

    {
        src: "images/photo13.jpg",
        alt: "ZeyOn Fotoğraf 13"
    },

    {
        src: "images/photo14.jpg",
        alt: "ZeyOn Fotoğraf 14"
    },

    {
        src: "images/photo15.jpg",
        alt: "ZeyOn Fotoğraf 15"
    },

    {
        src: "images/photo16.jpg",
        alt: "ZeyOn Fotoğraf 16"
    },

    {
        src: "images/photo17.jpg",
        alt: "ZeyOn Fotoğraf 17"
    },

    {
        src: "images/photo18.jpg",
        alt: "ZeyOn Fotoğraf 18"
    },

    {
        src: "images/photo19.jpg",
        alt: "ZeyOn Fotoğraf 19"
    },

    {
        src: "images/photo20.jpg",
        alt: "ZeyOn Fotoğraf 20"
    },

    {
        src: "images/photo21.jpg",
        alt: "ZeyOn Fotoğraf 21"
    },

    {
        src: "images/photo22.jpg",
        alt: "ZeyOn Fotoğraf 22"
    },

    {
        src: "images/photo23.jpg",
        alt: "ZeyOn Fotoğraf 23"
    },

    {
        src: "images/photo24.jpg",
        alt: "ZeyOn Fotoğraf 24"
    }

];

const videos = [

    {
        src:"videos/video1.mp4",
        title:"Video 1"
    },

    {
        src:"videos/video2.mp4",
        title:"Video 2"
    },

    {
        src:"videos/video3.mp4",
        title:"Video 3"
    },

    {
        src:"videos/video4.mp4",
        title:"Video 4"
    }

];

let currentVideo = 0;

const photoGrid = document.getElementById("photoGrid");

photos.forEach((photo,index)=>{

    const card=document.createElement("div");

    card.className="galleryItem";

const folder =
    document.body.classList.contains("dark")
    ? "light"
    : "dark";

card.innerHTML = `

<img
    src="${photo.src}"
    alt="${photo.alt}"
    data-index="${index}"
    class="galleryPhoto"
    draggable="false">

<div class="zoomOverlay">

    <img
        class="zoomIcon"
        src="icons/${folder}/search.svg"
        alt="Büyüt">

</div>

`;

    photoGrid.appendChild(card);

});

videos.forEach((video,index)=>{

    const card = document.createElement("div");

    card.className = "galleryItem videoItem";

    const folder =
        document.body.classList.contains("dark")
        ? "light"
        : "dark";

    card.innerHTML = `

<video
    class="videoThumbnail"
    muted
    playsinline
    preload="metadata">
</video>

<div class="playOverlay">

    <img
        src="icons/${folder}/play.svg"
        class="playIcon"
        alt="Oynat">

</div>

<div class="videoDuration">

    --:--

</div>

`;

    videoGrid.appendChild(card);

    const thumb = card.querySelector(".videoThumbnail");

    thumb.src = video.src;

    thumb.currentTime = 0.1;

    thumb.addEventListener("loadedmetadata",()=>{

        const durationElement =
            card.querySelector(".videoDuration");

        durationElement.textContent =
            formatTime(thumb.duration);

    });

    thumb.addEventListener("loadeddata",()=>{

        thumb.pause();

    });

  card.addEventListener("click",()=>{

    openVideo(index);

});

});

function openVideo(index){

    currentVideo = index;

    videoPlayer.classList.add("videoFadeOut");

    setTimeout(()=>{

        videoPlayer.src = videos[currentVideo].src;

        videoPlayer.load();

        videoPlayer.currentTime = 0;

        videoModal.classList.add("active");

        updatePlayerIcons();

        videoPlayer.play();

        showControls();

        videoPlayer.classList.remove("videoFadeOut");

        videoPlayer.classList.add("videoFadeIn");

        setTimeout(()=>{

            videoPlayer.classList.remove("videoFadeIn");

        },280);

    },180);

}

/*======================================
        LIGHTBOX V2
======================================*/

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const lightboxCounter = document.getElementById("lightboxCounter");

const prevPhoto = document.getElementById("prevPhoto");

const nextPhoto = document.getElementById("nextPhoto");

const closeLightbox = document.getElementById("closeLightbox");

let currentPhoto = 0;

/*======================================
        ZOOM
======================================*/

let scale = 1;

let translateX = 0;

let translateY = 0;

let isDragging = false;

let startX = 0;

let startY = 0;

function updateZoom(){

    lightboxImage.style.transform = `
        translate(${translateX}px, ${translateY}px)
        scale(${scale})
    `;

}

function openLightbox(index, element){

    currentPhoto = index;

    updateLightbox();

    lightbox.classList.add("active");

}

function updateLightbox(){

    lightboxImage.src = photos[currentPhoto].src;

lightboxImage.alt = photos[currentPhoto].alt;

    lightboxCounter.textContent =
        `${currentPhoto + 1} / ${photos.length}`;

}

document.querySelectorAll(".galleryPhoto").forEach(photo => {

    photo.addEventListener("click", () => {

        openLightbox(

            Number(photo.dataset.index),

            photo

        );

    });

});

closeLightbox.addEventListener("click",()=>{

    scale = 1;

    translateX = 0;

    translateY = 0;

    updateZoom();

    lightbox.classList.remove("active");

});

prevPhoto.addEventListener("click",()=>{

    currentPhoto--;

    if(currentPhoto<0){

        currentPhoto=photos.length-1;

    }

scale = 1;

translateX = 0;

translateY = 0;

updateZoom();

    updateLightbox();

});

nextPhoto.addEventListener("click",()=>{

    currentPhoto++;

    if(currentPhoto>=photos.length){

        currentPhoto=0;

    }

    scale = 1;

    translateX = 0;

    translateY = 0;

    updateZoom();

    updateLightbox();

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

if(e.key==="Escape"){

    scale = 1;

    translateX = 0;

    translateY = 0;

    updateZoom();

    lightbox.classList.remove("active");

}

    if(e.key==="ArrowRight"){

        nextPhoto.click();

    }

    if(e.key==="ArrowLeft"){

        prevPhoto.click();

    }

});

lightbox.addEventListener("click",(e)=>{

    if(
        e.target === lightbox ||
        e.target === lightboxStage
    ){

        scale = 1;

        translateX = 0;

        translateY = 0;

        updateZoom();

        lightbox.classList.remove("active");

    }

});

/*======================================
        SWIPE SUPPORT
======================================*/

let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener("touchstart",(e)=>{

    touchStartX = e.changedTouches[0].clientX;

});

lightbox.addEventListener("touchend",(e)=>{

    touchEndX = e.changedTouches[0].clientX;

    handleSwipe();

});

function handleSwipe(){

    const distance = touchEndX - touchStartX;

    // Sağa kaydır
    if(distance > 60){

        prevPhoto.click();

    }

    // Sola kaydır
    else if(distance < -60){

        nextPhoto.click();

    }

}
lightboxImage.addEventListener("dragstart",(e)=>{

    e.preventDefault();

});

document.querySelectorAll(".galleryPhoto").forEach(photo=>{

    photo.addEventListener("dragstart",(e)=>{

        e.preventDefault();

    });

});

lightboxImage.addEventListener("wheel",(e)=>{

    e.preventDefault();

    if(e.deltaY < 0){

        scale += 0.2;

    }

    else{

        scale -= 0.2;

    }

    scale = Math.max(1, Math.min(scale,3));

    if(scale === 1){

        translateX = 0;

        translateY = 0;

    }

    updateZoom();

},{passive:false});

lightboxImage.addEventListener("dblclick",()=>{

    if(scale===1){

        scale=2;

    }

    else{

        scale=1;

        translateX=0;

        translateY=0;

    }

    updateZoom();

});

lightboxImage.addEventListener("mousedown",(e)=>{

    if(scale===1) return;

    isDragging=true;

    startX=e.clientX-translateX;

    startY=e.clientY-translateY;

});

window.addEventListener("mousemove",(e)=>{

    if(!isDragging) return;

    translateX=e.clientX-startX;

    translateY=e.clientY-startY;

    updateZoom();

});

window.addEventListener("mouseup",()=>{

    isDragging=false;

});

closeVideo.addEventListener("click",()=>{

    videoPlayer.pause();

    videoPlayer.currentTime = 0;

    videoModal.classList.remove("active");

});

videoModal.addEventListener("click",(e)=>{

    if(e.target===videoModal){

        closeVideo.click();

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape" &&
       videoModal.classList.contains("active")){

        closeVideo.click();

    }

});

playPause.addEventListener("click",()=>{

    if(videoPlayer.paused){

        videoPlayer.play();

        flashCenterIcon("play");

    }

    else{

        videoPlayer.pause();

        flashCenterIcon("pause");

    }

});

videoPlayer.addEventListener("play",()=>{

    updatePlayerIcons();

    showControls();

});

videoPlayer.addEventListener("pause",()=>{

    updatePlayerIcons();

    videoControls.classList.remove("hide");

});

function showControls(){

    videoControls.classList.remove("hide");
    closeVideo.classList.remove("hide");

    clearTimeout(hideTimer);

    hideTimer=setTimeout(()=>{

        if(!videoPlayer.paused){

            videoControls.classList.add("hide");
            closeVideo.classList.add("hide");

        }

    },2500);

}

function flashCenterIcon(type){

    const folder =
        document.body.classList.contains("dark")
        ? "light"
        : "dark";

    centerIconImage.src =
        `icons/${folder}/${type}.svg`;

    centerIcon.classList.remove("show");

    void centerIcon.offsetWidth;

    centerIcon.classList.add("show");

  centerIcon.addEventListener("animationend", () => {

    centerIcon.classList.remove("show");

});

}

function formatTime(time){

    const m=Math.floor(time/60);

    const s=Math.floor(time%60);

return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;

}

videoPlayer.addEventListener("timeupdate",()=>{

    currentTime.textContent =
        formatTime(videoPlayer.currentTime);

    duration.textContent =
        formatTime(videoPlayer.duration || 0);

    videoProgress.value =
        (videoPlayer.currentTime / videoPlayer.duration) * 100 || 0;

});

videoPlayer.addEventListener("loadedmetadata",()=>{

    duration.textContent =
        formatTime(videoPlayer.duration);

});

videoProgress.addEventListener("input",()=>{

    videoPlayer.currentTime=
        (videoProgress.value/100)*videoPlayer.duration;

});

videoPlayer.addEventListener("pointerup",()=>{

    // Kontroller gizliyse sadece göster
    if(videoControls.classList.contains("hide")){

        showControls();

        return;

    }

    // Kontroller zaten görünüyorsa oynat/durdur
    playPause.click();

});

muteButton.addEventListener("click",()=>{

    videoPlayer.muted=!videoPlayer.muted;

updatePlayerIcons();

});

fullscreenButton.addEventListener("click", async ()=>{

    try{

        if(!document.fullscreenElement){

            await videoWrapper.requestFullscreen();

        }else{

            await document.exitFullscreen();

        }

    }catch(err){

        console.log(err);

    }

});

document.addEventListener("fullscreenchange",()=>{

    updatePlayerIcons();

});

document.addEventListener("keydown",(e)=>{

    if(!videoModal.classList.contains("active")) return;

    if(e.code==="Space"){

        e.preventDefault();

        playPause.click();

    }

});

document.addEventListener("keydown",(e)=>{

    if(!videoModal.classList.contains("active")) return;

    if(e.key.toLowerCase()==="m"){

        muteButton.click();

    }

});

document.addEventListener("keydown",(e)=>{

    if(!videoModal.classList.contains("active")) return;

    if(e.key==="ArrowRight"){

        videoPlayer.currentTime += 5;

    }

    if(e.key==="ArrowLeft"){

        videoPlayer.currentTime -= 5;

    }

});

videoWrapper.addEventListener("mousemove",showControls);

prevVideoButton.onclick = ()=>{

    currentVideo--;

    if(currentVideo < 0){

        currentVideo = videos.length - 1;

    }

    openVideo(currentVideo);

};

nextVideoButton.onclick = ()=>{

    currentVideo++;

    if(currentVideo >= videos.length){

        currentVideo = 0;

    }

    openVideo(currentVideo);

};

let videoTouchStartX = 0;
let videoTouchEndX = 0;

videoWrapper.addEventListener("touchstart",(e)=>{

    videoTouchStartX = e.changedTouches[0].clientX;

},{passive:true});

videoWrapper.addEventListener("touchend",(e)=>{

    videoTouchEndX = e.changedTouches[0].clientX;

    const distance = videoTouchEndX - videoTouchStartX;

    if(Math.abs(distance) < 70) return;

    if(distance > 0){

        prevVideoButton.click();

    }else{

        nextVideoButton.click();

    }

},{passive:true});

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

    // Butonlara basınca kalp çıkmasın
    if(

        event.target.closest("button") ||
        event.target.closest("a") ||
        event.target.closest(".videoControls") ||
        event.target.closest(".lightboxButton")

    ){

        return;

    }

    // Video oynarken çıkmasın
    if(videoModal.classList.contains("active")){

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