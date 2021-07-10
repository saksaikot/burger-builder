import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrders } from "../../../redux/actionCreators";

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrders()),
});

const mapStateToProps = (state) => ({
  orders: state.orders,
  orderLoading: state.orderLoading,
  orderLoadFailed: state.orderLoadFailed,
});

class Order extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }
  render() {
    return <div>{JSON.stringify(this.props.orders)}</div>;
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Order);
