# DfE Sign-in Angular 1.x sample client
Angular 1.x sample client to authenticate with DfE Sign-in

# Running
The project includes a Node/Express server to serve the contents of /src over SSL. You can start it using

```
npm start
```

By default this will start a server listening at https://localdev:44399. This, and the certificates used, can be configured in /config/login.dfe.examples/angular-1x.dev.json.
**NOTE**: For security reasons, localhost is not allowed as a return URI in the OIDC server, so we are using the alias localdev. You will need to set this up in your hsots file.

Using this to serve the files is not required. You can use any other server capable of serving files over SSL.
