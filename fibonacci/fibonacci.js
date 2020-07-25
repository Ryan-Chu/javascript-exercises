const fibonacci = function(numberOffibonacci) {
    if(numberOffibonacci < 0) return "OOPS";
    if (numberOffibonacci == 0) return 0;
    var x = 1;
    var y = 1;
    for (var i = 0; i < numberOffibonacci - 2; i ++){
        if( i % 2 == 0){
            x = x + y;
        }
        else{
            y = x + y;
        }
    }
    if(x>y){
        return x;
    }
    else{
        return y;
    }
}

module.exports = fibonacci
