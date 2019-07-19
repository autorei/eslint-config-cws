# eslint-config-cws
> CWS's Javascript ESLint configuration, based on [AirBnB's](https://github.com/airbnb/javascript) and [Prettier's](https://github.com/prettier/eslint-config-prettier)

## Install and Usage

### 1. Installing
Make sure you have Node (>=6) installed

```bash
npm install --save-dev eslint-config-cws
```

### 2. Using
Create an `.eslintrc.json` file at the root of your project and add the following configuration:

#### 2.1. Simple setup
> For vanilla Javascript code

```json
{
    "extends": "eslint-config-cws"
}
```

#### 2.2. React setup
> For React based apps

```json
{
    "extends": "eslint-config-cws"
}
```

### 3. Extra configuration
Add to `package.json` a script to lint your desired files:

```json
{
    "scripts": {
        "lint": "eslint js/*.js"
    }
}
```

## Rules
Please refer to [AirBnB's Styleguide](https://github.com/airbnb/javascript) or [Prettier's](https://github.com/prettier/eslint-config-prettier) for more information about the linter's
rules.

### Custom rules
> This rules overwrite the ones inherited from AirBnB Styleguide

| setup | rule | setting |
|-------|------|---------|
| all | max-len | 100 characters {ignoreStrings: true, ignoreTemplateLiterals: true} |
| react | react/jsx-filename-extension | off |
| react | react/prop-types | warn |
| react | jsx-a11y/href-no-hash | off |
| react | jsx-a11y/label-has-for | error, { allowChildren: true } |
| react | jsx-a11y/anchor-is-valid | error, { specialLink: ['to'] } |
| react | import/no-extraneous-dependencies | error, { devDependencies: true } |
| react | import/no-unresolved | error, { commonjs: true, amd: true } |

## Maintainers
[Willy Camargo](https://github.com/willycamargo)

## License
MIT