import React from 'react';
import {useFormik} from 'formik';
import o from './Login.module.css';
import * as Yup from 'yup';

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            password: '',
            rememberMe: false,
            email: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(3, 'must be min 3 character')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={o.wrapper}>

                <div className={o.sign_in}><span>Sign In</span></div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input
                                style={{marginLeft:'3%'}}
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div style={{color:'red',fontSize:'0.8rem'}}>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="email">Password</label>
                            <input
                                style={{marginLeft:'11%'}}
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div style={{color:'red',fontSize:'0.8rem'}}>{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <div>
                            <label htmlFor="rememberMe">Remember me</label>
                            <input
                                id="rememberMe"
                                name="rememberMe"
                                type="checkbox"
                                onChange={formik.handleChange}
                            />
                            <button style={{marginLeft:'32%'}}
                                    type="submit">Submit
                            </button>
                        </div>
                    </form>
                </div>
        </div>
    );
}