for (let i = 0; i < 3; i++) {
    let themeKey = (i + 1).toString();
    let theme = document.getElementById("theme" + themeKey);
    let images = imageSets[themeKey];
    let index = localStorage.getItem(`theme${themeKey}`);

    if (index === null) index = -1;
    else index = parseInt(index);

    let progress = null;
    
    if (index === -1) progress = 0;
    else progress = index;

    //console.log(`theme ${themeKey}`);
    //console.log(`progress ${progress}`);
    theme.getElementsByClassName("progress")[0].innerHTML = `${progress}/${images.length}`;
}
