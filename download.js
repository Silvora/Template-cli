
const download = require('download-git-repo')

const path = require("path");
//判断是否存在相同文件
const rimraf = require("rimraf");
//下载样式
const ora = require("ora");

const chalk = require("chalk")

const logSymbols = require("log-symbols")


module.exports = function Download(name, reactTemplate) {
    // let pathUrl = `./template/${path}.js`

    // const reactTemplate = require(pathUrl)

    let reactData = reactTemplate.find(res => res.name === name)

    const dir = path.join(process.cwd(), name); //这里可以自定义下载的地址
    //console.log(dir)
    rimraf.sync(dir, {});  //在下载前需要保证路径下没有同名文件
    console.log(chalk.yellow(`\n${name} 模板:`))
    const spinner = ora("下载模板中...").start()
    download(reactData.url, dir, (err) => {
        if (err) {
            spinner.text = "模板下载出错!!!"
            spinner.fail()
            console.log(logSymbols.error, chalk.red(err))
        } else {
            spinner.text = "模板下载成功"
            spinner.succeed()
            // console.log(chalk.green(`${name} 模板下载成功`))
            console.log("\n", logSymbols.info, "步骤:")
            console.log(`\n  cd ${name}`)
            console.log(`  npm i .`)
        }
        //console.log(err, err ? 'Error' : 'Success')
    })
}