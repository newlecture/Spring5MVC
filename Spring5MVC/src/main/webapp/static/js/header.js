window.addEventListener("load", function () {
            
    var moreVertButton = document.querySelector(".more-vert-button");
    var hamburgerButton = document.querySelector(".hamburger-button");
    var headerSection = document.querySelector("#header .header-section");
    var mainMenu = document.querySelector(".main-menu");
    var mainMenuList = document.querySelector(".main-menu .list");
    var subMenu = document.querySelector(".sub-menu");
    var subScreen = document.createElement("div");

    subScreen.style.position = "fixed";
    subScreen.style.backgroundColor = "#000000";
    subScreen.style.opacity = 0.5;
    subScreen.style.top = "0px";
    subScreen.style.left = "0px";
    subScreen.style.width = "100%";
    subScreen.style.height = "100%";
    subScreen.style.zIndex = 101;
    subScreen.style.display = "none";
    //subScreen.style.transitionDuration = "0.5s";
    //subScreen.style.transitionProperty = "opacity";
    subScreen.addEventListener("click", function () {
        subScreen.style.display = "none";
        subMenu.style.left = "-80%";
    });
    subMenu.parentElement.insertBefore(subScreen, subMenu);
    
    moreVertButton.onclick = function () {
        
        headerSection.classList.toggle("hide");

        //headerSection.style.display = "flex";
        //headerSection.style.position = "absolute";
        //headerSection.style.left = "0px";
        //headerSection.style.top = "50px";
        //headerSection.style.width = "100%";
        //headerSection.style.height = "0px"; // 조건비교를 위한  초기값
        ////mainMenu.style.display = "none";

        //if (mainMenu.style.display == "none") { // 높이가 0 이면
        //    visual.style.marginTop = "30px";
        //    headerSection.style.height = "30px";

        //    setTimeout(function () {
        //        mainMenu.style.display = "flex";
        //    }, 500);
        //}
        //else {
        //    mainMenu.style.display = "none";
        //    visual.style.marginTop = "0px";
        //    headerSection.style.height = "0px";

        //    // setTimeout(function(){

        //    // }, 500);
        //}

    };

    // hamburgerButton.onclick = function () {
    //     subScreen.style.display = "block";
    //     subMenu.style.left = "0%";

    // };
    
/*            // 미디어 상태가 바뀔 때마다 동적으로 대처해야 할 경우에 사용하는 코드
    window.matchMedia("(max-width:640px)").addListener(function (e) {
        if (e.matches) {
            //headerSection.classList.add("hide");
            //mainMenu.classList.add("hide");
        }
    });
    window.matchMedia("(min-width:641px)").addListener(function (e) {
        if (e.matches) {
            //headerSection.classList.remove("hide");
            //mainMenu.classList.remove("hide");
        }
    });
    window.matchMedia("(min-width:768px) and (max-width:1024px)").addListener(function (e) {
        if (e.matches) {
            //alert("b");
        }
    });
    window.matchMedia("(min-width:1024px)").addListener(function (e) {
        if (e.matches) {
            //alert("c");
        }
    });*/

});