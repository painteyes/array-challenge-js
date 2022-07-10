// Example

// Input: ["(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"]
// Output: 6

// Input: ["(0,0),(5,0),(0,2),(5,2),(2,1),(5,1),(2,-1),(5,-1)"]
// Output: 3


let strArr = ["(0,0),(0,-2),(3,0),(3,-2),(2,-1),(3,-1),(2,3),(3,3)"]

function ArrayChallenge(strArr) { 

    str = strArr[0]
    newStr = str.replaceAll("(", "").replaceAll(")", "")     
    arr = newStr.split(",")
    newArr = []
    arr.forEach(str => {
        newArr.push(parseInt(str))
    });

    function getOverlapArea(coordinates) {

        firstRectangleCoordinates = coordinates.slice(0,8)
        firstRectangleCoordinatesX = []
        firstRectangleCoordinatesY = []

        secondRectangleCoordinates = coordinates.slice(8,16)
        secondRectangleCoordinatesX = []
        secondRectangleCoordinatesY = []

        for (let i = 0; i < firstRectangleCoordinates.length; i++) {
            if (i == 0 || i % 2 == 0) {
                firstRectangleCoordinatesX.push(firstRectangleCoordinates[i])
            } else {
                firstRectangleCoordinatesY.push(firstRectangleCoordinates[i])
            }
        }

        for (let i = 0; i < secondRectangleCoordinates.length; i++) {
            if (i == 0 || i % 2 == 0) {
                secondRectangleCoordinatesX.push(secondRectangleCoordinates[i])
            } else {
                secondRectangleCoordinatesY.push(secondRectangleCoordinates[i])
            }
        }

        firstRectangleMaximumX = Math.max(...firstRectangleCoordinatesX)
        firstRectangleMinimumX = Math.min(...firstRectangleCoordinatesX)
        firstRectangleMaximumY = Math.max(...firstRectangleCoordinatesY)
        firstRectangleMinimumY = Math.min(...firstRectangleCoordinatesY)

        secondRectangleMaximumX = Math.max(...secondRectangleCoordinatesX)
        secondRectangleMinimumX = Math.min(...secondRectangleCoordinatesX)
        secondRectangleMaximumY = Math.max(...secondRectangleCoordinatesY)
        secondRectangleMinimumY = Math.min(...secondRectangleCoordinatesY)

        firstRectanglePositiveX = firstRectangleCoordinatesX.filter(int => int >= 0)
        firstRectangleNegativeX = firstRectangleCoordinatesX.filter(int => int <= 0)
        firstRectanglePositiveY = firstRectangleCoordinatesY.filter(int => int >= 0)
        firstRectangleNegativeY = firstRectangleCoordinatesY.filter(int => int <= 0)

        secondRectanglePositiveX = secondRectangleCoordinatesX.filter(int => int >= 0)
        secondRectangleNegativeX = secondRectangleCoordinatesX.filter(int => int <= 0)
        secondRectanglePositiveY = secondRectangleCoordinatesY.filter(int => int >= 0)
        secondRectangleNegativeY = secondRectangleCoordinatesY.filter(int => int <= 0)

        positiveDifferenceX = 0
        negativeDifferenceX = 0

        positiveDifferenceY = 0
        negativeDifferenceY = 0

        if (firstRectanglePositiveX.length > 0 && secondRectanglePositiveX.length > 0) {            
            if (firstRectanglePositiveX.includes(firstRectangleMinimumX) && secondRectanglePositiveX.includes(secondRectangleMinimumX)) {
                positiveDifferenceX = Math.min(firstRectangleMaximumX, secondRectangleMaximumX) - Math.max(firstRectangleMinimumX, secondRectangleMinimumX)  
            } else {
                positiveDifferenceX = Math.min(firstRectangleMaximumX, secondRectangleMaximumX) 
            }
        } 
        
        if (firstRectangleNegativeX.length > 0 && secondRectangleNegativeX.length > 0) {
            if (firstRectangleNegativeX.includes(firstRectangleMaximumX) && secondRectangleNegativeX.includes(secondRectangleMaximumX)) {
                negativeDifferenceX = Math.max(firstRectangleMinimumX, firstRectangleMinimumX) - Math.min(firstRectangleMaximumX, secondRectangleMaximumX)
            } else {
                negativeDifferenceX = Math.max(firstRectangleMinimumX, secondRectangleMinimumX)
            }
        }  

        if (firstRectanglePositiveY.length > 0 && secondRectanglePositiveY.length > 0) {             
            if (firstRectanglePositiveY.includes(firstRectangleMinimumY) && secondRectanglePositiveY.includes(secondRectangleMinimumY)) {
                positiveDifferenceY = Math.min(firstRectangleMaximumY, secondRectangleMaximumY) - Math.max(firstRectangleMinimumY, secondRectangleMinimumY)
            } else {
                positiveDifferenceY = Math.min(firstRectangleMaximumY, secondRectangleMaximumY) 
            }
        } 
        
        if (firstRectangleNegativeY.length > 0 && secondRectangleNegativeY.length > 0) { 
            if (firstRectangleNegativeY.includes(firstRectangleMaximumY) && secondRectangleNegativeY.includes(secondRectangleMaximumY)) {
                negativeDifferenceY = Math.max(firstRectangleMinimumY, firstRectangleMinimumY) - Math.min(firstRectangleMaximumY, secondRectangleMaximumY)
            } else {
                negativeDifferenceY = Math.max(firstRectangleMinimumY, secondRectangleMinimumY)
            }
        }  
          
        overlapWidth = positiveDifferenceX + Math.abs(negativeDifferenceX)
        overlapHeight = positiveDifferenceY + Math.abs(negativeDifferenceY)
        overlapArea = overlapWidth * overlapHeight

        return overlapArea

    }

    function getFirstRectangleArea(coordinates) {

        rectangleCoordinates = coordinates.slice(0,8)

        rectangleXCoordinates = []
        rectangleYCoordinates = []

        for (let i = 0; i < rectangleCoordinates.length; i++) {
            if (i == 0 || i % 2 == 0) {
                rectangleXCoordinates.push(rectangleCoordinates[i])
            } else {
                rectangleYCoordinates.push(rectangleCoordinates[i])
            }
        }

        maximumX = Math.max(...rectangleXCoordinates)
        minimumX = Math.min(...rectangleXCoordinates)

        maximumY = Math.max(...rectangleYCoordinates)
        minimumY = Math.min(...rectangleYCoordinates)

        width = 0
        height = 0

        width += maximumX 
        if (minimumX < 0) {
            width += Math.abs(minimumX); 
        } else {
            width -= minimumX;
        }
      
        height += maximumY
        if (minimumY < 0) {
            height += Math.abs(minimumY); 
        }
        
        area = width * height

        return area

    }
 
    result = 0
    
    if (getOverlapArea(newArr)) {
        result = Math.floor(getFirstRectangleArea(newArr) / getOverlapArea(newArr))
    }

    console.log('OverlapArea = ' + getOverlapArea(newArr))
    console.log('FirstRectangleArea = ' + getFirstRectangleArea(newArr))
    console.log('FirstRectangleArea / OverlapArea = ' + result)

    return result; 
  
}

ArrayChallenge(strArr)
