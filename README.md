# biscuits-industrial-nextJS

Website project for Eve Online.

Temp website will be located at [My website](https://skipptekk.com) Once i feel it's ready to be "open" to the public.

To see the project on your own machine,

1. git clone https://github.com/SkippTekk/biscuits-industrial-nextjs.git
2. `cd biscuits-industrial-nextjs`
3. `npm install`
4. `npm start`

and it will be in [localhost](http://localhost:3000) port 3000

---

# Installation

## Docker Database Container

Install [Docker](https://www.docker.com)

### MySQL

Run command below in a terminal to setup an empty MYSQL database
`docker run --name biscuits -p 3307:3307 -e MYSQL_ROOT_PASSWORD=root -d mysql`

### Redis

Update Me

---

## Create your own development branch

`git switch -c <branchname>`

## After a pull request is merged

Ensure you have your development branch selected

`git checkout <branchname>`

Then rebase

`git rebase nextjs`

---

## Environment Variables

`.env`

```
BISCUITS_DATABASE_URL="mysql://USER:PASS@IP:3306/biscuits"
EVEDUMP_DATABASE_URL="mysql://USER:PASS@IP:3306/evedump"

NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

MYSQL_DATABASE=
MYSQL_USERNAME=
MYSQL_PASSWORD=
MYSQL_HOST=

EVEONLINE_CLIENT_ID=
EVEONLINE_SECRET_KEY=
STATE=

MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_HOST=
MAIL_FROM=
```

---

## Prisma Installation and Configuration

Installation
`npm i -g prisma`

Push Schema to DB
`prisma db push --schema=./prisma/biscuits.prisma`
`prisma db push --schema=./prisma/evedump.prisma`

Generate
`prisma db generate --schema=./prisma/biscuits.prisma`
`prisma db generate --schema=./prisma/evedump.prisma`
