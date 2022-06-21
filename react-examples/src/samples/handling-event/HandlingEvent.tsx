import { MouseEvent } from "react";
import React from 'react';

export function CountClick(): JSX.Element {
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    console.log("Clicked");
  }
  return (
    <>
      <form onClick={handleSubmit}>
        <button type='submit'>Click</button>
      </form>
    </>
  )
}

export function Shoot(): JSX.Element {
  const shoot = (
    content: string,
    click: MouseEvent<HTMLButtonElement>
  ): void => {
    alert(content + click.type)
  }
  return <button onClick={(e) => shoot("Goal!", e)}>Take a shoot!</button>
}