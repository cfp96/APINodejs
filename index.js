const express = require('express');
const mongoose = require('mongoose');
const UserSchema = require('./models/User.js');
const port = process.env.PORT || 3000;
const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// conexion bd
mongoose.connect("");



//servicio web
router.get('/', (req, res) => {
    res.send("Hello World");
});
app.use(router);
app.listen(port,() => {
    console.log('Listening on '+port)
});

router.get('/user', (req, res) => {
    UserSchema.find(function(err, data){
        if(err){
            console.log(err)
        }else{
            res.send(data)
        }
    })
});

router.post('/user', (req, res) => {
    let newUser = new UserSchema({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        correo: req.body.correo,
        telefono: req.body.telefono,
        password: req.body.password,
    });
    newUser.save(function(err, data){
        if(err){
            console.log(err)
        }else{
        res.send("saved successfully " + newUser)
        }
    });
});
