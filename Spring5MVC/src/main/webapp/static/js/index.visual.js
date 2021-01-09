window.addEventListener("load", function (event) {
			
    var bannerList = document.querySelector(".banner");
    var banners = bannerList.getElementsByTagName("li");
    var bannerButtonList = document.querySelector(".banner-button-list");
    var bannerButtons = bannerButtonList.getElementsByTagName("li");
    var curButtonIndex = bannerButtons.length-1;
    var timerId = null;
    
    bannerButtons[curButtonIndex].style.color = "#ff0000";
    
    bannerList.onclick = function(e){
    	var img = e.target;
    	var courseId = img.dataset.id;
    	
    	location.href = "course/"+courseId;
    };
    
    bannerButtonList.onclick = function(e){
    	clearInterval(timerId);
    	
    	var id = e.target.dataset.id;
    	
    	for(var i=0; i<banners.length; i++){
    		banners[i].style.display = "none";    		
    	}
    	
    	var banner = bannerList.querySelector(".banner"+id);
    	
    	for(var i=0; i<banners.length; i++)
    		if(banners[i] == banner){
    			curButtonIndex = i;
    			
    			banners[curButtonIndex].style.display = "inline-block";
    			
    			for(var i=0; i<bannerButtons.length; i++)
    	    		bannerButtons[i].style.color = "#ffff00";
    			
    			bannerButtons[curButtonIndex].style.color = "#ff0000";
    			
    			break;
    		}
    	
    	if(banners.length > 1)
    		timerStart();
    };
            
    var timerStart = function(){
	    timerId = window.setInterval(function() {
	    	
	    	curButtonIndex = ++curButtonIndex%banners.length;	    	
	    	
	    	var evt = new MouseEvent("click", {
	            'view': window,
	            'bubbles': true,
	            'cancelable': true
	        });
	
	    	for(var i=0; i<bannerButtons.length; i++)
	    		bannerButtons[i].style.color = "#ffff00";
	    	
	    	var bannerButton = bannerButtons[curButtonIndex];
	    	bannerButton.dispatchEvent(evt);
	    	bannerButton.style.color = "#ff0000";
	    	
	    }, 3000);
    }
    
    
    if(banners.length > 1)
    	timerStart();
            
});                         
            
            /*// 미디어 상태가 바뀔 때마다 동적으로 대처해야 할 경우에 사용하는 코드
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
            });
*/
        