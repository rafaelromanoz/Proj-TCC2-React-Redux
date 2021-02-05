const cadastroSchema=require('./cadastros')

cadastroSchema.methods(['get','post','put','delete'])
cadastroSchema.updateOptions({new:true,runValidators:true})

cadastroSchema.route('get', (req, res, next) => {

    cadastroSchema.find({}, (err, docs) => {

        if(!err) {

            res.json(docs)

        } else {

            res.status(500).json({errors: [error]})

        }

    })

})

module.exports=cadastroSchema

