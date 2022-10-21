# REACT PRACTICE #

*06 Oct 2022*
## OVERVIEW ##

This document provides a detailed estimate of the ReactJS practice. The practice tends to develop four pages in which are home, detail, add and edit. CRUD will be the main features of the practice using MockApi.io to work with the data. Json server was first in-use but has been changed to MockApi.io due to additional requirements.

### TIMELINE ###

- Estimate time: 5 days (2022/10/06 - 2022/10/19)
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
- PNPM

### TEAM SIZE ###

- 1 Developer: Bao.Thai@asnet.com.vn

### TARGET ###

- Understand ReactJS Component
- Get to know about husky pre-commit and how it works with Eslint
- Fluent in React Devtools
- Well know in useState, useEffect hook

### REQUIREMENT ###

- Build React app with latest version with following features:
    - CRUD features
        - Create button pop up modal for adding item
        - Edit and Remove are inside the modal
        - Edit or Remove must pop up confirmation modal
    - Sorting item by element
    - Pokedex shows code, name, photo.

### UI REFERENCE ###

- UI Reference: [UI REFERENCE LINK](https://saraneel.com/pokedex/)

### STRUCTURE ###
![Flowchart.svg](/uploads/a315f7dc9a1540671103850a9aa576a4/Flowchart.svg)

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

