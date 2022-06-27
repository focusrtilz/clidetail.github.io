---
layout: manual
title:  "tail -c | To display the last bytes of the file"
tags: tail
---

### Scenario
When we need to display the last part of files, we use command __`tail`__ to do the work.

### Options `-c` for `tail` 
__`c`__ is the abbreviation of bytes __`count`__.

### Manpage Description
The location is number bytes.

### Detail Explain
We can use tail to display not just last lines of files, but also, we can display last bytes of files with option __`-c`__. 

With this option, we can have a more precise display of files when we needed.

### Version
Mac (BSD) command line utilities

### Examples
Here is the example of __`tail -c`__.

- Let's create a file (tailTest.txt) for testing option __`-c`__.

```bash
# the content of tailTest.txt
ThisIsTheFirstLine
ThisIsTheSecondLine
```

- __`tail -c n`__ Display the last n bytes.

```bash
$ tail -c 10 tailTest.txt
econdLine
$ tail -c 20 tailText.txt
ThisIsTheSecondLine
$ tail -c 39 tailTest.txt
ThisIsTheFirstLine
ThisIsTheSecondLine
```

