## React Practice Two ##
*Nov 07, 2022*

### Overview ###

This document provides a detailed estimate of the React practice. This practice creates a Member Management Web App with goals that I can apply React advanced knowledge and unit test.

### Timeline ###

- Estimate time:  10 days (2022/11/07 - 2022/11/18)
- Actual time: …

### Technical Stack ###

- React (v18+)
- HTML5 / CSS3
- TypeScript
- ViteJS
- ChakraUI
- Mock API
- React Router 6
- Storybook
- React Testing Library
- SWR
- Husky
- Eslint
- Prettier

### Teamsize ###

- 1 Developer: bao.thai@asnet.com.vn

### Targets ###

- Optimize re-render
- Apply React hooks
- Apply SWR for fetching data
- Apply unit test

### Requirement ###

- Responsive for mobile and tablet devices
- User can click on member card and show up member list
- On member list page
    - User can add a new member
    - User can see detail page of a member when onClick
- On detail page
    - User can edit and remove a member

### UI Reference ###

Design: [UI REFERENCE LINK](https://www.figma.com/file/TbOEy0cgczhySv0RZP1Mdp/NinjaMail-(Community)?node-id=0%3A1)


### Command ###

| Command                 | Action                                             |
| :---------------------  | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm run dev`          | Build your production site to `./dist/`            |
| `pnpm run storybook`    | Run the storybook to review all the components     |
| `pnpm run lint:fix    ` | Check warning & error following ESLint             |

### GET TO USE APP ###

- Clone the application

`git clone git@gitlab.asoft-python.com:bao.thai/react-training.git`

- Pull the newest code and checkout the branch

`git checkout feature/practice-two-reactjs`

`git pull origin feature/practice-two-reactjs`

- Direct to practice folder

`cd practice-two-reactjs`

- Install package dependencies

`pnpm install`

- Run application

`pnpm run dev`
