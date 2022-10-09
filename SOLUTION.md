# Your Solution Documentation

## Steps to run

The set up has been a bit deviated from the original docker-compose file. So now it only has database part.
DB port has been changed to 3307.
Solution was moved out from docker app since, there was some networking issues while trying to connect to the database.

- Make sure node version is set to `v16.14.1`
- UI
  - cd ui
  - npm install
  - npm start
  - now react app should run at localhost:3000
- Server
  - cd server
  - npm install
  - npm start
  - now express server should run at localhost:8080
- DB
  - `docker-compose up -d`

## Design descions and front end

- Chose Material UI since, it is with a rich component library, Out of the box responsive design, themeing support.
- Job card was created as a resuabel component. Adding customized body section so it can be extended to use in both invited page as well as accpeted page.
- React query was used as the state managmenet solution, since it works well with the hooks api and it has a declarative api and less boilerplate code. And it comes with caching as well.
- Lazy loading was added considering the performance and to reduce initial load time.

### If had more time

If had more time, I would consider adding below,

- Adding loaders so that user gets the feedback of data are being fetched.
- Loaders for the accept and decline button to give the user feedback of making an api request. And adding notifications at the bottom to let user know that it has been moved succussfully
- Adding mailto, phone links in the contact section.
- Adding a manual refresh icon so that user can refresh to see new jobs.
- imlementing infinty scroll or pagination to increase the performance.
- Sometimes descritpion is too long, so adding short text with a 'see more' button
- Adding unit tests
- adding more strict lint rules to ensure code quality

## Backend

- Created the backend as a layered architecture
- sperated the business logic in the service layer so all the domain models can live there.
- Seqaualize was chosen as the ORM since it has much more sphosticated features and community support

### If had more time

- Adding schema validations for the API
- Adding unit testing
- Add everything to the docker app
