Jobizz is a React Native app designed to assist users in finding and applying for jobs. It features user login, displays of featured and popular job listings, and screen navigation.


Table of Contents

Installation

Components

#JobCard

LoginScreen

HomeScreen

Assets

Navigation

Installation

Follow these steps to run the project locally:


Clone the repository:


sh

Copy code

git clone https://github.com/yourusername/jobizz.git

Navigate to the project directory:


sh

Copy code

cd jobizz

Install dependencies:


sh

Copy code

npm install

Run the project:


sh

Copy code

npm start

Components

LoginScreen

Path: components/LoginScreen.js


The LoginScreen component allows users to input their name and email to log in. It consists of:


State Variables:


name: Holds the user's name.

email: Holds the user's email.

handleLogin Function:


Navigates to the Home screen and sends the name and email as parameters.

UI Elements:


Title, subtitle, and description texts.

TextInput fields for name and email.

Login button.

Social media login icons (Apple, Google, Facebook).

Register link.

HomeScreen

Path: components/HomeScreen.js


The HomeScreen component shows the user's profile details and lists featured and popular job openings. It includes:


Props:


route: Contains parameters sent during navigation, such as name and email.

navigation: Used for navigating between screens.

State Variables:


featuredJobs: Array of featured job objects.

popularJobs: Array of popular job objects.

UI Elements:


User's profile picture, name, and email.

Job search bar.

Featured Jobs section:

Shows a horizontal list of featured job cards.

Popular Jobs section:

Shows a vertical list of popular job cards.

JobCard

Path: components/JobCard.js


The JobCard component displays individual job details, such as the job title, company, salary, and location, with different styles for featured and popular jobs.


Props:


job: Object containing the job title, company, salary, location, and logo.

type: Specifies whether the job is featured or popular, influencing the styling.

UI Elements:


Job logo image.

Job title, company, salary, and location texts with conditional styling based on job type.

Assets

Path: assets/


The assets folder contains images used in the app, including company logos and social media icons.


Navigation

Screen navigation is managed using React Navigation. The LoginScreen transitions to the HomeScreen upon successful login, passing the user's name and email as parameters.
![alt text](<Screenshot 2024-06-19 9.08.55 AM.png>)
![alt text](<WhatsApp Image 2024-06-19 at 11.24.49 AM.jpeg>)