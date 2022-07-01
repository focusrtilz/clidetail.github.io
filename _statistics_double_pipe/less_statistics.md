---
layout: manual
title:  "less - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `less`:__ If the given command failed, execute `less`.

| Command | percentage |
|--------|--------|
| cat | 28% |
| man | 14% |
| ls | 14% |
| rm | 14% |
| w | 14% |
| last | 14% |



## After

__The commands after `less`:__ If `less` failed, execute the given command.

| Command | Percentage | 
|-------|--------|



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `cat` failed, execute `less`

- Group OR'd commands where you expect only one to work
- See a full last history by expanding logrotated wtmp files

            
### If `man` failed, execute `less`

- Extended man command

            
### If `ls` failed, execute `less`

- See a full last history by expanding logrotated wtmp files

            
### If `rm` failed, execute `less`

- See a full last history by expanding logrotated wtmp files

            
### If `w` failed, execute `less`

- See a full last history by expanding logrotated wtmp files

            
### If `last` failed, execute `less`

- See a full last history by expanding logrotated wtmp files

            


