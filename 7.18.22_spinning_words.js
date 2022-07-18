function spinWords(string){
    //TODO Have fun :)
    // let words = string.split(' ')
    // for(let i=0; i<words.length; i++){
    //     if(words[i].length > 4){
    //         words[i] = words[i].split('').reverse().join('')
    //     }
    // }
    // return words.join(' ')
    let words = string.split(' ').map(word => word.length > 5 ? word.split('').reverse().join('') : word)
    return words.join(' ')
}

console.log(spinWords('Welcome'))
console.log(spinWords('Hey fellow warriors'))