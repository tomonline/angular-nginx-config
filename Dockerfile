# Use an official Node.js runtime as the base image
FROM nginx:latest

# Copy the Nginx configuration file
COPY conf/nginx.conf /etc/nginx/nginx.conf

# Create a directory for the static files
# RUN mkdir /var/www/html

# Copy the static files to the directory
COPY dist/angular-ngix-config/browser /usr/share/nginx/html

# Copy the JSON file to the directory
COPY conf/configuration.json /usr/share/nginx/html/configuration.json

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]