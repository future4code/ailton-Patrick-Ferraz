import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getAllUsersByName } from "./endpoints/getAllUsersByName";
import { getAllUsersByType } from "./endpoints/getAllUsersByType";
import {getAllUsersByNameAndType } from "./endpoints/getAllUsersByNameAndType";
import { getFiveUsers } from "./endpoints/getFiveUsers";
import { getAllUsersFinal } from "./endpoints/getAllUsersFinal";

app.get("/user", getAllUsers)

app.get("/user/search", getAllUsersByName)

app.get("/user/:type", getAllUsersByType)

app.get("/searchBy/", getAllUsersByNameAndType)

app.get("/userByPage", getFiveUsers)

app.get("/filtered", getAllUsersFinal)