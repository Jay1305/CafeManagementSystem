# Cafe management system

## Environment used
1. Mac OSX Big Sur (All steps should work on Windows as well)
2. Visual Studio Code V. 1.64
3. NVM - 0.39.1
4. Node JS - 14.15.4
5. NPM - 6.14.10
6. MySQL Community tar file - https://cdn.mysql.com//Downloads/MySQL-8.0/mysql-8.0.28-macos11-x86_64.tar.gz


### Node environment preparation for development
1. Use Node Virtual Manager to install node versions as needed
2. nvm install 14.15.4
3. nvm use 14.15.4

### MySQL environment preparation for development
1. Download MySQL community tar file using Safari - https://cdn.mysql.com//Downloads/MySQL-8.0/mysql-8.0.28-macos11-x86_64.tar.gz
2. Extract to location per your choice
3. Using initialize option start daemon so to get temporary password - ~/Desktop/mysql-8.0.28-macos11-x86_64/bin/mysqld --initialize 
4. Note down that password and now run mysqld without any options. Add & at the end so that it will run in the background. - ~/Desktop/mysql-8.0.28-macos11-x86_64/bin/mysqld &
5. Run mysql with -u and -p options -  ~/Desktop/mysql-8.0.28-macos11-x86_64/bin/mysql -u root -p and then enter the temporary password received.
6. Change password for local root user using command - ALTER USER 'root'@'localhost' IDENTIFIED BY '<newpass>';
7. flush privileges; <== DON'T FORGET THIS AFTER CHANGING THE PASSWORD, OR YOU CAN GET CONNECTION ISSUES FROM PROJECT
8. Use dbeaver or any other client to connect to local mysql.

### NPM Packages used
1. express - for web api
2. cors - for cross site origin access
3. mysql - for db connection
4. dotenv - for envrionment variables
5. nodemon - for development only to restart node process
6. nodemailer - for sending emails
7. jsonwebtoken - for JWT token


This project was created while listening on Youtube video