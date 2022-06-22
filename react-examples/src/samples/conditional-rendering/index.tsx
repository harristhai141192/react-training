function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

export const isGoal = () => true
export const isNotGoal = () => false

export const Goal = (shoot: any) => {
  const isGoal = shoot; 
  if (isGoal == true) {    
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}
