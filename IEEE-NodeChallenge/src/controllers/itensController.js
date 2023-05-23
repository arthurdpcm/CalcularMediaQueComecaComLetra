const knex = require("../database/knex")
const {v4} = require("uuid")

module.exports = {
    async findAll(req,res){
        try {
            const itens = await knex("itens").select("id", "Name", "Validity")
            return res.json(itens)
        } catch (error) {
            return res.json(error)
        }
    },

    async create(req,res){
        const {name, validity} = req.body
        try {
            const item = await knex("itens").insert({id:v4() , name, validity})
            return res.json({"message":"Item has been created!"})
        } catch (error) {
            return res.json(error)
        }
    },

    async update(req, res){
        const {id} = req.params
        const itemUpdate = req.body
        try {
            const item = await knex("itens").select("*").where({id})
            if(!item){
                return res.json({"message":"Item does not exist!"})
            }

            const itemUpdated = await knex("itens").update(itemUpdate).where({id})
            return res.json("Item has been updated!")

        } catch (error) {
            return res.json(error)
        }

    },

    async delete(req,res){
        const {id} = req.params
        try {
            const item = await knex("itens").select("*").where({id})
            if(!item){
                return res.json({"message":"Item does not exist!"})
            }

            const itemDeleted = await knex("itens").delete().where({id})
            return res.json("Item has been deleted!")
        } catch (error) {
            return res.json(error)
        }
    },

    async findOne(req, res){
        const {id} = req.params
        try {
            const item = await knex("itens").select("*").where({id}).first()
            if(!item){
                return res.json({"message":"Item does not exist!"})
            }
            return res.json(item)
        } catch (error) {
            
        }
    }

}