import { getConnection } from "./../database/database"

const getPhones = async(req,res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("Select id, brand, model, price, description, storage, ram, screen, camera, category, status from Phones");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getPhone = async(req,res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("Select id, brand, model, price, description, storage, ram, screen, camera, category, status from Phones WHERE id = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addPhones = async(req,res) => {
    try {
        const { brand,model,price,description,storage,ram,screen,camera,category,status } = req.body;
        
        if (brand === undefined || model == undefined ) {
            res.status(400).json({ message: "Bad Request. Please fill all field."})
        }

        const phones = { brand,model,price,description,storage,ram,screen,camera,category,status };
        const connection = await getConnection(); 
        const result = await connection.query("insert into Phones SET ?", phones);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deletePhone = async(req,res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Phones WHERE id = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updatePhone = async(req,res) => {
    try {
        const { id } = req.params;
        const { brand,model,price,description,storage,ram,screen,camera,category,status } = req.body;

        if (id === undefined || brand === undefined || model == undefined ) {
            res.status(400).json({ message: "Bad Request. Please fill all field."})
        }

        const phones = { brand,model,price,description,storage,ram,screen,camera,category,status };
        const connection = await getConnection();
        const result = await connection.query("UPDATE Phones SET ? where id = ?", [phones, id]);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getPhones,
    getPhone,
    deletePhone,
    updatePhone,
    addPhones
};
