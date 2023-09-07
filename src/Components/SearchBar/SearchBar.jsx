import React from "react";


class SeachBar extends React.Component {
  state = { InputText: "" };

  onInputChange = (event) => {
    this.setState({ InputText: event.target.value });
  };

  OnFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.InputText);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.OnFormSubmit}>
          <input
            type="text"
            value={this.state.InputText}
            placeholder="Search Videos Here"
            onChange={this.onInputChange}
            className="InputField ms-2"
          />
        </form>
      </div>
    );
  }
}

export default SeachBar;
