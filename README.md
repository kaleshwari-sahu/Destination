## Travel Destination Finder

This is a simple web application built using HTML, CSS, and JavaScript that helps you discover travel destinations based on country. It provides information about popular tourist attractions, travel options, and activities.

### Features

**HTML:**

*   Basic HTML structure for the app, including:
    *   Input field for country name.
    *   Search button.
    *   Container to display search results.
*   Uses semantic HTML elements for better accessibility.

**CSS:**

*   Styling for the app's user interface, including:
    *   Responsive layout for different screen sizes.
    *   Visually appealing color scheme and font choice.
    *   Rounded corners and box shadows for a modern look.
    *   Hover effects for interactive elements.

**JavaScript:**

*   Handles user input and search functionality.
*   Fetches destination data from a pre-defined JavaScript object (`travelData`).
*   Dynamically generates destination cards containing:
    *   Destination name.
    *   Image of the destination.
    *   Best tourism place.
    *   Distance from India (as a reference point).
    *   Duration of stay.
    *   Travel options with estimated duration and cost.
    *   List of activities.
*   Displays results in a clear and user-friendly format.
*   Stores the fetched destination data in local storage for faster retrieval on subsequent searches.

### Functionality

1.  **User Input:** The user enters the name of a country in the input field.
2.  **Search:** Upon clicking the "Search" button, the app searches for the country in the `travelData` object.
3.  **Data Retrieval:** If the country is found, the corresponding destination data is retrieved and displayed.
4.  **Display Results:** Destination cards are created and displayed dynamically, each containing detailed information about the selected destination.
5.  **Local Storage:** The destination data is stored in local storage for faster retrieval on subsequent searches for the same country.

### Project Files

*   **index.html:** Main HTML file containing the structure and layout of the app.
*   **style.css:** CSS file containing the styling rules for the app's appearance.
*   **script.js:** JavaScript file handling the app's functionality and data manipulation.

### To Run the App

1.  Open the `index.html` file in a web browser.
2.  Enter a country name in the input field.
3.  Click the "Search" button to view the available destinations.

This is a simple example, and you can extend it by:

*   Adding more destinations to the `travelData` object.
*   Implementing features like sorting destinations by distance, duration, cost, etc.
*   Fetching destination data from an external API instead of using a pre-defined object.
*   Improving the user interface and user experience.

Enjoy exploring travel destinations!
