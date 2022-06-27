---
layout: manual
title:  "pwd -L -P | See how we identify if we're working in a symbolic directory"
tags: "pwd"
---

### Scenario
The __`pwd`__ comand helps us to know our present working directory and whether it is a physical directory or a symbolic link. 

### Options `-L -P` for `pwd`
Command __`pwd`__ stands for __`present working directory`__.
Option __`-P`__ is the abbreviation of  __`Physical`__.
Option __`-L`__ is the abbreviation of  __`(Symbolic) Link`__.

### Manpage Description

Option __`-L`__: Display the logical current working directory.
Option __`-P`__: Display the physical current working directory (all symbolic links resolved).

If no options are specified, the __`-L`__ option is assumed.

### Detail Explain

The option __`-L`__ does not override option __`-P`__. However, option __`-P`__ overrides option __`-L`__.

This means:

```
pwd = pwd -L
pwd -P = pwd -LP = pwd -PL
```

### Version
Mac BSD General Commands Manual

### Examples
Here are the examples of __`pwd -L`__ and __`pwd -P`__.

- __`pwd -P`__ Shows the physical working directory.

```bash
$ mkdir physical
$ ln -s physical symbolic
$ cd symbolic
$ pwd
/Users/john/Documents/symbolic
$ pwd -L
/Users/john/Documents/symbolic
$ pwd -P
/Users/john/Documents/physical
$ pwd -LP
/Users/john/Documents/physical
$ pwd -PL
/Users/john/Documents/physical

```

