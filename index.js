import fs from "fs"
import http from "http"



// console.log("hellow node")

// fs.writeFileSync("tst.txt", "hey node", "utf-8") 



// const data = fs.readFileSync("./tst.txt", "utf-8");
// console.log(data)

// New-Item view\about.html


const PORT = 4000

const server = http.createServer((req, res) => {
    
    if (req.url === '/.well-known/appspecific/com.chrome.devtools.json') {
        return res.end()
    }

    console.log(req.url)
    res.setHeader("Content-Type", "text/html")
    const home = fs.readFileSync("./view/home.html", "utf-8");
    const about = fs.readFileSync("./view/about.html", "utf-8");



    switch (req.url) {
        case '/':
      res.end(home);        
          break

        case '/about':
            res.end(about)
            break

        default:
            res.end(`
                <h1>404 - Page Not Found</h1>
                <a href="/">Go Back Home</a>`)}
})


server.listen(PORT, () => {
    console.log(`Server running  ${PORT}`)
})

  fs.mkdir('./view', (er) => {
      if (er) console.log(er);
 });
