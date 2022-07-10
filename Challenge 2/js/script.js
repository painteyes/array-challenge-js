
let strArr = ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]

function ArrayChallenge(strArr) { 

    let characters = strArr[0]
    let dictionary = strArr[1].split(",")
  
    console.log(characters[7])
    console.log(dictionary)
  
    let firstWord = ''
    let secondWord = ''
  
    for (let i = 1; i <= characters.length; i++) {
  
      let thisWord = characters.slice(0, i)
  
  
      if (dictionary.includes(thisWord)) {
        console.log(characters.length)
        console.log(characters.slice(i, characters.length))

        // && dictionary.includes(characters.slice(i, characters.length - 1))
        firstWord = thisWord 

        


        secondWord = characters.slice(i, characters.length )
      }
  
    }
  
    if (firstWord && secondWord) {
      let result = firstWord + ',' + secondWord
      console.log(result)
      return result
    } else {
      return 'not possible'
    }
  
  }

ArrayChallenge(strArr)

