import * as pulumi from '@pulumi/pulumi';
import {beforeAll, beforeEach, describe, expect, it} from '@jest/globals';
import {promiseOf} from './util';

describe('S3', () => {
  let infra: typeof import('../src/ecr');

  beforeAll(() => {
    pulumi.runtime.setMocks({
      newResource: (
        args: pulumi.runtime.MockResourceArgs
      ): {id: string; state: any} => {
        return {
          id: `${args.name}-id`,
          state: args.inputs,
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

  describe('bucket', () => {
    it('should be created', async () => {
      const bucketName = await promiseOf(infra.bucket.id);
      expect(bucketName).toBe('my-bucket-3-id');
    });
  });
});
