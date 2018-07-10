pipeline {
    agent {
            dockerfile {
                filename 'Dockerfile'

                additionalBuildArgs '-t calc_app'
            }
    }
    stages {
        stage('Build'){
            steps {
                sh 'docker run -p 3000:3000 calc_app '
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
