Based on this article:
https://medium.com/@BrodaNoel/how-to-create-a-react-component-and-publish-it-in-npm-668ad7d363ce

## First Steps

`git clone https://github.com/bvodola/react-to-npm.git PACKAGE_NAME`

`yarn` or `npm install`

Create your components inside the `src/components` folder, import them to `src/index.js` and add them to the exported object in there.

## Testing locally

`npm run build` or `yarn build`
`npm link` or `yarn link`

Then, navigate to anther project's folder and run:
`npm link PACKAGE_NAME` or `yarn link PACKAGE_NAME`

You are now able to import the components you created to that project, with:
`import { SomeComponent } from 'PACKAGE_NAME';` or `const { SomeComponent } = require('PACKAGE_NAME')`

## Development Workflow

Run `yarn start` on the package folder (instead of `yarn build`), and whenever you make changes to it, those changes will be built and reflected on another project that imports it.

## Publishing your package

`npm login`
`npm publish`