# Class Task - A flag presenter

This project consists of 3 react components:

  1. DropDownCountries - renders a dropdown list of all the contries returning from the flag API.
  2. Name - Presents the name of the country chosen by the user.
  3. Flag - Presents the flag of the country chosen by the user.

Upon loading, the app creates a fetch request to https://restcountries.eu/rest/v2/all?fields=name;flag, requesting a list of countries and flags. The returning array is then stored in the state, and a dropdown with the list of counries is then presented to the user.

Upon choosing a country in the dropdown list, the choiceHandler function is called. The choiceHandler function, changes the country selected in the state. The selected country is then passed down to the flag and name components, and the name and flag of the country are then presnted to the user.

In this task I learnted how to:

- Fetch data and store it in state.
- Create React components and render them in the app component.
- Pass data up and down the component chain.

Here is a [link to the task](https://github.com/AnnaKarpf/React-Talent/blob/master/Day%2004%20-%2028.09.2018/README.md) given by the teacher.
