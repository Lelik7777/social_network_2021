import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addMessage} from '../../../redux/dialogsReducer';

export const AddMessageForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            text: '',

        },
        validationSchema: Yup.object({
            text: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),

        }),
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            dispatch(addMessage(values.text));
            formik.resetForm();

        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="text"></label>
            <input
                id="text"
                type="text"
                {...formik.getFieldProps('text')}
            />
            {formik.touched.text && formik.errors.text ? (
                <div style={{margin: '10px'}}>{formik.errors.text}</div>
            ) : null}


            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}