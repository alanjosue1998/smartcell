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

}

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

}

export const methods = {
    getPhones,
    addPhones
};
