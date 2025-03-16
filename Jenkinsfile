pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'nodejs-app'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from GitHub
                git 'https://github.com/yourusername/your-repo.git'
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
                    docker.image(DOCKER_IMAGE).run('-d -p 3000:3000')
                }
            }
        }
    }

    post {
        always {
            // Clean up the Docker container after the build
            script {
                def containers = docker.ps('-q', '-f', "ancestor=${DOCKER_IMAGE}")
                if (
        always {
            script {
                // Clean up the Docker container after the build
                def containers = docker.ps('-q', '-f', "ancestor=${DOCKER_IMAGE}")
                if (containers) {
                    docker.removeContainer(containers)
                }
            }
        }
    }
}

