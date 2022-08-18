import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <div className='m-5 about-us' >
                <h1 className="fw-bold">About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit dui, feugiat sed tellus ut, aliquet commodo magna. Pellentesque risus ex, placerat at vulputate vitae, aliquam ultrices erat. Sed lobortis vehicula semper. Morbi interdum neque sed tristique dictum. Sed vel mi eget enim dictum ullamcorper.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit dui, feugiat sed tellus ut, aliquet commodo magna. Pellentesque risus ex, placerat at vulputate vitae, aliquam ultrices erat. Sed lobortis vehicula semper. Morbi interdum neque sed tristique dictum. Sed vel mi eget enim dictum ullamcorper.
                </p>
                <div className="contact-info fixed-bottom m-5">
                    <p className='ms-4 fw-bold'>Contact Us!</p>
                    <div className="row ms-3">
                        <div className="col-md-auto fw-bold">Email:</div>
                        <div className="col-md-auto">mail@mail.com</div>
                        <div className="w-100"></div>
                        <div className="col-md-auto fw-bold">Phone Number:</div>
                        <div className="col-md-auto">09xxxxxxxxx</div>
                        <div className="col-md-auto fw-bold">Address:</div>
                        <div className="col-md-auto">Door 3, JADEG Bldg., 80 V. Mapa St, Poblacion District, Davao City, 8000 Davao del Sur</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default AboutUs;