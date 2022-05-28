import totp from 'hotp-totp'
// import fs from 'fs'
const fs = require('fs') // TODO use import

const dataPath = '/Users/yunser/data/totp/data2.json'

window.getList = () => {
    try {
        console.log('fs', fs.readFileSync)
        const content = fs.readFileSync(dataPath, 'utf-8')
        console.log('content', content)
        const data = JSON.parse(content)
        return data.data
    } catch (err) {
        console.log(`get data from ${dataPath} fail`)
        console.error(err)
    }
}

window.getCode = async (secret) => {
    return await totp.totp(secret)
}

window.copy = (code) => {
    utools.copyText(code)
    utools.hideMainWindow()
    // utools.showNotification('已复制')
    window.utools.outPlugin()
}

window.getList()
