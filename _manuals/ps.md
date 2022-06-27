---
layout: manual
title:  "ps $$ | Display shell we currently use" 
tags: ps
---

### Scenario
When we need to see the information of running processes, we use command __`ps`__ to do the work.

### Command `ps` 
 __`ps`__ stands for __`process status`__.

### Manpage Description
The ps utility displays a header line, followed by lines containing information about all of your processes that have controlling terminals.

### Detail Explain
If we'd like to find the proccess id of the shell we're currently using. We can just type command __`ps`__ and look for it. 

We can also piping the __`ps`__ result to __`grep`__ and narrow down the results.

Or, we can just use oneliner __`ps $$`__ to precisely find out the information of the shell currently in shell.

We can use __`ps PID`__ to see the detail information of that process id. 

__`$$`__ is not an option of __`ps`__. It is a shell variable which holds the process id of the shell itself.

So, __`ps $$`__ means, we use command __`ps`__ to display the information of the shell currently in use. 

### Version
Mac BSD General Commands Manual

### Examples
Here is the example of __`ps $$`__.

- __`ps $$`__ Display the shell currely in use.

```bash
$ echo $$
81115

$ ps $$
  PID   TT  STAT      TIME COMMAND
81115 s003  S      0:00.05 -zsh
```

