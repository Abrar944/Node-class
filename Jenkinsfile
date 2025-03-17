pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'nodejs-app'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub
                git 'https://github.com/Abrar944/Node-class.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    // Run Docker container
                    sh "docker run -d -p 3000:3000 --name ${DOCKER_IMAGE} ${DOCKER_IMAGE}"
                }
            }
        }
    }

    post {
        always {
            script {
                // Clean up any running container from the previous build
                def containers = sh(script: "docker ps -q -f ancestor=${DOCKER_IMAGE}", returnStdout: true).trim()
                if (containers) {
                    sh "docker rm -f ${containers}"
                }
            }
        }
    }
}
