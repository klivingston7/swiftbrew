import React, { Component } from "react";
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropDown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.changeText = this.changeText.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);

    this.state = {
      dropdownOpen: false,
      value: "Size"
      
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  changeText(e) {
    e.preventDefault();

    this.setState({
      value: e.target.value
    });


    this.props.getSize(e.target.value);

  }

  handleSizeChange = () => {
    const size = this.state.value;
    console.log(size)
    this.props.getSize(size);
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} onChange = {this.handleSizeChange}>
        <DropdownToggle caret>
          {this.state.value}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick = {this.changeText} value = "Small">Small</DropdownItem>
          <DropdownItem onClick = {this.changeText} value = "Medium">Medium</DropdownItem>
          <DropdownItem onClick = {this.changeText} value = "Large">Large</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}