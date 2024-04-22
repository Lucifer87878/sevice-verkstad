import { useState } from "react";
import "./Form.scss";
import Button from "../Button/Button";

const Form = () => {
  const [buttonText, setButtonText] = useState("GET UPDATED");
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleClick = () => {
    event?.preventDefault();
    if (buttonText === "GET UPDATED") {
      setButtonText("YOU ARE UPDATED ✓");
      setButtonClicked(true);
    } else {
      setButtonText("GET UPDATED");
      setButtonClicked(false);
    }
  };
  return (
    <>
      <div className='Form-container'>
        <form action='' method='get' className='form-example'>
          <div className='form-example1'>
            <label htmlFor='name'></label>
            <input
              type='text'
              name='name'
              id='name'
              required
              placeholder='Full Name'
            />
          </div>
          <div className='form-example2'>
            <label htmlFor='email'> </label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='you@example.com'
            />
          </div>

          <Button
            onClick={handleClick}
            text={buttonText}
            className={`Subscribe-button ${buttonClicked ? "clicked" : ""}`}
          />
        </form>
      </div>
    </>
  );
};
export default Form;
