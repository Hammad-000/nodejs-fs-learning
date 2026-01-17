import fs from "fs"

// console.log("hellow node")

// fs.writeFileSync("tst.txt", "hey node", "utf-8") 

const data = fs.readFileSync("./tst.txt", "utf-8");
console.log(data)

//   fs.mkdir('./view', (er) => {
//       if (er) console.log(er);
//  });
