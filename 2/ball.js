// 相当于定义了一个类，其实是js里的对象
// 定义的参数有，载入的图片，坐标、移动速度、初始状态
// 定义的方法有，发射、移动、反弹，具体怎么实现，不关心
var Ball = function () {
    var image = imageFromPath('ball.png')
    var o = {
        image: image,
        x: 100,
        y: 200,
        speedX: 5,
        speedY: 5,
        fired: false,
    }
    o.fire = function () {
        o.fired = true
    }
    // 动一次
    o.move = function () {
        if (o.fired) {
            if (o.x < 0 || o.x > 400) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 300) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.反弹 = function () {
        o.speedY *= -1
    }
    return o
}
