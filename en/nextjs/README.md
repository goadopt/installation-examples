# Next.js App Installation Guide with AdOpt

This guide outlines the necessary steps to set up a Next.js application with AdOpt installed. Please follow these steps carefully for a successful configuration.

## Prerequisites

- Node.js and npm installed.
- A configured Next.js project.

## AdOpt Configuration

1. Create and configure your notice within the AdOpt dashboard.
2. In the dashboard, locate your "disclaimer ID." You will need to replace the placeholder `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` with your "disclaimer ID" in the following steps.

## Project Configuration

3. Open the file `src/app/layout.tsx` (or another desired page) and replace the `xxx` in the following AdOpt Tag code with the GUID of your "disclaimer ID":

```html
<meta name="adopt-website-id" content="xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" />
<script
  src="//tag.goadopt.io/injector.js?website_code=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
  class="adopt-injector"
></script>
```

Now, you can utilize AdOpt's components and functions in your Next.js application.

## Running the Server

In the terminal, navigate to your Next.js project directory and execute the following command to start the server:

```bash
npm run dev
```

The Next.js server will run on the default port 3000, unless you specified a different port during configuration.

## Accessing the Application

Open a web browser and access your Next.js application by entering the following URL in the address bar:

```bash
http://localhost:3000
```

If you specified a different port during configuration, replace 3000 with the port of your choice.

Now, your Next.js application with AdOpt is up and running and accessible locally. Make sure to test and ensure that everything is functioning as expected.

We hope this guide has been helpful in setting up your Next.js application with AdOpt. If you encounter any issues or have questions, refer to the AdOpt documentation or contact AdOpt support for additional assistance.
