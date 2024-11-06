import express from 'express';
import jwt from 'jsonwebtoken';
import { getAllUsers, addUser, patchUser, addUsers, getUserById } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getAllUsers, (req, res) => {
    res.send(res.body);
});

router.get('/:id', getUserById);

//expects a body of the form { user: {name: "...", email: "...", password: "..."} }
router.post('/single', (req, res) => {
    if(req.body.user) {//temporary for testing. later I will activate the controller function instead.
        res.json({message: "you successfully accessed the add single user route!", data:req.body.user});
    }
});

router.post('/many', addUsers);

router.patch('/', patchUser,(req, res) => {
})

router.delete('/:id', (req,res) => {
});

router.use((err, req, res, next) => {
    console.log("error in the users route or controller", err);

    res.status(500).send("something went wrong in the server...");
});

export default router;