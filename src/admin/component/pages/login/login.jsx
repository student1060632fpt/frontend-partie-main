import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { logo_01, } from '../imagepath'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { emailrgx } from '../../../assets/constant/index'


const schema = yup
    .object({

        email: yup
            .string()
            .matches(emailrgx, 'Email is required')
            .required('Email is required')
            .trim(),
        password: yup.string().min(6)
            .max(6).required('Password is required')
            .trim(),
    })

const Login = (props) => {
    const {
        handleSubmit,
        control,
        setError,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log("data", data)

        if (data.password !== "123456") {
            setError('password', {
                message: 'password is mismatch',
            })
        } else {
            clearErrors('password')
            props.history.push('/admin/index')
        }
    }
    return (
        <>
            {/* Main Wrapper */}
            <div className='main-wrapper login-body'>
                <div className="login-wrapper">
                    <div className="container">
                        <img
                            className="img-fluid logo-dark mb-2"
                            src={logo_01}
                            alt="Logo"
                        />
                        <div className="loginbox">
                            <div className="login-right">
                                <div className="login-right-wrap">
                                    <h1>Welcome Back</h1>
                                    <p className="account-subtitle">
                                        Don't miss your next opportunity. Sign in to stay updated on
                                        your professional world.
                                    </p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group form-focus">
                                            <Controller
                                                name="email"
                                                control={control}
                                                render={({ field: { value, onChange } }) => (
                                                    <input className={`form-control floating  ${errors?.email ? "error-input" : ""}`} type="text" value={value} onChange={onChange} autoComplete="false" />

                                                )}
                                                defaultValue="admin@example.com"
                                            />

                                            <small>{errors?.email?.message}</small>
                                        </div>
                                        <div className="form-group form-focus">
                                            <Controller
                                                name="password"
                                                control={control}
                                                render={({ field: { value, onChange } }) => (
                                                    <div className="pass-group">
                                                        <input className={`form-control floating  ${errors?.password ? "error-input" : ""}`} value={value} onChange={onChange} autoComplete="false" />

                                                    </div>
                                                )}
                                                defaultValue="123456"
                                            />

                                            <small>{errors?.password?.message}</small>
                                        </div>
                                        <div className="form-group">
                                            <label className="custom_check">
                                                <input type="checkbox" name="rem_password" />
                                                <span className="checkmark" /> Remember password
                                            </label>
                                        </div>
                                        <button
                                            className="btn btn-primary btn-block btn-lg login-btn"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                        <div className="login-or">
                                            <p>Or login with</p>
                                        </div>
                                        {/* Social Login */}
                                        <div className="row form-row social-login">
                                            <div className="col-lg-4">
                                                <Link to="#" className="btn btn-twitter btn-block mb-1">
                                                    {" "}
                                                    Twitter
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link to="#" className="btn btn-facebook btn-block mb-1">
                                                    {" "}
                                                    Facebook
                                                </Link>
                                            </div>
                                            <div className="col-lg-4">
                                                <Link to="#" className="btn btn-google btn-block mb-1">
                                                    {" "}
                                                    Google
                                                </Link>
                                            </div>
                                        </div>
                                        {/* /Social Login */}
                                        <div className="row form-row login-foot">
                                            <div className="col-lg-6 login-forgot">
                                                <Link className="forgot-link" to="/admin/forgot-password">
                                                    Forgot Password ?
                                                </Link>
                                            </div>
                                            <div className="col-lg-6 dont-have">
                                                New to Kofejob? <Link to="/admin/register">Click here</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Main Wrapper */}
        </>

    )
}

export default Login;