---
layout: manual
title:  "ls -a | List all hidden entires"
tags: "ls"
---

### Scenario
When using a command line interface of mac machine, we use command __`ls`__ to list directory contents.

### Options `-a` for `ls` 
__a__ is the abbreviation of __all__

### Manpage Description
Include __`directory entries`__ whose names begin with a dot (.).

### Detail Explain
In linux system, if the name of a directory or a file begins with a dot (.). This means the directory or the file are hidden or we could say they're not directly displayed. Normally, they're config files such as sshrc, tmuxrc etc.

A single __`ls`__ command without option __`-a`__ is not allowed to see the hidden files or directories.

### Version
Mac (BSD) command line utilities

### Examples
Here are two examples __`ls`__ and __`ls -a`__.

- __`ls`__ list directory contents (ignore hidden files).

```bash
$ls 

Desktop  Downloads  Pictures  Documents  Music  Videos
Public   index.html install.log
```

- __`ls -a`__ list directory contents, display hidden files.ss

```bash
$ls -a 

.        ..         .local    .bashrc    .config  .Trash
Desktop  Downloads  Pictures  Documents  Music    Videos
Public   index.html install.log
```
