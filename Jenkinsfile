pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
               sh 'npm install'
            }
        }
        stage('install') {
            steps {
                sh 'npm --version'
            }
        }
        stage('test') {
            steps {
                sh 'npm start'
            }
        }
        stage('Stop'){
            steps {
                input message: 'Finished App?'
                sh 'killall node'
            }
        }
    }
}
