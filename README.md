<h1>TS Env Typings</h1>
  
![Icon](https://raw.githubusercontent.com/YassinEldeeb/Env-Typings-VSC/main/images/vsIcon.png)

  
TS Env Typings is an extension to auto generate Typescript typings for your env variables from your development .env file everytime you save the specefied file.

![Showoff](https://raw.githubusercontent.com/YassinEldeeb/Env-Typings-VSC/main/images/index.png)

## 🌟 If you prefer learning in a dev.to blog style then checkout [my blog](https://dev.to/yassineldeeb/typing-processenv-automatically-with-this-vsc-extension-10pe) instead

## Setup

> ⚠️ Make sure you've @types/node installed before continuing
 
1- First of all, download the extension [TS Env Typings](https://marketplace.visualstudio.com/items?itemName=YassinEldeeb.env-typings)

2- Specify "env-typings.json" file in the root of your project.

3- Add "path" field to your dev .env file.

![Config File](https://raw.githubusercontent.com/YassinEldeeb/Env-Typings-VSC/main/images/config.png)

That's it enjoy your auto generated typings from your .env file everytime you hit save.

## Features

1- Specify path for the generated output

2- auto detect env variable type so that It can give you a nice example in the intellisense on how to use and parse it.

![Auto Detect Type](https://raw.githubusercontent.com/YassinEldeeb/Env-Typings-VSC/main/images/index.png)

3- Variants for an env variable

![Variants](https://raw.githubusercontent.com/YassinEldeeb/Env-Typings-VSC/main/images/enums.png)

- add a comment at the end of the env line that includes "# variants:"
- specify the different variants for your variable seperated by a "|" like you would in typscript
- quotes are optional around the variants values.

```env
NODE_ENV='development' # variants: "development" | "production" | "testing"
```

**Enjoy!**
