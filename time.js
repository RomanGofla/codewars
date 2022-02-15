function humanReadable(seconds) {
    let hours = seconds / 3600, minutes = seconds / 60 % 60, newSeconds = seconds %  60 ;
    return formatDate(hours) +':' + formatDate(minutes)+':'+formatDate(newSeconds)
  }
  
function formatDate(n){
    let number = Number.parseInt(n)
    return number > 9? number : '0'+number;
}

console.log(humanReadable(359998))

//Best practices
function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
            pad(parseInt(seconds / 60 % 60)) + ":" +
            pad(seconds % 60)
}