let maxFavItems = 32;
let iconNameArr = [];
let htmlObjArr;
let imgMaxRandomPadding = 15;
let maxRotation =15;
let fileNames;



document.addEventListener("DOMContentLoaded", function () {

    const summonButton = document.querySelector("#Summon");

    summonButton.addEventListener("click",OnSummon);

});

function loadFavIcons() {
    //read all icons from folder /icons

    // // var fs = require('fs');
    // // var files = fs.readdirSync('/images');

    // // files.forEach(element => {
    // //     console.log(element.fileNames);
    // // });

    //client cannot read the server directory, unless use AJAX to send over
    //xml, need to hard code the names of the images...

    //fixed 30 pngs in /images
    //create strings "00" to "29"
    //put these strings into a nameArr
  
}


///run this at document.ready
function CreateFavIcons(parentGrid) {

    //clear old icons
    while (parentGrid.childElementCount > 0) {
        parentGrid.removeChild(parentGrid.firstElementChild);

    }
    for (var i = 0; i < maxFavItems / 4; i++) {


        var _img = document.createElement("img");

        //handles random selection of the array of images
        var chosenIndex =  ExtractRandomFromArrayAndRemove();
        _img.src = "favIcons/" +  chosenIndex.toString() +".png";
 
        //handle random placement algor        

        // (-1 or 1 )
        var negOrPosUnity = Math.round(Math.random() * 2 - 1) <0 ? -1:1;

        // int between 0 and 2 * (-1 or 1 )
        var rndPadtop = Math.floor(Math.random()*imgMaxRandomPadding) * negOrPosUnity;

        negOrPosUnity = Math.round(Math.random() * 2 - 1) <0 ? -1:1;
        var rndPadLeft = Math.floor(Math.random()*imgMaxRandomPadding) * negOrPosUnity;

        //handles random rotation\
        negOrPosUnity = Math.round(Math.random() * 2 - 1) <0 ? -1:1;
        var rndRot = Math.floor(Math.random()*maxRotation)*negOrPosUnity;
        


        //apply the random padding
        _img.style.paddingTop = rndPadtop.toString() + "%" ;
        _img.style.paddingLeft= rndPadLeft.toString() + "%" ;

        //apply other styles
        //_img.classList.add("myborder"); 
        // favItems is already defined and will dynamically change in style.css
        _img.classList.add("favItems");
        _img.alt = "favIcons/"+ chosenIndex.toString() + ".png";
        _img.style.rotate = rndRot.toString()+"deg"


        // console.log("run");
        // console.log(htmlRoot); 


        parentGrid.appendChild(_img);
    }
}

function GenerateMaxSizeArray() {
    for (var i = 0; i < maxFavItems; i++) {
        iconNameArr[i] = i.toString();
        //console.log("The OG arry: " + `${iconNameArr}`);
    }
}


function ExtractRandomFromArrayAndRemove(){

    var randomIndex = Math.floor(Math.random()*iconNameArr.length);

    //splice(targetIndex, remove all consecutive
    //n index from target index)
    var n = iconNameArr.splice(randomIndex,1);
    //console.log("spliced : " + n);
    //console.log("Current Array: " + `${iconNameArr}`);
    return n;
}

function ToHome(){
    window.location.href = 'index.html';
    return false;
}


function OnSummon(){
    
    GenerateMaxSizeArray();

    CreateFavIcons(document.querySelector("#favList_1"));
    CreateFavIcons(document.querySelector("#favList_2"));
}