// This is a dead file that is not used but was intended for the modal

import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class SingleCardView extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.SingleCardView, options);
    // If you want to work on instance of the Modal then you can use the below code snippet 
    // let instance = M.Modal.getInstance(this.Modal);
    // instance.open();
    // instance.close();
    // instance.destroy();
  }

  render() {
    return (
      <>
        <a
          className="waves-effect waves-light btn modal-trigger"
          data-target="modal1"
        >
          Modal
        </a>

        <div ref={Modal => {this.Modal = Modal;}} id="modal1" className="modal bottom-sheet" >
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#" class="modal-close waves-effect waves-red btn-flat">
              Disagree
            </a>
            <a href="#" class="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default SingleCardView;
