const { app } = require("./server");

const port = 80;

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})