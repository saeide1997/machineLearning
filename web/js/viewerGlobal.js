 // console.log(samples);
 const {samples, featureNames} = features
 const groups = utils.groupBy(samples, "userID");
 //-- Create Table

 for (let userID in groups) {
   const samples = groups[userID];
   const userName = samples[0].userName;
   createRow(container, userName, samples);
 }

 const options ={
   size:500,
   axesLabels:featureNames,
   styles:utils.styles,
   transparency:0.7,
   icon:"image"
 }

 graphics.generateImages(utils.styles);

 const chart = new Chart(
   chartCn,
    samples,
    options,
    handleClick
 )