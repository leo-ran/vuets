const chalk = require('chalk')
const cfonts = require('cfonts')
function log(type,content){
    console.log(`┏—${type}—————————————————————`)
    console.log(`\n`)
    console.log(` ${content}`)
    console.log(`\n`)
    console.log(`┗————————————————————————`)
}

function error(text){
    type = chalk.redBright('Error')
    log(type,text)
}

function success(text){
    type = chalk.greenBright('Success')
    log(type,text)
}

function warn(text){
    type = chalk.yellowBright('Warn')
    log(type,text)
}

function info(text){
    type = chalk.blueBright('Info')
    log(type,text)
}

function logo(text){
    cfonts.say(text || 'Lemonc',{
        font: 'simple',
        align: 'left', 
        colors: ['magenta'],
        background: 'transparent',
        letterSpacing: 0.1, 
        lineHeight: 0.1,
        space: true,  
        maxLength: '', 
    })
}

module.exports = {
    error,
    success,
    warn,
    info,
    logo
}