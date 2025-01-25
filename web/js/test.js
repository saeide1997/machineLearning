function createRow(container,studentName,samples){
    const row=document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
 
    const rowLabel=document.createElement("div");
    rowLabel.innerHTML=studentName;
    rowLabel.classList.add("rowLabel");
    row.appendChild(rowLabel);
 
    for(let sample of samples){
       const {id,label,student_id}=sample;
 
       const sampleCn=document.createElement("div");
       sampleCn.id="sample_"+id;
       sampleCn.onclick=()=>
          handleClick(sample,false);
       sampleCn.classList.add("sampleCn");
 
       const sampleLabel=document.createElement("div");
       sampleLabel.innerHTML=label;
       sampleCn.appendChild(sampleLabel);
       const img=document.createElement('img')
       img.setAttribute("loading","lazy")
       img.src=constants.IMG_DIR+'/'+id+'.png'
       img.classList.add("thumb")
       if(utils.flaggedUsers.includes(student_id)){
          img.classList.add("blur");
       }
       sampleCn.appendChild(img)
       row.appendChild(sampleCn)
    }
 }
 
 function handleClick(sample,doScroll=true){
    [...document.querySelectorAll('.emphasize')].
       forEach((e)=>e.classList.remove('emphasize'));
    const el=document.getElementById(
       "sample_"+sample.id
    );
    el.classList.add("emphasize");
    if(doScroll){
       el.scrollIntoView({
          behavior:'auto',
          block:'center'
       });
    }
    chart.selectSample(sample);
 }