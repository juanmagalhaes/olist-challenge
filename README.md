# Olist Challenge

This is the react application implementing the Olist Challenge.

Also, take a look at this repository:

[Olist Challenge Server](https://bitbucket.org/juanmagalhaes/olist_challeng_server)

It implements a very simple server in python 3, Django with Django rest framework and postgres.
I gave access to the users @amiltonpaglia, @osantana and @dvainsencher to this repo as well.


## Instructions to run it locally

```
  # Install dependencies
  $ yarn
```

```
  # Run devserver with hot reload
  $ yarn start
```

```
  # Run tests on jest
  $ yarn test
```

```
  # Type checks js code with flow
  $ yarn flow

  # Keeps type checking js code with flow on watch mode
  $ yarn flow:watch

  # Generate flow types for css modules
  $ yarn css-types

  # Keeps generating flow types for css modules
  $ yarn css-types:watch

  # Keeps generating flow types for css modules and type checking js code
  $ yarn flow:css-types:watch
```

```
  # Build for deploy
  $ yarn build
```

## Instructions to run on docker container

```
  # Run devserver with hot reload
  $ docker-compose up
```

```
  # Run tests on jest
  $ docker-compose -f docker-compose.test.yml run olist-react-app
```

### This command will orchestrate all the infrastructure including:

- Nginx
- React App
- Django rest server
- Postgres DB

```
  # Build for deploy
  $ docker-compose -f docker-compose.prod.yml up
```

 <strong>OBS</strong>: you need to create a postgres-data directory on your $HOME.
postgres will put dabase there through a volume.
You can also set $PG_DATA environment variable to change db volume to a custom location.

 <strong>OBS2</strong>: Once all containers are up, you can access the ui challenge through localhost:3000
submit the form and check the json result through a GET request to localhost:8000/api/new_account/

