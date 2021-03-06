export const createClientPackage = (name: string) => {
  return `{
  "name": "${name}-client",
  "version": "0.1.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "@apollo/client": "^3.1.4",
    "@types/jest": "^26.0.13",
    "@types/lodash": "^4.14.157",
    "@types/pluralize": "^0.0.29",
    "@types/react": "^16.9.19",
    "@types/react-dom": "^16.9.0",
    "@types/react-router-dom": "^5.1.3",
    "@types/styled-jsx": "^2.2.8",
    "@types/yup": "^0.29.6",
    "formik": "^2.1.4",
    "graphql": "^15.3.0",
    "immutability-helper": "^3.0.2",
    "lodash": "^4.17.19",
    "pluralize": "^8.0.0",
    "prop-types": "^15.7.2",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-loading": "^2.0.3",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.3",
    "typescript": "^4.0.2",
    "yum": "^0.1.1",
    "yup": "^0.29.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject",
    "coverage": "jest --coverage -c src/support/jest.config.js",
    "test": "jest -c src/support/jest.config.js",
    "test:watch": "jest --watch -c src/support/jest.config.js"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@testing-library/dom": "^7.24.1",
    "@testing-library/jest-dom": "^5.1.1",
    "@testing-library/react": "^11.0.2",
    "@testing-library/react-hooks": "^3.2.1",
    "@testing-library/user-event": "^12.1.4",
    "@typescript-eslint/eslint-plugin": "^4.1.0",
    "@typescript-eslint/parser": "^4.1.0",
    "eslint": "^6.6",
    "eslint-config-standard": "^14.1.0",
    "eslint-plugin-import": "^2.20.1",
    "eslint-plugin-node": "^11.0.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-react": "^7.18.3",
    "eslint-plugin-react-hooks": "^4.1.0",
    "eslint-plugin-standard": "^4.0.1",
    "identity-obj-proxy": "^3.0.0",
    "jest": "^24.9",
    "react-test-renderer": "^16.12.0",
    "subscriptions-transport-ws": "^0.9.18",
    "ts-jest": "^24.3.0"
  }
}`;
};
