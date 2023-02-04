export const arrayVoodoo = (array: Array<any>, size: number) => {
  let result: number[][] = [];
  let startPos = 0;
  let tempArr: any[];

  for (let i = 0; i < array.length; i = i + size) {
    let arrayCopy = JSON.parse(JSON.stringify(array));
    tempArr = arrayCopy.slice(startPos, startPos + size);

    result.push(tempArr);

    startPos = startPos + size;

       
      }
      return result
};
// const arrayVoodoo = (array: Array<any>, size: number) => {
//     let result: number[][] = [];
//     let startPos = 0;
//     let tempArr: any[];

//     for (let i = 0; i < array.length; i = i + size) {
//       console.log(`Running loop ${i}'th time`);
//       let arrayCopy = JSON.parse(JSON.stringify(array));

//       tempArr = arrayCopy.slice(startPos, startPos + size);
//       result.push(tempArr);
//       startPos = startPos + size;

//       console.log(result);
//     }
//   };
//   console.log(props.input.length);
