# figlet-async
figlet async function library.

### Requirements
* macOS or Ubuntu
* npm
* Node.js

### Usage
**install**
```bash
npm install --save TakutoYoshikai/figlet-async
```

**show figlet text**
```javascript
const figlet = require("figlet-async");
(async () => {
  const text = await figlet("HELLO WORLD");
  console.log(text);
})();

```


### License
MIT License
