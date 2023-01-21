import {Link, useNavigate} from "react-router-dom";

import {Button, Col, Container, Image, Row} from "react-bootstrap";

import './styles.scss'

import {category} from "../../temporary_files/mocData";
import {SvgSelector} from "../../helpers/SvgSelector/component";

const Catalog = ({catalogName}) => {
    const navigate = useNavigate()
    const navigateProduct = (path) => navigate(path, {replace: true})
    return (
        <Container>
            <Row className='justify-content-center'>
                <h2 className='text-start'>{catalogName ? catalogName : 'Our products'}</h2>
                <Col sm={12} className='d-none d-lg-flex mb-2 justify-content-end text-end pe-3'> Sort drop dawn</Col>
                <Col sm={12} className='d-lg-none text-center my-3'>
                    <div className='bg-main'>Adaptive sort</div>
                </Col>
                <div className='catalog col-12 d-flex justify-content-between align-items-start'>
                    <Col sm={0} lg={3} className='d-none d-lg-block pe-2 '>
                        <div className='px-3 py-3 bg-main mb-1'>
                           <Link to='/catalog' className='d-flex align-items-center hover py-2 border-bottom'><SvgSelector selector='svg_nav'/><p className='m-0 ms-3 '>All Category</p></Link>
                            {
                                category.map(el => (
                                <Link to={`/catalog/${el.name.replaceAll(' ', '_').toLowerCase()}`} className='hover d-flex align-items-center py-2 border-bottom'
                                      key={el.id}><SvgSelector selector='svg_nav'/><p className='m-0 ms-3'>{el.name}</p></Link>))
                            }
                        </div>
                        <div className='px-3 py-3 bg-main'>
                            <Link to='/catalog' className='d-flex align-items-center hover py-2 border-bottom'><SvgSelector selector='svg_nav'/><p className='m-0 ms-3 '>All Category</p></Link>
                            {
                                category.map(el => (
                                    <Link to={`/catalog/${el.name.replaceAll(' ', '_').toLowerCase()}`} className='hover d-flex align-items-center py-2 border-bottom'
                                          key={el.id}><SvgSelector selector='svg_nav'/><p className='m-0 ms-3'>{el.name}</p></Link>))
                            }
                        </div>

                    </Col>
                    <Col sm={12} lg={9} className='d-flex  justify-content-center flex-wrap p-0 ps-lg-2'>
                        <div
                            className='col-12 col-after360-6  col-sm-4 col-md-3  col-xl-3 product_card text-center text-md-start'
                            role='button' onClick={() => navigateProduct('/catalog/category/product')}>
                            <div className='bg-main p-2'>
                                <div className='product_card__img px-0 m-auto'>
                                    <Image fluid src="https://dummyimage.com/228x228/92de71/fff&text=CARD_IMAGE"
                                           alt="overview_from_card"/>
                                </div>
                                <Link to={'/catalog/category/product'}><h6
                                    className='fw-bold monserrat hover mt-2'>Title_from_card</h6></Link>
                                <p className='fz-14 text-grey m-0'>Price for unit</p>
                                <p className='fz-16 fw-bold'>9.99 $</p>
                                <Button className='d-block w-100 bg-second'>Buy</Button>
                            </div>
                        </div>
                        <div
                            className='col-12 col-after360-6  col-sm-4 col-md-3  col-xl-3 product_card text-center text-md-start'
                            role='button' onClick={() => navigateProduct('/catalog/category/product')}>
                            <div className='bg-main p-2'>
                                <div className='product_card__img px-0 m-auto'>
                                    <Image fluid src="https://dummyimage.com/228x228/92de71/fff&text=CARD_IMAGE"
                                           alt="overview_from_card"/>
                                </div>
                                <Link to={'/catalog/category/product'}><h6
                                    className='fw-bold monserrat hover mt-2'>Title_from_card</h6></Link>
                                <p className='fz-14 text-grey m-0'>Price for unit</p>
                                <p className='fz-16 fw-bold'>9.99 $</p>
                                <Button className='d-block w-100 bg-second'>Buy</Button>
                            </div>
                        </div>
                        <div
                            className='col-12 col-after360-6  col-sm-4 col-md-3  col-xl-3 product_card text-center text-md-start'
                            role='button' onClick={() => navigateProduct('/catalog/category/product')}>
                            <div className='bg-main p-2'>
                                <div className='product_card__img px-0 m-auto'>
                                    <Image fluid src="https://dummyimage.com/228x228/92de71/fff&text=CARD_IMAGE"
                                           alt="overview_from_card"/>
                                </div>
                                <Link to={'/catalog/category/product'}><h6
                                    className='fw-bold monserrat hover mt-2'>Title_from_card</h6></Link>
                                <p className='fz-14 text-grey m-0'>Price for unit</p>
                                <p className='fz-16 fw-bold'>9.99 $</p>
                                <Button className='d-block w-100 bg-second'>Buy</Button>
                            </div>
                        </div>
                        <div
                            className='col-12 col-after360-6  col-sm-4 col-md-3  col-xl-3 product_card text-center text-md-start'
                            role='button' onClick={() => navigateProduct('/catalog/category/product')}>
                            <div className='bg-main p-2'>
                                <div className='product_card__img px-0 m-auto'>
                                    <Image fluid src="https://dummyimage.com/228x228/92de71/fff&text=CARD_IMAGE"
                                           alt="overview_from_card"/>
                                </div>
                                <Link to={'/catalog/category/product'}><h6
                                    className='fw-bold monserrat hover mt-2'>Title_from_card</h6></Link>
                                <p className='fz-14 text-grey m-0'>Price for unit</p>
                                <p className='fz-16 fw-bold'>9.99 $</p>
                                <Button className='d-block w-100 bg-second'>Buy</Button>
                            </div>
                        </div>
                        <div
                            className='col-12 col-after360-6  col-sm-4 col-md-3  col-xl-3 product_card text-center text-md-start'
                            role='button' onClick={() => navigateProduct('/catalog/category/product')}>
                            <div className='bg-main p-2'>
                                <div className='product_card__img px-0 m-auto'>
                                    <Image fluid src="https://dummyimage.com/228x228/92de71/fff&text=CARD_IMAGE"
                                           alt="overview_from_card"/>
                                </div>
                                <Link to={'/catalog/category/product'}><h6
                                    className='fw-bold monserrat hover mt-2'>Title_from_card</h6></Link>
                                <p className='fz-14 text-grey m-0'>Price for unit</p>
                                <p className='fz-16 fw-bold'>9.99 $</p>
                                <Button className='d-block w-100 bg-second'>Buy</Button>
                            </div>
                        </div>
                        <div
                            className='col-12 col-after360-6  col-sm-4 col-md-3  col-xl-3 product_card text-center text-md-start'
                            role='button' onClick={() => navigateProduct('/catalog/category/product')}>
                            <div className='bg-main p-2'>
                                <div className='product_card__img px-0 m-auto'>
                                    <Image fluid src="https://dummyimage.com/228x228/92de71/fff&text=CARD_IMAGE"
                                           alt="overview_from_card"/>
                                </div>
                                <Link to={'/catalog/category/product'}><h6
                                    className='fw-bold monserrat hover mt-2'>Title_from_card</h6></Link>
                                <p className='fz-14 text-grey m-0'>Price for unit</p>
                                <p className='fz-16 fw-bold'>9.99 $</p>
                                <Button className='d-block w-100 bg-second'>Buy</Button>
                            </div>
                        </div>
                        <div
                            className='col-12 col-after360-6  col-sm-4 col-md-3  col-xl-3 product_card text-center text-md-start'
                            role='button' onClick={() => navigateProduct('/catalog/category/product')}>
                            <div className='bg-main p-2'>
                                <div className='product_card__img px-0 m-auto'>
                                    <Image fluid src="https://dummyimage.com/228x228/92de71/fff&text=CARD_IMAGE"
                                           alt="overview_from_card"/>
                                </div>
                                <Link to={'/catalog/category/product'}><h6
                                    className='fw-bold monserrat hover mt-2'>Title_from_card</h6></Link>
                                <p className='fz-14 text-grey m-0'>Price for unit</p>
                                <p className='fz-16 fw-bold'>9.99 $</p>
                                <Button className='d-block w-100 bg-second'>Buy</Button>
                            </div>
                        </div>
                        <div
                            className='col-12 col-after360-6  col-sm-4 col-md-3  col-xl-3 product_card text-center text-md-start'
                            role='button' onClick={() => navigateProduct('/catalog/category/product')}>
                            <div className='bg-main p-2'>
                                <div className='product_card__img px-0 m-auto'>
                                    <Image fluid src="https://dummyimage.com/228x228/92de71/fff&text=CARD_IMAGE"
                                           alt="overview_from_card"/>
                                </div>
                                <Link to={'/catalog/category/product'}><h6
                                    className='fw-bold monserrat hover mt-2'>Title_from_card</h6></Link>
                                <p className='fz-14 text-grey m-0'>Price for unit</p>
                                <p className='fz-16 fw-bold'>9.99 $</p>
                                <Button className='d-block w-100 bg-second'>Buy</Button>
                            </div>
                        </div>

                    </Col>
                </div>
            </Row>
        </Container>

    )
}
export default Catalog;