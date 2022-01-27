function solution(str) {
  if (str.length == 0) {
    return []
  }
  let double = str.match(/.{1,2}/g)
  let splited = double.toString().split(',')
  let lastElem = splited[splited.length - 1]
  if (lastElem.length == 1) {
    splited.pop(-1)
    splited.push(lastElem.toString() + '_')
  }
  return splited
}

console.log(solution(''));

// Best solution
function solution(s){
  return (s+"_").match(/.{2}/g)||[]
}