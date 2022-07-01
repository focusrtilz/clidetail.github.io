---
layout: manual
title:  "env - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `env`:__ If the given command failed, execute `env`.

| Command | percentage |
|--------|--------|
| grep | 33% |
| ping | 33% |
| w | 33% |



## After

__The commands after `env`:__ If `env` failed, execute the given command.

| Command | Percentage | 
|-------|--------|



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `grep` failed, execute `env`

- Make alert if host is 'dead' or not reachable

            
### If `ping` failed, execute `env`

- Make alert if host is 'dead' or not reachable

            
### If `w` failed, execute `env`

- Make alert if host is 'dead' or not reachable

            


