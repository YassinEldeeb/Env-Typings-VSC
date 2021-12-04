<div align="center">
<h1>TS Env Typings</h1>
  
![Icon](https://raw.githubusercontent.com/YassinEldeeb/Env-Typings-VSC/main/images/icon.png)

</div>
  
## TS Env Typings is an extension to auto generate Typescript typings for your env variables from your development .env file everytime you save the specefied file.

![Showoff](https://raw.githubusercontent.com/YassinEldeeb/Env-Typings-VSC/main/images/index.png)

## Setup

1- Specify "env-typings.json" file in the root of your project.

2- Add "path" field to your dev .env file.

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

## Requirements

- Typescript Project
- @types/node installed

**Enjoy!**
