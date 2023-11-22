import * as pulumi from '@pulumi/pulumi';
import * as awsx from '@pulumi/awsx';

const config = new pulumi.Config();

export const helloWorldRepository = new awsx.ecr.Repository('hello-world', {
  name: `hello-world-${config.require('profile')}`,
});
