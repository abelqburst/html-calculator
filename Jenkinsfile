pipeline {
    agent {
        docker {
            dockerfile true
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t root/html-calculator'
            
            }
        }
        stage('test') {
            steps {
                sh './script.sh'
                sh 'docker ps'
            }
        }
        stage('Stop'){
            steps {
                input message: 'Finished App?'
                sh 'docker stop app'
            }
        }
    }
}
