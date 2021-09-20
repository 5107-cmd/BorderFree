import { caraouselImages } from "../carousel_images";
import Sli from "./Sli";

function SlideShow() {
    return (
        <div id="carouselExampleControls" className="carousel slide mb-4" data-ride="carousel">
            <div className="carousel-inner">
                {caraouselImages.map((image, index) => <Sli image={image} number={index} />)}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default SlideShow;