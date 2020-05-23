// document.querySelector(".explore").addEventListener("click", handleClick);
//
//  function handleClick() {
//    if (document.querySelector(".explore-content").style.display === "none") {
//      document.querySelector(".explore-content").style.display = "block";
//    }
//    else {
//      document.querySelector(".explore-content").style.display = "none";
//    }
//
//    buttonAnimation();
//  }
//
//
//  function buttonAnimation() {
//
//    if (document.querySelector(".explore-content").style.display === "none") {
//      document.querySelector(".explore").classList.remove("press");
//    }
//    else {
//      document.querySelector(".explore").classList.add("press");
//    }
//
//    setTimeout(function() {
//      document.querySelector(".explore").classList.remove("press");
//    }, 50);
//  }

// OR....


$(".explore").on("click", function() {
  $(".explore-content").slideToggle();
  $(".explore2").animate({height: "toggle"});
})
