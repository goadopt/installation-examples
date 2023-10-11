# React App Installation Guide with AdOpt

This guide outlines the necessary steps to set up a React application with AdOpt installed. Be sure to follow these steps carefully for a successful configuration.

## Prerequisites

- Node.js and npm installed.
- A configured React project.

## AdOpt Configuration

1. Create and configure your notice within the AdOpt dashboard.
2. In the dashboard, locate your "disclaimer ID." You will need to replace the placeholder `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` with your "disclaimer ID" in the following steps.

## Project Configuration

3. Open `public/index.html` and replace the `xxx` in the following AdOpt Tag code with the GUID of your "disclaimer ID":

```html
<meta name="adopt-website-id" content="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
<script
  src="//tag.goadopt.io/injector.js?website_code=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  class="adopt-injector"
></script>
```

Now, you can use AdOpt components and functions in your React application.

## Running the Server

In the terminal, navigate to your React project directory and run the following command to start the server:

```bash
npm start
```

The React server will run on the default port 3000 unless you specified a different port during setup.

## Accessing the Application

Open a web browser and access your React application by entering the following URL in the address bar:

```bash
http://localhost:3000
```

If you specified a different port during setup, replace 3000 with the port of your choice.

Now, your React application with AdOpt is up and running and accessible locally. Make sure to test and verify that everything is functioning as expected.

We hope this guide has been helpful in setting up your React application with AdOpt. If you encounter any issues or have questions, please refer to the AdOpt documentation or reach out to AdOpt support for further assistance.
