import {helloWorldRepository} from './ecr';
import {cluster} from './eks';

export const kubeconfig = cluster.kubeconfig;

export const helloWorldRepositoryUrl = helloWorldRepository.url;
