# Keeper App

A simple note-taking web app built with React, inspired by Google Keep. This project was developed as part of Angela Yu's Web Development course to learn the fundamentals of React, including JSX, Components, Props, States, and Hooks.

<img width="1280" alt="image" src="https://github.com/user-attachments/assets/0bdc6960-33f6-4560-8744-72fd05fb8875">

## Features

- **Add Notes**: Create notes with a title and content.
- **Delete Notes**: Remove notes when they are no longer needed.
- **Dynamic UI**: The note input area expands when clicked to allow for a more detailed note entry.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/amlansahoo07/keeper-app.git
   ```
2. **Navigate into the project directory**:
   ```bash
   cd keeper-app
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
   The app will be running on `http://localhost:5137`.

## Usage

- Start the app using the instructions above.
- Type a title and content for your note in the input area.
- Click the "+" button to add the note to the list.
- To delete a note, click the trash icon on the note.

## Code Structure

- **App.jsx**: The main component that handles the logic for adding and deleting notes. It renders the `Header`, `CreateArea`, and `Note` components.
- **Header.jsx**: A simple header component displaying the app's title.
- **Footer.jsx**: A footer component displaying the current year.
- **CreateArea.jsx**: A component for creating new notes. It manages the input state and expands the text area when clicked.
- **Note.jsx**: A component representing individual notes. It displays the note's title and content and includes a delete button.

## Learnings

- Understanding and using React components to build reusable UI elements.
- Managing state with React's `useState` hook.
- Handling user input and form submission in React.
- Using Material-UI for styling and incorporating icons.

## Future Improvements

- **Persist Notes**: Store notes in a database or local storage so they remain after a page refresh.
- **User Authentication**: Allow multiple users to log in and manage their notes.
- **Search Functionality**: Add a search bar to filter through notes.

## Acknowledgements

This project is inspired and developed as part of [Angela Yu's Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)'s on Udemy.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
