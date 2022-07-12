
// let str = "i ran there"
// let str = "hello world"


function LetterCapitalize(str) { 

    stringsArr = str.split(' ')

    stringsArr.forEach((string, index) => {
        stringsArr[index] = string[0].toUpperCase() + string.substr(1, string.length - 1).toLowerCase()
    });

    newStr = stringsArr.join(' ')

    return newStr; 
  
}

     
LetterCapitalize(str)


