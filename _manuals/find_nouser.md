---
layout: manual
title:  "find -nouser || Find the file belongs to an unknown user" 
tags: find
---

### Scenario
When we need to find files belong to an unknown user, we can use command __`find`__ with option __`--user`__ to do the work.

### Option __`-nouser`__ of Command `find` 
__`-nouser`__ stands for __`no such user`__.

### Manpage Description
Option __`-nouser`__:
True if the file belongs to an unknown user.

### Detail Explain
It is strange when we have files that belong to unknown users. This kind of situation can be downloading files from the Internet. Or cyber security issues. 

In other words, we can use this option to find the clues for the cyber security investigation. 

### Version
Mac BSD General Commands Manual

### Examples
Here is the examples of __`find -nouser`__.

- __`find -nouser`__ Find files belong to unknown users.

```bash
# Since we need to check the whole system, we use sudo
$ sudo find / -nouser
# shows the files if true.
```

