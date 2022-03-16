let memberArray = ['egoing', 'graphittie', 'leezhce'];
console.log(memberArray[1]);

//input
let memberObject = {
  manager: 'egoing',
  developer: 'graphittie',
  designer: 'leezhce',
};

memberObject.designer = 'leezche'; //update
console.log('memberObject.designer', memberObject.designer);
console.log("memberObject['designer']", memberObject['designer']);
console.log(`designer: ${memberObject.designer}`);
delete memberObject.manager; //delete
console.log('after delete memberObject.manager', memberObject.manager);
console.log(`delete manager: ${memberObject.manager}`);
