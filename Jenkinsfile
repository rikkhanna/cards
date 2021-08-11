pipeline {
  agent any
  stages {
    stage('stage-1') {
      steps {
        echo 'This is the $BUILD_NUMBER of $DEMO'
        sh 'echo "This is the $BUILD_NUMBER of $demo"'
      }
    }

  }
  environment {
    demo = '1'
  }
}