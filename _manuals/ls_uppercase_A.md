---
layout: manual
title:  "ls -A | List all hidden entries except for . and .."
tags: "ls"
---

### Scenario
When using a command line interface of mac machine, we use command __`ls`__ to list directory contents.

### Options `-A` for `ls` 
__A__ is the abbreviation of __ALL__.

### Manpage Description
List all entries except for __`.`__ and __`..`__  Always set for the super-user.

### Detail Explain

Option __`-a`__ helps to show all hidden entries including the __`.`__ and __`..`__ 

However, if we use option __`-A`__ combining with option __`-a`__, the __`.`__ and __`..`__ are still showed. This means when using __`-a`__ together with __`-A`__, __`-A`__ does not take effect. 


Please click __[here](https://clidetail.com/manuals/lsa/)__ for the details of __`-a`__

### Version
Mac (BSD) command line utilities

### Examples
Here are three examples __`ls -A`__, __`ls -a`__, __`ls -Aa`__.

- __`ls -A`__ List all entries except for __`.`__ and __`..`__

```bash
$ls -A

testFolder	test.py
```

- __`ls -a`__ List all entries with __`.`__ and __`..`__

```bash
$ls -a 

.	..	testFolder	test.py
```

- __`ls -Aa`__ Still, list all entries with __`.`__ and __`..`__

```bash
$ls -Aa

testFolder	test.py
```
