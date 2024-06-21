const mainDiv = document.querySelector(".orderListSubScroll");
const subDiv = document.querySelector(".orderListSub");
  
let isSyncingMainScroll = false;
let isSyncingSubScroll = false;
  
    function syncScroll(event) {
    if (event.target === mainDiv && !isSyncingSubScroll) {
        isSyncingMainScroll = true;
        subDiv.scrollTop = mainDiv.scrollTop;
    } else if (event.target === subDiv && !isSyncingMainScroll) {
        isSyncingSubScroll = true;
        mainDiv.scrollTop = subDiv.scrollTop;
    }
    isSyncingMainScroll = false;
    isSyncingSubScroll = false;
}
    
mainDiv.addEventListener("scroll", syncScroll);
subDiv.addEventListener("scroll", syncScroll);