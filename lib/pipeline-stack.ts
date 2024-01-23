import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import { Construct } from 'constructs';

export class WorkshopPipelineStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id,props);

        new CodePipeline(this, 'Pipeline', {
            synth: new ShellStep('Synth', {
                input: CodePipelineSource.gitHub('KelvinWu602/codepipeline-experiment', 'main'),
                commands: ['echo "Hello world!!!!!!!"',
                           'npm ci',
                           'npm run build',
                           'npx cdk synth']
            })
        })
    }
}