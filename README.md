# Plain React Crew application

---

## Overview and Plan
+ `description and general info about project`
+ `step by step guide for project set up`
+ `info about implementation details`

---

Crew application is created from scratch with:
- "npm init -y"
- basic "webpack" config without any extra optional plugins and configurations, but with HtmlWebpackPlugin and HMR
- "babel presets and plugins" for proper JSX and modern JS usage
- "eslint" with custom configurations
- "husky" and "lint-staged" for best practice
- no usage of state management libs aka redux, mobx. Only plain React and "react-select" for filtering
- styling was made without any additional libs, just plain css
- Local Storage was used for persistent filter state

Project set up:
- clone project from provided repository link
- install all dependencies with "yarn" command
- paste next [link](https://randomuser.me/api/?nat=gb&results=5) into "fetchUsers" function as first argument inside main.js file
- run project with "yarn start"

Additional information:
- folders structure is opinionated about DDD approach
- no Test were written due to busyness required by current job, but examples can be found on another [project](https://github.com/Martyniuk/pet_redux_intensive)
- for the same reason prop-types validation was omitted too
- on first look project seems to be simple, but there were some cases when I was regretting in not using Redux
- obviously would be great to have time for refactoring, so dont be strict judge 




