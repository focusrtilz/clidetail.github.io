---
layout: manual
title:  "dstat - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `dstat`:__ Pipe the result of the given command to `dstat`.

| Command | percentage |
|--------|--------|
| head | 100% |



## After

__The commands after `dstat`:__ Pipe the result of `dstat` to the given command.

| Command | Percentage | 
|-------|--------|
| xargs | 16% |
| screen | 16% |
| w | 16% |
| grep | 16% |
| ps | 16% |
| sed | 16% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `head` to `dstat`

- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.

            


### Pipe `dstat` to `xargs`

- Blink Caps Lock on HDD activity

            
### Pipe `dstat` to `screen`

- Console clock -- within screen

            
### Pipe `dstat` to `w`

- Console clock -- within screen

            
### Pipe `dstat` to `grep`

- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.

            
### Pipe `dstat` to `ps`

- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.

            
### Pipe `dstat` to `sed`

- CLFUContest : Check which process consume more than 10% of the cpu (configurable)

            
