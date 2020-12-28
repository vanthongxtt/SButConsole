import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { ToastContainer, toast } from 'react-toastify';
import {checkEmailAddress} from '../../../utils';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const _handleForgotPassword = () => {
        if(!checkEmailAddress(email)){
            toast.error('Email không đúng định dạng!')
        }
    }
    return (
        <MDBContainer style={{ margin: '100px auto' }}>
            <MDBRow center={true}>
                <MDBCol md="6">
                    <MDBCard>
                        <div className="header pt-3  lighten-2 background-sbut" >
                            <MDBRow className="d-flex justify-content-center">
                                <h3 className="text-white mt-3 mb-4 pb-1 mx-5">
                                    Quên mật khẩu
                </h3>
                            </MDBRow>
                        </div>
                        <MDBCardBody className="mx-4 mt-4">
                            <MDBInput label="Email" group type="text" validate getValue={text => setEmail(text)} />
                            <div className="text-center mb-4 mt-5">
                                <MDBBtn
                                    color="primary"
                                    type="button"
                                    className="btn-block z-depth-2"
                                    onClick={() => _handleForgotPassword()}
                                >
                                    Khôi phục
                </MDBBtn>
                            </div>
                            <p className="font-small grey-text d-flex justify-content-center">
                                Bạn đã có tài khoản?
                <a
                                    href="/login"
                                    className="dark-grey-text font-weight-bold ml-1"
                                >
                                    Đăng nhập
                </a>
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <ToastContainer/>
        </MDBContainer>
    );
};

export default ForgotPassword;