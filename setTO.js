var myTimer
var addCount = 0;
var timer_is_on = 0;
function start()
{
    myTimer = setInterval(function(){document.getElementById("demo").innerHTML= addCount;
addCount +=1;},1000)

} 
function stop()
{
    clearInterval(myTimer);
}
function reset()
{
    clearInterval(myTimer);
    addCount = 0;
    document.getElementById("demo").innerHTML = addCount;
}