var val_one = null,val_two=0,op=null;
window.onload = function(){
    var display = document.getElementById("display")
    display.value = "";
    
    var plus = document.getElementById("plus");
    var minus = document.getElementById("minus");
    var mult = document.getElementById("mul");
    var div = document.getElementById("div");

    function func(op,val_one,value){
      switch (op) {
            case "+":
                return val_one+parseFloat(display.value)
            case "-":
                return val_one-parseFloat(display.value)
            case "*":
                return val_one*parseFloat(display.value)            
            case "/":
                return val_one/parseFloat(display.value)      
            default:
                break;
      }  
    }

    plus.onclick = function(){

        if(op==null){
            val_one = parseFloat(display.value)
            op = '+';
        }
        else{
            val_one = func(op,val_one,display.value)
            op='+';
        }
        
        
        display.value ='';
    }
    minus.onclick = function(){
        if(op==null){
            val_one = parseFloat(display.value)
            op = '-';
        }
        else{
            val_one = func(op,val_one,display.value)
            op='-';
        }
        
        
        display.value ='';
    }

   
    mult.onclick = function(){
        
        if(op==null){
            val_one = parseFloat(display.value)
            op = '*';
        }
        else{
            val_one = func(op,val_one,display.value)
            op='*';
        }
        
        
        display.value ='';
    }

    
    div.onclick = function(){
        if(op==null){
            val_one = parseFloat(display.value)
            op = '/';
        }
        else{
            val_one = func(op,val_one,display.value)
            op='/';
        }
        
        
        display.value ='';
    }

    var zero = document.getElementById("zero");
    zero.onclick = function(){
        display.value +='0';
    }

    var dot = document.getElementById("dot");
    dot.onclick = function(){
        display.value +='.';
    }

    var one = document.getElementById("one");
    one.onclick = function(){
        display.value +='1';
    }

    var two = document.getElementById("two");
    two.onclick = function(){
        display.value +='2';
    }

    var three = document.getElementById("three");
    three.onclick = function(){
        display.value +='3';
    }
    var four = document.getElementById("four");
    four.onclick = function(){
        display.value +='4';
    }

    var five = document.getElementById("five");
    five.onclick = function(){
        display.value +='5';
    }

    var six = document.getElementById("six");
    six.onclick = function(){
        display.value +='6';
    }

    var seven = document.getElementById("seven");
    seven.onclick = function(){
        display.value +='7';
    }

    var eight = document.getElementById("eight");
    eight.onclick = function(){
        display.value +='8';
    }

    var nine = document.getElementById("nine");
    nine.onclick = function(){
        display.value +='9';
    }

    var equal = document.getElementById("equal");
    equal.onclick = function(){
        val_one = func(op,val_one,parseInt(display.value))
        op = null
        display.value = val_one;
    }

    var three = document.getElementById("ac");
    three.onclick = function(){
        val_one=0
        display.value ='';
    }
}