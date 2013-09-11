## an optimizer for fis to remove alert, console, console.log, debugger etc. 

## step 1. install

```bash
npm install -g fis-optimizer-shutup
```

## step 2. configurate

```javascript

//fis-conf.js
fis.config.set('modules.optimizer.js', 'shutup, uglify-js');

```

## step 3. use

fis release ``-o``