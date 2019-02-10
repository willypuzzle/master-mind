const buildGuessingData = ({ range, numberOfDigits }) => {
  const data = []
  for (let i = 0; i < numberOfDigits; i++) {
    data.push(String(getRandomInt(range.min, range.max)))
  }
  return data
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const guess = ({ input, data }) => {
  const inputValue = input.trim()
  const inputValueArray = inputValue.split('')
  if (inputValueArray.length !== data.length) {
    throw new Error('guess: wrong input value')
  }
  let rightValueRightPosition = 0
  let rightValueWrongPosition = 0
  for (let i = 0; i < inputValueArray.length; i++) {
    let element = inputValueArray[i]
    if (data[i] === element) {
      rightValueRightPosition++
    } else if (data.indexOf(element) >= 0) {
      rightValueWrongPosition++
    }
  }
  return {
    won: rightValueRightPosition === data.length,
    rightPosition: rightValueRightPosition,
    wrongPosition: rightValueWrongPosition
  }
}

const makeStringFromGuessingData = (guessingData) => guessingData.join('')

export {
  buildGuessingData,
  guess,
  makeStringFromGuessingData
}
