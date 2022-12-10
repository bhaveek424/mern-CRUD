/* Contains definitions of the
controller methods that were used in the preceding user route declarations as
callbacks to be executed when a route request is received by the server. */
import User from "../models/user.model";
import extend from 'loadash/extend'
import errorHandler from './error.controller'

const create = (req, res, next) => {}
const list = (req, res) => {}
const userById = (req, res, next, id) => {}
const read = (req, res)= {}
const update = (req, res, next)= {}
const remove = (req, res, next) = {}