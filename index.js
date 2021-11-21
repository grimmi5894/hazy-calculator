/* eslint-disable no-console */
const isNumeric = (item) => {
  return !isNaN(item) && item !== ''
}

const isValid = (item) => {
  const operators = ['+', '-', '*', '/']

  return isNumeric(item) || operators.includes(item)
}



const calculate = (incoming) => {
  let calculationSteps = []

  for (let i = 0; i < incoming.length; i++) {
    if (isValid(incoming[i])) {
      calculationSteps.push(incoming[i])
    }
  }

  console.log(calculationSteps)

  switch (calculationSteps[1]) {
    case '+':
      return Number(calculationSteps[0]) + Number(calculationSteps[2])
    case '-':
      return Number(calculationSteps[0]) - Number(calculationSteps[2])
    case '*':
      return Number(calculationSteps[0]) * Number(calculationSteps[2])
    case '/':
      return Number(calculationSteps[0]) / Number(calculationSteps[2])
    default:
      return NaN
  }
}

module.exports = calculate
