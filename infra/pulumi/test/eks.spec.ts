import * as pulumi from '@pulumi/pulumi';
import {beforeAll, beforeEach, describe, expect, it} from '@jest/globals';
import {promiseOf} from './util';

describe('EKS', () => {
  let infra: typeof import('../src/eks');

  beforeAll(() => {
    pulumi.runtime.setAllConfig({
      'project:profile': 'test',
    });

    pulumi.runtime.setMocks({
      newResource: (
        args: pulumi.runtime.MockResourceArgs
      ): {id: string; state: any} => {
        return {
          id: `${args.name}-id`,
          state: {
            eksCluster: {
              name: `${args.inputs.name}`,
            },
          },
        };
      },

      call: (args: pulumi.runtime.MockCallArgs) => {
        return args.inputs;
      },
    });
  });

  beforeEach(async () => {
    infra = await import('../src/eks');
  });

  describe('playground cluster', () => {
    it('should be created', async () => {
      const clusterId = await promiseOf(infra.cluster.eksCluster.id);
      const clusterName = await promiseOf(infra.cluster.eksCluster.name);

      expect(clusterId).toBe('playground-cluster-eksCluster-id');
      expect(clusterName).toBe('playground-cluster-test');
    });
  });
});
