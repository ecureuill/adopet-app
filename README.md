
# Adopet

<img src="./src/assets/images/logo-blue.svg" width=800px/>

[![Alura Challenge Front-End](https://www.alura.com.br/assets/img/challenges/logos/challenges-logo-front.1674580905.svg)](https://www.alura.com.br/challenges) 

4-week challenge to develop the version of the adopter user's screens for the AdoPet website, which will have a login page, registration, list of pets and message form. This is a project focused on responsive layout, being recommended the mobile first approach. 

-------------------------


| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Adopet**
| :label: Tecnologias | React, TypeScript, React-Router-Dom, React-Query, React-Responsive, Axios, Testing-Library
| :rocket: URL         | https://ecureuill.github.io/adopet-app/
| :fire: Desafio     | [Figma](https://www.figma.com/file/TlfkDoIu8uyjZNla1T8TpH/Challenge---Adopet)

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![Adopet - home page](https://github.com/ecureuill/adopet-app/assets/993369/73f362b2-cebb-480b-a957-b2762f37d4c4)


## Project Details

This project is consuming data from [Adopet API ](https://github.com/ecureuill/adopet) using [axios](https://github.com/axios/axios) for http client and [react-query ](https://github.com/TanStack/query) for state management.

The css architecture was based on ITCSS.

For the responsive layout, I decided to experiment with fluid design, instead of fixed breakpoints. And when a component should only render in specifics screen width, I used [react-responsive](https://github.com/yocontra/react-responsive) hooks to determine the condition. 

Coded Features
- Register tutor user
- Log in
- Edit tutor profile  (all data and photo)
- List all pets

### Demo version
For demo purpose, a version with mock data was published [here](https://ecureuill.github.io/adopet-app/).
You can log in with email `tutor@mail.com` and password `123aSd7`.  It will automatically logout after 1 minute. 

Is possible to edit user profile data, except for the photo (you can select one from your device, but it will not be rendered). 
You can mimic create a new user and sent message to a shelter. 

### Next step

- [ ] Redesign with accessibiltiy-first approach
- [ ] Create shelter-user signup page
- [ ] Create shelter-user profile edit page
- [ ] Create pet register for shelter user
- [ ] Create pet edit page for shelter user
- [ ] Create pet adopt page for shelter user
- [ ] Create shelter-user signup page
- [ ] Create inbox message page
- [ ] Improve sent message page

### Screenshots
#### Mobile 

##### Non authenticated user
<div styles={display:'inline'}>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/1d6e6a01-33b4-4808-b9ae-ab69a3628718' alt= 'Home Page' style="width: 20%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/630aff9c-6e8d-4c62-9b2e-ea92c09743c9' alt= 'Sign Up Page' style="width: 20%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/86a63220-05b9-40a7-957c-21c29e1f83cf' alt= 'Login Page' style="width: 20%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/c03d373a-afa2-4895-b021-1726ecf26eee' alt= 'Pets Page' style="width: 20%;"/>
</div>

##### Authenticated user
<div styles={display:'inline'}>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/0e4ebc06-b0ce-4b9f-b1a9-ec898ed1d1cb' alt= 'Home Page' style="width: 20%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/56cbf362-aaf9-46a4-b81c-991c221be653' alt= 'Sent Message Page' style="width: 20%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/9ef1e0e7-e604-4e23-b46d-867ced710e54' alt= 'Profile Page' style="width: 20%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/b538a2da-2fc8-41cf-86ee-9cd3c59cbec1' alt= 'Pets Page' style="width: 20%;"/>
</div>

#### Tablet (width 768) 

##### Non authenticated user
<div styles={display:'inline'}>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/c27e23f0-3316-45c6-a04b-f3ed06326086' alt= 'Home Page' style="width: 40%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/4a19cce4-61f1-43b4-aae4-cd4e3b7d20ef' alt= 'Sign Up Page' style="width: 40%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/87796ebc-ba22-4735-909d-354cac4d3de5' alt= 'Login Page' style="width: 40%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/2a781724-d3fd-4208-820e-f5becf88da1b' alt= 'Pets Page' style="width: 40%;"/>
</div>

##### Authenticated user
<div styles={display:'inline'}>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/c71544e7-75a0-4dfb-9511-bcae4de82849' alt= 'Home Page' style="width: 40%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/08490dbd-8c12-4855-ae31-600fa38e5536' alt= 'Sent Message Page' style="width: 40%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/e38b8c38-b3ec-41ab-8e26-b5f34260a0a8' alt= 'Profile Page' style="width: 40%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/6194e981-b3c7-4ae5-9137-75386d2887b9' alt= 'Pets Page' style="width: 40%;"/>
</div>

#### Desktop (width 1440) 

##### Non authenticated user
<div styles={display:'inline'}>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/4b3f6bc1-5dfa-4a2c-bcf7-d5e32b888626' alt= 'Home Page' style="width: 80%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/afad5cc0-833f-441e-bcd7-c28032a9f909' alt= 'Sign Up Page' style="width: 80%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/c0a4a341-0365-40bc-82b5-a18ec61b014f' alt= 'Login Page' style="width: 80%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/39cf227a-8b2e-4798-8e2e-f6ddc60aa942' alt= 'Pets Page' style="width: 80%;"/>
</div>

##### Authenticated user
<div styles={display:'inline'}>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/4ffb70ff-7661-4c77-96c8-31f6b0533c99' alt= 'Home Page' style="width: 80%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/614d016f-b4e5-4dfb-a008-5284061b69d1' alt= 'Sent Message Page' style="width: 80%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/5d470aa1-f6e7-45f1-9a89-9b28a5a3b835' alt= 'Profile Page' style="width: 80%;"/>
    <img src='https://github.com/ecureuill/adopet-app/assets/993369/78d55d8b-b7a0-498d-9471-cff48cce1f6e' alt= 'Pets Page' style="width: 80%;"/>
</div>

