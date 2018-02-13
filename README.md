![lidless-eye logo](https://raw.githubusercontent.com/Firebrand/lidless-eye/master/lidless.png)

# lidless-eye

Lidless Eye will monitor user-specified folders/files/extensions for changes and then execute custom shell commands whenever changes occur.

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
edit ./src/**/*.js:
  - npx babel $PATH/$NAME --out-file ./lib/$NAME

delete ./**/*:
  - echo $PATH/$NAME was deleted >> deleted_files_log.txt

add ./src/**/*:
  - git add $PATH/$NAME                           
  - echo $PATH/$NAME was added to staging area!

edit ./src/**/*:
  - git reset HEAD $PATH/$NAME
  - git add $PATH/$NAME    

edit ./commitlog:
  - git commit -m "$LASTLINE"
  - git push origin HEAD
```

### Notes

```
Three variables are available to use in your yml settings file:
$PATH - This is the path of the file that has just been altered (ex. "user/stuff/memos/")
$NAME - This is the name of the file that has just been altered (ex. "to-do-list.txt")
$LASTLINE - This is the value of the last line of the file that has just been altered (ex. "3.Re-read The Name Of The Wind" )
```

## License

ISC