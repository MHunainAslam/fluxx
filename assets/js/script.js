

function checkMedia(x) {
   if (x.matches) {
       $(".dropdown_menu").click(function () {
           $(this).parents('.parent_dropdown').find(".dropdown_items").slideToggle();
           $(this).parents('.parent_dropdown').find(".dropdown_menu").toggleClass('active');
           // console.log($(this).parents('.parent_dropdown').find(".dropdown_menu"));
       });
   } else {
       // document.body.style.backgroundColor = "pink";
   }
}

var x = window.matchMedia("(max-width: 768px)")
checkMedia(x)
x.addListener(checkMedia)
