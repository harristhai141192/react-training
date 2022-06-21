import React from "react";

export class ClassComponent extends React.Component<{name: string}> {
  render(): React.ReactNode {
    return <h3>This course is about {this.props.name}</h3>
  }
}