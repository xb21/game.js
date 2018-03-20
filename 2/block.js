// 同样相当于一个类，每个砖块就是一个实例
// 画每个砖块的函数，需要砖块的坐标和生命值
var Block = function (position) {
    var p = position
    var image = imageFromPath('block.png')
    var o = {
        image: image,
        x: p[0],
        y: p[1],
        w: 50,
        h: 20,
        alive: true,
        lifes: p[2] || 1,
    }
    o.kill = function () {
        o.lifes--
        if (o.lifes < 1) {
            o.alive = false
        }
    }
    // 砖块和球的碰撞判断
    o.collide = function (b) {
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }
    return o
}
