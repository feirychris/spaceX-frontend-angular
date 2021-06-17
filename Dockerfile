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