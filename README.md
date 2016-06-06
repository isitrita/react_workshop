This is rewriting for personal use Dan Abramov's redux workshop.

# Technologies:

React, Redux, Webpack.

# Steps for installation

## Install node > 4.0

```
npm install -g n
n latest

node -v
> v6.2.0
```

>**Note:**
>Don’t run `npm` commands with `sudo`.
>This usually screws everything up.

## Update npm
use npm 3.x so your Babel installation doesn’t weigh a ton.
```
npm i -g npm@latest

npm -v
> 3.9.3
```

## Then
```
npm install
npm start
```

Shortlist:

### 01 - Action creator
 
### 02 - Navigating with React Router
Before: Clicking on the filter links updates the visible todos, but the URL is not updated.
After: Clicking on the filter links changes the URL, but the visible todos don’t update yet.

