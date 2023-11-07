
 
const AboutUs = () => {
    return(
        <>
        <div className="Container">
            <div className="justify-content-md-center row">
                <div className="col-md-auto">
                    <h2>About Us</h2>
                    <p>
                        We are a team of passionate individuals who love to create amazing things. Our mission is to provide high-quality services and products that exceed our customers' expectations.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-12 mb-2">
                    <div className="card">
                        <img className="card-img-top" src="/Img/AboutUs/pexels-thisisengineering.jpg"/>
                            <div className="card-body">
                                <div className="card-title h5">
                                    Feature 1
                                </div>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                                </p>
                            </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="card">
                        <img className="card-img-top" src="/Img/AboutUs/pexels-christina-morillo-coding.jpg"/>
                            <div className="card-body">
                                <div className="card-title h5">
                                    Feature 2
                                </div>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                                </p>
                            </div>
                    </div>
                </div>
                <div className="col-md-4 col-12">
                    <div className="card">
                        <img className="card-img-top" src="/Img/AboutUs/pexels-cottonbro-studio.jpg"/>
                            <div className="card-body">
                                <div className="card-title h5">
                                    Feature 3
                                </div>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUs