# Visual Studio Code Environment Manager

## <span style="color:red">THIS IS IN ALPHA. MIGHT BREAK STUFF!</span>

## Goal

This package manages a custom set of environments for Visual Studio Code.

## Usage

### List of Available Commands

```
  -s, --set <Extension Name>   Sets the Extension Environment
  -n, --new <Extension Name>   Creates a new Extension Environment
  -u, --use <Extension Name>   Starts vscode with the selected Extension Environment
  -l, --list                   Lists already created Extension Environments
  -r, --rem <Extension Name>   Deletes an Extension Environment
  -h, --help                   Prints this Help
  --install <Extension PATH>   Prepares Everything for the First Runtime
```

### Procedures

* run the installation script, to be sure we have everything to work with.
  * `code-em --install /home/civicwar/.vscode`
