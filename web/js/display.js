function createRow(container, userName, samples){
    const row = document.createElement('div')
    row.classList.add('row')
    container.appendChild(row)

    const rowLabel = document.createElement('div')
    rowLabel.innerHTML = userName
    rowLabel.classList.add('rowLabel')
    row.appendChild(rowLabel)

    for(let sample of samples){
        const {id, label} = sample

        const sampleCn = document.createElement('div')
        sampleCn.id = 'sample_'+id
        sampleCn.classList.add('sampleCn')

        const img = document.createElement('img')
        img.src = constants.IMG_DIR + '/' + id + '.png'
        img.classList.add('thumb')

        sampleCn.appendChild(img)
        row.appendChild(sampleCn)
    }
}