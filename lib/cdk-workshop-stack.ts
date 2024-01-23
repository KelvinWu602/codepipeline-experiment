import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class CdkWorkshopStack extends cdk.Stack {
  public readonly endpointUrl: cdk.CfnOutput;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler'
    });

    const gateway = new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: hello
    });

    this.endpointUrl = new cdk.CfnOutput(this,'url', {
      value: gateway.url
    });
  }
}
