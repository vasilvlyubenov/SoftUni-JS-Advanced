import { addForm } from "../views/add.js";
import { populate } from "../views/table.js";

document.getElementById('loadBooks').addEventListener('click', populate);

addForm();