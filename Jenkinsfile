pipeline {
    agent {
            dockerfile {
                filename 'Dockerfile'

                additionalBuildArgs '-t calc_app'
            }
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
