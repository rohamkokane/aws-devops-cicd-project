pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-cicd-app ./app'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                    docker rm -f myapp || true
                    docker run -d -p 3000:3000 --name myapp devops-cicd-app
                '''
            }
        }
    }
}
