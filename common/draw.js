const draw = {}

draw.path = (ctx, path, color = 'blue')=>{
    ctx.strokeStyle = color;
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(...path[0])

    for(let i=1; i < path.length; i++){
        ctx.lineTo(...path[i])
    }

    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke()

}

draw.paths = (ctx, paths, color = 'pink')=>{
    for(const path of paths){
        draw.path(ctx, path, color)
    }
}

(typeof module !== 'undefined') && (module.exports = draw)