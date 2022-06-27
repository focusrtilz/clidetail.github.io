---
layout: manual
title:  "mkdir -m | Make directories with permission specified"
tags: "mkdir"
---

### Scenario
When making directories, we use command __`mkdir`__

### Options `-m` for `mkdir` 
Command __`mkdir`__ is the abbreviation of __`make directory`__. 
Option __`-m`__ stands for  __`mode`__.

### Manpage Description
Set the file permission bits of the final created directory to the specified mode.  The mode argument can be in any of the formats specified to the chmod(1) command. If a symbolic mode is specified, the operation characters __`+`__ and __`-`__ are interpreted relative to an initial mode of __`a=rwx`__.

### Detail Explain
When making a directory, the __`default`__ permission is set to __`755`__ if not specified.

However, for security and privacy concerns, we can use option __`-m`__ to manipulate the permission when making the directory.

Just like the format specified to the command __`chmod`__. We can use both absolute mode and symbolic mode.

Please [click](https://clidetail.com/manuals/chmod_abs_mode/) here to know more about the the absolute mode. And [here](https://clidetail.com/manuals/chmod_sym_mode/) to know more about the symbolic mode.

And please beware that if we use symbolic mode, the __`initial`__ permission will be __`777`__. And we can adjust the permission from that.

### Version
Mac (BSD) command line utilities

### Examples
Here are the examples of __`mkdir -m absolute`__ and __`mkdir -m symbolic`__.

- __`mkdir -m absolute`__ Making directory and specify the permission with absolute mode.

```bash
$ mkdir -m 744 hello
$ ls -l
drwxr--r--   2 user  staff    64 Jun  2 09:46 hello
```
- __`mkdir -m o-rwx`__ Making directory and adjust the permission with symbolic mode.

```bash
$ mkdir -m o-rwx helloW
$ ls -l
drwxrwx---   2 user  staff    64 Jun  2 09:48 helloW

```

