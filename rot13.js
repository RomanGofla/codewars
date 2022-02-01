function rot13(message){
    const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
    return cipher[0]
    // return message.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)])
}

console.log(rot13('Number'))