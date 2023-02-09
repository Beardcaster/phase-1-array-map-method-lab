const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
let newWordArray;
let titleCase

function titleCased (array){

return titleCase = tutorials.map((tutorial) => {

  let temp = tutorial.split(' ');
  tutorial = temp.map((word) => {    

    const capitalFirst = word.charAt(0).toUpperCase()
    const rest = word.slice(1);
    return capitalFirst + rest;})    

  console.log(tutorial.join(' '));
  return tutorial.join(' ');
  
  })}


// const rollCall = skiSchool.map((student) => student + " the skier");

////////////////////
////EXAMPLE CODE////
////////////////////

// const titleCased = () => {
//   return tutorials
// }

//comment back in above for lab

// const skiSchool = ["aki", "guadalupe", "lei", "aalam"];

// // const rollCall = [];
// const rollCall = skiSchool.map((student) => student + " the skier");

// for (const student of skiSchool) {
//   rollCall.push(student + " the skier");
// }


// console.log(rollCall)

// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ];

// const activatedRobots = robots.map((robot) => {
//   return Object.assign({}, robot, {
//     modes: robot.modes * 2,
//     isActivated: true,
//   })
// })

// console.log(activatedRobots);

