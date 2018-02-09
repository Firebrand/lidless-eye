# The Lidless Eye

Monitor user-specified files/folders for changes on specific file extensions and run relevant shell commands

## Installation

```
npm install --global lidless-eye
```

## Usage

```
Usage: lidless-eye -f <glob>

Monitor user-specified files/folders for changes on specific file extensions and run relevant shell commands

Options:

  -f, --file          path to the .yml file containing what to monitor and how to respond to changes
  -h, --help          output usage information
  -V, --version       output version number
```

## Examples

### Watching one or more glob

```
$ lidless-eye -f "mywatchers.yml"
```

### Sample .yml file

```
new test/**/*.js:
  - dir
  - echo 'You created a js file'
edit test/**/*.txt:
  - php -v
  - echo 'You just edited $FILE'
  - echo %random%
```

## License

ISC