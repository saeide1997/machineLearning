const draw = require('../common/draw.js')

const {createCanvas} = require('canvas')
const canvas = createCanvas(400, 400)
const ctx = canvas.getContext('2d')

const constants = {}

constants.DATA_DIR = "../data"
constants.RAW_DIR = constants.DATA_DIR + '/raw'
constants.DATASET_DIR = constants.DATA_DIR + '/dataset'
constants.JSON_DIR = constants.DATASET_DIR + '/json'
constants.IMG_DIR = constants.DATASET_DIR + '/img'
constants.SAMPLES = constants.DATASET_DIR + '/samples.json'

const fs = require('fs')

const fileName = fs.readdirSync(constants.RAW_DIR)  // Read File Names
const samples = []
let id = 1 // Giving ID for each Sample

fileName.forEach(fn => {
    // contant contains the String Of Characters, One For Each Of The Files in ROW_DIR
    const content = fs.readFileSync( // Extract The Content
        constants.RAW_DIR + '/' + fn
    )

    const {session, documentData, drawings} = JSON.parse(content)

    for(let label in drawings){
        samples.push({
            id,
            label,
            userName: documentData,
            userID: session
        })
        const paths = drawings[label]
        fs.writeFileSync(constants.JSON_DIR+ '/' + id +'.json', JSON.stringify(paths))

        generateImageFile(
            constants.IMG_DIR + '/' + id + '.png', paths
        )
        id++
    }
})

fs.writeFileSync(constants.SAMPLES, JSON.stringify(samples))

function generateImageFile(outFile, paths){
    ctx.clearRect(0, 0, canvas.width, canvas.height) 
    draw.paths(ctx, paths)

    const buffer = canvas.toBuffer('image/png')

    fs.writeFileSync(outFile, buffer)
}