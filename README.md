# Public APIs Dashboard

This is a dashboard application built with React that displays data from the Public APIs. The dashboard is capable of performing the following functionalities:

1. Searching
2. Sorting
3. Pagination

## Demo

https://drive.google.com/file/d/1dJQYPSvPb8Y3SPxZGRoXNWF098WdT-d1/view?usp=drive_link

## Technologies Used

- React
- Axios
- JavaScript

## Installation

1. Clone the repository.
2. Run npm install to install the dependencies.
3. Run npm start to start the development server.

## Usage

After starting the development server, open http://localhost:3000 to view the dashboard in your browser.

The dashboard displays data from the Public APIs in a table format. You can search for specific entries using the search bar at the top of the page. You can also sort the data by clicking on the column headers. Pagination is available at the bottom of the page to navigate between pages of entries.

## Future Enhacements

1. A dropdown can be added to filter data based on fields selected from the dropdown.
2. There is definitely some room for improvement in the overall look and feel of the UI. One such example could be limiting page numbers to 10 at a time (instead of displaying all page numbers) and adding forward and back arrows to move between page numbers.
3. The overall response time of the application can be improved by memoizing expensive calculations and preventing the unnecessary re-render of components.
4. The dashboard can be made more robust by handling various errors and offering a retry option in case of failure.
5. The column headers can be extracted into a separate component named DataTableHeader to improve code quality.


