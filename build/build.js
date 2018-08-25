const ora = require('ora');
const webpack = require('webpack')

process.env.NODE_ENV = 'production'
const config = require('./base.conf')
const del = require('del')
const path = require('path')
const logger = require('./util/logger')

const spinner = ora('builder is start running... \n').start();

logger.logo()
del.sync([path.resolve('dist')])

const compiler  = webpack(config,function(err,stats){
    if (err) {
        console.log(err)
        return;
    }
    console.log(stats.toString({
        assets:true,
        hash:false,
        colors:true,
        modules: false,
        cached: false,
        cachedAssets: false,
        children: false,
        chunkOrigins:false,
        moduleTrace:false,
        chunks:false,
        performance: true,
        usedExports: false,
        source: false,
        providedExports: false,
        warnings:false
    }))
})

compiler.hooks.done.tap('LemoncPlugin',()=>{
    spinner.succeed('build ok!')
})