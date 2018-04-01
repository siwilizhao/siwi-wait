[![Build Status](https://travis-ci.org/siwilizhao/siwi-wait.svg?branch=master)](https://travis-ci.org/siwilizhao/siwi-wait)
[![npm](https://img.shields.io/npm/v/siwi-wait.svg)](https://www.npmjs.com/package/siwi-wait)
[![npm](https://img.shields.io/npm/dt/siwi-wait.svg)](https://www.npmjs.com/package/siwi-wait)
[![Github file size](https://img.shields.io/github/size/siwilizhao/siwi-wait/lib/wait.js.svg)](https://github.com/siwilizhao/siwi-wait/lib/wait.js)

# siwi-wait
阻塞执行 在异步函数中等待指定时间 
# install

## use npm 

` npm install siwi-wait`

## use yarn

` yarn add siwi-wait`


# Example

```js
const wait = require('siwi-wait')

class Example {
    constructor() {
        this.init()
    }
    async init () {
        await wait(10000)
        console.log(1)
    }
}

module.exports = new Example()
```

> 等待10秒后输出 1