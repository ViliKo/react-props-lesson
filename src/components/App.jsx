import React from "react";
import ContactCard from "./ContactCard";
import * as Contacts from "../Contacts";

function App() {
  var rows = [];
  for (var i = 0; i < 3; i++) {
    rows.push(
      <ContactCard
        name={Contacts.contacts[i].name}
        link={Contacts.contacts[i].imgURL}
        tel={Contacts.contacts[i].phone}
        email={Contacts.contacts[i].email}
      />
    );
  }

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div>{rows}</div>
    </div>
  );
}

export default App;
