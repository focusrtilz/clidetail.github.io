---
layout: manual
title:  "cat -net || Printing the none-printing characters (end of line, control-D, tab)"
tags: cat
---

### Scenario
When using a command line interface of mac machine, we use command __`cat`__ to look inside a file.

### Options `-net` for `cat` 
__`n`__ is the abbreviation of __`number`__.
__`e`__ is the abbreviation of __`end`__.
__`t`__ is the abbreviation of __`tab`__.

### Manpage Description
Option __`-n`__: Number the output lines, starting at __`1`__.
Option __`-e`__: Display non-printing characters, and display a dollar sign (__`$`__) at the end of each line.
Option __`-t`__: Display non-printing characters, and display tab characters as __`^I`__.

### Detail Explain
Chances are, we may have none-printing characters (^X for control-X etc.) in the file. When using cat with no options, we could lose important information in the file since those `none-printing` characters can't be printed out. 

### Version
Mac (BSD) command line utilities

### Examples
Here are the examples of __`cat`__ and __`cat -net`__.

- Let's create a file (file4.sh) for testing option __`-net`__.

```bash
# the content of file4.sh                                 
file4.sh
1 ^D # none-printing character control-D
2 ^D # printing character
3         # two tabs
4  # one space
```

- __`cat`__ Just the pure cat, no options combined.

```bash
$cat file4.sh

^D
		
 
```

- __`cat -net`__ Printing the none-printing characters (end of line, control-D, tab). Option __`-n`__ helps to number the output lines.

```bash
$cat -sn file4.sh 
     1	^D$
     2	^D$
     3	^I^I$
     4	 $
```

