import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteShoe } from "./redux/action";

class Card extends Component {
  render() {
    // let { image, name, price, action } = this.props.data;

    console.log(this.props.shoe);
    return (
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Amount</th>
              <th>Imgae</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* render with map */}
            {this.props.card.map((item) => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>
                    <strong>{item.price * item.amount}$</strong>
                    <td>
                      <button className="btn btn-dark">-</button>
                      <strong>{item.amount}</strong>
                      <button className="btn btn-warning">+</button>
                    </td>
                  </td>

                  <td>
                    <img src={item.image} width={80} alt="" />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.handleDeleteShoe(item.id);
                      }}
                      className="btn btn-success"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
let mapstateToProps = (state) => {
  return { card: state.card };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteShoe: (id) => {
      dispatch(deleteShoe(id));
    },
  };
};
export default connect(mapstateToProps, mapDispatchToProps)(Card);
