---
layout: manual
title:  The list of mv options with example
tags: mv
---

This is a list of `mv` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-f` or `--force`
#### Description

Do not prompt before overwriting (overrides a previous -n option).

#### Example

```
$ mv -f <source> <destination>
```

### Option `-i` or `--interactive`
#### Description

Cause mv to prompt before overwriting any existing destination file.  If the destination file is a symbolic link to a directory, mv will remove the link and replace it with a directory.  If the destination file is a directory, mv will move the source file into the directory.

#### Example

```
$ mv -i <source> <destination>
```

### Option `-n` or `--no-clobber`
#### Description

Do not overwrite an existing file (overrides a previous -i option).

#### Example

```
$ mv -n <source> <destination>
```

### Option `-v` or `--verbose`
#### Description

Cause mv to print the name of each file before moving it.

#### Example

```
$ mv -v <source> <destination>
```

### Option `-h` or `--help`
#### Description

Display help information and exit.

#### Example

```
$ mv -h
```
