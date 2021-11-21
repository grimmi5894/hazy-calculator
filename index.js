const isNumeric = (item) => {
  return !isNaN(item) && item !== ''
}

const isValid = (item) => {
  const operators = ['+', '-', '*', '/']

  return isNumeric(item) || operators.includes(item)
}

const calculate = () => {

}

module.exports = calculate
