---
layout: manual
title:  "chown - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `chown`:__ Pipe the result of the given command to `chown`.

| Command | percentage |
|--------|--------|
| find | 44% |
| id | 11% |
| ls | 11% |
| echo | 11% |
| ip | 11% |
| w | 11% |



## After

__The commands after `chown`:__ Pipe the result of `chown` to the given command.

| Command | Percentage | 
|-------|--------|



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `find` to `chown`

- change ownership en masse of files owned by a specific user, including files and directories with spaces
- find files owned by root and make them your own again
- Change owner ship of files from 1003 to android under current directory recursively. 1003/android could be customized.
- Restore permissions or ownership from a backup directroy

            
### Pipe `id` to `chown`

- change ownership en masse of files owned by a specific user, including files and directories with spaces

            
### Pipe `ls` to `chown`

- Chown script

            
### Pipe `echo` to `chown`

- Restore permissions or ownership from a backup directroy

            
### Pipe `ip` to `chown`

- Restore permissions or ownership from a backup directroy

            
### Pipe `w` to `chown`

- Restore permissions or ownership from a backup directroy

            


