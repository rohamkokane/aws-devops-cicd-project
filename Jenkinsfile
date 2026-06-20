pipeline {
    agent any

    stages {
        
        
        
        stage('Generate Build Info') {
            steps {
                sh '''
                echo BUILD_NUMBER=$BUILD_NUMBER > app/build-info.txt
                echo BUILD_TIME=$(date) >> app/build-info.txt'''
            }
        }



        stage('Build Docker Image') {
            steps {
                dir('app') {
                    sh 'docker build -t devops-cicd-app .'
                }
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag devops-cicd-app roham132/devops-cicd-app:latest'
            }
        }

        stage('Push Image') {
            steps {
                sh 'docker push roham132/devops-cicd-app:latest'
            }
        }

        stage('Deploy to EC2') {
            steps {
                sh '''
                ssh -o StrictHostKeyChecking=no ec2-user@52.66.203.37 "
                docker pull roham132/devops-cicd-app:latest &&
                docker stop myapp || true &&
                docker rm myapp || true &&
                docker run -d -p 3000:3000 --name myapp roham132/devops-cicd-app:latest
                "
                '''
            }
        }
    }
}