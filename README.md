# lidless-eye

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
edit ./docroot/themes/custom/sch_retail/templates/**/*.twig:
  - drush cr
edit ./docroot/themes/custom/sch_retail/sass/**/*.scss:
  - /var/www/drupal_test/vendor/bin/blt frontend:build
edit ./docroot/themes/custom/sch_retail/js/**/*.js:
  - git reset HEAD $FILE
  - git add $FILE
add ./docroot/themes/custom/sch_retail/js/**/*.js:
  - git add $FILE
  
```

## License

ISC