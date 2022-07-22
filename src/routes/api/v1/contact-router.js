const Router = require('express')
const contact = require('../../../controllers/contact-controller')
const routes = Router();
routes.route('/add-contact').post(contact.addContact)
routes.route('/all-contacts').get(contact.getAll)

module.exports = routes