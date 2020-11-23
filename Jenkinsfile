pipeline{
    agent any
    parameters{
        // string(name: "VERSION",defaultValue: '', description:" this is des")
        choice(name: "VERSION",choices: ['2.1.0','2.1.1','2.1.2'], description:" this is des")
        booleanParam(name:'executeTests' ,defaultValue: true, description: "")
    }
    // environment{
    //     when{
    //         expression{
    //             params.executeTests == true 
    //             params.VERSION == '2.1.0'
    //         }
    //     }
    //     NEW_VERSION = '1.3.0'
    //     SERVER_CREDENTIALS = credentials('cred id in jenkis')
    // }

    stages{
        stage("clean up"){
            steps{
                echo "cleanning Up ${NEW_VERSION}"
                
            }
        }
        stage("checkout"){
            steps{
                echo "checkout Up"
            }
        }
        stage("Build"){
            steps{
                echo "building up"
            }
        }
        stage("test"){
            when {
                expression{
                    BRANCH_NAME == 'master'
                }
            }
            steps{
                echo "testing Up"
            }
        }
        stage("Deploy"){
            steps{
                echo "deploying Up"
            }
        }
    }
    // post{
    //     always {
    //          //always executed
    //         //sending emails to tell about status
    //     }

    }
}
