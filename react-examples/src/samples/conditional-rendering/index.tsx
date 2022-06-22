
import React from 'react';
import ReactDOM from 'react-dom/client';

function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props: any) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

// @ts-expect-error
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);