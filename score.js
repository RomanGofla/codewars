function high(x){
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    let words = x.split(/\s+/);
    let best, maxscore = 0;
    for (let word of words) {
        let score = 0;
        for (let letter of word) {
            score += 1 + abc.indexOf(letter);
        }
        if (score > maxscore) {
            best = word;
            maxscore = score;
        }
    }
    return best;
}

console.log(high('lorem ipsum dolor'));

//Best practices
function high(s){
    let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}