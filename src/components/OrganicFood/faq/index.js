import React, {Fragment} from "react";
import MetaTags from 'react-meta-tags';
import LayoutOne from '../../../layouts/LayoutOne';
import Breadcrumb from '../../reusables/Breadcrumb';
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const faq = () => {

    const accordionData = [
        {
            title: '1. WHAT ARE ORGANIC FOODS?',
            content: `Organic food is grown without the use of synthetic chemicals, such as human-made pesticides and fertilizers, and does not contain genetically modified organisms (GMOs).`,
            eventKey: '0'
        },
        {
            title: '2. WHAT ARE THE METHODS INVOLVED IN GROWING ORGANIC FOOD PRODUCTS?',
            content: `The principal methods of organic farming include crop rotation, green manures and compost, biological pest control, and mechanical cultivation.`,
            eventKey: '1'
        },
        {
            title: '3. HOW IS ORGANIC FOOD DIFFERENT FROM FOOD PRODUCTS AVAILABLE IN MARKET?',
            content: `The difference is that they only use naturally-derived pesticides, rather than the synthetic pesticides used on conventional commercial farms. Natural pesticides are believed to be less toxic.`,
            eventKey: '2'
        },
        {
            title: '4. WHAT ARE THE BENEFITS OF CONSUMING ORGANIC FOOD?',
            content: `Organic produce contains fewer pesticides. It is often fresher because it doesn’t contain preservatives that make it last longer. Organic farming tends to be better for the environment. These helps reduce public health risks, and are rich in nutrients, such as Vitamin C, iron, magnesium, and phosphorus, with less exposure to nitrates and pesticide residues.Organically raised animals are NOT given antibiotics, growth hormones, or fed animal by-products.`,
            eventKey: '3'
        },
        {
            title: '5. IS THE NUTRITIONAL VALUE OF ORGANIC FOOD PRODUCTS GREATER OR LEASSER THAN SAME FOOD PRODUCTS AVAILABLE IN MARKETS AS FORTIFIED FOODS?',
            content: `Organic varieties provide significantly greater levels of vitamin C, iron, magnesium, and phosphorus than non-organic varieties of the same foods. While being higher in these nutrients, they are also significantly lower in nitrates and pesticide residues. In addition, organic foods typically provide greater levels of a number of important antioxidant phytochemicals.`,
            eventKey: '4'
        },
        {
            title: '6. WHAT ARE THE ORGANIC FOOD CERTICATIONS?',
            content: `Currently, 2 systems of certification are present under the Food Safety and Standards Regulations, 2017 (Organic Food). One is the Participatory Guarantee System (PGS - India) and the other one is the National Programme for Organic Production (NPOP).`,
            eventKey: '5'
        },
        {
            title: '7. WHAT ARE THE LIMITATIONS OF ORGANIC FOOD?',
            content: `In organic farming much more manual labor is involved. Here, weeding is often done by hand and pests are controlled by introducing natural predators of those pests into the crop. This is much more labor intensive which again raises the price for organic food. The shelf life of organically produced crops is often much shorter compared to regular produce. `,
            eventKey: '6'
        },
        {
            title: '8. WHAT ARE THE RESIDUAL LIMITS OF INSECTICIDES IN ORGANIC FOODS?',
            content: `The maximum limits of residues of insecticides shall be 5% of the maximum limits prescribed or Level of Quantification (LoQ) whichever is higher.`,
            eventKey: '7'
        },
        {
            title: '9. WHICH ADDITIVES ARE PERMISSIBLE IN ORGANIC FOODS?',
            content: `We can add thousands of additives to conventional foods, but only around 40 agriculturally produced additives, and 65 non-agriculturally produced synthetics and non-synthetics, are allowed in organic food. These additives need to be assessed and properly reviewed by experts. These ingredients are permitted for use in organic packaged food only if there is no natural or organic alternative. `,
            eventKey: '8'
        },
        {
            title: '10. WHO IS RESPONSIBLE FOR CERTIFYING ORGANIC FOOD?',
            content: `The Local Group in case of PGS-India is responsible for certifying the Organic Food.`,
            eventKey: '9'
        },
        {
            title: '11. Is Haryana Variety 306 of wheat gluten free?',
            content: `No, wheat 306 is not gluten free as gluten forms the most important protein of constitution of wheat. But you will be amazed to know that only 50% of Gluten amount is present in this variety of wheat making it a good option for wheat lovers.Amount of gluten in this wheat can be verified by the greater volume of water it absorbs during kneading making it a little dry but healthier than other varieties of Wheat.`,
            eventKey: '10'
        },
        {
            title: '12. Is honey raw or processed?',
            content: `Honey is obtained in its raw form from a European variety of Honey bee Apis mellifera. Honey is obtained by centrifuging honeycombs. Honey bees (Apis mellifera) can be considered a zootherapy keystone species that exerts a strong impact on other trophic levels through their products that relate to disease resistance.`,
            eventKey: '11'
        },
        {
            title: '13. How are weeds controlled in agricultural fields?',
            content: `We believe in the rule ‘Live and Let live’ so if weeds are not competing with the crops for nutrient requirements, we just let them grow along with the crop. We have a special ‘Tracker System’ for tracking growth of harmful weeds. If there are more harmful weeds in the field we spray a special concoction ‘Jeevamrut” to stop growth of Weeds.`,
            eventKey: '12'
        },
        {
            title: '14. Is broken wheat (dalia) better than flour for consumption?',
            content: `Yes, broken wheat is better than flour considering the fact that it has more fibre and it is not processed. Wheat flour on the other hand, can have lesser amount of fibre. Apart from the loss of fibre, grinding the wheat to make flour can also result in loss of many other nutrients like some vitamins and minerals. Dalia provided by us is lighter in consistency due to the technique of preparing it by hand pounding process.`,
            eventKey: '13'
        },
        {
            title: '15. Is the oil used in pickles without adulteration?',
            content: `Absolutely, as at Dhaam we prepare our very own cold pressed Mustard oil from the mustard seeds growing in our fields. All the processes involve natural techniques for preparation.`,
            eventKey: '14'
        },
        {
            title: '16. Do the pickles made by Dhaam have natural spices?',
            content: `Yes, the spices that we use in our pickles are from our own fields or from the fields of the farmers nearby. We keep a check on the quality of spices used in our pickles to enhance the flavour and provide a rich taste.`,
            eventKey: '15'
        },
        {
            title: '17. What is vermicompost and how it is useful?',
            content: `Vermicomposting is an organic and biological process in which earthworm species are primarily used to convert organic matter or biodegradable wastes into manure. Wastes like cow dung, dried leaves, stems from plants are used. The produced vermicompost is rich in nutrition and thus, it is widely used as bio fertiliser in organic farming and sewage treatment plants. It is especially rich in Nitrogen, Phosphorous and Potassium.`,
            eventKey: '16'
        },
        {
            title: '18. What is green manure and how can it increase soil fertility?',
            content: `Green manure cover crops are crops produced mainly for nurturing the fertility of the soil and structure. They are usually absorbed into the soil. They are widely used for upgrading the soil, weed control, nutrients, and various organic matter.Generally, we grow Pulses as green manure as these belong to leguminous family of plants. These are very important as the roots nodules of legumes contain nitrogen fixing bacteria, stem has phosphorous stores. This crop is grown for 30-35 days in the field and then it is crushed by tractors in the field itself increasing the amount of carbon.`,
            eventKey: '17'
        },
        {
            title: '19. Ghee from farms is 100 % pure?',
            content: `Ghee from Dhaam Farms is of Genuine quality pure and natural. It is homemade ghee made with 100% pure organic milk and butter acquired from grass-fed indigenous cows on our family farms. This Pure Ghee will strengthen the body and make you healthy.`,
            eventKey: '18'
        },
        {
            title: '20. What is GMO?',
            content: `A genetically modified organism (GMO) is an organism whose DNA has been modified in the laboratory in order to favour the expression of desired physiological traits or the production of desired biological products. There are mixed reactions to the use of GMOs in farming.At Dhaam as we prefer to use natural products, our seeds are either older seeds or seeds from our own crops that are organic and natural without any interference with their DNAs.`,
            eventKey: '19'
        },
        {
            title: '21. Do the pickles contain any chemical preservatives?',
            content: `Our assurance to you are the pickles that give you taste of your grandmother’s pickles. These contain no chemical preservatives and are made by the method of sun drying vegetables and adding oil and spices. These do not contain any preservatives so these get spoiled easily due to moulds and weather changes.`,
            eventKey: '20'
        },
        {
            title: '22. Is the sugar in Desi Khand natural and unprocessed?',
            content: `Desi Khand, as the name suggests, is sweet and moreover healthy and natural. Dhaam Desi Khand is made from no chemical at all and has no side effects on consumption. It is natural powdery sugar with honey like taste.`,
            eventKey: '21'
        },
    ];
    // const { title, content , eventKey } = accordionData;

    return (
        <Fragment>
            <MetaTags>
                <title>Dhaam Organic| Frequently Asked Questions</title>
                <meta name='description' content='Organic Food'/>
            </MetaTags>
            <LayoutOne>
                {/*====================  breadcrumb area ====================*/}

                <Breadcrumb title='Frequently Asked Questions' />

                {/*====================  End of breadcrumb area  ====================*/}
                <div className='single_service'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12 col-sm-12 '>
                                <div className= "base-header base_header_left">
                                    <small></small>
                                    <h3>Frequently Asked Questions</h3>
                                </div>
                                <Accordion>
                                    {accordionData.map(({title , content , eventKey}) =>
                                        <Card className= "cursor-pointer">
                                            <Accordion.Toggle as={Card.Header} eventKey= {eventKey}>
                                                {title}
                                            </Accordion.Toggle>

                                            <Accordion.Collapse eventKey= {eventKey}>
                                                <Card.Body>{content}</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    )}
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

export default faq
