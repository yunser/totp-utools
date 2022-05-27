import totp from 'hotp-totp'

window.getCode = async (secret) => {
    return await totp.totp(secret)
}

window.copy = (code) => {
    utools.copyText(code)
    utools.hideMainWindow()
    // utools.showNotification('已复制')
    window.utools.outPlugin()
}
