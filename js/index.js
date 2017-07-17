var calcArea = $("#calculating");
var result = $("#result");
var expression;
var answer;

$(document).ready(function(){
 $(".btn").not("#equal, #clearAll, #clear, #percent").click(function(){
    expression = calcArea.append(this.value).html();
    result.html(this.value);
   if (this.value === "+") {
     $("#flash").html("plus").fadeIn("fast").fadeOut("fast");
   }  else if (this.value === "-") {
     $("#flash").html("minus").fadeIn("fast").fadeOut("fast");
   } else if (this.value === "×") {
     $("#flash").html("times").fadeIn("fast").fadeOut("fast");
   } else if (this.value === "÷") {
     $("#flash").html("devides").fadeIn("fast").fadeOut("fast");
   }
    else {$("#flash").html(this.value).fadeIn("fast").fadeOut("fast");}
  });

  $("#clearAll").click(function() {
    return (calcArea.html(""),$("#result")).html(0);
  })
  
 $("#clear").click(function() {
   if (result.html() == "0") {
      expression = expression.split("").slice(0,-1).join("");
      calcArea.html(expression);
   } else {
     expression = $("#result").html();
     expression = expression.split("").slice(0,-1).join("");
      calcArea.html(expression);
   }

 })
  
  $("#equal").click(function(){
     expression = expression.replace(/×/g, '*').replace(/÷/g, '/');
     answer = eval(expression);
     if(answer.toString().length > 7) {
       answer = "~" + Math.round(answer * 10000.0) / 10000.0;
       $("#flash").html("~").fadeIn("fast").fadeOut("fast")
     }
     result.html(answer);
      $("#flash").html(answer).fadeIn("fast").fadeOut("fast")
     calcArea.html(expression);
    });

  
  $("#percent").click(function() {
    expression = eval(expression) / 100; 
    result.html(answer);
    calcArea.html(expression);
  });
 
  
});