const chalk = require("chalk")
const logSymbols = require("log-symbols");

module.exports = function TemplateInfo(template) {
    template.forEach((res, i) => {
        console.log(chalk.underline.bgBlue(" ", i + 1, " "), res.name)
        console.log(chalk.green(res.message))
        console.log(res.info)
        console.log(logSymbols.success, "github:", res.git)
        console.log(logSymbols.success, "演示:", res.address, "\n\n\n")
        //console.log("\n")
        // , chalk.blue("--->"), chalk.green(res.message), "\n")
    })
}