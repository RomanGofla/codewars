function solution(input, markers) {
    let newString = "";
    for (let i = 0; i < input.length; i++) {
        let character = input[i];
        if (markers.includes(character)) {
            // move i to just before the end of the current line
            i = input.indexOf("\n", i)-1;
            // Remove the white space that we already added at the end
            newString = newString.trimRight();
            // If no newline character at end of last line: break
            if (i < 0) break;
            // Skip rest of this iteration
            continue;
        }
        newString += input[i];    
    }
    return newString;
};

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))