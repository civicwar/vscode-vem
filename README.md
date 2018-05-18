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

### Features

Re-uses the extensions from the default environment to new environments, so you can always use the same base features.

### Procedures

* run the installation script, to be sure we have everything to work with.
  * `code-em --install /Users/dfernandes/.vscode`

```
[Install] : Removing Previous Extensions...
[Install] : Found 2 Installed Extensions...
[Install] : Clearing db if exists...
[Install] : Checking if /Users/dfernandes/.vscode Exists...
[Install] : Successfully Installed!
```

* you can create new Environments
  * `code-em -n Angular`

```
[Create] : Moving base extensions to new Environment
[Create] : Created the Environment Angular Successfully
```

* ...as many as you want
  * `code-em -n PHP`

```
[Create] : Moving base extensions to new Environment
[Create] : Created the Environment PHP Successfully
```

* you can list the available environments
  * `code-em -l`

```
┌─────────┬───────────────────────────────────┐
│ Name    │ Path                              │
├─────────┼───────────────────────────────────┤
│ Angular │ /Users/dfernandes/.vscode/Angular │
├─────────┼───────────────────────────────────┤
│ PHP     │ /Users/dfernandes/.vscode/PHP     │
└─────────┴───────────────────────────────────┘
```

* you can remove the environments by name
  * `code-em -r PHP`

```
[Remove] : Found : PHP
[Remove] : Checking if /Users/dfernandes/.vscode/PHP exists...
[Remove] : Removed Successfully
```

* you can open a new VSCode window using those created environments
  * `code-em -u Angular`

```
[UseCode] : Starting code with : Angular@/Users/dfernandes/.vscode/Angular
```
