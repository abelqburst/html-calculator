pipeline {
    agent {
            dockerfile true
    }
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t calc_app . '
            
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
