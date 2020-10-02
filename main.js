myButton.addEventListener('click', (e) => {
    let request = new XMLHttpRequest()
    request.open('GET', 'http://jack.com:8888/xxx') // set request
    request.send()
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            console.log('请求响应完成')
            console.log(request.status)
            if (request.status >= 200 && request.status < 300) {
                console.log('说明请求成功')
                console.log(request.responseText)
                let text = request.responseText
                // 把符合JSON语法的字符串
                // 转换成 JS 对应的值
                let object = window.JSON.parse(text)
                console.log(typeof object)
                console.log(object)

            } else if (request.status >= 400) {
                console.log('说明请求失败')
            }
        }
    }
})