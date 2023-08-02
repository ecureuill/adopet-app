
<div align="center">

# <a href='https://ecureuill.github.io/Adopet-app/'><img src="./src/assets/images/logo-blue.svg" alt="adopet" width=800px/></a>

![HTML5](https://img.shields.io/badge/-HTML5-000?&logo=HTML5)
![CSS3](https://img.shields.io/badge/-CSS3-000?&logo=CSS3)
![React](https://img.shields.io/badge/-React-000?&logo=React)
![Docker](https://img.shields.io/badge/-Docker-000?&logo=Docker)
![Linux](https://img.shields.io/badge/-Linux-000?&logo=Linux)
![Git](https://img.shields.io/badge/Git-000?&logo=Git)
![SublimeText](https://img.shields.io/badge/SublimeText-000?&logo=SublimeText)

[![Alura Challenge Front-End](https://www.alura.com.br/assets/img/challenges/logos/challenges-logo-front.1674580905.svg)](https://www.alura.com.br/challenges) 

4-week challenge to develop the version of the adopter user's screens for the AdoPet website, which will have a login page, registration, list of pets and message form. This is a project focused on responsive layout, being recommended the mobile first approach. 

</div>

-------------------------


| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Adopet**
| :label: Tecnologias | React, TypeScript, React-Router-Dom, React-Query, React-Responsive, Axios, Testing-Library
| :rocket: URL         | https://ecureuill.github.io/adopet-app/
| :fire: Desafio     | [Figma](https://www.figma.com/file/TlfkDoIu8uyjZNla1T8TpH/Challenge---Adopet)

<!-- Inserir imagem com a #vitrinedev ao final do link -->
![Adopet - home page](https://github.com/ecureuill/adopet-app/assets/993369/73f362b2-cebb-480b-a957-b2762f37d4c4)

## Table of Content

- [About](#about)
- [Project Details](#project-details)
- [Technologies Used](#technologies-used)
- [Layout and Responsiveness](#layout-and-responsiveness)
- [Live demo](#live-demo)
- [Feedback and Contribution](#feedback-and-contributions)
- [Screenshots](#screenshots)

## About
Adopet App is the result of the Alura Front-end Challenge, developed based on the provided [Figma design](https://www.figma.com/file/TlfkDoIu8uyjZNla1T8TpH/Challenge---Adopet). The project showcases the skills and knowledge acquired during the challenge.

## Project Details

The server-side of the Adopet App is developed in Node.js and can be found in a separate repository at [Adopet API ](https://github.com/ecureuill/adopet).

## Technologies Used

The project is built using the following technologies:

- React
- TypeScript
- React-Router-Dom
- React-Query
- React-Responsive
- Axios
- Testing-Library

I tried to well-structured and organize the project. The css architecture was based on ITCSS.

The use of TypeScript enhances code readability and promotes type safety.

The adoption of React-Query helps optimize data fetching and management, resulting in faster loading times and improved performance. The use of Axios for API communication ensures efficient handling of asynchronous requests.

## Layout and Responsiveness

The Adopet App boasts a beautifully designed and responsive layout. It has been thoughtfully crafted with a mobile-first approach, ensuring seamless user experience across various devices, from desktops to tablets and smartphones.

The design is fluid, allowing it to adapt gracefully to different screen sizes and resolutions, providing an optimal viewing experience to users. The use of vanilla CSS ensures a lightweight and efficient rendering of styles, contributing to faster loading times and smoother interactions.

For the responsive layout, I decided to experiment with fluid design, instead of fixed breakpoints. And when a component should only render in specifics screen width, I used [react-responsive](https://github.com/yocontra/react-responsive) hooks to determine the condition. 

## Live demo
For demo purpose, a version with mock data was published [here](https://ecureuill.github.io/adopet-app/).
You can log in with email `tutor@mail.com` and password `123aSd7`.  It will automatically logout after 1 minute. 

Is possible to edit user profile data, except for the photo (you can select one from your device, but it will not be rendered). 
You can mimic create a new user and sent message to a shelter. 

## Running Locally

To run the Adopet App locally, follow these steps:

1. Clone this repository: `git clone https://github.com/ecureuill/adopet-app.git`
1. Install the dependencies: `npm install`
1. Start the development server: `npm start`
1. Follow instructions on how to run locally the server-side in the separete repository [here](https://github.com/ecureuill/adopet)
1. Access the app in your web browser at: http://localhost:3000

## Feedback and Contributions

Feedback and contributions are always welcome! If you have any suggestions or find any issues in the project, feel free to create an issue or submit a pull request.

## Screenshots
Screenshots have been provided to demonstrate functionalities and responsiveness of the layout.

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

