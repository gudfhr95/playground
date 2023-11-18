import * as pulumi from '@pulumi/pulumi';

export function promiseOf<T>(output: pulumi.Output<T>): Promise<T> {
  return new Promise(resolve => output.apply(resolve));
}
