import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addPost} from '../../../../redux/profileReducer/profileReducer';

export const AddPostsForm = () => {
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
            //alert(JSON.stringify(values, null, 2));
            dispatch(addPost(values.text));
            formik.resetForm();
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="text"></label>
            <textarea
                {...formik.getFieldProps('text')}
            />
            {formik.touched.text && formik.errors.text ? (
                <div>{formik.errors.text}</div>
            ) : null}

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};