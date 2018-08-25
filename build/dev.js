const ora = require('ora');
const path = require('path')

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackHotMiddleware = require('webpack-hot-middleware')
const logger = require('./util/logger')

logger.logo()
process.env.NODE_ENV = 'development'
const config = require('./base.conf')

const spinner = ora('dev is start running... \n').start();
config.entry.app = [path.join(__dirname,'dev-client.js')].concat(config.entry.app)
const compiler = webpack(config)  
const port = 4000

const server = new WebpackDevServer(
    compiler,
    {
        contentBase: path.join(__dirname, '../'),
        compress: true,
        port: port,
        stats:{
            assets:true,
            colors:true,
            chunks:false,
            modules:false,
            warnings:false
        },
        before (app, ctx) {
            app.use(webpackHotMiddleware(compiler,{
                log: false, 
                heartbeat: 2500 
            }))
            
        }
    }
)
server.listen(port)

compiler.hooks.done.tap('lemoncPlugin',()=>{
    spinner.succeed(`start server http://localhost:${port}`)
})