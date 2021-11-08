import React, { Component } from "react";
import EVERYPRODUCT from "./EvryProduct";
// import { _getProducts } from "../data/_DATA";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class GALLARY extends Component {
  // state = {
  //   allBroducts: [],
  // };
  // componentDidMount() {
  //   _getProducts()
  //     .then((prouducts) => {
  //       this.setState({
  //         allBroducts: prouducts,
  //       });
  //     })
  //     .then(() => {
  //       console.log(this.state.allBroducts);
  //     });
  // }

  render() {
    const allBroductsId = Object.keys(this.props.allBroducts);
    console.log(allBroductsId);
    return (
      <>
        {allBroductsId.length <= 0 ? (
          <div className="cont">
            <div className="spinner-border center text-danger" role="status">
              <span className="spin center sr-only"></span>
            </div>
          </div>
        ) : (
          <section id="gallary">
            <h1 className="center"> Our Gallary </h1>
            <Row>
              {allBroductsId.map((prod) => {
                return (
                  <Col key={prod}>
                    <EVERYPRODUCT
                      id={prod}
                      allBroducts={this.props.allBroducts}
                      // src={prod.src}
                      // name={prod.name}
                      // price={prod.price}
                    />
                  </Col>
                );
              })}
            </Row>
          </section>
        )}
      </>
    );
  }
}
export default GALLARY;
