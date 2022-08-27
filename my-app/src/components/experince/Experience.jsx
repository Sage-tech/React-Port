import React from 'react'
import "./experience.css"

const experience = () => {

    return (
        <section className="experiences section" id="experiences">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">What I could offer</span>

            <div className="experiences__container container grid">
                <div className="experiences__content">
                    <div>
                        <i className="uil uil-web-grid experiences container grid"></i>
                        <h3 className="experiences__title">Software <br /> Engineer</h3>
                    </div>
                    <span className="experiences__button">View More <i className="uil uil-arrow-right experiences__button-icon"></i></span>
                    <div className="serives__modal">
                        <div className="experiences__modal-content">
                            <i className="uil uil-times experiences__modal-close"></i>
                            <h3 className="experiences__modal-title"></h3>
                            <p className="experiences__modal-description">Providing companies with my mindset and skill set in the early years of my career.
                                Showing quick results along with adapting new concepts within teams I adpot diverse technologies and programming languages.</p>
                            <ul className="experiences__modal-experiences grid">
                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">
                                        Moblie Applications
                                    </p>
                                </li>
                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">
                                        Web page development.
                                    </p>
                                </li>
                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">
                                        Creating UX element intercations and user interfaces.
                                    </p>
                                </li>
                                <li className="experiences__modal-experience">
                                    <i className="uil uil-check-circle experiences__modal-icon"></i>
                                    <p className="experiences__modal-info">
                                        Designing and creating mockups of products for compaines.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
export default experience