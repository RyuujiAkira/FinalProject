#QA Cinema Project

#Role
My role on this project was to design and develop the front-end design of the website and hit the requirements of the brief to make a visually appeasing website while being accessible.

#Technologies
To build this product we implemented the MERN tech stack which includes, Mongoose, Express, React and Node alongside these we also used mocha and chai for testing

#Prerequisites
To use this software you will need Node.js which can be found here:
https://nodejs.org/en/

You will also need a compatible browser, we recommend google chrome:
https://www.google.co.uk/chrome/?brand=FHFK&gclsrc=aw.ds&gclid=Cj0KCQiAnuGNBhCPARIsACbnLzplL7Rp7N-1N9P7_6QwIFhLCCafTnrB0A8phtYUrNohFTTC-L9iRk8aArWUEALw_wcB

Follow the on screen instructions to complete these installs and be ready to use our software.

#Installing and deployment
To run a developer enviroment you will need the following software:

Visual Studio Code: https://code.visualstudio.com/

MongoDB Compass: https://www.mongodb.com/products/compass

Postman: https://www.postman.com/

Once these are installed proceed with the following steps:

1. Download the repo:
   In your browser navigate to https://github.com/Fraser-A-N-Smith/FinalProject. Click the green code button and choose the download Zip option, Once this is complete extract these files to your chosen location.

2. Open Visual Studio Code:
   Open Visual studio code on your machine. Afterwards choose file and then the Open folder option (ctrl + K + O), navigate to where you extracted the Zip file and click Select folder.

3. Open 2 new terminals:
   At the top of your visual studio code find the Terminal button and select the New Terminal option (ctrl+shift+').

On terminal 1 enter the command "cd FrontEnd/qa-cinema/ and hit enter.
Confirm you have entered the correct directory.
Enter the command npm i to install all required modules.
Now just run the command "npm start" and your browser will launch with a development build of the react app (This may take a moment to launch).

On terminal 2 enter the command "cd BackEnd/" and hit enter.
Confirm you have entered the correct directory.
Enter the command npm i to install all required modules.
Now we just run the command "nodemon index.js" to start a development build of the API.

You can now use the app in a dev enviroment.

4. Viewing the database:
   To view the database and it's collections open MongoDB compass and on the new connections page paste in "mongodb+srv://root2:root@cluster0.majcr.mongodb.net/QACBookings".
   Click the connect button.
   You can now view the database and information it contains, This is also where we will perform any deletions.

5. Adding entities to the database:
   Since this is minimum viable product, Not all features have yet been implemented. As this is the case we will need to use postman for a few different requests.

To enter a new movie we will need to open postman.
Once open you will need to open a new tab and paste in our api route "http://localhost:6969/direct", Select post on the left hand side.
Under where we posted the route we need to select Body, Under this we need to select the raw option, Then on the right hand side select the dropdown and select JSON.
You can now paste the template and edit it to your liking:

{
"title": "Template title",
"img": "an-image-url",
"actors": "some actors, in, a, list",
"director": "TemplateDirector",
"releaseDate" : "2022-07-08T03:24:00",
"description": "Template description"
}

note: releaseDate is in a yyyy-mm-dd format, A movie with a release date in the future will appear on the upcoming page.
To perform any updates please create a new entry and delete the old one.

#Testing
To show our software being tested please follow the steps where we opened a new terminal and navigated into the BackEnd directory, then use "npm test" in place of npm "start

#Built with:
The final product is built using Visual Studio Code

#Versioning:
Version control was managed through github using the feature-branch model.
We have a main branch (the one you downloaded), Alongside this we also have a dev branch for our team to brancheds off into feature-branches while a feature is completed.
When they have their feature working we merge it into the dev branch.
Once the dev branch is working and fully tested we merge it into main for you to use.
This process helps ensure that we don't let bugs through in our code and things are working correctly.

#Authors
This software was developed by Team Valor:
Fraser Smith,
Kieran Goodinson,
Adam Ateye,
Junathan Abraham-Odukale,
Jonathan Rabaja,
Sarah Khan.

#License
This project is licensed under the MIT license

#Acknowledgements
https://unsplash.com/ -- for copyright free images
Trainers at QA -- for giving us the knowledge to complete this project
