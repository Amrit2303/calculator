function show(display)
{
document.getElementById("functions").value+=display
 }

function solve() {
  var x=document.getElementById('functions').value
  var y=eval(x)
  document.getElementById("functions").value=y
}
function clr()
{
  document.getElementById("functions").value= " "
}
