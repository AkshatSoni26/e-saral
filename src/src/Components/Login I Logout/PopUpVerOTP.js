import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function PopUpVerOTP({ Ver_num, setShow, country_code, number, nonce }) {

    const [otp, setOTP] = useState('');

    const handleClose = () => {
        console.log("under Handle close")

        if (otp.length !== 4) {
            console.log("ErrorOTP is not Correct.")
            alert("Enter the correct OTP.")
        }
        else {
            setShow(false);
            Ver_num(country_code, number, otp, nonce)
        }

    }

    return (
        <Modal.Body>
            <label className="form-label" >Input OTP Here:-  </label>
            <input className="form-control" type='text' value={otp} onChange={(e) => setOTP(e.target.value)} autoFocus></input>
            <br />
            <Button className="bg-dark" type="submit" onClick={handleClose}>
                Verifiy OTP
            </Button>
        </Modal.Body>
    )
}
