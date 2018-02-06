# Simple Postgres App on Heroku

#### Create App

Heroku  - New - Create new app  
Configure Add-ons - Heroku Postgres

## Install

    sudo pip install heroku

**Setup Git**

    git init
    git add requirements.txt Procfile package.json web.js
    git commit -am "init"  
    
**Setup Heroku**

    heroku login
    heroku git:remote -a dbeg

**Push to Heroku**

    git push heroku master


### Dataclips

*   [Dataclips](https://dataclips.heroku.com/clips)

Table Names:

    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema='public'
    AND table_type='BASE TABLE';

#### Ref:
* [Heroku Postgres Node.js](https://devcenter.heroku.com/articles/heroku-postgresql#connecting-in-node-js)
* [node-postgres](https://node-postgres.com/features/queries)
* [w3schools SQL](https://www.w3schools.com/sql)