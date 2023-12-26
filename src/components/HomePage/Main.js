import college from "../../images/college.jpg";
import college2 from "../../images/college2.jpg"
import { Number } from "./Number";
import { Table } from "./Table";
export function Main() {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="main-image carousel-item active">
                        <img src={college2} class="d-block w-100" alt="..." />
                    </div>
                    <div class="main-image carousel-item">
                        <img src={college} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>

            <div class="row bg-info" style={{ margin: "0px" }}>
                <div class="col-md-4 col-sm-12 text-center" style={{ margin: "120px auto 50px" }}>
                    <p style={{ fontFamily: "Sevillana", fontSize: "50px" }}>Our Core Values</p>
                    <p style={{ fontFamily: "Kalnia", fontSize: "30px" }}>We're redefining technical education</p>
                </div>

                <Table />
            </div>

            <div class="row bg-success py-3 d-flex justify-content-center" style={{ margin: "0px" }}>
                <div class="followers col-md-3 col-sm-6 text-center">
                    <i class="fa-brands fa-facebook text-primary fa-lg p-2"></i> <br />
                    <Number n={350} />
                    <span class="text">Followers</span>
                </div>
                <div class="followers col-md-3 col-sm-6  text-center">
                    <i class="fa-brands fa-twitter text-primary fa-lg p-2"></i> <br />
                    <Number n={450} />
                    <span class="text">Followers</span>
                </div>
                <div class="followers col-md-3 col-sm-6  text-center">
                    <i class="fa-brands fa-instagram text-danger fa-lg p-2"></i> <br />
                    <Number n={950} />
                    <span class="text">Followers</span>
                </div>
                <div class="followers col-md-3 col-sm-6  text-center">
                    <i class="fa-brands fa-youtube text-danger fa-lg p-2"></i> <br />
                    <Number n={1200} />
                    <span class="text">Followers</span>
                </div>
            </div>

        </div>
    )
}