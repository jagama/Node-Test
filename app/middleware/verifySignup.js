// verify my user name + mail + role

const db = require('../models')
const ROLES = db.ROLES
const User = db.user

// check if user exist
checkUserNameAndMail = (req, res, next) => {
    //username
    User.findOne({
        where:{
            username:req.body.username
        }
    }).then(user => {
        if(user){
            res.status(400).send({
                msg:'user already exist'
            })
            return
        }
    })

    //mail
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(mail => {
        if(mail){
            res.status(400).send({
                msg:'mail already exists'
            })
            return
        }
    })

    next()
}

// check if role is ok
checkIfRoleExists = (req, res, next) => {
    if(req.body.roles){
        for(const element of req.body.roles) {
            if (!ROLES.includes(element)){
                res.status(400).send({
                    msg:'roles does not exists'
                })
            }
        }
    }
    next()
}

const verifySignUp = {
    checkUsernameAndEmail : checkUserNameAndMail,
    checkIfRoleExists : checkIfRoleExists
}

module.exports = verifySignUp