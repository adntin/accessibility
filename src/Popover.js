import React from "react";
import "./Popover.css";

class Popover extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.timeOutId = null;

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this);
    this.onFocusHandler = this.onFocusHandler.bind(this);
  }

  onClickHandler() {
    console.log("click");
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  // We close the popover on the next tick by using setTimeout.
  // This is necessary because we need to first check if
  // another child of the element has received focus as
  // the blur event fires prior to the new focus event.
  onBlurHandler() {
    console.log("blur");
    this.timeOutId = setTimeout(() => {
      console.log("setState: false");
      this.setState({
        isOpen: false
      });
    });
  }

  // If a child receives focus, do not close the popover.
  onFocusHandler() {
    console.log("focus");
    clearTimeout(this.timeOutId);
  }

  render() {
    // React assists us by bubbling the blur and
    // focus events to the parent.
    return (
      <div onBlur={this.onBlurHandler} onFocus={this.onFocusHandler}>
        <button
          onClick={this.onClickHandler}
          aria-haspopup="true"
          aria-expanded={this.state.isOpen}
        >
          Select an option
        </button>
        {this.state.isOpen ? (
          <ul className="popup" tabIndex={0}>
            <li>
              <button>Option 1</button>
            </li>
            <li>
              <button>Option 2</button>
            </li>
            <li tabIndex={0}>Option 3</li>
            <li tabIndex={0}>Option 4</li>
            <li>Option 5</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Popover;
