import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const Myplan = () => (
    <section>
        <div className="container">
            <div className="row text-center align-items-end">

                <div className="col-lg-3 mb-lg-0">
                    <div className="bg-white rounded-lg shadow">
                        <h1 className="h6 text-uppercase font-weight-bold pt-4">Basic</h1>
                        <ul className="list-unstyled my-5 text-small text-left">
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" />Lorem ipsum dolor sit amet</li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" />Sed ut perspiciatis</li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" />At vero eos et accusamus</li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" />Nam libero tempore
                            </li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Sed ut perspiciatis
                            </li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" />Sed ut perspiciatis
                            </li>
                            <h2 className="h4 font-weight-bold plan-price">$23</h2>
                        </ul>

                        <a href="/dashboard" className="plan-btn btn-block">Downgrade</a>
                    </div>
                </div>

                <div className="col-lg-3  mb-lg-0">
                    <div className="bg-white rounded-lg shadow">
                        <h1 className="h6 text-uppercase font-weight-bold pt-4">Pro</h1>
                        <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Lorem ipsum dolor sit amet</li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Sed ut perspiciatis</li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> At vero eos et accusamus</li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Nam libero tempore</li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Sed ut perspiciatis</li>
                            <li className="mb-3 text-muted">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Sed ut perspiciatis
                            </li>
                            <h2 className="h4 font-weight-bold plan-price">$39</h2>
                        </ul>
                        <a href="/dashboard" className="plan-btn btn-block">Downgrade</a>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="plan-team rounded-lg shadow">
                        <h1 className="h6 text-uppercase font-weight-bold pt-4">Team</h1>
                        <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                            <li className="mb-3">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Lorem ipsum dolor sit amet</li>
                            <li className="mb-3">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Sed ut perspiciatis</li>
                            <li className="mb-3">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> At vero eos et accusamus</li>
                            <li className="mb-3">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" />Nam libero tempore</li>
                            <li className="mb-3">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Sed ut perspiciatis</li>
                            <li className="mb-3">
                                <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Sed ut perspiciatis</li>
                            <h2 className="h4 font-weight-bold plan-price">$899</h2>
                        </ul>
                        <span className="current-plan">Current Plan</span>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="bg-white rounded-lg shadow">
                        <h1 className="h6 text-uppercase font-weight-bold pt-4">Agency</h1>
                        <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                            <li className="mb-3">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Lorem ipsum dolor sit amet</li>
                            <li className="mb-3">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Sed ut perspiciatis</li>
                            <li className="mb-3">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> At vero eos et accusamus</li>
                            <li className="mb-3">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Nam libero tempore</li>
                            <li className="mb-3">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Sed ut perspiciatis</li>
                            <li className="mb-3">
                                    <FontAwesomeIcon icon={faCheck} className="mr-2 text-secondary" /> Sed ut perspiciatis</li>
                            <h2 className="plan-price h4 font-weight-bold">$85</h2>
                        </ul>
                        <a href="/dashboard" className="plan-btn">Upgrade</a>    
                    </div>
                </div>

            </div>
        </div>
    </section>
);