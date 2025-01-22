const { log } = require("console");
const constants = require("../common/constants.js")
const features = require("../common/features.js")

const fs = require("fs") //

console.log("Extracting ...");

const samples = JSON.parse(fs.readFileSync(constants.SAMPLES)) // Reading The Samples


// Extracting the Features
for(const sample of samples){

    //Getting path From Each Sample
    const paths = JSON.parse(fs.readFileSync(constants.JSON_DIR + '/' + sample.id + ".json"))


    //Creating Array Of Data Points
    sample.point = [
        features.getPathCount(paths),
        features.getPointCount(paths)
    ]
}

const featureNames = ["Path Count", "Point Count"]

//Write All This Information In The New File

//needed Datas
fs.writeFileSync(constants.FEATURES, JSON.stringify({
    featureNames, 
    samples : samples.map( s=>{
        return{
            point : s.point,
            label : s.label
        }
    })
}))


//All Datas For Building Web App
fs.writeFileSync(constants.FEATURES_JS, `const features = ${JSON.stringify({
    featureNames, 
    samples 
    })}`
)

console.log("Done!");