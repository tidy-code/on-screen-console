# On Screen Console

this library helps with minimal console log and command execution on devices which there is no devtools available (like ios devices)

You can add script with this tag:

```html
<script src="osc.js"></script>
```

after adding the script you can use the global `log()` function to log variables to osc panel

```javascript
log(thingToBeLogged, (type = "log"));
```

**the function `Log()` also added (because on phone devices usually capitalization is on so it's easier to just use Log())**

**`type` can be either `'log'` or `'error'`;**

or with the help of a bookmarklet like so:

```javascript
javascript: const script = document.createElement("script");
script.src = "cdn/osc.js";
document.body.appendChild(script);
```

Recently apple added a new feature which you can write automation scripts so you can run this bookmarklet on any web page as a automation shortcut (you just have to add a `completion('done')` function to the end of script and remove the `javascript:` part from the beginning of the bookmarklet)

## Options

you can load the script with these two options
like so:

```html
<script src="cdn/osc.js?bindConsole&bindError=false"></script>
```

### `bindConsole`

this will bind `console.log` to the osc log function and after this all `console.log`s will output on the osc panel

### `bindError`

this option will bind all errors happening after osc loaded to be outputted on osc panel
