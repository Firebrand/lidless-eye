![lidless-eye logo](https://raw.githubusercontent.com/Firebrand/lidless-eye/master/lidless.png)

# lidless-eye

Lidless Eye will monitor user-specified folders/files/extensions for changes and then asynchronously execute custom shell commands whenever changes occur.

## Installation

```
npm install --global lidless-eye
```

## Usage

```
Usage: lidless eye <path_to_yml_config_file>

Monitor user-specified files/folders for changes on specific file extensions and run relevant shell commands

Commands:

  eye <path_to_yml_config_file>

Options:

  -h, --help          output usage information
  -V, --version       output version number
```

## Examples

### Running the lidless eye and passing it a yml settings file

```
$ lidless eye "mywatchers.yml"
```

### Sample .yml file

```
edit ./docroot/themes/custom/retail/templates/**/*.twig:
  - drush cr
  - echo Caches have been refreshed!

edit ./docroot/themes/custom/retail/sass/**/*.scss:
  - /var/www/drupal_test/vendor/bin/blt frontend:build

add ./docroot/themes/custom/retail/**/*:
  - git add $FILE                            # The keyword $FILE contains the relpath/name of the file being altered
  - echo $FILE was added to staging area

edit ./docroot/themes/custom/retail/**/*:
  - git reset HEAD $FILE & git add $FILE     # Here we are using the & operator to run one command after the other, synchronously

delete ./docroot/themes/custom/retail/**/*:
  - echo $FILE was deleted >> deleted_files_log.txt

edit ./commitlog  
  - git commit -m '$LASTLINE' & git push origin HEAD   # The keyword $LASTLINE contains the value of the last line of the file being altered
```

## License

ISC