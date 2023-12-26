import logo from "../../images/E-school logo.png";

export function Footer() {
    return (
        <div class="row" style={{ margin: "0px", backgroundColor:"rgb(83,80,255,0.25)" }}>
            <div class="col-xl-3 col-md-6 col-12 my-3 text-center">
                <img class="rounded img-cicrle my-3"  src={logo} alt="..." height={200} width={200} />
                <p>Ph No : +91 1234567890</p>
                <p>Ph No : +91 9876543120</p>
                <p>Mail : <a href="mailto:shankar.n@ethnus.com">Send mail</a></p >
                <p>Website : <a href="https://www.ethnus.com"></a>Ethnus</p>
            </div>
            <div class="col-xl-3 col-md-6 col-12 my-3 text-center">
                <h3 class="my-3">Resources</h3>
                <a class="nav-link py-2" href="#">Who we are</a>
                <a class="nav-link py-2" href="#">Admission</a>
                <a class="nav-link py-2" href="#">Career</a>
                <a class="nav-link py-2" href="#">School Policies</a>
                <a class="nav-link py-2" href="#">Infrastructure</a>
                <a class="nav-link py-2" href="#">Gallery</a>
            </div>

            <div class="col-xl-3 col-md-6 col-12 my-3 text-center">
                <h3 class="my-3">The Map</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.758807263533!2d77.58101647358811!3d12.923217615940205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15bfd84c8bc7%3A0xca0596cff60b0db9!2sETHNUS!5e0!3m2!1sen!2sin!4v1703575348550!5m2!1sen!2sin"
                    allowfullscreen=""
                    loading="lazy"
                    height={300}
                    width={250}
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div class="col-xl-3 col-md-6 col-12 my-3 text-center">
                <h3 class="my-3">Working Hours</h3>
                <p>Mon - Fri   :   9:00 am - 5:00 pm</p>
                <p>Saturday   :   8:00 am - 2:00 pm</p>
                <p>Sunday      :   Closed</p>
            </div>


            <small class="text-muted text-center mb-4">&copy; Copyright by Shankar</small>
        </div>
    )
}