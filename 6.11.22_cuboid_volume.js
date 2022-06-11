function encrypt(text, n) {
  //create a new string
  //iterate over text, push odd indexes then evens
  //repeat n times

  if(text.length < 1 || n<0){
      return text
  }

  let odds = []
  let evens = []
  let encrypted = ''

  for(let i=0; i<n; i++){

      for(let j=0; j<text.length; j++){
          if(j%2 === 0){
              evens.push(text[j])
          } else {
              odds.push(text[j])
          }
      }
      encrypted = odds.join('') + evens.join('')
  }
}

function decrypt(encryptedText, n) {

}