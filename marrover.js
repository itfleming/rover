'use strict'

const fs = require('fs')

class MarsRover {

}

function process_instructions (filename) {
  var data = fs.readFileSync(filename)
  var lines = data.toString().split('\n')
  var fulllines = lines.filter(function (input) {
  return input.length > 0;
})

  console.log(fulllines)

  return (fulllines)

  }

module.exports = {MarsRover:MarsRover, process_instructions:process_instructions}
