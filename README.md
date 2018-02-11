![lidless-eye logo](https://raw.githubusercontent.com/Firebrand/lidless-eye/master/lidless.png)

# lidless-eye

Lidless Eye will monitor user-specified folders/files/extensions for changes and then asynchronously execute custom shell commands whenever changes occur.

## Installation

```
npm install --global lidless-eye
```

## Usage

```
Usage: lidless -c <path to yml file>

Monitor user-specified files/folders for changes on specific file extensions and run relevant shell commands

Options:

  -c, --config          path to the .yml file containing what to monitor and how to respond to changes
  -h, --help          output usage information
  -V, --version       output version number
```

## Examples

### Running the lidless eye and passing it a yml settings file

```
$ lidless -c "mywatchers.yml"
```

### Sample .yml file

```
edit ./docroot/themes/custom/retail/templates/**/*.twig:
  - drush cr
  - echo Caches have been refreshed!

edit ./docroot/themes/custom/retail/sass/**/*.scss:
  - /var/www/drupal_test/vendor/bin/blt frontend:build

add ./docroot/themes/custom/retail/**/*:
  - git add $FILE                            # The keyword $FILE gets replaced by the file being altered
  - echo $FILE was added to staging area

edit ./docroot/themes/custom/retail/**/*:
  - git reset HEAD $FILE & git add $FILE     # Here we are using the & operator to run one command after the other, synchronously

delete ./docroot/themes/custom/retail/**/*:
  - echo $FILE was deleted >> deleted_files_log.txt

```

## License

ISC