import React from 'react';
import {Formik} from 'formik';
import './dashboard.css';
import * as Yup from 'yup';
import { User as UserComponent } from './user';
import {actions} from './actions';
import {connect} from 'react-redux';

import { Redirect } from 'react-router-dom';

let found = false,
    notFound = false

class DashboardComponent extends React.Component {

    componentDidUpdate() {

        if ( this.props.user.user !== "NOT_FOUND" && this.props.user.hasOwnProperty('user') ) {
            found = true
            this.props.location.pathname = "/result"
            window.history.pushState("object or string", "Title", "/result");

        }

        if ( this.props.user.user === "NOT_FOUND" ) {
            notFound = true
            found = false
            this.props.location.pathname = "/notfound"
            window.history.pushState("object or string", "Title", "/notfound");
        }

        this.props.location.pathname === "/notfound" ? notFound = true : notFound = false

    }

    render() {

        if ( this.props.user.user !== "NOT_FOUND" && this.props.user.hasOwnProperty('user') ) {
            found = true
            //this.props.history.push('/result')
            this.props.location.pathname = "/result"
            window.history.pushState("object or string", "Title", "/result");
            
        }

        if ( this.props.user.user === "NOT_FOUND" ) {
            notFound = true
            found = false
            this.props.location.pathname = "/notfound"
            window.history.pushState("object or string", "Title", "/notfound");
        }

        this.props.location.pathname === "/notfound" ? notFound = true : notFound = false

        return (
            <div>
                
                <Formik
                    initialValues={{name: ''}}
                    onSubmit={(values, {setSubmitting}) => {
                        this.props.loadUserData(values.name);
                        setSubmitting(false);
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string().required('Required')
                    })}
                >
                    {props => {
                        const {
                            values,
                            touched,
                            errors,
                            isSubmitting,
                            handleChange,
                            handleBlur,
                            handleSubmit
                        } = props;

                        return (
                            <form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                                <input
                                    id="name"
                                    placeholder="Enter your username"
                                    type="text"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.name && touched.name ? 'error form-control' : 'form-control'}
                                />
                                {errors.name && errors.touched && <div className="input-feedback">{errors.name}</div>}
                                
                                <button type="submit" disabled={isSubmitting} >
                                    <i className="fas fa-search"></i>
                                </button>
                                
                            </form>
                        );
                    }}
                </Formik>

                <div className="output">

                    { notFound ? <Redirect to="/notfound" /> : "" }

                    { found ? <UserComponent props={this.props.user} /> : "" }
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        user: state.user,
        userAvatar: state.user.userAvatar,
        userName: state.user.userName,
        userLogin: state.user.userLogin,
        userLocation: state.user.userLocation,
        userCompany: state.user.userCompany,
        userRepos: state.user.userRepos,
        userFollowers: state.user.userFollowers,
    }
};

const mapDispatchToProps = (dispatch) => {
    
    return {
        loadUserData: name => dispatch(actions.loadUserData(name))
    };
};

export const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardComponent);
