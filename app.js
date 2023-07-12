const maincontainer=document.querySelector("#maincontainer");
maincontainer.addEventListener("wheel", function(e){
    console.log(e);
    if(e.wheelDelta>0){
        this.scrollLeft-=50;
    } else{
        this.scrollLeft+=50;
    }

}, {passive:true});