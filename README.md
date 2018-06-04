# Bank Web

## setup for mac

### brew
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

### mysql
1. `brew install mysql`
2. start mysql service to automatically run on system restart `brew services start mysql`
3. check if mysql is running with command `mysql -uroot -proot`
..* if mysql does not start, run command `mysql -uroot`
..* change password to `root` by running `SET PASSWORD FOR 'root'@'localhost' = PASSWORD('root');`
4. run command `create database cbp;` in mysql

### nginx
1. `brew install nginx`
2. `cd /usr/local/etc/nginx`
3. `mkdir sites-available`
4. `mkdir sites-enabled`
5. edit `nginx.conf` file
..* add line `include sites-enabled/*;` after `include servers/*;`

6. Goto the root directory of this project
7. `git fetch && git checkout dashboard`
8. `cd bank-web`
9. `mkdir /usr/local/etc/nginx/ssl/netbanking-ite/`
10. `cp -r ./tools/nginx/ssl/ite/ /usr/local/etc/nginx/ssl/netbanking-ite/`
11. `cp ./tools/nginx/nginx.conf /usr/local/etc/nginx/sites-available/netbanking-ite.paytmbank.com`
12. `cd /usr/local/etc/nginx/sites-enabled`
13. `ln -s ../sites-available/netbanking-ite.paytmbank.com netbanking-ite.paytmbank.com`
14. `cd ..`
15. `sudo nginx -s reload` if this does not run try `sudo nginx`
16. start nginx service `brew services start nginx`

### log permissions
1. sudo chmod 777 /var/log

### create entry in /etc/hosts
1. Add `127.0.0.1    netbanking-ite.paytmbank.com` in /etc/hosts# vue-grid
