---
layout: manual
title:  "shutdown - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `shutdown`:__ If the given command failed, execute `shutdown`.

| Command | percentage |
|--------|--------|
| grep | 33% |
| wget | 33% |
| w | 33% |



## After

__The commands after `shutdown`:__ If `shutdown` failed, execute the given command.

| Command | Percentage | 
|-------|--------|



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `grep` failed, execute `shutdown`

- shutdown if wget exit
- if download end,shutdown

            
### If `wget` failed, execute `shutdown`

- shutdown if wget exit
- if download end,shutdown

            
### If `w` failed, execute `shutdown`

- shutdown if wget exit
- if download end,shutdown

            


