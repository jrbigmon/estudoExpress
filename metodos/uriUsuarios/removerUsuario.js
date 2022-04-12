const removerUsuario = (app, lista) => {
    app.delete('/usuarios/:id', (req, res) => {
       const {id} = req.params
       return res.json(lista.splice(id, 1))
    })
} 
module.exports = removerUsuario;