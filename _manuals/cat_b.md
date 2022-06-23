---
layout: manual
title:  "cat -b || Clear definition of blank when using option -b of command cat"
tags: cat
---

### Scenario
When using a command line interface of mac machine, we use command __`cat`__ to look inside a file.

### Options `-b` for `cat` 
__`b`__ is the abbreviation of __`blank`__.

### Manpage Description
Number the non-blank output lines, starting at 1.

### Detail Explain
This option ignores the blank output lines and delivers a neat print out. However, the definition of __`blank`__ need to be addressed here. 

Sometimes, when using option __`-b`__, you still see a __`blank`__ line with a line number at the very beginning. This is because there is still `something` in the line. It could be a __`space`__ or a __`tab`__. They can't be seen by human but they can be seen by the machines. So it's not completely blank.

### Version
Mac (BSD) command line utilities

### Examples
Here is the example of __`cat -b`__.

- Let's create a file (file1.sh) for testing option __`-b`__.

```bash
# the content of file1.sh                                 
1 echo "file1"
2 # completely blank
3     # a tab
4 # completely blank
5     # a tab
6 echo "file1"
```

- __`cat -b`__ Number the non-blank output lines, starting at 1.

```bash
$cat -b file1.sh 
     1	echo "file1"

     2		

     3		
     4	echo "file1"
```

