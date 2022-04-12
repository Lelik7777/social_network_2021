import React from 'react';
import {useFormik} from 'formik';
import o from './Login.module.css';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from '../../../redux/store';
import {Redirect} from 'react-router-dom';
import {postLogin} from '../../../redux/authReducer';

export const Login = () => {

    const isAuth = useSelector<RootStateType, boolean>((state) => state.dataAuth.isAuth);
    const dispatch=useDispatch();
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
           // alert(JSON.stringify(values, null, 2));
            dispatch(postLogin(values))
        },
    });
    if (isAuth) return <Redirect to={'/Profile'}/>
    return (
        <div className={o.wrapper}>

            <div className={o.sign_in}><span>Sign In</span></div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            style={{marginLeft: '3%'}}
                            id="email"
                            type="email"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div style={{color: 'red', fontSize: '0.8rem'}}>{formik.errors.email}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="email">Password</label>
                        <input
                            style={{marginLeft: '11%'}}
                            id="password"
                            type="password"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div style={{color: 'red', fontSize: '0.8rem'}}>{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <div>
                        <label htmlFor="rememberMe">Remember me</label>
                        <input
                            id="rememberMe"
                            type="checkbox"
                            {...formik.getFieldProps('rememberMe')}
                        />
                        <button style={{marginLeft: '32%'}}
                                type="submit">Sign In
                        </button>
                    </div>
                </form>
            </div>
            <div style={{width:'50%'}}><span style={{marginRight:'10%'}}>email</span>lelik21212121@gmail.com</div>
            <div style={{width:'50%'}}><span style={{marginRight:'10%'}}>password:</span>enter_free</div>
        </div>
    );
}