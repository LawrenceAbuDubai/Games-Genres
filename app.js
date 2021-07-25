alert ("Hello world")
var name = prompt("Hello 😀!! what is your name")

alert("hey, wlecome to my website " + name )

var favGenre = prompt("what is you fav game genre? sports , RPG , action ?")

while(favGenre != "sports" && favGenre != "RPG" && favGenre != "action"){

if(favGenre == null){
  break
}
else{
  favGenre = prompt("what is you fav game genre? sports , RPG , action ?")}

}

if(favGenre == "sports"){
document.write(
  "<div>" + "<h3>" + favGenre+"</h3>"
+ "<img  src='https://e7.pngegg.com/pngimages/549/880/png-clipart-lewiston-event-center-sport-flight-simulator-simulation-multi-sports-game-text-thumbnail.png' width='100' height='100'     />" + "</div>")
}
else if (favGenre =="RPG"){
document.write(
  "<div>" + "<h3>" + favGenre+"</h3>"
+ "<img  src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3145d7a9-72d5-4597-b9d4-e94d73649344/d9522tf-949b1436-635d-4a40-9eec-37f452f37c77.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMxNDVkN2E5LTcyZDUtNDU5Ny1iOWQ0LWU5NGQ3MzY0OTM0NFwvZDk1MjJ0Zi05NDliMTQzNi02MzVkLTRhNDAtOWVlYy0zN2Y0NTJmMzdjNzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1fRA5wJtS0vkiHe2NhIOFxfw0RXw8ja_AJ_Kmw3o_gI' width='100' height='100'     />" + "</div>")
}
else if(favGenre =="action"){
document.write(
  "<div>" + "<h3>" + favGenre+"</h3>"
+ "<img  src='https://ucarecdn.com/846c48c4-27f7-4e55-98e5-68ded37ff6a5/' width='100' height='100'     />" + "</div>")
}
else{
  alert('I apologize but we dont have this genre yet! 😥')
}