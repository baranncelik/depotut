const express = require("express");
const app = express();
const userRoutes = require("./routers/user");
const path = require("path");

app.use(userRoutes);
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs"); 
app.set(express.static(path.join("public")));


app.use((req,res) =>{
    res.status(404);
    res.send("Aradığınız sayfa silinmiş ya da yanlış adres tıklamış olabilirsiniz.");

})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
