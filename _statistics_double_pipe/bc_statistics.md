---
layout: manual
title:  "bc - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `bc`:__ If the given command failed, execute `bc`.

| Command | percentage |
|--------|--------|
| free | 33% |
| awk | 33% |
| w | 33% |



## After

__The commands after `bc`:__ If `bc` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| echo | 100% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `free` failed, execute `bc`

- delay execution of a command that needs lots of memory and CPU time until the resources are available

            
### If `awk` failed, execute `bc`

- delay execution of a command that needs lots of memory and CPU time until the resources are available

            
### If `w` failed, execute `bc`

- delay execution of a command that needs lots of memory and CPU time until the resources are available

            


### If `bc` failed, execute `echo`

- Leap year calculation

            
