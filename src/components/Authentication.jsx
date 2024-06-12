<!DOCTYPE html>
<html lang="en">
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Sample Page with Code Highlighting</title>
      <link
        href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/tomorrow.min.css"> -->
      <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css"> -->
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

      <!-- and it's easy to individually load additional languages -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/languages/go.min.js"></script>

      <script>
        hljs.highlightAll();
      </script>
    </head>
    <body
      class="bg-gray-100 font-sans leading-relaxed tracking-wide flex flex-col"
    >
      <div class="container mx-auto p-6">
        <h1 class="text-4xl font-bold mb-4">
          Middlewares in Backend Development
        </h1>
        <p class="mb-4">
          Middleware in backend refers to software components that sit between
          the application's core logic and the underlying operating system or
          communication protocols. They act as intermediaries, intercepting and
          processing requests and responses as they flow between the client and
          the application's main logic.
        </p>

        <h2 class="text-2xl font-semibold mb-2">Uses of Middleware</h2>
        <p class="mb-4">
          The use of middleware can vary depending on the specific requirements
          of an application, but some common purposes include:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>
            <strong>Authentication and Authorization:</strong> Middleware can
            handle user authentication and authorization processes. It verifies
            user credentials and permissions before allowing access to certain
            resources or functionalities within the application.
          </li>
          <li>
            <strong>Logging and Monitoring:</strong> Middleware can log requests
            and responses, as well as monitor application performance and
            health. This helps in debugging issues, tracking usage metrics, and
            identifying potential bottlenecks or security threats.
          </li>
          <li>
            <strong>Error Handling:</strong> Middleware can intercept errors and
            exceptions thrown by the application, providing a centralized
            mechanism for handling and responding to them. This helps in
            gracefully managing errors and maintaining the stability of the
            application.
          </li>
        </ul>
        <p class="mb-4">
          Overall, middleware plays a crucial role in enhancing the
          functionality, performance, and security of backend applications by
          providing a flexible and extensible layer between the core logic and
          the underlying infrastructure.
        </p>

        <img
          class="w-full mb-4"
          src="https://firebasestorage.googleapis.com/v0/b/shaajo-online-jewellery-a2f57.appspot.com/o/blog%2FUntitled.png?alt=media&token=425d562e-e07f-41b7-af6d-44040b8a8cd1"
          alt="Middleware Illustration"
        />

        <h2 class="text-2xl font-semibold mb-2">
          Breaking down parameters of a simple route in Express JS
        </h2>
        <pre
          class="bg-gray-800 text-white p-4 rounded mb-4"
        ><code class="language-javascript">app.get("/login", error, req, res, next)</code></pre>
        <p class="mb-4">
          The code snippet provided is defining a route handler for the HTTP GET
          request method on the "/login" endpoint. Let's break down the
          parameters:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li>
            <strong>req:</strong> This parameter represents the HTTP request
            object. It contains information about the incoming request from the
            client, such as headers, query parameters, request body, and more.
            Middleware functions and route handlers can access and manipulate
            this object to extract data from the request or perform validations.
          </li>
          <li>
            <strong>res:</strong> This parameter represents the HTTP response
            object. It is used to send back a response to the client after
            processing the request. Middleware functions and route handlers can
            use methods provided by this object, such as
            <code class="language-javascript">res.send()</code> or
            <code>res.json()</code>, to send data, set headers, or set the HTTP
            status code for the response.
          </li>
          <li>
            <strong>err:</strong> This parameter is typically used to handle
            errors that occur during the processing of the request. If an error
            occurs in a middleware function or route handler, it can be passed
            to the <code>next()</code> function (explained below) along with the
            error object. Express.js will then skip to the error-handling
            middleware (if defined) or return an error response to the client.
          </li>
          <li>
            <strong>next:</strong> This parameter is a function that is used to
            pass control to the next middleware function in the chain.
            Middleware functions and route handlers can call
            <code class="language-javascript">next()</code> to delegate
            processing to the next middleware function or route handler. If
            <code>next()</code> is called with an error object (<code
              class="language-javascript"
              >next(err)</code
            >), Express.js will skip to the error-handling middleware or return
            an error response to the client.
          </li>
        </ul>

        <div
          class="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700"
        >
          <p>
            <strong
              >Remember: For using middleware in our project we use
              app.use()</strong
            >
          </p>
        </div>

        <h2 class="text-2xl font-semibold mb-2">
          Understanding various built-in Middleware used in Our Projects
        </h2>
        <pre
          class="bg-gray-800 text-white p-4 rounded mb-4"
        ><code class="language-javascript">import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
})); // Generally to set middleware we use 'use' method of express
// CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

app.use(express.json({limit: "16kb"})); // This configuration middleware is used to parse incoming requests with JSON payloads from the body from the forms.

app.use(express.urlencoded({extended: true, limit: "16kb"})); // This configuration informs express that we can get the data from the url encoded forms.

app.use(express.static("public")); // This configuration middleware is used to serve static files from the public directory.

app.use(cookieParser());

export {app}
</code></pre>

        <ul class="list-disc pl-6 mb-4">
          <li>
            <strong>express.json():</strong> This middleware is used to parse
            incoming request bodies with JSON payloads. When a client sends data
            to your Express server using JSON format in the request body, this
            middleware parses the JSON data and exposes it in
            <code class="language-javascript">req.body</code> property. It
            enables you to easily work with JSON data within your route
            handlers.
          </li>
          <li>
            <strong>express.urlencoded():</strong> This middleware is used to
            parse incoming request bodies with URL-encoded payloads. When a
            client submits a form with
            <code class="language-javascript"
              >application/x-www-form-urlencoded</code
            >
            encoding, this middleware parses the data and exposes it in
            <code class="language-javascript">req.body</code>. It allows you to
            handle form submissions from HTML forms.
          </li>
          <li>
            <strong>express.static():</strong> This middleware is used to serve
            static files, such as HTML, CSS, images, and JavaScript files, from
            a specified directory. It simplifies the process of serving static
            assets in your Express application.
          </li>
          <li>
            <strong>cookie-parser:</strong> This middleware is used to parse
            cookies attached to the client's request and populate
            <code class="language-javascript">req.cookies</code> with an object
            keyed by the cookie names. It simplifies the handling of cookies in
            your Express application, allowing you to easily read and set
            cookies.
          </li>
        </ul>

        <div
          class="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700"
        >
          <p>
            <strong
              >Remember: Middleware is the process between the request and the
              response operations used to perform some tasks they are always
              written in sequences.</strong
            >
          </p>
        </div>

        <h2 class="text-2xl font-semibold mb-2">
          Utility Files of our Project
        </h2>
        <p class="mb-4">
          A utility file in a backend project is essential because it helps
          organize and centralize common functionalities and helper methods that
          are used throughout the application. This approach promotes
          reusability, maintainability, consistency and cleaner code. By keeping
          utility functions in a single file, we can avoid code duplication and
          make our codebase more modular and easier to manage.
        </p>

        <h3 class="text-xl font-semibold mb-2">asyncHandler.js</h3>
        <pre
          class="bg-gray-800 text-white p-4 rounded mb-4"
        ><code class="language-javascript">const asyncHandler =(func)=> async(req, res, next) =>{
    try{
        await func(req, res, next)
    }catch(error){
        res.status(500).json({success:false,
            message:error.message})
    }
}
</code></pre>

        <p class="mb-4">
          The code provided defines a higher-order function named
          <code class="language-javascript">asyncHandler</code>. Let's break
          down what this code does:
        </p>
        <ol class="list-decimal pl-6 mb-4">
          <li>
            <strong>Function Signature</strong>:
            <code
              >const asyncHandler = (func) => async (req, res, next) => { ...
              }</code
            >
            <ul class="list-disc pl-6">
              <li>
                <code>asyncHandler</code>: This is the name of the function
                being defined.
              </li>
              <li>
                <code class="language-javascript">(func)</code>: This is a
                parameter that the <code>asyncHandler</code> function accepts.
                It expects another function (<code>func</code>) as an argument.
              </li>
              <li>
                <code>=> async (req, res, next) => { ... }</code>: This part of
                the function signature indicates that
                <code>asyncHandler</code> returns another function. This
                returned function is an asynchronous function that takes three
                parameters:
                <code class="language-javascript">req</code> (request),
                <code class="language-javascript">res</code> (response), and
                <code class="language-javascript">next</code> (middleware
                function).
              </li>
            </ul>
          </li>
          <li>
            <strong>Error Handling</strong>: Inside the returned function,
            there's a
            <code class="language-javascript">try...catch</code> block.
            <ul class="list-disc pl-6">
              <li>
                <code class="language-javascript">try</code>: This block wraps
                the execution of the <code>func</code> function. It attempts to
                execute <code>func</code> asynchronously with
                <code>await</code>.
              </li>
              <li>
                <code class="language-javascript"
                  >await func(req, res, next)</code
                >: This line executes the <code>func</code> function
                asynchronously. It waits for the <code>func</code> function to
                complete its execution before proceeding to the next step.
              </li>
              <li>
                <code class="language-javascript">catch (error)</code>: If an
                error occurs during the execution of <code>func</code>, it is
                caught here.
              </li>
              <li>
                <code class="language-javascript"
                  >res.status(500).json({ success: false, message: error.message
                  })</code
                >: In case of an error, this line sends a JSON response with a
                500 status code (Internal Server Error). The response contains
                an object with
                <code class="language-javascript">success</code> set to
                <code>false</code> and a
                <code class="language-javascript">message</code> property
                containing the error message.
              </li>
            </ul>
          </li>
          <li>
            <strong>Return Value</strong>: The
            <code class="language-javascript">asyncHandler</code> function
            returns the inner asynchronous function, which has the same
            signature <code class="language-javascript">(req, res, next)</code>.
            This returned function is what is typically used as middleware in an
            Express.js application to handle asynchronous operations.
          </li>
        </ol>

        <p class="mb-4">
          Overall, this
          <code class="language-javascript">asyncHandler</code> function
          provides a convenient way to wrap asynchronous route handlers in
          Express.js, allowing for centralized error handling without the need
          to write repetitive
          <code class="language-javascript">try...catch</code> blocks in each
          route handler.
        </p>

        <h3 class="text-xl font-semibold mb-2">apiResponse.js</h3>
        <pre
          class="bg-gray-800 text-white p-4 rounded mb-4"
        ><code class="language-javascript">class APIResponse{
    constructor(
        statusCode,
        message = "Success",
        data
    ){
        this.statusCode = statusCode
        this.message = message
        this.success = statusCode <400
        this.data = data
    }
}
</code></pre>

        <p class="mb-4">
          The code provided defines a higher-order function named
          <code class="language-javascript">APIResponse</code>. Let's break down
          what this code does:
        </p>
        <ol class="list-decimal pl-6 mb-4">
          <li>
            <strong>Constructor</strong>: The
            <code Add class="language-javascript">constructor</code> method is a
            special method in JavaScript classes that is called when a new
            instance of the class is created. In this case, the constructor
            takes three parameters:
            <ul class="list-disc pl-6">
              <li>
                <code class="language-javascript">statusCode</code>: Represents
                the HTTP status code of the API response.
              </li>
              <li>
                <code class="language-javascript">message</code>: Represents a
                descriptive message associated with the response. It defaults to
                "Success" if not provided.
              </li>
              <li>
                <code class="language-javascript">data</code>: Represents the
                data payload of the response.
              </li>
            </ul>
          </li>
          <li>
            <strong>Instance Properties</strong>:
            <ul class="list-disc pl-6">
              <li>
                <code>this.statusCode</code>: Stores the provided HTTP status
                code.
              </li>
              <li>
                <code class="language-javascript">this.message</code>: Stores
                the provided message or defaults to "Success" if not provided.
              </li>
              <li>
                <code class="language-javascript">this.success</code>: Evaluates
                whether the status code indicates success (less than 400) and
                assigns <code>true</code> or
                <code class="language-javascript">false</code> accordingly.
              </li>
              <li>
                <code class="language-javascript">this.data</code>: Stores the
                provided data payload.
              </li>
            </ul>
          </li>
          <li>
            <strong>Purpose</strong>:
            <p>
              The purpose of this class appears to be to encapsulate the details
              of an API response. By using this class, you can create instances
              representing different API responses with consistent structure and
              behaviour.
            </p>
            <p>
              <strong>Reusability</strong>: This class can be reused across
              different parts of your application where API responses need to be
              constructed. It promotes code reuse and helps maintain consistency
              in the structure of API responses.
            </p>
          </li>
        </ol>

        <h3 class="text-xl font-semibold mb-2">apiError.js</h3>
        <pre
          class="bg-gray-800 text-white p-4 rounded mb-4"
        ><code class="language-javascript">class APIError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {APIError};
</code></pre>

        <p class="mb-4">
          The code provided defines a class named
          <code class="language-javascript">APIError</code>, which extends the
          built-in <code class="language-javascript">Error</code> class in
          JavaScript. Let's dissect what this class does and its potential use:
        </p>
        <ol class="list-decimal pl-6 mb-4">
          <li>
            <strong>Constructor</strong>: Like the
            <code class="language-javascript">APIResponse</code> class you
            previously mentioned, the
            <code class="language-javascript">APIError</code> class also has a
            constructor method. It takes four parameters:
            <ul class="list-disc pl-6">
              <li>
                <code class="language-javascript">statusCode</code>: Represents
                the HTTP status code associated with the error.
              </li>
              <li>
                <code class="language-javascript">message</code>: Represents a
                descriptive message associated with the error. It defaults to
                "Something went wrong" if not provided.
              </li>
              <li>
                <code class="language-javascript">errors</code>: Represents
                additional error information, such as validation errors or
                details about the error. It defaults to an empty array if not
                provided.
              </li>
              <li>
                <code class="language-javascript">stack</code>: Represents the
                stack trace of the error. It defaults to an empty string if not
                provided.
              </li>
            </ul>
          </li>
          <li>
            <code class="language-javascript">super</code> Keyword: Inside the
            constructor,
            <code class="language-javascript">super(message)</code> is called.
            This invokes the constructor of the parent class (<code
              class="language-javascript"
              >Error</code
            >) and passes the
            <code class="language-javascript">message</code> parameter to it.
            This sets the error message for the
            <code class="language-javascript">APIError</code> instance.
          </li>
          <li>
            <strong>Instance Properties</strong>:
            <ul class="list-disc pl-6">
              <li>
                <code class="language-javascript">this.statusCode</code>: Stores
                the provided HTTP status code.
              </li>
              <li>
                <code class="language-javascript">this.data</code>: Initially
                set to <code>null</code>. This property could be used to attach
                additional data related to the error.
              </li>
              <li>
                <code class="language-javascript">this.message</code>: Stores
                the provided message or defaults to "Something went wrong" if
                not provided.
              </li>
              <li>
                <code class="language-javascript">this.success</code>: Always
                set to <code>false</code> since it represents an error response.
              </li>
              <li>
                <code class="language-javascript">this.errors</code>: Stores the
                provided array of errors or defaults to an empty array if not
                provided.
              </li>
              <li>
                <code class="language-javascript">this.stack</code>: Stores the
                provided stack trace or generates a new stack trace using
                <code class="language-javascript"
                  >Error.captureStackTrace()</code
                >
                if not provided.
              </li>
            </ul>
          </li>
          <li>
            <strong>Export</strong>:
            <p>
              The <code class="language-javascript">APIError</code> class is
              exported using the <code>export</code> statement. This makes it
              available for use in other modules or files within your
              application.
            </p>
          </li>
        </ol>

        <p class="mb-4">
          Overall, the <code>APIError</code> class provides a standardized way
          to represent and handle errors in your API. By extending the built-in
          <code>Error</code> class, it inherits all of its functionality while
          adding custom properties specific to your API's error handling needs.
          This can make error handling more consistent and manageable across
          your application.
        </p>

        <h2 class="text-2xl font-semibold mb-2">Need of Utility Functions</h2>
        <p class="mb-4">
          Utility functions help in writing cleaner, more maintainable code by
          abstracting common patterns and providing consistent error handling
          and response formatting across your application's API endpoints. They
          enhance readability, reduce duplication, and improve the
          maintainability of your codebase.
        </p>

        <ol class="list-decimal pl-6 mb-4">
          <li>
            <code class="language-javascript">asyncHandler</code>: This utility
            function is used to handle asynchronous route handlers in
            Express.js. In an Express.js application, route handlers can be
            asynchronous (e.g., performing database queries, making HTTP
            requests). Using <code>asyncHandler</code>, you can avoid repetitive
            <code class="language-javascript">try...catch</code> blocks in each
            route handler by wrapping them with
            <code class="language-javascript">asyncHandler</code>.
            <pre
              class="bg-gray-800 text-white p-4 rounded mt-4"
            ><code class="language-javascript">app.get('/api/resource', asyncHandler(async (req, res, next) => {
    // Asynchronous operations, such as querying a database
    const data = await Resource.find();
    res.json(data);
}));
</code></pre>
            <p>
              Here,
              <code class="language-javascript">asyncHandler</code> ensures that
              any errors thrown inside the route handler are caught and passed
              to Express's error-handling middleware.
            </p>
          </li>
          <li>
            <code class="language-javascript">APIResponse</code>: This class is
            used to standardize the structure of API responses in your
            application. Whenever your API needs to send a response, you can use
            <code>APIResponse</code> to create instances representing different
            types of responses (e.g., success response, error response).
            <pre
              class="bg-gray-800 text-white p-4 rounded mt-4"
            ><code class="language-javascript">const successResponse = new APIResponse(200, "Resource found", { id: 1, name: "John" });
const errorResponse = new APIResponse(404, "Resource not found");
</code></pre>
            <p>
              These instances can then be sent as JSON responses in your
              Express.js route handlers.
            </p>
          </li>
          <li>
            <code>APIError</code>: Similar to
            <code class="language-javascript">APIResponse</code>, this class is
            used to represent and handle errors in your API. Whenever an error
            occurs in your application, you can create an instance of
            <code>APIError</code> and send it as a JSON response to the client.
            <pre
              class="bg-gray-800 text-white p-4 rounded mt-4"
            ><code class="language-javascript">app.get('/api/resource/:id', async (req, res, next) => {
    try {
        const resource = await Resource.findById(req.params.id);
        if (!resource) {
            throw new APIError(404, "Resource not found");
        }
        res.json(resource);
    } catch (error) {
        next(error); // Pass the error to Express's error-handling middleware
    }
});
</code></pre>
            <p>
              In this example, if the requested resource is not found, an
              <code>APIError</code> instance with a 404 status code and a custom
              message is thrown and passed to Express's error-handling
              middleware.
            </p>
          </li>
        </ol>
        <p class="mb-4">
          Overall, these utilities help in writing cleaner, more maintainable
          code by abstracting common patterns and providing consistent error
          handling and response formatting across your application's API
          endpoints. They enhance readability, reduce duplication, and improve
          the maintainability of your codebase.
        </p>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"></script>
      <script>
        hljs.initHighlightingOnLoad();
      </script>
    </body>
  </html>
</html>