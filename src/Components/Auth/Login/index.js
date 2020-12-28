import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { ToastContainer, toast } from 'react-toastify';
import { checkEmailAddress, isEmpty } from '../../../utils';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const _handleLogin = () => {
        if (isEmpty(password) || isEmpty(email)) {
            toast.error('Không được để trống!');
        }else if(!checkEmailAddress(email)){
            toast.error('Email không đúng định dạng!');
        }else{
            toast.success('Ok')
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
                                    Đăng nhập
                </h3>
                            </MDBRow>
                        </div>
                        <MDBCardBody className="mx-4 mt-4">
                            <MDBInput label="Email" group type="text" validate getValue={(value) => setEmail(value)} />
                            <MDBInput
                                label="Mật khẩu"
                                group
                                type="password"
                                validate
                                getValue={text => setPassword(text)}
                                containerClass="mb-0"
                            />
                            <p className="font-small grey-text d-flex justify-content-end">
                                Quên
                <a
                                    href="/forgot-password"
                                    className="dark-grey-text font-weight-bold ml-1"
                                >
                                    mật khẩu?
                </a>
                            </p>
                            <div className="text-center mb-4 mt-5">
                                <MDBBtn
                                    color="primary"
                                    type="button"
                                    className="btn-block z-depth-2"
                                    onClick={() => _handleLogin()}
                                >
                                    Đăng nhập
                </MDBBtn>
                            </div>
                            <p className="font-small grey-text d-flex justify-content-center">
                                Bạn chưa có tài khoản?
                <a
                                    href="/register"
                                    className="dark-grey-text font-weight-bold ml-1"
                                >
                                    Đăng kí
                </a>
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <ToastContainer />
        </MDBContainer>
    );
};

export default Login;