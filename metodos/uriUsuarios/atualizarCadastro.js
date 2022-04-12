const atualizarCadastro = (app, lista) => {
    app.put('/usuarios/:id', (req, res) => {
        const {id} = req.params
        const {nome, numero} = req.body
        lista[id] = {nome, numero}
        return res.json(lista)
    })
}
module.exports = atualizarCadastro;