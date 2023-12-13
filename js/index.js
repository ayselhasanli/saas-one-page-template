$(".multiple-cards").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
});

function required() {
  var inp1 = document.forms["Form"]["input-1"].value;
  var inp2 = document.forms["Form"]["input-2"].value;
  var inp3 = document.forms["Form"]["input-3"].value;
  if(inp1 == "" || inp2 == "" || inp3 == ""){
    alert("Please Fill All Fields");
    return false;
  }else{
    alert("Success");
    return true;
  }
}

// $(function(){
//   $("form[name='Form']").validate({
//     rules: {
//       name: {
//         required: true,
//         minlength: 3,
//       },
//       email: {
//         required: true,
//         email: true,
//       },
//     },
//     messages: {
//       name: "Please enter your firstname",
//       email: "Please enter a valid email address"
//     },
//     submitHandler: function(form) {
//       form.submit();
//     }
//   });
// })
