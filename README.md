![lidless-eye logo](https://raw.githubusercontent.com/Firebrand/lidless-eye/master/lidless.png)

# lidless-eye

Monitor user-specified files/folders for changes on specific file extensions and run relevant shell commands

## Installation

```
npm install --global lidless-eye
```

## Usage

```
Usage: lidless -f <path to yml file>

Monitor user-specified files/folders for changes on specific file extensions and run relevant shell commands

Options:

  -f, --file          path to the .yml file containing what to monitor and how to respond to changes
  -h, --help          output usage information
  -V, --version       output version number
```

## Examples

### Running the lidless eye and passing it a yml settings file

```
$ lidless -f "mywatchers.yml"
```

### Sample .yml file

```
edit ./docroot/themes/custom/sch_retail/templates/**/*.twig:
  - drush cr
  - echo Caches have been refreshed!

edit ./docroot/themes/custom/sch_retail/sass/**/*.scss:
  - /var/www/drupal_test/vendor/bin/blt frontend:build

add ./docroot/themes/custom/sch_retail/js/**/*.js:
  - git add $FILE  
  - echo $FILE was added to staging area

edit ./docroot/themes/custom/sch_retail/js/**/*.js:
  - git reset HEAD $FILE & git add $FILE     # Here we are using the & operator to run one command after the other, synchronously
```

## License

ISC