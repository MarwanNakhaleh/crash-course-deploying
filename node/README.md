# NODE.JS

1. `cd` into this folder
2. Take a look at `index.js`: this exposes a simple endpoint which we can hit to see some text
3. `git remote add heroku git@heroku.com:<application_name>`
4. `git push`

You can now watch as heroku builds the app, installs dependencies, and starts it.

Then, navigate to http://<application_name>.herokuapp.com/ and you should see some text.

# Heroku CLI

You can install the heroku cli to access additional heroku features.

```
brew install heroku
heroku login
```

The heroku cli will look at the git remote `heroku` to determine which heroku app this directory is associated with.

# Logs

```
heroku logs
```