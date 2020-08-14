const fs = require('fs')
const { resolve } = require('path')
const { promisify } = require('util')
const { prompt } = require('inquirer')

const readDir = promisify(fs.readdir) 

const getChallenges = async () => await readDir('src')

const run = async (script, challenges) => {
  const shouldExit = script.toLowerCase() === 'exit'
  if (shouldExit) {
    console.clear()
    console.log('Exibição encerrada.')
    process.exit(0)
  }
  require(resolve('src', script))
  const { seeMore } = await prompt({
    type: 'confirm',
    name: 'seeMore',
    message: 'Quer ver outro?',
    default: true
  })

  seeMore ? main(challenges.filter(item => item !== script)) : process.exit(0)
}

const main = async (challenges=null) => {
  console.clear()
  if (!challenges) {
    challenges = await getChallenges()
    console.log('Estes scripts foram escritos para um teste da C&IT.')
  }
  const { script } = await prompt({
    type: 'list',
    name: 'script',
    message: 'Qual você quer ver?',
    choices: [...challenges, 'Exit']
  })

  run(script, challenges)
}

main()
