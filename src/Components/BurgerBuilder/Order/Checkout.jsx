import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { updateCheckoutForm } from "../../../redux/actionCreators";
import { PAYMENT_OPTION } from "../../../redux/constants";
import Input from "../../Input/Input";

const mapStateToProps = ({
  checkout,
  totalPrice,
  ingredients,
  purchasable,
}) => ({
  checkout,
  totalPrice,
  ingredients,
  purchasable,
});

const mapDispatchToProps = (dispatch) => ({
  updateCheckoutForm: (checkout) => dispatch(updateCheckoutForm(checkout)),
});

class Checkout extends Component {
  handleOnChange = (event) => {
    const checkout = { ...this.props.checkout };
    checkout[event.target.name] = event.target.value;
    this.props.updateCheckoutForm(checkout);
  };

  handleGoBack(e) {
    e.preventDefault();
    this.props.history.goBack("/");
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { checkout, ingredients, totalPrice } = this.props;

    const order = {
      customer: checkout,
      ingredients,
      price: totalPrice,
      orderTime: new Date(),
    };

    console.log(order);

    axios
      .post(
        "https://burger-builder-d3e66-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json",
        order
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  render() {
    const { name, address, phone, payment } = this.props.checkout;
    const { totalPrice } = this.props;
    return (
      <>
        <h4 className="checkout--border">Payment : {totalPrice} BDT</h4>
        <div className="checkout--border">
          <form onChange={this.handleOnChange}>
            <Input name="name" value={name} />
            <Input name="address" type="textarea" value={address} />
            <Input name="phone" value={phone} />
            <Input name="payment" options={PAYMENT_OPTION} value={payment} />

            <button
              className=" my-2 btn btn-primary primary-accent"
              onClick={this.handleSubmit.bind(this)}
            >
              Place Order
            </button>
            <button
              className=" my-2 mx-2 btn btn-secondary"
              onClick={this.handleGoBack.bind(this)}
            >
              Cancel
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
