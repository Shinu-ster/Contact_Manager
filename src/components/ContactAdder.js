import { useState } from "react";

const ContactAdder = (props) => {
  //UseState is imported from React it isnt default
  //name variable has the parameter of useState()
  //then upon clicked the variable is changed to setName which has value
  //onClickHandler changes the variable
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = {
      id: Math.random(),
      name,
      number: mobile,
      address: location,
    };

    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Please fill all the fields!");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }
  };

  return (
    <>
      <div className="simpleAdder">
        <h3>Contact Adder: </h3>
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Your Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="text"
            placeholder="Your Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br />
          <br />
          <button>Add Contact</button>
        </form>
        {/* dynamically rendaring persons*/}
      </div>
    </>
  );
};
export default ContactAdder;
