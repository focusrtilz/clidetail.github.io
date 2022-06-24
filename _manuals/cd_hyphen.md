---
layout: manual
title:  "cd [hyphen-minus] || Change to previous working directory"
tags: "cd"
---

### Scenario
The __`cd`__ comand helps us to navigate/change our working directory. This is a must-use command for the command line users. 

### Options `-` for `cd`
Command __`cd`__ stands for __`change the working directory`__.
Option __`-`__ is called __`hyphen or minus`__.

### Manpage Description

When a <hyphen-minus> is used as the operand, this shall be equivalent to the command:

```bash
cd "$OLDPWD" && pwd
```
which changes to the previous working directory and then writes its name.

### Detail Explain
Sometimes, we just want to know the previous directory and just don't want to change back to it. We can just use the environment variable __`$OLDPWD`__. OLDPWD stands for the old present working directory. The path of previous working directory stores in this variable.

We can just simply use
```bash
echo $OLDPWD 
```
to see the where we came from.
    

### Version
POSIX Programmer's Manual

### Examples
Here is the example of __`cd -`__.

- __`cd -`__ Change to the previous working directory and then write its name.

```bash
$ cd ~            // change to home directory
$ cd Documents    // change to Documents directory
$ echo $OLDPWD    // Show the previous working directory [should be ~]
/Users/John       // correct!
$ cd -            // change to the previous working directory
~                 // changed and writes its name! 
```

