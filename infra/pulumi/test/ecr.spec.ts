import * as pulumi from '@pulumi/pulumi';
import {beforeAll, beforeEach, describe, expect, it} from '@jest/globals';
import {promiseOf} from './util';

describe('ECR', () => {
  let infra: typeof import('../src/ecr');

  beforeAll(() => {
    pulumi.runtime.setMocks({
      newResource: (
        args: pulumi.runtime.MockResourceArgs
      ): {id: string; state: any} => {
        return {
          id: `${args.name}-id`,
          state: {
            ...args.inputs,
            url: `${args.name}-url`,
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
      const helloWorldRepositoryUrl = await promiseOf(
        infra.helloWorldRepository.url
      );
      expect(helloWorldRepositoryUrl).toBe('hello-world-url');
    });
  });
});
