const utils = {}

utils.formatPercent = (n) => {
    return (n*100).toFixed(2)+'%' // 2 Decimal Percentage
}

utils.printProgress = (count, max) => {
    process.stdout.clearLine() //For Get The Standard Out Put, Clear The Line
    process.stdout.cursorTo(0) // Move Cursor in The Standard OutPut Back To 0, delete The Line In The Cursor
    const percent = utils.formatPercent(count/max)
    process.stdout.write(count + '/' + max + "(" + percent + ")"  )
}

//-- Group By user ID
utils.groupBy = (objArray, key) => {
    const groups = {}
    for(let obj of objArray){
        const val = obj[key]
        if(groups[val] == null){
            groups[val] = []
        }
        groups[val].push(obj)
    }
    return groups

}

(typeof module !== 'undefined') && (module.exports = utils)