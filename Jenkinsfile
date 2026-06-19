pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Fetching code...'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-cicd-app ./app'
            }
        }

    }
}
