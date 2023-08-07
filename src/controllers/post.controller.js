const {postNew} = require("../models");

const create = async (req, res) => {
    try{
        const id = req.user;
        const { title, body} = req.body;

        if(!title || !body) {
            return res.status(400).send({
                message:"some field cannot be empty"
            })
        }

        const input = await postNew.create({
            user_id: id,
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
        const { id, title, body} = req.body

        const updatedData = await postNew.update({
            user_id: id,
            title:title,
            body:body
        }, {where : {title:title}})

        const data = await postNew.findOne({
            where: { title:title }
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
                const {title} = req.body
            const deletePost = await postNew.destroy({
                where: {title:title}
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