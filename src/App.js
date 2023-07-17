import Contact from "./components/Contact";
import "./style/app.css";
import ContactAdder from "./components/ContactAdder";
import { useState } from "react";
import NavBar from "./components/NavBar";



const App = () => {
  //JSON.parse reverses the stringify and converts back into object and array
  //getItem needs parameter Index
  const getContacts = JSON.parse(localStorage.getItem("Contacts"));
  //pass empty array if there is no there is no contacts stored in local storage
  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    //...contacts means it is spread where all its elements are laid out
    //ContactData are the data written by the user
    const allContacts = [...contacts, contactData];
    setContacts(allContacts);
    //localStorege.setItem saves data in local storage of the browser two parameters
    //should be passed Index and Value
    //here value is allContacts which has the data written when in the input box
    localStorage.setItem("Contacts", JSON.stringify(allContacts));
  };
  const ClearAll = () =>{
    localStorage.clear();
    setContacts([]);
  }

  return (
    <>
    <NavBar />
      <div className="contact_adder">
        {/* child to parent communication done*/}
        <ContactAdder onContactAdded={addContactData} />
      </div>
      <div className="contact_list">
        <h3>Contact Manager</h3>
        {/* data is the data send to its exported function which is in Contacts*/}
        {/* accessing objects data with data variable*/}
        {/* Map loop loops throught contacts and displays them  */}
        {/* Here key gives a unique id to each data to remove an error*/}
        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}
        <button onClick={ClearAll}>Clear All</button>
      </div>
      
    </>
  );
};

export default App;
