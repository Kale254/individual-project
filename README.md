
# Individual Project Website

For my individual project for CSC 480, I am attempting to create a website that would allow residents of Henderson (my hometown) to make a reservation for use of a community center. The project requirements include being able to allow the user to rent the entire facility or just rent half of it. One half of the facility is just meeting areas, and the other half is a kitchen area. The website needs to be able to provide and hold multiple events, give the user information about the site and cost, tables/chairs available, policies, FAQs, photos, and a calendar to display availability. 




## Authors

- [Kale Wetjen](https://www.github.com/kale254)


## Run Locally

Clone the project

```bash
  git clone https://github.com/Kale254/individual-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
 yarn install
```

Start the server

```bash
  yarn start
```


## Environment Variables

To host this project, you will need your own Environment Variables to be able to run this project. 

## Appendix

This site is hosted here: https://individual-project-ae936.web.app

## Home Page

Page with a nice greeting + quick overview of the rental options + Link to the FAQ / Policies part of the app. It also has a header + nav for additional routing + links. Furthermore you can click the "Explore Our Rentals" button to be able to see pictures.

## Pictures

Before you question why there aren't any pictures of a community center, it is because my town doesn't have a community center currently. To be able to achieve the requirements I added some pictures of the town.

## FAQ

This page has a drop down with all the information needed about reserving such as cost, space available, and Policies abotu the area. 

## Reservation Pages

There are 3 total reservation pages that you can choose (after you are signed in). These pages include the Kitchen, the Hall, and the Entire facility. You can choose which area you would like to reserve. After clicking which one you want, you are linked to a page with a calendar of available and unavailable dates. You can select if you want multiple dates (time is not a consideration). 


## Search Function

The search function of the page allows you to have simple searches that are tagged with each page. It was a requirement to have with the project.

## Sign In / Out

Here you can sign into the application with a Google Account. It will popup after you click sign in. This part utilizes the Firebase auth which makes it easier to integrate authentication into an application. 

