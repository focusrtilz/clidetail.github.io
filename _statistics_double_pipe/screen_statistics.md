---
layout: manual
title:  "screen - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `screen`:__ If the given command failed, execute `screen`.

| Command | percentage |
|--------|--------|
| screen | 33% |
| ls | 22% |
| grep | 11% |
| name | 11% |
| echo | 11% |
| w | 11% |



## After

__The commands after `screen`:__ If `screen` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| screen | 30% |
| ss | 20% |
| name | 10% |
| man | 10% |
| ssh | 10% |
| comm | 10% |
| w | 10% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `screen` failed, execute `screen`

- Start urxvt and do whatever is needed to open the screen session named "main"
- creates or attachs to screen
- bash auto-complete your screen sessions

            
### If `ls` failed, execute `screen`

- Start urxvt and do whatever is needed to open the screen session named "main"
- bash auto-complete your screen sessions

            
### If `grep` failed, execute `screen`

- Start urxvt and do whatever is needed to open the screen session named "main"

            
### If `name` failed, execute `screen`

- Start urxvt and do whatever is needed to open the screen session named "main"

            
### If `echo` failed, execute `screen`

- Turn monitor on or off if off or on, respectively

            
### If `w` failed, execute `screen`

- bash auto-complete your screen sessions

            


### If `screen` failed, execute `screen`

- Start urxvt and do whatever is needed to open the screen session named "main"
- creates or attachs to screen
- bash auto-complete your screen sessions

            
### If `screen` failed, execute `ss`

- creates or attachs to screen
- Set window name when SSH'ing while using screen

            
### If `screen` failed, execute `name`

- Start urxvt and do whatever is needed to open the screen session named "main"

            
### If `screen` failed, execute `man`

- Set window name when SSH'ing while using screen

            
### If `screen` failed, execute `ssh`

- Set window name when SSH'ing while using screen

            
### If `screen` failed, execute `comm`

- Set window name when SSH'ing while using screen

            
### If `screen` failed, execute `w`

- bash auto-complete your screen sessions

            
