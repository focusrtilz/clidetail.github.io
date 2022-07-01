---
layout: manual
title:  "iostat - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `iostat`:__ Pipe the result of the given command to `iostat`.

| Command | percentage |
|--------|--------|



## After

__The commands after `iostat`:__ Pipe the result of `iostat` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 100% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.




### Pipe `iostat` to `grep`

- Get info `iostat -En` for all disks with Hardware Errors - works on Solaris and Solaris forks

            
