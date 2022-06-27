---
layout: manual
title:  "grep -e | grep -v || Powerful filtering options"
tags: "grep"
---

### Scenario
The __`grep`__ utility searches any given input files, selecting lines that match one or more patterns. This tool is super helpful when we need to look into system logs, trouble shooting error/bugs or conduct security forensics. 

### Options `-ev` for `grep`
Option __`-e`__ stands for __`expression`__.
Option __`-v`__ takes the word __`v`__ from __`invert`__.

### Manpage Description

Option __`-e`__: 
Specify a pattern used during the search of the input: an input line is selected if it matches any of the specified patterns. This option is __`most useful`__ when __`multiple -e options`__ are used to specify multiple patterns, or when a pattern begins with a dash (`-`).

Option __`-v`__:
Selected lines are those __`not`__ matching any of the specified patterns.

### Detail Explain

Option __`-e`__ is most useful when multiple __`-e`__ options are used. It is even more useful when combining the use with option __`-v`__. When exploring the logs, despite that we can use __`-e`__ to filter out what we need, however, oftentimes, there are still lots of noises. 

With this concern, we can use __`|`__ pipeline to pipe the results from using option __`-e`__ to command __`grep`__ using option __`v`__. Then, we can filter out the noises.

### Version
Mac (BSD) command line utilities

### Examples
Here is the examples of __`grep -e |grep -v`__.

- __`Text.txt`__ A text file cantaining a poem inside.

```bash
$cat text.txt
Teachers reach for poetry
And lessons come alive
Illuminating history
And how to count to five
Describing common feelings
Or sharing funny tales
Identifying elephants
Exploring ants and whales
No matter what the topic
How stately or absurd
When teachers reach for poetry
They know they will be heard
```
- __`grep -e|grep -v`__ Making directory and adjust the permission with symbolic mode.

```bash
$ grep -e "^And" -e "^Or" text.txt | grep -v "to"
And lessons come alive
Or sharing funny tales
```

