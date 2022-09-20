# Git-UserProfile-clone

This project was generated with Angular CLI version 14.2.3. This project displays the profile on searching the github username.
![Homepage](https://user-images.githubusercontent.com/90699675/191267074-614cfdb7-b50f-4168-bd92-bda17a4d95cd.png)
This is the homepage of the website.Now if you search username eg. mdo you will get the profile of Mark Otto along with his bio, location, twitter-name and git hub profile link. In the Repos section you will get the repos created by him along with the language used for the project and the description of the repo.
![profile2](https://user-images.githubusercontent.com/90699675/191267712-5f8f0846-13df-4df7-9208-d4aa25ec7187.png)

It is a one page application and hence to avoid scrollbars it displays only two repos at a time. I also implemented a feature where if some of the data of the profile is missing the icons are not displayed.
![profile1](https://user-images.githubusercontent.com/90699675/191268305-2ccc4575-23fc-40d2-a222-37f346c9321e.png)

You can see in this image the location icon and twitter icon is also not displayed along with the language of one repo as its null.
I wanted to show the various languages used for the project but unfortunately the repo object has only one language in it.
I also wanted to show the profile images of users but the link requires a .png after it and the objects image_link did not had it so I have set a default image.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

