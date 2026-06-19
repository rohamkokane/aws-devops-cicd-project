pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Code fetched successfully'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-cicd-app ./app'
            }
        }

        stage('Verify Image') {
            steps {
                sh 'docker images'
            }
        }

    }
}
