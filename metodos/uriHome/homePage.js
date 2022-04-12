const homePage = (app) => {
    app.get('/', (req, res) => {
        console.log('Client in Home Page')
        res.send('Home Page')
    })
}
module.exports = homePage