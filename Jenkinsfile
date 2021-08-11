pipeline {
  agent any
  stages {
    stage('stage-1') {
      steps {
        echo 'This is the $BUILD_NUMBER of $DEMO'
        sh 'echo "Hello from shell"'
      }
    }

  }
  environment {
    demo = '1'
  }
}