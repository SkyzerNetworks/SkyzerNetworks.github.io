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

var redirectC = 1; // 1 = on , 0 = off

function redirect_contruction() {
    if (redirectC == 1) {
        window.location.replace("/construction-page/construction.html");
    }
    else {
        console.log("No Redirect");
    }
}

// redirect_contruction();
