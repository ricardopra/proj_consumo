# Projeto de Monitoramento de Consumo de Água

Este projeto é uma API desenvolvida em NestJS para monitorar o consumo de água em uma comunidade. A API fornece funcionalidades para registrar o consumo de água, acessar o histórico de consumo e alertar sobre consumos elevados, alinhando-se ao Objetivo de Desenvolvimento Sustentável.

## Funcionalidades

### 1. Registro de Consumo
- Permite o registro diário do consumo de água de cada usuário.
- Os dados do consumo são armazenados no banco de dados MongoDB.

### 2. Histórico de Consumo
- Os usuários podem acessar o histórico de consumo de água.
- O histórico pode ser filtrado por período, permitindo análises detalhadas.

### 3. Alertas de Consumo Elevado
- A API envia alertas quando o consumo de água ultrapassa um limite predefinido.
- Os alertas podem ser enviados via e-mail ou notificação (a ser implementado).

### 4. Interface Responsiva
- O front-end é desenvolvido para ser responsivo, adaptando-se a diferentes tamanhos de tela.
- Botões interativos que mudam de cor ao passar o cursor para melhorar a experiência do usuário.

### 5. Integração com Banco de Dados
- Utiliza MongoDB para armazenar dados de consumo e usuários.

### 6. Implementação em Nuvem
- O projeto está hospedado no Vercel, proporcionando acesso fácil e escalabilidade.
- As credenciais do MongoDB estão ocultas e seguras.

## Tecnologias Utilizadas
- **Backend**: NestJS
- **Banco de Dados**: MongoDB
- **ORM**: Mongoose
- **Gerenciamento de Configuração**: @nestjs/config
- **Hospedagem**: Vercel
- **Frontend**: HTML/CSS (com possibilidade de frameworks adicionais)

![image](https://github.com/user-attachments/assets/4b0ba8cb-8c88-4562-b5d0-41a8da4c1a99)

![image](https://github.com/user-attachments/assets/500ed2d9-4e66-4f70-a1fc-18cfee559aa7)

![image](https://github.com/user-attachments/assets/b6f598d0-b749-4821-85ec-44958620c8b3)





