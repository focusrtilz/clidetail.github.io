---
layout: manual
title:  "cat -s || Squeeze the empty lines to one line"
tags: "cat"
---

### Scenario
When using a command line interface of mac machine, we use command __`cat`__ to look inside a file.

### Options `-s` for `cat` 
__`s`__ is the abbreviation of __`squeeze`__.

### Manpage Description
Squeeze multiple adjacent __`empty`__ lines, causing the output to be single spaced.

### Detail Explain
This option squeezes the empty lines in just one single spaced line. However, the definition of __`empty`__ need to be addressed here. 

Sometimes, when using option __`-s`__, none of the empty lines are squeezed. This is because there is still `something` in the line. It could be a __`space`__ or a __`tab`__. They can't be seen by human but they can be seen by the machines. So it's not completely empty.

### Version
Mac (BSD) command line utilities

### Examples
Here is the example of __`cat -sn`__.

- Let's create a file (file1.sh) for testing option __`-s`__.

```bash
# the content of file1.sh                                 
1 echo "file1"
2 # completely blank
3     # a tab
4 # completely blank
5     # a tab
6 echo "file1"
```

- __`cat -sn`__ Squeeze the empty lines to one line. Option __`-n`__ helps to number the output lines.

```bash
$cat -sn file1.sh 
     1	echo "file1"
     2	
     3		
     4	
     5		
     6	echo "file1"
```

