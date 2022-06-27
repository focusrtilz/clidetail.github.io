---
layout: manual
title:  "man -P | Get specific information in man page" 
tags: man 
---

### Scenario
When we need to check the manual for commands, we use command __`man`__ to do the work.

### Options `-P` for `man` 
__`man`__ is the abbreviation of __`manual`__.
__`P`__ is the abbreviation of __`PAGER`__.

### Manpage Description
Specify which pager to use. This option overrides the MANPAGER environment variable, which in turn overrides  the PAGER variable. By default, man uses __`/usr/bin/less -is`__ .

### Detail Explain
Sometimes we'd like to check specific information in the manual but we don't want to read the whole page.

In this situation, we can use option __`-P`__. This option can help us to change the tool to display the manaul. The default tool is `less`. We can change the tool to for example `tail` or `grep` etc. Further, we can also use the options for the tool we choose to have further manipulation.


### Version
Mac (BSD) command line utilities

### Examples
Here is the example of __`man -P`__.

- __`man -P`__ Change the display tool to grep and grep the AUTHOR information.

```bash
$ man -P "grep -i 'AUTHOR'" man
John W. Eaton was the original author of man.  Zeyd M. Ben-Halim released man 1.2, and Andries Brouwer followed  up  with
```

