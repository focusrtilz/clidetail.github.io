---
layout: manual
title:  The list of ps options with example
tags: ps
---

This is a list of `ps` options with examples. The examples are generated through an experiment using **chatGPT** to describe the usage of each option. The descriptions of the options are referenced from and can be searched in **manpage**.

### Version

Mac BSD General Commands Manual

### Option `-g`
#### Description

Display information about processes with the specified process group leaders.


#### Example

```
$ ps -g 1234
```

### Option `-h`
#### Description

Repeat the information header as often as necessary to guarantee one header per page of information.


#### Example

```
$ ps -h
```

### Option `-j`
#### Description

Print information associated with the following keywords: user, pid, ppid, pgid, sess, jobc, state, tt, time, and command.


#### Example

```
$ ps -j
```

### Option `-L`
#### Description

List the set of keywords available for the -O and -o options.


#### Example

```
$ ps -L
```

### Option `-l`
#### Description

Display information associated with the following keywords: uid, pid, ppid, flags, cpu, pri, nice, vsz=SZ, rss, wchan, state=S, paddr=ADDR, tty, time, and command=CMD.


#### Example

```
$ ps -l
```

### Option `-M`
#### Description

Print the threads corresponding to each task.


#### Example

```
$ ps -M
```

### Option `-m`
#### Description

Sort by memory usage, instead of the combination of controlling terminal and process ID.


#### Example

```
$ ps -m
```

### Option `-O`
#### Description

Add the information associated with the space or comma separated list of keywords specified, after the process ID, in the default information display.  Keywords may be appended with an equals (‘=’) sign and a string.  This causes the printed header to use the specified string instead of the standard header.


#### Example

```
# Add the "pid" and "time" keywords to the default display of information
$ ps -O pid,time

# Add the "pid" and "time" keywords to the default display of information, with custom header text
$ ps -O pid=ProcessID,time=ElapsedTime
```

### Option `-o`
#### Description

Display information associated with the space or comma separated list of keywords specified.  Multiple keywords may also be given in the form of more than one -o option. Keywords may be appended with an equals (‘=’) sign and a string.  This causes the printed header to use the specified string instead of the standard header.  If all keywords have empty header texts, no header line is written.


#### Example

```
# Display information associated with the "pid" and "time" keywords
$ ps -o pid,time

# Display information with custom header text for the "pid" and "time" keywords
$ ps -o pid=ProcessID,time=ElapsedTime

# Display information for multiple keywords in separate columns
$ ps -o pid -o time

# Display information for multiple keywords in a single column, separated by a comma
$ ps -o pid,time
```

### Option `-p`
#### Description

Display information about processes which match the specified process IDs.


#### Example

```
# Display information about the process with PID 12345
$ ps -p 12345

# Display information about the processes with PIDs 12345 and 67890
$ ps -p 12345,67890

# Display information about all processes belonging to the current user
$ ps -u $(whoami)
```

### Option `-r`
#### Description

Sort by current CPU usage, instead of the combination of controlling terminal and process ID.


#### Example

```
$ ps -r
```

### Option `-S`
#### Description

Change the way the process time is calculated by summing all exited children to their parent process.


#### Example

```
$ ps -S
```

### Option `-T`
#### Description

Display information about processes attached to the device associated with the standard input.


#### Example

```
$ ps -T
```

### Option `-t`
#### Description

Display information about processes attached to the specified terminal devices.


#### Example

```
$ ps -t tty1
```

### Option `-U`
#### Description

Display the processes belonging to the specified real user IDs.


#### Example

```
$ ps -U 1000
```

### Option `-w`
#### Description

Use 132 columns to display information, instead of the default which is your window size.  If the -w option is specified more than once, ps will use as many columns as necessary without regard for your window size.  When output is not to a terminal, an unlimited number of columns are always used.


#### Example

```
$ ps -w
```

### Option `-X`
#### Description

When displaying processes matched by other options, skip any processes which do not have a controlling terminal.


#### Example

```
$ ps -X
```

### Option `-x`
#### Description

When displaying processes matched by other options, include processes which do not have a controlling terminal. This is the opposite of the -X option.  If both -X and -x are specified in the same command, then ps will use the one which was specified last.

#### Example

```
$ ps -x
```
