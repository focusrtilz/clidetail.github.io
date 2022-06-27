---
layout: manual
title:  "ls -x -C option override each other | Display the results in different sortings"
tags: "ls"
---

### Scenario
When using a command line interface of mac machine, we use command __`ls`__ to list directory contents.

### Options `-x` `-C`for `ls` 
__`x`__ is the abbreviation of __`across`__. The multi-column output is produced with entries sorted across, rather than down

__`C`__ is the abbreviation of __`column`__. It forces multi-column output; this is the default when output is to a terminal.


### Manpage Description
The __`-x`__ and __`-C`__ options all override each other; the last one specified determines the format used.


### Detail Explain

Options in __`ls`__ needed to be used carefully. Users often ignore this important rule. This might lead to an unexpected error when piping or parsing the result.

Option __`-C`__ is the default setting when the output is produced with entries sorted __`down`__. Option __`-x`__ is the same with option __`-C`__, however the output is produced with entries sorted __`across`__.

### Version
Mac (BSD) command line utilities

### Examples
Here are two examples __`ls -xC`__, __`ls -Cx`__.

- __`ls -xC`__ Option __`-C`__ determines the format used.

```bash
$ls -xC
AUTHORS		LICENSE		README.rst	extras		pyproject.toml	setup.py	tox.ini
Gruntfile.js	LICENSE.python	django		js_tests	scripts		test
INSTALL		MANIFEST.in	docs		package.json	setup.cfg	tests
```

- __`ls -Cx`__ Option __`-x`__ determined the format used.

```bash
$ls -Cx 
AUTHORS		Gruntfile.js	INSTALL		LICENSE		LICENSE.python	MANIFEST.in	README.rst	django
docs		extras		js_tests	package.json	pyproject.toml	scripts		setup.cfg	setup.py
test		tests		tox.ini
```

