$(document).ready(function(){
  $("form#wordpuzzleform").submit(function(event) {
    var stringinput=$("input#textinput").val();
    var inputletters=stringinput.split("");
    console.log(inputletters);
    for(var index=0; index < inputletters.length; index+=1){
        if(inputletters[index]==="a" || inputletters[index]==="e" || inputletters[index]==="i" || inputletters[index]==="o" || inputletters[index]==="u") {
          inputletters[index]="-"
        }
    }
    var puzzlestring = inputletters.join("");
    console.log(puzzlestring)
    $(".outputstring").text(puzzlestring)
    $("#inputwords").toggle();
    $("#outputwords").toggle();
    event.preventDefault();
  });

  $("form#factorialform").submit(function(event){
      var numberinput=parseInt($("input#numberinput").val());
      var total=1;
      for(var index=1; index<=numberinput; index+=1){
        total *=index;
      }
      // var numbers=[];
      // for(var index=numberinput; index>0; index-=1){
      // numbers.push(index);
      // }
      // var total = numbers.reduce(function(a,b){
      //   return a*b;
      // });
      $("#inputnumber").toggle();
      $("#outputnumber").toggle();
      $(".outputfactorial").text(total)
      event.preventDefault();
  });

  $("form#palindromeform").submit(function(event){
    var palindrome=$("input#palindromeinput").val();
    var capitalizedinput=palindrome.toUpperCase();
    var nospaces = capitalizedinput.split(" ");
    var nospacestring = nospaces.join("");
    var palindromearray = nospacestring.split("");
    var palindromearrayreversed = [];
    for(index=(palindromearray.length)-1; index>=0; index-=1){
      palindromearrayreversed.push(palindromearray[index]);
    };
    console.log(palindromearray);
    console.log(palindromearrayreversed);
    var pal = true;
    for(var index=0; index<palindromearray.length; index+=1){
      if(palindromearray[index]!= palindromearrayreversed[index]){
        var pal = false;
      }
    };
    if(pal === false){
      $(".notapalindrome").text("not ");
    } else {
      $(".notapalindrome").text("");
    };
    $("#inputpalindrome").toggle();
    $("#outputpalindrome").toggle();
    event.preventDefault();
  });
  $("form#primeform").submit(function(event){
    $("ul#listofprimes li").remove();
    var primeinput=parseInt($("input#primeinput").val());
    var primelist=[];
    for(var index=2; index<=primeinput; index+=1){
      primelist.push(index);
    };

    for(var prime=2; prime<=primeinput/2; prime+=1){
      for(var index=2*prime; index<=primeinput; index+=prime){
        primelist[index-2]="-";
      };
    };
    $("#inputprime").toggle();
    $("#outputprime").toggle();
    primelist.forEach(function(potentialPrime){
      if(potentialPrime != "-"){
        $("#listofprimes").append("<li>"+potentialPrime+"</li>");
      }
    });
    event.preventDefault();
  });
});
