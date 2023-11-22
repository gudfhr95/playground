import * as pulumi from '@pulumi/pulumi';
import * as awsx from '@pulumi/awsx';

const config = new pulumi.Config();

/* 1 */
export const helloWorldRepository = new awsx.ecr.Repository('hello-world', {
  name: `hello-world-${config.require('profile')}`,
});
