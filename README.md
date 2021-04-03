# reactions.
A boilerplate for React projects using Webpack 5 and preconfigured with TailwindCSS.

## How to use
You can just run
```
npx degit gspalato/reactions
```
on your desired directory.

## Known issues
- The project may not compile if there's nothing inside `src/Assets/**/*`. Therefore, if you won't use any assets, you can just comment out/delete the `new CopyWebpackPlugin [...]` part inside `webpack.config.js`.

## How to contribute
Just create an issue or fix it with a pull request! (_I won't complain if you fix the known issues btw._)