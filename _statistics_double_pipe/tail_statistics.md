---
layout: manual
title:  "tail - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `tail`:__ If the given command failed, execute `tail`.

| Command | percentage |
|--------|--------|
| rm | 20% |
| echo | 20% |
| alias | 20% |
| w | 20% |
| nc | 20% |



## After

__The commands after `tail`:__ If `tail` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| wget | 33% |
| w | 33% |
| echo | 33% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `rm` failed, execute `tail`

- Add an "alert" alias for long running commands

            
### If `echo` failed, execute `tail`

- Add an "alert" alias for long running commands

            
### If `alias` failed, execute `tail`

- Add an "alert" alias for long running commands

            
### If `w` failed, execute `tail`

- Add an "alert" alias for long running commands

            
### If `nc` failed, execute `tail`

- Add an "alert" alias for long running commands

            


### If `tail` failed, execute `wget`

- Download last file from index of

            
### If `tail` failed, execute `w`

- Download last file from index of

            
### If `tail` failed, execute `echo`

- Alias TAIL for automatic smart output

            
