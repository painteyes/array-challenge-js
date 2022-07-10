
let arr = [6, 4, 5, 1, 2]

function ArrayChallenge(arr) { 

  let sum = 0

  if (arr.length > 4) {
    for (let i = 0; i < 4; i++) {
      let maximum = Math.max(...arr)
      let indexOfMaxium = arr.indexOf(maximum)
      sum += maximum
      arr.splice(indexOfMaxium, 1)
    }
  } else {
    arr.forEach(int => {
      console.log(int)
      sum += int
    });
  }
 
}

ArrayChallenge(arr)

