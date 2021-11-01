const d=document;

function hamburgerMenu(panelBtn,panel, menuLink){
  

    d.addEventListener("click",(e)=>{
        if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
        }
        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
        }
    })
    
     
}


w=window;

function scrollTopButton(btn){
    const $scrollBtn= d.querySelector(".hidden");

    

    w.addEventListener("scroll",(e)=>{
        let scrollTop= w.pageYOffset||d.documentElement.scrollTop;

        if(scrollTop > 600){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }

        // s
    })
    // d.addEventListener("click",(e)=>{
    //     if(e.target.matches(btn)){
    //         w.scrollto({
    //             behavior:"smooth",
    //             top:0
    //         })
    //     }
    // })
    $scrollBtn.addEventListener("click",(e)=>
{ 
    window.scroll({
        top:0,
        behavior:"smooth",
    })
})

    // console.log($scrollBtn);
}



d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    scrollTopButton(".scroll-top-btn");

});