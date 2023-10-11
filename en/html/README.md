# Installing AdOpt on a simple HTML page

Follow these steps to install AdOpt on a simple HTML page:

1. Replace the `XXX` in the following AdOpt Tag code with the GUID of your Disclaimer ID, which can be found in the AdOpt dashboard:

```markdown
<meta
  name="adopt-website-id"
  content="XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
/>
<script
  src="//tag.goadopt.io/injector.js?website_code=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX"
  class="adopt-injector"
></script>
```

2. Start a local server to open this HTML file. If you are using VSCode, you can use the Live Server extension. Right-click on the HTML file and select "Open with Live Server."

3. Access the HTML page by navigating to the port opened by the Live Server plugin. Usually, this would be something like http://localhost:5500 in your web browser, but it may vary depending on your specific setup.

That's it! You should now be able to view and interact with your HTML page with AdOpt installed.
