---
layout: manual
title:  "ls -1 -l override each other | Option l display long format (more info) of entires"
tags: "ls"
---

### Scenario
When using a command line interface of mac machine, we use command __`ls`__ to list directory contents.

### Options `-1` `-l`for `ls` 
__`1`__ is the numeric digit __`one`__.

__`l`__ is the list in __`long format`__ (file mode, number of links, owner name, group name, number of bytes in the file, abbreviated month, day-of-month file was last modified, hour file last modified, minute file last modified, and the pathname).

### Manpage Description
The __`-1`__ and __`-l`__ options all override each other; the last one specified determines the format used.

Please click [here](https://clidetail.com/manuals/ls1/) for the details of option __`-1`__

### Detail Explain

Options in __`ls`__ needed to be used carefully. Users often ignore this important rule. This might lead to an unexpected error when piping or parsing the result. 

### Version
Mac (BSD) command line utilities

### Examples
Here are two examples __`ls -1l`__, __`ls -l1`__.

- __`ls -1l`__ Option l determines the format used.

```bash
$ls -1l
-rw-r--r--    1 user  staff  40372 May 25 14:00 AUTHORS
-rw-r--r--    1 user  staff    369 May 25 14:00 Gruntfile.js
-rw-r--r--    1 user  staff    236 May 25 14:00 INSTALL
-rw-r--r--    1 user  staff   1552 May 25 14:00 LICENSE
-rw-r--r--    1 user  staff  14383 May 25 14:00 LICENSE.python
-rw-r--r--    1 user  staff    276 May 25 14:00 MANIFEST.in
-rw-r--r--    1 user  staff   2122 May 25 14:00 README.rst
drwxr-xr-x   20 user  staff    640 May 25 14:00 django
drwxr-xr-x   22 user  staff    704 May 25 14:00 docs
drwxr-xr-x    5 user  staff    160 May 25 14:00 extras
drwxr-xr-x    5 user  staff    160 May 25 14:00 js_tests
-rw-r--r--    1 user  staff    363 May 25 14:00 package.json
-rw-r--r--    1 user  staff    219 May 25 14:00 pyproject.toml
drwxr-xr-x    4 user  staff    128 May 25 14:00 scripts
-rw-r--r--    1 user  staff   2276 May 25 14:00 setup.cfg
-rw-r--r--    1 user  staff   1633 May 25 14:00 setup.py
drwxr-xr-x    4 user  staff    128 May 25 14:23 test
drwxr-xr-x  220 user  staff   7040 May 25 14:00 tests
-rw-r--r--    1 user  staff   1702 May 25 14:00 tox.ini
```

- __`ls -l1`__ Option 1 determined the format used.

```bash
$ls -l1 
AUTHORS
Gruntfile.js
INSTALL
LICENSE
LICENSE.python
MANIFEST.in
README.rst
django
docs
extras
js_tests
package.json
pyproject.toml
scripts
setup.cfg
setup.py
test
tests
tox.ini
```

