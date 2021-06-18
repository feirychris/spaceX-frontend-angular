# Stage 1

# Base image
FROM node:12.16.2-alpine As builder

# Install and cache app dependencies
WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm install -g @angular/cli@12

# add app
COPY . .

# open port 4200
EXPOSE 4200

# open port to enable auto compile on windows
EXPOSE 49153

# start app 
CMD ng serve --host 0.0.0.0 --poll

# Stage 2

# production
RUN ng build --prod

# launch server
FROM nginx:alpine

# copy conf file
COPY nginx.conf  /etc/nginx/nginx.conf

# copy app
COPY /dist/spaceX-front  /usr/share/nginx/html

# expose port
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]