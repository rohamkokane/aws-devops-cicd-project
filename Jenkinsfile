pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                dir('app') {
                    sh 'docker build -t devops-cicd-app .'
                }
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag devops-cicd-app kokaneroham@gmail.com/devops-cicd-app:latest'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push kokaneroham@gmail.com/devops-cicd-app:latest'
            }
        }
    }
}