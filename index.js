import fs from "fs"
import http from "http"



// console.log("hellow node")

// fs.writeFileSync("tst.txt", "hey node", "utf-8") 

// const data = fs.readFileSync("./tst.txt", "utf-8");
// console.log(data)



const PORT = 4000

const server = http.createServer((req, res) => {
    
    console.log(req.url)
    res.setHeader("Content-Type", "text/html")

    switch (req.url) {

        case '/':
  const home = fs.readFileSync("./view/home.html", "utf-8");
      res.end(home);        
          break

        case '/about':
            res.end(`
                <h1>About Page</h1>
                <a href="/">Go Back Home</a>`)
            break

        default:
            res.end(`
                <h1>404 - Page Not Found</h1>
                <a href="/">Go Back Home</a>`)}
})


server.listen(PORT, () => {
    console.log(`Server running  ${PORT}`)
})





//   fs.mkdir('./view', (er) => {
//       if (er) console.log(er);
//  });
