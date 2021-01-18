let users = [
    {
        Name: "ghssj",
        email: "jhdsdg",
        password: 123
    },
]
// let PORT = process.env.PORT || 3000;
let express = require("express");
let cors = require("cors");
let morgan = require("morgan");
const bodyParser = require("body-parser");


let app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());



app.post("/signup", (req, res, next) => {
    let IsFound = true;
    let Nemail = req.body.email
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === Nemail) {
            IsFound = false;

            break;
        }


    }
    if (IsFound === true) {

        res.send("sign up success");
        console.log(users);
        users.push(req.body);

    } else {
        res.send("fail to sign up");
    }

   

})
app.listen(3000, () => {
    console.log("server is running on " + 3000)
}); 
