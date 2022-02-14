function topThreeWords(text) {
    let regex = ".*[a-zA-Z].*";
    if (text.match(regex)) {
        let wordMap = new Map();
        text.split(' ').forEach(word => {
            if (word) {
                word = word.toLowerCase();
                if (wordMap.has(word)) {
                    let count = wordMap.get(word);
                    count ++;
                    wordMap.set(word, count);
                } else {
                    wordMap.set(word, 1);
                }
            }
        })
        const sortedWordMap = new Map([...wordMap.entries()].sort((a, b) => b[1] - a[1]));
 
        let result = Array.from(sortedWordMap.keys()).filter( (word, index) => index < 3);
        result = result.map(res => {
            res = res.replace(/[/.,]/g, '')
            if (res !== "") {
                return res
            }
        })
        return result.filter(res => res !== undefined)
     
    } else {
        return [];
    }
}

console.log(topThreeWords('In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.'))

//Best practices

// let topThreeWords = text => {
//     let dict = new Map();
//     text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
//         let word = match.toLowerCase();
//         dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
//     });
//     dict.delete("'");
//     return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
// };