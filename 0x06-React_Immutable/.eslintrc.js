module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true,
    },
    "plugins": [
        "immutable"
    ],
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "extends": "airbnb",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "immutable/no-mutation": "error",
    }
}
