import React from "react";

export class SearchBar extends React.Component {
  state = { term: "" };
  onChangeSearch = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className={"search-bar ui segment"}>
        <form action="" className={"ui form"} onSubmit={this.onFormSubmit}>
          <div className={"field"}>
            <label htmlFor="">Search: </label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChangeSearch}
            />
          </div>
        </form>
      </div>
    );
  }
}
