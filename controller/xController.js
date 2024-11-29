const { listarService } = require('../service/xService');

let listar = async(req, res) => {
    try{
        let respuesta = await listarService()
        res.json(respuesta);
    }catch (e){
        console.log('ERROR ', e)
    }
}
module.exports = { listar } 