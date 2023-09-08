# What for

Just for fun......

# How to use

## sh

````sh
npm install
npm start
````

## pm2

```` pm2
npm install pm2@latest -g
pm2 start --name dayu-app 'npm start'
pm2 list
````

## nginx

### path

````
cd /etc/nginx/conf.d
````

### config

````
server {
        listen       80;
        server_name  localhost;

        location / {
            proxy_pass http://localhost:3000;
        }
	
	location ^~ /video/ {
            alias /var/videos/;  # 音视频文件目录
    	}
}
````

### restart

````
systemctl restart nginx
````