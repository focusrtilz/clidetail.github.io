---
layout: manual
title:  "ls -C -1 option override each other | Option C (output to the terminal), Option 1 (output not to the terminal)"
tags: "ls"
---

### Scenario
When using a command line interface of mac machine, we use command __`ls`__ to list directory contents.

### Options `-C` `-1`for `ls` 
__`C`__ is the abbreviation of __`column`__. It forces multi-column output; this is the default when output is to a terminal.

__`1`__ is the numeric digit __`one`__.


### Manpage Description
The __`-C`__ and __`-1`__ options all override each other; the last one specified determines the format used.

Please click [here](https://clidetail.com/manuals/ls1/) for the details of option __`-1`__

### Detail Explain

Options in __`ls`__ needed to be used carefully. Users often ignore this important rule. This might lead to an unexpected error when piping or parsing the result.

Option __`-1`__ is the default setting when the output is not to a terminal. And option __`-C`__ is the default when the output is to a terminal.

### Version
Mac (BSD) command line utilities

### Examples
Here are two examples __`ls -C1`__, __`ls -1C`__.

- __`ls -C1`__ Option __`-1`__ determines the format used.

```bash
$ls -C1
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

- __`ls -1C`__ Option __`-C`__ determined the format used.

```bash
$ls -1C 
AUTHORS		LICENSE		README.rst	extras		pyproject.toml	setup.py	tox.ini
Gruntfile.js	LICENSE.python	django		js_tests	scripts		test
INSTALL		MANIFEST.in	docs		package.json	setup.cfg	tests
```

