import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler}></ContactCard>
        );
    })

    return(
        <div className="ui celled list">{renderContactList}</div>
    );
}

export default ContactList;