### exemplo de aplicação

Neste exemplo utilizamos variáveis de ambiente para cada um dos stages e configuramos o arquivo `serverless.yml` para ler os jsons com as respectivas variaveis de ambiente, ainda dentro de config temos todas as definições de configuração do serverless e a pasta de recursos da aplicação

```
config/
└── serverless/
    └── resources/
    │   │ └── dynamo.hero.table.yml
    │   └── db.iam.role.yml
    └── env.prod.json
    └── env.qa.json
    └── settings.js
```
