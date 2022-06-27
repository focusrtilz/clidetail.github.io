---
layout: manual
title:  "rm -P | The most secure way to wipe out the data"
tags: rm
---

### Scenario
When we need to display the last part of files, we use command __`rm`__ to do the work.

### Options `-P` for `rm` 
__`P`__ is the abbreviation of __`purely`__ removed.

### Manpage Description
Overwrite regular files before deleting them.  Files are overwritten `three times`, first with the byte pattern __`0xff`__, then __`0x00`__, and then __`0xff`__ again, before they are deleted.

### Detail Explain
With option __`-P`__, we can completely wiped out data in the file `three times` and then `delete` it! This is important, because there are techniques that can recover the deleted files. 

So, with the use of option __`-P`__, you don't have to worry about the recovery of deleted files. Because what's inside the recovered files are just meaningless bytes.  


### Version
Mac (BSD) command line utilities

### Examples
Here is the example of __`rm -P`__.

- __`rm -P`__ Wiping out the data before deleting.

```bash
$ rm -P filename
```

