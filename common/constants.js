
const constants = {}

constants.DATA_DIR = "../data"
constants.RAW_DIR = constants.DATA_DIR + '/raw'
constants.DATASET_DIR = constants.DATA_DIR + '/dataset'
constants.JSON_DIR = constants.DATASET_DIR + '/json'
constants.IMG_DIR = constants.DATASET_DIR + '/img'
constants.SAMPLES = constants.DATASET_DIR + '/samples.json'
constants.JS_OBJECTS = "../common/jsObjects"
constants.SAMPLES_JS = "../common/jsObjects/samples.js"
constants.FEATURES = constants.DATASET_DIR + "/features.json"
constants.FEATURES_JS = constants.JS_OBJECTS + "/features.js"

if(typeof module !== 'undefined') {module.exports = constants}