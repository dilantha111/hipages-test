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
