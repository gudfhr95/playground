# Playground

## Table of Contents

[//]: # (+ [About]&#40;#about&#41;)

+ [Getting Started](#getting_started)

[//]: # (+ [Usage]&#40;#usage&#41;)

[//]: # (+ [Contributing]&#40;../CONTRIBUTING.md&#41;)

[//]: # (## About <a name = "about"></a>)

[//]: # ()

[//]: # (Write about 1-2 paragraphs describing the purpose of your project.)

## Getting Started <a name = "getting_started"></a>

[//]: # (These instructions will get you a copy of the project up and running on your local machine for)

[//]: # (development and testing purposes. See [deployment]&#40;#deployment&#41; for notes on how to deploy the)

[//]: # (project on a live system.)

### Prerequisites

- pre-commit >= 3
- Earthly >= 0.7
- Pulumi >= 3
- Node.js >= 20
- pnpm >= 8
- FluxCD >= 2

### Installing

- Add repository secrets in Github Actions
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `AWS_REGION`
  - `PULUMI_ORG_NAME`
  - `PULUMI_ACCESS_TOKEN`

- Install pre-commit hooks

```shell
pre-commit install
```

- Configure Pulumi

```shell
export AWS_ACCESS_KEY_ID=<YOUR_ACCESS_KEY_ID>
export AWS_SECRET_ACCESS_KEY=<YOUR_SECRET_ACCESS_KEY>

pulumi login
```

- Install Node.js dependencies

```shell
pnpm install
```

[//]: # (## Usage <a name = "usage"></a>)

[//]: # ()

[//]: # (Add notes about how to use the system.)
