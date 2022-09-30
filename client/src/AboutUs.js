import './AboutUs.css';

function AboutUs() {
    return (
        <div className='about-us m-5' >
            <div className='about-us-center'>
                <h3 className="fw-bold">About Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit dui, feugiat sed tellus ut, aliquet commodo magna. Pellentesque risus ex, placerat at vulputate vitae, aliquam ultrices erat. Sed lobortis vehicula semper. Morbi interdum neque sed tristique dictum. Sed vel mi eget enim dictum ullamcorper.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit dui, feugiat sed tellus ut, aliquet commodo magna. Pellentesque risus ex, placerat at vulputate vitae, aliquam ultrices erat. Sed lobortis vehicula semper. Morbi interdum neque sed tristique dictum. Sed vel mi eget enim dictum ullamcorper.
                </p>
            </div>

            <div className="contact-info m-5">
                <p className='ms-4 fw-bold'>Contact Us!</p>
                <div className='row'>
                    <div className="col-md-auto fw-bold">Email:</div>
                    <div className="col-md-auto">mail@mail.com</div>
                </div>
                <div className='row'>
                    <div className="col-md-auto fw-bold">Phone Number:</div>
                    <div className="col-md-auto">09xxxxxxxxx</div>
                </div>
                <div className='row'>
                    <div className="col-md-auto fw-bold">Address:</div>
                    <div className="col-md-auto">Door 3, JADEG Bldg., 80 V. Mapa St, Poblacion District, Davao City, 8000 Davao del Sur</div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;