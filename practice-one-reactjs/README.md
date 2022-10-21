# REACT PRACTICE #
*06 Oct 2022*
## OVERVIEW ##

This document provides a detailed estimate of the ReactJS practice. The practice tends to develop a single page with a filter, searching bar for pokemon in detail. 

### TIMELINE ###

- Estimate time: 5 days (2022/10/06 - 2022/10/12)
- Actual time: 8 days


### TECHNICAL STACK ###
- ReactJS
- HTML5/CSS3
- Typescript
- Storybook
- ViteJS
- Eslint
- Husky
- Prettier
- MockAPI.io

### TEAM SIZE ###
- 1 Developer: Bao.Thai@asnet.com.vn

### TARGET ###
- Understand ReactJS Component flow including rendering element, components, props, JSX, handling events, state, and so on.
- Get to know about husky pre-commit
- Fluent in React Devtools

### REQUIREMENT ###
- Build React app with latest version with following features:
    - CRUD features
        - Create button pop up modal for adding item
        - Edit and Remove are inside the modal
        - Edit or Remove must pop up confirmation modal
    - Sorting item by element
    - Pokedex shows code, name, photo.
- UI Reference: [UI REFERENCE LINK](https://saraneel.com/pokedex/)

### STRUCTURE ###
![Flowchart](/uploads/f9ebabd9bb7f45d6ecaec81506b716ca/Flowchart.PNG)
### COMMAND ###

All commands are run from the root folder, from a terminal:

| Command                 | Action                                             |
| :---------------------  | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm run server`       | Starts Json      server at `localhost:3001`        |
| `pnpm run dev`          | Build your production site to `./dist/`            |
| `pnpm run storybook`    | Run the storybook to review all the components     |
| `pnpm run lint:fix    ` | Check warning & error following ESLint             |

### GET TO USE APP ###

- Clone the application

`git clone git@gitlab.asoft-python.com:bao.thai/react-training.git`

- Pull the newest code and checkout the branch

`git checkout feature/practice-one-reactjs`

`git pull origin feature/practice-one-reactjs`

- Direct to practice folder

`cd practice-one-reactjs`

- Install package dependencies

`pnpm install`

- Run application

`pnpm run dev`

