const {Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

var serviceAccount = require("../../examenfinal-ee29c-firebase-adminsdk-6gq6x-e0e43cdfb7.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:'https://examenfinal-ee29c-default-rtdb.firebaseio.com/'

});

const db = admin.database();


router.get('/',(req, res) => {

    db.ref('perroas').once('value', (snapshot) => {

        const data = snapshot.val();

        res.render('index', {perroas: data});

    });



});


router.post('/new-esta', (req, res) => {

    console.log(req.body);
    const newContact = {
        nombre:req.body.nombre,
        telf:req.body.telf,
        cod:req.body.cod


    };
    db.ref('perroas').push(newContact);
    res.redirect('/');


} );


router.get('/delete-contact/:id', (req, res) => {
db.ref('perroas/' + req.params.id).remove();



res.redirect('/');

}) ;





module.exports = router;
