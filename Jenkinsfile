pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'nodejs-app'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Fetch the latest branch name dynamically
                    def branch = sh(script: "git ls-remote --heads https://github.com/Abrar944/Node-class.git | grep refs/heads/main || echo master", returnStdout: true).trim()
                    
                    // Checkout the correct branch
                    git branch: branch, url: 'https://github.com/Abrar944/Node-class.git'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE)
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    sh "docker run -d -p 3000:3000 --name ${DOCKER_IMAGE} ${DOCKER_IMAGE}"
                }
            }
        }
    }

    post {
        always {
            script {
                def containers = sh(script: "docker ps -q -f ancestor=${DOCKER_IMAGE}", returnStdout: true).trim()
                if (containers) {
                    sh "docker rm -f ${containers}"
                }
            }
        }
    }
}
