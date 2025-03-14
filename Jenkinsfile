pipeline {
    agent any

    environment {
        IMAGE_NAME = "nodejs-app"
        CONTAINER_NAME = "nodejs-container"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/tutsmake/Simple-Node-JS-App.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Deploy on EC2') {
            steps {
                script {
                    sh """
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                        docker run -d --name ${CONTAINER_NAME} -p 3000:3000 ${IMAGE_NAME}:latest
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed!'
        }
    }
}
