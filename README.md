# typescript-for-beginners
Typescript Tutorials for Beginners - Dave Gray

## lesson 01
create tsconfig.json with `tsc --init`

Specify the root folder within your source files
`"rootDir": "./src"`

Specify an output folder for all emitted files
`"outDir": "./build"`

Only compile files under `src` directory
`"include": ["src"]`

Disable emitting files if any type checking errors are reported.
`"noEmitOnError": true`

