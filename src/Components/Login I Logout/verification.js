import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { useNavigate } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";

import PopUpVerOTP from "./PopUpVerOTP";

const Verification = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const URL = "https://development.esaral.com/v1/users/phone-verification";

  const country_code = 91;

  const [number, setNumber] = useState("");

  const [nonce, setNonce] = useState("");

  const [status, setStatus] = useState("");

  const [otp, setOTP] = useState("");

  useEffect(() => {
    if (localStorage.getItem("Access Key")) {
      navigate("/", { state: localStorage.getItem("Access Key") });
    }
  }, []);

  async function handleShow(e) {
    console.log(number);

    if (number.length === 10 && country_code === 91) {
      try {
        const data = await axios.post(URL, {
          country_code: country_code,
          phone_number: number,
        });

        console.log(data);

        document.getElementById("error").innerHTML = "";

        console.log("status ", data.status);

        if (data.status === 200) {
          if (data.data.status === 0) {
            setNonce(data.data.data.nonce);

            setShow(true);

            // console.log(otp);
            console.log(nonce);
          } else {
            alert(data.data.message);
          }
        }
      } catch (error) {
        console.log(error);

        const err = document.getElementById("error");
        err.innerHTML = `PLease try again some time. There is ${error.message}.`;
        err.style.color = "red";
      }
    } else {
      alert("please Enter the correct values.");
    }
  }

  const popupclose = () => {
    setShow(false);
  };

  async function Ver_num(country_code, number, input_otp, nonce) {
    try {
      const data = await axios.put(URL, {
        country_code: country_code,
        phone_number: number,
        otp: input_otp,
        nonce: nonce,
      });
      console.log(data);

      console.log(data.data.data.nonce);
      setNonce(data.data.data.nonce);

      console.log(data.data.status);
      setStatus(data.data.status);

      if (status < 1) {
        const login_url = "https://development.esaral.com/v1/users/";

        const login_data = {
          login_url: login_url,
          country_code: country_code,
          number: number,
          nonce: data.data.data.nonce,
        };

        console.log(login_data);

        navigate("/login/check", { state: login_data });
      } else {
        console.log("nothing more");
        console.log(data.data.status);
      }
    } catch (AxiosError) {
      console.log(AxiosError);
    }
  }

  useEffect(() => {
    const Access_Key = localStorage.getItem("Access Key");
    Access_Key && navigate("/", { state: localStorage.getItem("Access Key") });
  }, []);

  console.log(otp);

  return (
    <>
      <MDBContainer className="my-5 gradient-form">
        <MDBRow>
          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column ms-5">
              <div className="text-center">
                <img
                  src="https://images.yourstory.com/cs/images/companies/download511-1652432483178.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
                  style={{ width: "185px" }}
                  alt="logo"
                />
                <h4 className="mt-1 mb-5 pb-1">Company Moto</h4>
              </div>
              <p>Please login to your account</p>

              <MDBInput
                wrapperClass="mb-4"
                placeholder="Phone Number"
                id="form1"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                autoFocus
              />
              {/* <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/> */}

              <div className="text-center pt-1 mb-5 pb-1">
                {/* <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn> */}

                <Button className="bg-dark" onClick={handleShow}>
                  Send OTP
                </Button>
                <br />
                <br />
                <div id="error"></div>

                <Modal show={show} onHide={popupclose}>
                  <PopUpVerOTP
                    Ver_num={Ver_num}
                    setShow={setShow}
                    country_code={country_code}
                    nonce={nonce}
                    number={number}
                  />
                </Modal>
                {/* <a className="text-muted" href="#!">Forgot password?</a> */}
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="getSeconds">
            <div className="d-flex flex-column  justify-content-center bg-dark h-100 mb-4">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">About Company</h4>
                <p className="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Verification;
