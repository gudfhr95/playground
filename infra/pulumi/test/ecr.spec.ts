import * as pulumi from '@pulumi/pulumi';
import {beforeAll, beforeEach, describe, expect, it} from '@jest/globals';
import {promiseOf} from './util';

describe('ECR', () => {
  let infra: typeof import('../src/ecr');

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
            url: `${args.name}-url`,
            repository: {
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
    infra = await import('../src/ecr');
  });

  describe('hello-world repository', () => {
    it('should be created', async () => {
      const helloWorldRepositoryName = await promiseOf(
        infra.helloWorldRepository.repository.name
      );
      const helloWorldRepositoryUrl = await promiseOf(
        infra.helloWorldRepository.url
      );

      expect(helloWorldRepositoryName).toBe('hello-world-test');
      expect(helloWorldRepositoryUrl).toBe('hello-world-url');
    });
  });
});
