import React from 'react';
import styled from 'styled-components';

const Input = () => {
    return (
        <StyledWrapper>
            <div className='flex flex-col lg:gap-6 gap-3'> 
                <div className='flex lg:gap-6 gap-3 lg:flex-row flex-col'>
                    <div className="form__group field lg:w-1/2 w-full">
                        <input type="text" className="form__field text-black" placeholder="Name" required />
                        <label htmlFor="name" className="form__label">Name</label>
                    </div>
                    <div className="form__group field w-full">
                        <input type="email" className="form__field" placeholder="Name" required />
                        <label htmlFor="name" className="form__label">Name</label>
                    </div>
                </div>
                <div className="form__group field">
                    <textarea type="text" className="form__field" placeholder="Name" required />
                    <label htmlFor="name" className="form__label">Name</label>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .form__group {
    position: relative;
    padding: 20px 0 0;
    width: 100%;
    max-width: 180px;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: none;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 17px;
    color: black;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
  }

  .form__field::placeholder {
    color: transparent;
  }

  .form__field:placeholder-shown ~ .form__label {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #9b9b9b;
    pointer-events: none;
  }

  .form__field:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #116399, #38caef);
    border-image-slice: 1;
  }

  .form__field:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #38caef;
    font-weight: 700;
  }

  /* reset input */
  .form__field:required, .form__field:invalid {
    box-shadow: none;
  }`;

export default Input;
