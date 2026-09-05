pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/skysamuels-art/my-node-app.git',
                    branch: 'main'
            }
        }

        stage('Build') {
            steps {
                sh 'docker build -t skysamuels/my-node-app:latest .'
            }
        }

        stage('Test') {
            steps {
                sh 'docker run --rm skysamuels/my-node-app:latest npm test'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub-credentials-id',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )
                ]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                    sh 'docker push skysamuels/my-node-app:latest'
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'docker rm -f my-node-app || true'
                sh 'docker run -d --name my-node-app -p 3000:3000 skysamuels/my-node-app:latest'
            }
        }
    }
}
