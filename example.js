var heading = prompt("Heading?")
var depth   = Number(prompt("Depth?"))

if(depth < 15){
  if(heading == "west"){
    alert("dive")
  }
  if(heading == "east"){
    alert("straight")
  }
}
if(depth == 15){
  alert("straight")
}
if(depth > 15){
  if(heading == "west"){
    alert("surface")
  }
  if(heading == "east"){
    alert("dive")
  }
}