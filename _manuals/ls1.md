---
layout: manual
title:  "ls -1 | This option helps the parsing job easier"
tags: "ls"
---

### Scenario
When using a command line interface of mac machine, we use command __`ls`__ to list directory contents.

### Options `-1` for `ls` 
__`1`__ is the numeric digit __`one`__.

### Manpage Description
(The numeric digit `one`.)  Force output to be one entry per line.  This is the default when output is not to a terminal.

### Detail Explain

Option __`-1`__ can also be used when combining with sort-related options such as __`-S`__ (sort by size). Showing the result in just one line is a great helper when we need to parse the result or piping the result to other tools. 

### Version
Mac (BSD) command line utilities

### Examples
Here are two examples __`ls -1`__, __`ls -S1`__.

- __`ls -1`__ Force output to be one entry per line.

```bash
$ls -1
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

- __`ls -1S`__ Sort the output by size (from large to small) and show the output one entry per line.

```bash
$ls -S1 
AUTHORS
LICENSE.python
tests
setup.cfg
README.rst
tox.ini
setup.py
LICENSE
docs
django
Gruntfile.js
package.json
MANIFEST.in
INSTALL
pyproject.toml
extras
js_tests
scripts
test
```

