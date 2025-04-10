# Chat Application with Next.js and Socket.IO

This is a real-time chat application built using **Next.js** and **Socket.IO**. It allows users to communicate in real-time with a seamless and responsive interface.

## Features

- Real-time messaging using Socket.IO
- Modern UI built with Next.js
- Scalable and performant architecture
- Easy to set up and deploy

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd chat-app
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Open the application in your browser.
2. Enter a username and join a chat room.
3. Start chatting in real-time with other users in the same room.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **Socket.IO**: Library for real-time, bidirectional communication.
- **CSS/SCSS**: For styling the application.

## Folder Structure

```
chat-app/
├── components/    # Reusable React components
├── pages/         # Next.js pages
├── public/        # Static assets
├── server/        # Socket.IO server logic
├── styles/        # Application styles
└── README.md      # Project documentation
```

## Deployment

To deploy the application, follow these steps:

1. Build the application:
    ```bash
    npm run build
    # or
    yarn build
    ```

2. Start the production server:
    ```bash
    npm start
    # or
    yarn start
    ```

3. Deploy to your preferred hosting platform (e.g., Vercel, Heroku).

## Example usecase
1. Open the application in a new Chrome tab and log in as **User 1**.
2. Open the application in another new Chrome tab and log in as **User 2**.
3. Send a message from **User 1** and observe it appear in real-time for **User 2**.
4. Similarly, send a message from **User 2** and see it appear for **User 1**.
## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Socket.IO Documentation](https://socket.io/docs/)
