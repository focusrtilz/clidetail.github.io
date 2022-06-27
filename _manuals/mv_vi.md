---
layout: manual
title:  "mv -vi | See how to move files in a safe way"
tags: "mv"
---

### Scenario
When renaming a file or moving a file to specific direcoty. We use command __`mv`__

### Options `-vi` for `mv` 
Command __`mv`__ is the abbreviation of __`move`__. 
Option __`-v`__ stands for  __`verbose`__.
Option __`-i`__ stands for __`inform`__.

### Manpage Description
Option __-v__: Cause mv to be verbose, showing files after they are moved.

Option __-i__: Cause mv to write a __`prompt`__ to standard __`error`__ before moving a file that would overwrite an existing file. If the response from the standard input begins with the character __`y`__ or __`Y`__, the move is attempted. (The -i option overrides any previous -f or -n options.)

### Detail Explain
When moving files, it is highly suggested that we do it with carefulness. 

Therefore, we can use option __`-v`__ to show files after they are moved and check if there's an error moving of files.

Also, we can use option __`-v`__ combining with option __`-i`__  to confirm whether if we want to overwrite an existing file in the target directory. 

Please make sure you put option __-i__ after any previous options. Because the option __-i__ overrides the previous __`-f`__ or __`-n`__ options. 

### Version
Mac (BSD) command line utilities

### Examples
Here is the example of __`mv -vi`__.

- __`mv -vi`__ Move file with verbose and overwrite with carefulness.

```bash
# Suppose we have a file (file2.sh) in directory (dir).
$ mv -vi file2.sh dir
overwrite dir/file2.sh? (y/n [n]) y
file2.sh -> dir/file2.sh
```
