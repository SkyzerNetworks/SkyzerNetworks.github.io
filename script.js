// Javascript Code File

// File Information

// (START)

/* (START)

Date Created - 1 / 18 / 2024
Version - 0.00.00 (Startup)
Author - Michael
Company - SkyzerNetworks
Source Code - https://github.com/SkyzerNetworks/SkyzerNetworks.github.io

(END) */

function workCmd() {
    document.getElementById("commandments-banner").style.display = "flex";
    document.getElementById("goals-banner").style.display = "none";
    document.getElementById("foundation-banner").style.display = "none";
    document.getElementById("background-banner").style.display = "none";
}

function groupGls() {
    document.getElementById("commandments-banner").style.display = "none";
    document.getElementById("goals-banner").style.display = "flex";
    document.getElementById("foundation-banner").style.display = "none";
    document.getElementById("background-banner").style.display = "none";
}

function foundation() {
    document.getElementById("commandments-banner").style.display = "none";
    document.getElementById("goals-banner").style.display = "none";
    document.getElementById("foundation-banner").style.display = "flex";
    document.getElementById("background-banner").style.display = "none";
}

function background() {
    document.getElementById("commandments-banner").style.display = "none";
    document.getElementById("goals-banner").style.display = "none";
    document.getElementById("foundation-banner").style.display = "none";
    document.getElementById("background-banner").style.display = "flex";
}