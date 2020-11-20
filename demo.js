#! /usr/bin/env node
const path = require('path')
const fs = require('fs')

// get the argument
var arg = process.argv[2]

if(fs.existsSync(arg)){
    console.log('文件或文件夹已经存在')
    process.exit(1)
}

fs.mkdirSync(arg)
var html = '<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>'
var js = 'var string = "Hello World"\nalert(string)'
var css = 'h1{color: red;}'
fs.writeFileSync(path.resolve(arg, 'index.html'),html)
fs.mkdirSync(path.resolve(arg,'css'));
fs.mkdirSync(path.resolve(arg,'js'))
fs.writeFileSync(path.resolve(arg,'css','style.css'), css)
fs.writeFileSync(path.resolve(arg,'js','main.js'), js)