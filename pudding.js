function value(a){
    if(a<=1/3)
        return "剪刀";
    else if(a<=2/3)
        return "石頭";
    else
        return "布";
}

function compare(a,b){
    if(a==b)
        return "平手!";
    else if(a=="剪刀"&&b=="布"||a=="石頭"&&b=="剪刀"||a=="布"&&b=="石頭")
        return "你贏了!";
    else
        return "你輸了!";
}

var cpt=Math.random();
var usr=prompt("輸入剪刀、石頭或布");
while(usr!="剪刀"&&usr!="石頭"&&usr!="布")
    var usr=prompt("輸入剪刀、石頭或布");
cpt=value(cpt);
alert("電腦: "+cpt);
alert(compare(usr,cpt));