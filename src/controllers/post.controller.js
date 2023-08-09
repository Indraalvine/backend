const {postNew} = require("../models");
const {where} = require("sequelize")

const create = async (req, res) => {
    try{
        const { id } = req.user.id;
        console.log(id)
        const { title, body, user_id } = req.body;

        if(!title || !body) {
            return res.status(400).send({
                message:"some field cannot be empty"
            })
        }

        const createPost = await postNew.create({
            user_id: user_id,
            title: title,
            body:body
        })
        return res.status(201).send({
            message: "user created"
        })
    }catch(error){
        console.log(error)
        return res.send({
        message: "error accured",
        data: error,
      });}
}

const update = async (req, res) => {
    try{
        const { title, body} = req.body
        const { id } = req.user.id;

        const updatedData = await postNew.update({
            user_id: id,
            title:title,
            body:body
        }, {where: {id : user_id}})

        const data = await postNew.findOne({
            where : { id: user_id }
        })

          res.status(200).send({

            message:"post updated"
          })

    }catch(error){
        console.log(error)
        return res.send({
        message: "error accured",
        data: error,
      });}
}


        const deletePost = async (req,res)=>{
            try{
                const {user_id} = req.body
            const deletePost = await postNew.destroy({
                where: { id : user_id}
            })
            res.status(200).send({
                message: "post deleted",
                data: deletePost
            })
            }catch(error){
            console.log(error)
                return res.send({
                    message: "error",
                    data: error,
                  });
            }
        }

module.exports = {
    create,
    update,
    deletePost
}