/* Contains definitions of the
controller methods that were used in the preceding user route declarations as
callbacks to be executed when a route request is received by the server. */
import User from "../models/user.model";
import extend from 'loadash/extend'
import errorHandler from '../helpers/dbErrorHandler'

const create = async (req, res) => {
  const user = new User(req.body)
  try{
    await user.save()
    return res.status(200).json({
      messgae: "Successfully signed up! "
    })
  } catch(err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage
    })
  }
}
const list = async (req, res) => {
  try {
    let users = await User.find().select('name email updated created') 
    res.json(users)
  } catch(err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}
/*
* Load user and append to req
 */
const userById = async (req, res, next, id) => {
  try {
    let user = await User.findById(id)
    if(!user) return res.status('400').json({
      error: "User not found!"
    })
    req.profile = user
    next()
  } catch(err) {
    return res.status('400').json({
      error: "Could not retrieve user"
    })
  }
}

const read = (req, res) => {
  req.profile.hashed_password = undefined
  req.profile.salt = undefined
  return res.json(req.profile)
}
const update = (req, res, next)= {}
const remove = (req, res, next) = {}

export default {create, list, userById, read, update, remove}