const { Router } = require('express')
const router = Router();
const admin = require("firebase-admin");
// const serviceAccount = require("./permissions.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
//     //    databaseURL:''
// })

const db = admin.firestore();

router.post("/api/retiro", async (req, res) => {
    try {
        await db.collection("retiro")
            .doc("/" + req.body.id + "/")
            .create({ name: req.body.name, })
        return res.status(204).json();

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});

//obtiene los retiros por id
router.get("/api/deposito/:retiro_id", (req, res) => {
    (async () => {
        try {
            const doc = db.collection('deposito').doc(req.params.retiro_id);
            const item = await doc.get()
            const response = item.data()
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).send(error);
        }
    })();
});

//lista de retiros
router.get('/api/retiro', async (req, res) => {

    try {
        const query = db.collection('retiro');
        const querySnapShot = await query.get();
        const docs = querySnapShot.docs;
        const response = docs.map(doc => ({
            id: doc.id,
            name: doc.data().name
        }))
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).send(error)
    }
})

//elimina
router.delete('/api/depositoDelete/:deposito_id', async (req, res) => {
    try {

        const document = db.collection('deposito').doc(req.params.deposito_id)
        await document.delete()
        return res.status(200).json();

    } catch (error) {
        return res.status(500).send(error);
    }
});

//modifica
// router.put('/api/depositoUpdate/:deposito_id', async (req, res) => {
//     try {
//         const document = db.collection('deposito').doc(req.params.deposito_id);
//         await document.update({
//             monto: req.body.monto,
//         });
//         return res.status(200).json();
//     } catch (error) {
//         return res.status(500).json();
//     }
// });

module.exports = router;


