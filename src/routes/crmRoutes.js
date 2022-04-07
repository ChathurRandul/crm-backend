import {
    addNewContact,
    getContacts,
    getContactByID,
    updateContact,
    deleteContact
} from '../controllers/crmController'

const routes = (app) => {

    app.route('/contact')

        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getContacts)

        // post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')

        // get a specific contact
        .get(getContactByID)

        // update a specific contact
        .put(updateContact)

        // delete a specific contact
        .delete(deleteContact);

}

export default routes;