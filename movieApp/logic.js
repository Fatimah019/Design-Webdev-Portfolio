let showHome=document.querySelector("#home-page");
let showLive=document.querySelector("#live-page");
let showTv=document.querySelector("#movie-list-page");
//let showMusic=document.querySelector("#music-page");


let homePageBtn=document.querySelector("#home-page-btn").addEventListener("click", showHomePage);
let livePageBtn=document.querySelector("#live-page-btn").addEventListener("click", showLivePage);
let tvPageBtn=document.querySelector("#tv-page-btn").addEventListener("click", showTvPage);
//let musicPageBtn=document.querySelector("#live-page-btn").addEventListener("click", showMusicPage);


//show home page
function showHomePage(){
    if (showHome.style.display=="block"){
        showHome.style.display="block";
        showLive.style.display="none";
        showTv.style.display="none";
    }
    else{
        showLive.style.display="none";
        showHome.style.display="block"; 
        showTv.style.display="none";
    }
}

//show live page
function showLivePage(){
    if (showLive.style.display=="block"){
        showLive.style.display="block";
        showHome.style.display="none";
        showTv.style.display="none";
    }
    else{
        showLive.style.display="block";
        showHome.style.display="none"; 
        showTv.style.display="none";
    }
}

//show TV page
function showTvPage(){
    if (showTv.style.display=="block"){
        showTv.style.display="block";
        showHome.style.display="none";
        showLive.style.display="none";
    }
    else{
        showTv.style.display="block";
        showHome.style.display="none"; 
        showLive.style.display="none";
    }
}

//show Music page
/*function showMusicPage(){
    if (showLive.style.display=="block"){
        showLive.style.display="block";
        showHome.style.display="none";
    }
    else{
        showLive.style.display="block";
        showHome.style.display="none"; 
    }
}*/