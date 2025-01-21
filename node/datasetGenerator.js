const draw = require('../common/draw.js')
const utils = require('../common/utils.js')
const constants = require('../common/constants.js')

const {createCanvas} = require('canvas')
const canvas = createCanvas(400, 400)
const ctx = canvas.getContext('2d')


const fs = require('fs')

const fileName = fs.readdirSync(constants.RAW_DIR)  // Read File Names
const samples = []
let id = 1 // Giving ID for each Sample

fileName.forEach(fn => {
    // contant contains the String Of Characters, One For Each Of The Files in ROW_DIR
    const content = fs.readFileSync( // Extract The Content
        constants.RAW_DIR + '/' + fn
    )

    const {session, student, drawings} = JSON.parse(content)

    for(let label in drawings){
        samples.push({
            id,
            label,
            userName: student,
            userID: session
        })
        const paths = drawings[label]
        fs.writeFileSync(constants.JSON_DIR+ '/' + id +'.json', JSON.stringify(paths))

        generateImageFile(
            constants.IMG_DIR + '/' + id + '.png', paths
        )
        utils.printProgress( id, fileName.length * 8 )
        id++
    }
})

fs.writeFileSync(constants.SAMPLES, JSON.stringify(samples))
fs.writeFileSync(constants.SAMPLES_JS, "const samples=" + JSON.stringify(samples) + ";")

function generateImageFile(outFile, paths){
    ctx.clearRect(0, 0, canvas.width, canvas.height) 
    draw.paths(ctx, paths)

    const buffer = canvas.toBuffer('image/png')

    fs.writeFileSync(outFile, buffer)
}