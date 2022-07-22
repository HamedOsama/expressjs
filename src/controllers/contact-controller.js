const Contact = require('../models/contactForm')

const addContact = async function(req,res){
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.json({
            status: 'success',
            data: contact,
            message: 'Data Retrieved successfully',
        });
        // res.send(contact)
    } catch (error) {
        res.send(error.message)
    }
}
const getAll = async function (req,res) {
    try {
        const contact = await Contact.find({});
        res.json({
            status: 'success',
            data: contact,
            message: 'Data Retrieved successfully',
        });
    } catch (err) {
        req.send(err.message);
    }
};

module.exports = {addContact , getAll};