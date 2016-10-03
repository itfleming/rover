'use strict'

const expect = require('chai').expect
const MarsRover = require('../../marrover').MarsRover
const Mars = require('../../mars_plateau')
const process_instructions = require('../../marrover').process_instructions

describe ('The Mars rover', () => {
  describe ('creating a mars rover', ()=> {
    it('a mars rover is created and in not undefined', () => {
      const rover1 = new MarsRover()
      expect(rover1).to.not.be.undefined
    })

    it('Plateau Mars exists', () => {
      const mars1 = new Mars()
      expect(mars1).to.not.be.undefined
    })


describe ('Given a file with mars rover instructions', () => {
  describe('Read the first line and obtain the plateau size corrdinates', ()=> {
    it('open and read lines from data file test/data/mars_instructions_test, expecting the first line to show corrdinates 5 5', ()=> {
      const filename = 'test/data/mars_instructions_test'
      expect(process_instructions(filename)).to.deep.equal(['5 5'])
  })
  it('open and read lines from data file test/data/mars_instructions_test2, expecting the first line to show corrdinates 25 5', ()=> {
    const filename = 'test/data/mars_instructions_test2'
    expect(process_instructions(filename)).to.deep.equal(['25 5'])
  })
  it('open and read lines from data file test/data/mars_instructions_test3, expecting all instructions to be returned as an array of strings', ()=> {
    const filename = 'test/data/mars_instructions_test3'
    expect(process_instructions(filename)).to.deep.equal(['5 5','1 2 N','LMLMLMLMM','3 3 E','MMRMMRMRRM'])
})


})
    })
  })
})
