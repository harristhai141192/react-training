import React, { ChangeEvent, FormEvent } from "react";

export class ControlledForm extends React.Component {
  state: { value: string };

  constructor(props: Object) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Name: " + this.state.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Form</h3>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class TextAreaForm extends React.Component {
  state: {
    value: string;
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      value: "Please write an essay about your favorite DOM element."
    };
  }

  handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    alert("An essay was submitted: " + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class SelectForm extends React.Component {
  state: {
    value: string;
  };

  constructor(props: Object) {
    super(props);
    this.state = { value: "toyota" };
  }

  handleChange(e: ChangeEvent<HTMLSelectElement>) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e: FormEvent<HTMLFormElement>) {
    alert("Your favorite car is: " + this.state.value);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite car:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="mazda">Mazda</option>
            <option value="toyota">Toyota</option>
            <option value="honda">Honda</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export class MultipleInputs extends React.Component {
  state: {
    isGoing: boolean;
    numberOfGuests: number;
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 1
    };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const target: EventTarget & HTMLInputElement = e.target;
    const value: string | boolean =
      target.type === "checkbox" ? target.checked : target.value;
    const name: string = target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <h3>Form Multiple inputs</h3>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
