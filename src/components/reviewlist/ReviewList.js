import reviewsService from "../../services/reviews.service";
import { useEffect, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
} from "mdb-react-ui-kit";

function ReviewList() {
    const [reviews, setReviews] = useState([]);

    const getReviews = () => {
        const allReviews = reviewsService.getReviews;
        setReviews(allReviews);
    }

    const showReviews = () => {
        return (
            reviews.map(c => {
                return (
                    <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
                        <MDBCard className="testimonial-card">
                            <div
                                className="card-up"
                                style={{ backgroundColor: "#9d789b" }}
                            ></div>
                            <div className="avatar mx-auto bg-white">
                                <img
                                    src={`/assets/agent-img/${c.img}`}
                                    className="rounded-circle img-fluid"
                                />
                            </div>
                            <MDBCardBody>
                                <h4 className="mb-4">{c.name}</h4>
                                <hr />
                                <p className="dark-grey-text mt-4">
                                    <MDBIcon fas icon="quote-left" className="pe-2" />
                                    {c.quote}
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                );
            })
        );
    }

    useEffect(() => {
        getReviews();
    }, [])

    return (
        <>
            <MDBContainer className="py-5">
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol md="10" xl="8" className="text-center">
                        <h3 className="mb-4">Reviews</h3>
                        <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                            Nuestros clientes han confiado en nosotros, usted tambien puede
                        </p>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="text-center d-flex align-items-stretch">
                    {showReviews()}
                </MDBRow>

            </MDBContainer>
        </>
    );
}

export default ReviewList;