# Deploying a Node.js Application on AWS EC2

This guide provides step-by-step instructions to set up and deploy a simple Node.js application on an AWS EC2 instance.

## Prerequisites
- An AWS account with access to EC2.
- SSH access to the EC2 instance.
- Basic knowledge of Linux commands.

## Step 1: Log in to the AWS Console
Log in to your AWS account and navigate to the EC2 dashboard:  
[EC2 Console](https://console.aws.amazon.com/ec2/)

## Step 2: Connect to AWS EC2 Instance via SSH
Use an SSH client to connect to your EC2 instance. If you need help connecting, refer to AWS documentation on how to connect to an EC2 instance from Windows, macOS, or Linux.

```sh
ssh -i your-key.pem ec2-user@your-ec2-instance-ip
```

## Step 3: Install Node.js and NPM
### Update Ubuntu Packages
```sh
sudo apt-get update
```

### Install NVM (Node Version Manager)
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

### Enable NVM
```sh
~/.nvm/nvm.sh
```

### Install Node.js
```sh
nvm install 21
```

### Verify Installation
```sh
node -v
```

## Step 4: Install Git
```sh
sudo apt-get install git
```

Git is required to clone the application repository from GitHub.

## Step 5: Deploy Node.js Application on AWS EC2
### Clone the Node.js Application Repository
```sh
git clone https://github.com/tutsmake/Simple-Node-JS-App.git
```

### Navigate into the Application Directory
```sh
cd Simple-Node-JS-App
```

### Install Dependencies
```sh
npm install
```

## Step 6: Start the Node.js Application
```sh
node index.js
```

To keep the Node.js app running after you close the terminal or disconnect from the server, install and use PM2:

```sh
sudo npm install pm2 -g
pm2 start index.js
```

## Step 7: Access the Node.js Application in the Browser
Once the application is running, you can access it using your EC2 instance's public IP address.

```sh
http://your-ec2-instance-ip:3000
```

## About the Simple Node App
This is a basic Node.js application that allows users to enter their name and receive a welcome message.

---

This guide is intended for beginners who want to quickly deploy a Node.js application on AWS EC2. If you have any questions, feel free to reach out!

