const { Block } = require('../models');

let listarService = async() => {
    try{
        let resp = await Block.findAll();
        return resp;
    }catch (e){
        console.log('ERROR ', e)
    }
}
module.exports = { listarService }