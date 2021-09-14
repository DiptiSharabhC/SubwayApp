const Menu = require('../../models/menu')
function homeController() {
    return {
        async index(req, res) {
            const sandwiches= await Menu.find()
            return res.render('home', { sandwiches: sandwiches })
        }
    }
}

module.exports = homeController