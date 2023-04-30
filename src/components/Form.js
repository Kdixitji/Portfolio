import React, { useRef} from 'react';
import "../components/FormStyles.css";
import emailjs from "@emailjs/browser";

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventdefault();

        emailjs.sendForm('service_template', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  return (
    <div className="form" onSubmit={sendEmail}>
        <form>
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Enter your Mail"></input>
            <input type="text" placeholder="Subject"></input>
            <textarea rows="6" placeholder="Type Your Message here"></textarea>
            <button className="btn" type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form;