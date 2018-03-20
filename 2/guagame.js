// 主要运行的步骤在这里，其余都是只运行一次
var GuaGame = function (fps) {
    var g = {
        actions: {},
        keydowns: {},
    }
    var canvas = document.querySelector('#id-canvas')
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context
    g.drawImage = function (guaImage) {
        g.context.drawImage(guaImage.image, guaImage.x, guaImage.y)
    }
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false
    })
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }
    window.fps = 30
    var runloop = function () {
        log(window.fps)
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                g.actions[key]()
            }
        }
        g.update()
        context.clearRect(0, 0, canvas.width, canvas.height)
        g.draw()
        setTimeout(function () {
            runloop()
        }, 1000 / window.fps)
    }
    // 为什么要两个 setTimeout
    setTimeout(function () {
        runloop()
    }, 1000 / fps)
    return g
}
