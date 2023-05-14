import { response } from "express";
import {v4 as uuid} from "uuid";

let users = [];

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
};

export const createUser = (req, res) => {
    const user = req.body;

    users.push({...user, id: uuid()});
    res.send('Note added');

};

export const getUser = (req, res) => {
    const singleUser = users.filter((user)=>user.id === req.params.id);
    res.send(singleUser);
};

export const deleteUser = (req, res) => {
    users = users.filter((user)=>user.id !== req.params.id);
    res.send("Note deleted");
};

export const updateUser = (req, res) => {
    const user = users.find((user)=>user.id === req.params.id);
    user.title = req.body.title;
    user.message = req.body.message;
    res.send("Note updated");
};




