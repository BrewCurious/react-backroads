import Title from "./Title";
import { tours } from "../data";

const Tours = () => {
    return (
        <section className="section" id="tours">
            <Title firstText="featured" secondText="tours" />

            <div className="section-center featured-center">
                {
                    tours.map( ( tour ) => {
                        return(
                            <article className="tour-card" key={ tour.id }>
                                <div className="tour-img-container">
                                    <img src={ tour.img } className="tour-img" alt={ tour.title } />
                                    <p className="tour-date">{ tour.date }</p>
                                </div>
                                <div className="tour-info">
                                    <div className="tour-title">
                                        <h4>{ tour.title }</h4>
                                    </div>
                                    <p>{ tour.description }</p>
                                    <div className="tour-footer">
                                        <p><span><i className="fas fa-map"></i></span> { tour.country }</p>
                                        <p>{ tour.duration }</p>
                                        <p>{ tour.cost }</p>
                                    </div>
                                </div>
                            </article>
                        );
                    } )
                }
            </div>
        </section>
    );
}
export default Tours;