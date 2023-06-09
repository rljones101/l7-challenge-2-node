# Start your image with a node base image
FROM node:18-alpine

# The /app directory should act as the main application directory
WORKDIR /app

# Copy the app package and package-lock.json file
COPY package*.json ./

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install && npm install -g serve


# Bundle app source
COPY . .

EXPOSE 3000
# Start the app using serve command
CMD [ "node", "./src/index.js" ]