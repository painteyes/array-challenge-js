
let strArr = ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]

function ArrayChallenge(strArr) { 

  let dictionary = strArr[1].split(",")
  let charactersStr = strArr[0]
  let charactersSubstr1 = ''
  let charactersSubstr2 = ''

  for (let i = 1; i < charactersStr.length; i++) {
    if (dictionary.includes(charactersStr.slice(0, i)) && dictionary.includes(charactersStr.slice(i, charactersStr.length))) {
      charactersSubstr1 = charactersStr.slice(0, i)
      charactersSubstr2 = charactersStr.slice(i, charactersStr.length)
    }
    if (charactersSubstr1 && charactersSubstr2) {
      let result = charactersSubstr1 + ',' + charactersSubstr2
      return result
    } 
  }

  return 'not possible'
  
}

ArrayChallenge(strArr)

