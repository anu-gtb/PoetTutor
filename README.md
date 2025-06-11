`src` -> Inside src folder, all the actual source code regarding the project will reside, this does not include any kind of tests.

Take a look inside the `src` folder

- `routes` -> In the routes folder, routes and corresponding middlewares and controllers are registered.

- `controllers` -> These commprise business layer to execute business logic. In controllers, incoming requests and data are recieved and then pass it to the business layer. Once business layer returns an output, we structure API response in controllers and send the output.

## Project Setup

- Download tis template from github and open it in a text editor.
- Go inside the folder path and execute the following command:
  ```
    npm install

  ```
- In root directory, create a `.env` file and add following env variables
  ```
    PORT = <Port number of your choice>
    GEMINI_API_KEY = <Your Gemini API key>

  ```
- To run the server, execute:
  ```
    node src/index.js
 
  ```