const { request, response, next } = require('express');
const { check, validationResult } = require('express-validator');

const isPutValid = (request, response, next) =>{
    const {id, like} = request.body;
    try {
        if(!id) throw Error('Parametros invalidos');
        if(isNaN(like)) throw Error('Los likes deben ser numericos')
    } catch (error) {
        console.log(1)
        return response.status(400).json({
            error
        })
    }
    next();
}

module.exports = {isPutValid}