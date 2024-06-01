for targil 4- please look in the servers repositorys WIKI.
### link to the servers repository
https://github.com/Shiranle07/Fakebook_Server

# AP_Project - Ex2 web
### link to repository
https://github.com/Shiranle07/ap_project2_web.git

Fakebook is a social networking platform that enables users to create profiles, log in, post content, and interact with existing posts through likes and comments.

In its new version the application connect to a server.

Registration is contingent upon users being aged 14 or older.


## How to use?
#### 1. Prerequisites
Clone the repository to your local machine.
#### 2. Compile the code
   * Make sure you are in the right path, where you cloned the repository.
   * Open the terminal and install dependencies: 
   
```Terminal
npm install
```

#### 3. start the application:

```Terminal
npm start
```

Open http://localhost:3000 to view the application in your browser. make sure you start the server as written on Fakebook server repository. 

To register, it is necessary to complete all fields within the registration form, adhering to the instructions provided. 

Following registration, you can sign in using the email address and password provided during registration. Access to the feed page is restricted to logged-in users exclusively.

On the feed page, you can see existing posts, and create new posts of your own.

Moreover, within the menu located on the right-hand side, under the "display and accessibility" section, you have the option to switch to dark mode.

Selecting the logout option will redirect you back to the login page.

## Work Flow
First, we read the task in its entirety together and checked that we correctly understood what was assigned to us.
Together we came up with ideas for implementation in a general way and divided between us the general tasks that we added to JIRA. 
The first task was to divide the work, we decided that each one creates a different page in the application.
We used different branches on GitHub for every feature, and merge the branches only after making sure the code works.
The code is structured into components to facilitate organization and allow for easier modifications.
The code also incorporates tests for the primary components. These tests ensure the functionality of features such as toggling the menu, submitting login credentials, creating and editing posts, and creating and deleting comments.
On the 3rd step of the project we implement a server that connect to our application.



