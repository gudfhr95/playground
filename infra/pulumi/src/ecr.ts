import * as awsx from '@pulumi/awsx';

export const helloWorldRepository = new awsx.ecr.Repository('hello-world', {});
