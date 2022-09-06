//==== Multidimensional Array =====

// const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < data.length; i++) {
  // console.log(`i is: ${data}`)
  //console.log(data[i]);                  //log nested array
  for (let j = 0; j < data[i].length; j++) {
    //console.log(data[i][j]);          //each item in the nested array
  }
}

//console.log(data[2][1]);
//console.table(data)  // Good for nested arrays

const studentsData = [
  ["Jack", 24],
  ["Sara", 23],
  ["Peter", 24],
];

for (let i = 0; i < studentsData.length; i++) {
  //console.log(studentsData[i]);

  for (let j = 0; j < studentsData[j].length; j++) {
    //console.log(studentsData[i][j]);
  }
}


// ===== USING forEach
studentsData.forEach((arr, idx) => {
  console.log(arr);
  arr.forEach((item) => {
    console.log(item);
  });
});
