import * as pulumi from '@pulumi/pulumi';
import * as eks from '@pulumi/eks';

const config = new pulumi.Config();

export const cluster = new eks.Cluster('playground-cluster', {
  name: `playground-cluster-${config.require('profile')}`,
});
