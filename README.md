# Whatsapp like chatting application using Mern Stack

- It is the frontend of the whatsapp realtime messaging app using the mern stack.
- We will create the app using the nodejs,expressjs and mongoDB on backend but to create the mongoDB a realtime database, we will be using Pusher at the backend.
- We will be using firebase as well for the hosting & authentication.
- For the frontend we will use the Reactjs.
- Moreover we will be deploy the frontend of the application on Firebase & backend on heruku.
- Agenda: If there is a change inside mongoDB collection, it will fire mongoDB stream and after that, it will going to fire pusher for the time functionality inside the mongoDB.
- mongoDB_Collection ---> mongoDB_Stream ---> Pusher (Realtime Behaviour)


## Tailwind setup

- npm install -D tailwindcss
- npx tailwindcss init
- Put the below classes inside the index.css
- @tailwind base;
- @tailwind components;
- @tailwind utilities; 


## Steps in building the application

- 1- Frontend-UI -- left side bar for all chats -- right side room for the chat.
- 2- 

### Extra Information

- grid place-items-center  -- use grid to center item using place-item-center
- flex-[0.35]   --  It will take the 0.35% of the screen 
- flex-[0.65]   --  It will take the 0.65% of the screen 

