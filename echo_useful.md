---
layout: manual
title: "Useful commands with echo"
tags: echo
---

This is a list of useful commands utilizing `echo`. The examples provided were generated through an experiment using chatGPT to describe the command and provide examples.

### Runs previous command, replaces oldword with newword.

This command uses the sed command to replace "oldword" with "newword" in the output of the previous command (which is accessed using !!), and then uses xargs and sh -c to run the modified command.

Please note that this is just an example and will only work if the command being run is a string that can be modified by sed. You can replace "oldword" and "newword" with the actual values you want to replace with.

```
$ echo !! | sed 's/oldword/newword/g' | xargs -0 sh -c
```

### Simulate typing with echo and sleep.

This command will simulate typing the message "Hello World!" with a pause of 0.1 seconds between each character.

Note: The wc -c command used in the example above returns the number of characters in the string, so this solution may not work with multi-byte characters.

```
$ echo -n "Hello World!" | { for i in $(seq 0 $(echo -n "Hello World!" | wc -c)); do echo -n "${Hello World!:i:1}"; sleep 0.1; done; echo; }
```

### Save last command to script file.

This command will create a script file named "last_command.sh" and will write the last executed command in the terminal to that file. The sed command is used to remove the command number and space from the start of the command.

Note: This command will only capture the last command that was executed in the same terminal session where the command was run. Also, this command will not save the command history across multiple sessions, it will only save the last command that was executed in the current session.

```
$ echo $(history | tail -n1 | sed 's/^[ ]*[0-9]*[ ]*//') >> last_command.sh
```