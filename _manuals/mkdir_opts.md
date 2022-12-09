---
layout: manual
title: The list of mkdir options with example
tags: mkdir
---

This is a list of `mkdir` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.


### Version
Mac BSD General Commands Manual

### Option `-p` or `--parents`
#### Description

Create intermediate directories as required.  If this option is not specified, the full path prefix of each operand must already exist. On the other hand, with this option specified, no error will be reported if a directory given as an operand already exists.  Intermediate directories are created with permission bits of “rwxrwxrwx” (0777) as modified by the current umask, plus write and search permission for the owner.

#### Example
```
mkdir -p dir1/dir2/dir3
```
### Option `-m` or `--mode`

#### Description

Set the file permission bits of the final created directory to the specified mode.  The mode argument can be in any of the formats specified to the chmod(1) command.  

If a symbolic mode is specified, the operation characters ‘+’ and ‘-’ are interpreted relative to an initial mode of “a=rwx”.

#### Example
```
mkdir -m 755 dir1 dir2 dir3
```
### Option `-v` or `--verbose`
#### Description

Be verbose when creating directories, listing them as they are created.

#### Example
```
mkdir -v dir1 dir2 dir3
```


