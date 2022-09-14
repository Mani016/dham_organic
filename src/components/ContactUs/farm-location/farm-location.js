import ContactMap from "../ContactMap";
import React, {Fragment} from "react";
import MetaTags from "react-meta-tags";
import Breadcrumb from "../../reusables/Breadcrumb";
import LayoutOne from "../../../layouts/LayoutOne";

const farmLocation = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Dhaam Organic| Farm Location</title>
                <meta name='description' content='Farm Location' />
            </MetaTags>
            <LayoutOne>
                <div className='farm-location'>
                <Breadcrumb title='Farm Location' />
                <section className='contact-section'>
                    <div className='container'>
                        <div className='contact_wrp mt-5'>
                            <div className='row'>
                                <div className='col-sm-12 map-container'>
                                    {/* contact map */}
                                    <ContactMap latitude='28.656983867439934' longitude='76.75205565870088' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </LayoutOne>
        </Fragment>
)
}

export default farmLocation;
