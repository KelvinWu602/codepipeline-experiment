import { CdkWorkshopStack } from "./cdk-workshop-stack";
import { Stage, StageProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CdkWorkshopPipelineStage extends Stage {
    constructor(scope: Construct, id: string, props?: StageProps){
        super(scope,id,props);
        new CdkWorkshopStack(this,'WebService');
    }
}