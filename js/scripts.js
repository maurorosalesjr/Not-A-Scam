$(document).ready(function() {
    $("#formOne").submit(function(event) {
      event.preventDefault();
      const suckerInput = $("input#sucker").val();
      const creditInput= $("input#credit").val();
      const securtitycodeInput = $("input#securityCode").val();
      const numberInput = $("input#number").val();
      const motherBirth = $("#born").val();
      const favColor = $("#crayon").val();
      const smorts = $("input:radio[name=smarts]:checked").val();
      const people = $("#people").val();
      const suckerMomInput = $("input#suckermom").val();

      if (smorts===("Elementy")) {
        alert("Elementry School? This really was just stealing candy from a baby!")
      }
      else if (smorts===("High School")){
        alert("Teenagers these days! Too stupid to not fall for easy scams like this one!")
      }
      else {
        alert("How did you manage to graduate college and still be dumb enough to fall for scams like this?")
      }

      console.log(favColor);
  
      $(".sucker2").text(suckerInput);
      $(".credit").text(creditInput);
      $(".securityCode").text(securtitycodeInput);
      $(".number").text(numberInput);
      $(".birth").text(motherBirth);
      $(".favColor").css(favColor);
      $(".smorts").text(smorts);
      $(".peeps").text(people);
      $(".suckermom").text(suckerMomInput);
      $("#formletter").css("color",favColor);
  
      $("#formletter").show();
    });
  });