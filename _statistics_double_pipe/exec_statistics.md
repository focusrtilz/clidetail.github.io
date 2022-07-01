---
layout: manual
title:  "exec - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `exec`:__ If the given command failed, execute `exec`.

| Command | percentage |
|--------|--------|
| rm | 100% |



## After

__The commands after `exec`:__ If `exec` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| mount | 50% |
| mv | 25% |
| vi | 25% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `rm` failed, execute `exec`

- Changing the terminal title to the last shell command

            


### If `exec` failed, execute `mount`

- Check a nfs mountpoint and force a remount if it does not reply after a given timeout.
- Check a nfs mountpoint and force a remount if it does not reply after a given timeout.

            
### If `exec` failed, execute `mv`

- Rename files in a directory in an edited list fashion

            
### If `exec` failed, execute `vi`

- Rename files in a directory in an edited list fashion

            
