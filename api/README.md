Clear cache for volume if it is full, no space
**How to run this project on local**
- Install docker 
`For Ubuntu https://docs.docker.com/engine/install/ubuntu/`
`For MacOS https://docs.docker.com/desktop/install/mac-install/`
`For Windows https://docs.docker.com/desktop/install/windows-install/`
- Open file .env and change it if you don't want to use default
- Start docker by Docker Desktop
- Using command `docker ps` to show docker container name or ID
- Access container by it `docker exec -it <containerID> bash` to make sure everything work well. After that, exit docker command line
- Import mysql from local machine to docker by `docker exec -i <containerID> mysql -uroot -proot <DB NAME> < api/<DB NAME>.sql`
- Start project by command `./run.sh local`. Wait 1-2 minutes for build project
**APIs**
Use the Postman to easy testing API

**Database**
Use MySQL database. Here is describle tables and fields

**RunTest**
- Access to folder `api` and run `yarn install` before run test
- run test with command `yarn test`
- If have mysql error, please check config database again in above file `crypto.js`
