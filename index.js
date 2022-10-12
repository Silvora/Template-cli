#!/usr/bin/env node
//声明脚本

//基本命令
const program = require("commander");
//下载模版
//const download = require("download-git-repo");
//const download = require('download-git-repo')
//解析文件
//const handlebars = require("handlebars");
//交互式
const inquirer = require("inquirer");
//import inquirer from "inquirer"

// const path = require("path");
// //判断是否存在相同文件
// const rimraf = require("rimraf");
// //下载样式
// const ora = require("ora");

//const chalk = require("chalk")

// const logSymbols = require("log-symbols")

const Download = require("./download")
const TemplateInfo = require("./templateInfo")

//版本
program.version("1.0.0")

const vueTemplate = require("./template/vue")

//vue
program.command("vue").description("Vue初始化模版").action(() => {
    inquirer.prompt([{
        type: "rawlist",
        pageSize: 10,
        name: "vue-template",
        message: "请选择一个框架：",
        choices: [...vueTemplate]
    },]).then(res => {
        //console.log(res["react-template"])
        let name = res["vue-template"]
        Download(name, vueTemplate)
    })
})



const reactTemplate = require("./template/react");
//const logSymbols = require("log-symbols");
//console.log(Template)

//const reactList = Template.filter(res => res.name)

//react
program.command("react").description("react初始化模版").action(() => {
    // console.log(reactTemplate)
    inquirer.prompt([{
        type: "rawlist",
        pageSize: 10,
        name: "react-template",
        message: "请选择一个框架：",
        choices: [...reactTemplate]
    },]).then(res => {
        //console.log(res["react-template"])
        let name = res["react-template"]
        Download(name, reactTemplate)
    })
})




//list
program.command("list <templateName>").description("框架列表").action((templateName) => {
    // console.log("vue")
    // console.log("react")

    if (templateName === "react") {
        TemplateInfo(reactTemplate)
    }
    if (templateName === "vue") {
        TemplateInfo(vueTemplate)
        // vueTemplate.forEach((res, i) => {
        //     console.log(chalk.underline.bgBlue(i + 1), res.name, chalk.blue("--->"), chalk.green(res.message), "\n")
        // })
    }
})





program.parse(program.argv)