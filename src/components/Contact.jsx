//need to give parameter props to take data from its parent tag
const Contact = (props) => {
  return (
    <>
      <div className="contact">
        {/*Props is required to access data from the contacts object*/}
        {props.data.name}
        <br />
        {props.data.number}
        <br />
        {props.data.address}
      </div>
    </>
  );
};

export default Contact;
//export default is used when exporting a single function
