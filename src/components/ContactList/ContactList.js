import React, { Component } from 'react';

class ContactList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: props.contacts
    }
  }

  render() {
    return (
    <div className="contact-list">
        <Contact />
      </div>
    )
  }
}

export default ContactList;