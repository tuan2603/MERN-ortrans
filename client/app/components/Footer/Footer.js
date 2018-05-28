import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterMain extends React.Component {
  render(){
    return(
      <div>
        <Footer color="stylish-color-organ" className="font-small pt-4 mt-4">
          <Container className="text-center text-md-left">
            <Row className="text-center text-md-left mt-3 pb-3">
              <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </Col>
              <hr className="w-100 clearfix d-md-none"/>
              <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p><a href="#!">MDBootstrap</a></p>
                <p><a href="#!">MDWordPress</a></p>
                <p><a href="#!">BrandFlow</a></p>
                <p><a href="#!">Bootstrap Angular</a></p>
              </Col>
              <hr className="w-100 clearfix d-md-none"/>
              <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                <p><a href="#!">Your Account</a></p>
                <p><a href="#!">Become an Affiliate</a></p>
                <p><a href="#!">Shipping Rates</a></p>
                <p><a href="#!">Help</a></p>
              </Col>
              <hr className="w-100 clearfix d-md-none"/>
              <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
              </Col>
            </Row>
            <hr/>
            <Row className="d-flex align-items-center">
              <Col md="8" lg="8">
                <p className="text-center text-md-left grey-text">&copy; {(new Date().getFullYear())} Copyright: <a href="https://www.or-trans.com"> or-trans.com </a></p>
              </Col>
              <Col md="4" lg="4" className="ml-lg-0">
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-facebook"></i></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-twitter"></i></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-google-plus"></i></a></li>
                    <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </Footer>
      </div>
    );
  }
}

export default FooterMain;
