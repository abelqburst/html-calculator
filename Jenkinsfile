pipeline {
    agent {
            dockerfile true
    }
    stages {
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
