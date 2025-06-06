# 📱 Mobile App - Gestão de Eventos (Global Solution)

Este é um aplicativo desenvolvido com **React Native + Expo** como parte da disciplina **Mobile Application Development** da FIAP, integrado à **API Java Spring Boot** da disciplina Java Advanced. Ele permite o gerenciamento de eventos com funcionalidades completas de CRUD, navegação entre telas e integração com backend.

---

## 👥 Integrantes do Grupo

- Vinicius Beda de Oliveira (RM554914)
- Thiago Alves dos Santos (RM556805)

---

## 🎯 Descrição da Solução (Global Solution)

O app faz parte de uma solução integrada para monitoramento e gerenciamento de **eventos extremos** em localidades sensíveis. A proposta é centralizar dados de ocorrências em uma plataforma web (Java API) e permitir que equipes em campo possam **consultar, criar, atualizar e remover eventos diretamente pelo app mobile**.

---

## 🚀 Tecnologias Utilizadas

### 💻 Frontend (Mobile App)

- React Native com Expo
- React Navigation (stack)
- Axios (requisições HTTP)
- AsyncStorage (persistência)
- Expo CLI
- Componentização e boas práticas

### 🌐 Backend (API)

- Java 24 + Spring Boot
- Spring Web, JPA, Validation
- Banco de dados H2
- Swagger para testes

---

## 📱 Funcionalidades

- ✅ Tela de Login (mockada ou com API)
- ✅ Tela Home com lista de eventos
- ✅ Detalhamento de evento
- ✅ Cadastro de novos eventos
- ✅ Atualização de eventos existentes
- ✅ Exclusão de eventos
- ✅ Navegação entre telas com React Navigation
- ✅ Consumo de API com Axios
- ✅ Feedback visual (alerts, loaders)
- ✅ Estilo e identidade visual personalizada

---

## 📁 Estrutura de Pastas

```
mobile-app/
├── assets/
├── components/
│   ├── EventoCard.js
│   └── Loading.js
├── screens/
│   ├── HomeScreen.js
│   ├── EventoFormScreen.js
│   ├── EventoListScreen.js
│   ├── DetailsScreen.js
│   ├── ProfileScreen.js
│   └── LoginScreen.js
├── services/
│   ├── api.js
│   ├── eventService.js
│   └── locationService.js
├── navigation/
│   └── index.js
├── styles/
│   └── global.js
└── App.js
```

---

## 🔗 Repositórios

- **Frontend (Mobile)**: [link GitHub do app mobile]
- **Backend (API Java)**: [link GitHub da API]

---

## 📽️ Demonstração em Vídeo

📺 Assista no YouTube: [link do vídeo demonstrando o app funcionando]

---

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js instalado
- Expo CLI (`npm install -g expo-cli`)
- Java 17 ou superior para a API

### Rodando o Mobile

```bash
git clone [repo-link]
cd mobile-app
npm install
npx expo start
```

> Escaneie o QR Code com o **Expo Go** no seu celular

### Rodando a API

```bash
cd sird-api
./mvnw spring-boot:run
```

> Certifique-se de atualizar o IP no `api.js` do app mobile para o IP local da sua máquina rodando a API.

---

## 📌 Observações

- A API precisa estar rodando na mesma rede local do celular para que o app consiga acessar os endpoints.
- O IP da máquina precisa ser configurado corretamente no `api.js` (ex: `http://192.168.1.100:8080`)

---

## 📝 Licença

Projeto acadêmico, sem fins comerciais.
