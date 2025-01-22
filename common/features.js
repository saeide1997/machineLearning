const features = {}

features.getPathCount = (paths) => {
    return paths.length
}

features.getPointCount = (paths) => {
    const points = paths.flat() // Conver Array Of Array Of Points To One Big Array Of Points
    return points.length
}

if(typeof module !== 'undefined'){
    module.exports = features
}