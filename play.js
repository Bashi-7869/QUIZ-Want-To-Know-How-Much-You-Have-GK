const chalk = require('chalk');
let readlineSync = require('readline-sync');

function play(question, answer){
  var userResponse = readlineSync.question(chalk.blueBright.bold(question.toUpperCase()))

  if(userResponse.toUpperCase() === answer){

    return true
  }
  else{
    return false
  }
}
module.exports = play