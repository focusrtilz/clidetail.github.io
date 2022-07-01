---
layout: manual
title:  "pwd - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `pwd`:__ If the given command failed, execute `pwd`.

| Command | percentage |
|--------|--------|
| cd | 28% |
| nc | 28% |
| name | 28% |
| df | 14% |



## After

__The commands after `pwd`:__ If `pwd` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| grep | 33% |
| cd | 33% |
| alias | 33% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `cd` failed, execute `pwd`

- bash/ksh function: given a file, cd to the directory it lives
- bash/ksh function: given a file, cd to the directory it lives

            
### If `nc` failed, execute `pwd`

- bash/ksh function: given a file, cd to the directory it lives
- bash/ksh function: given a file, cd to the directory it lives

            
### If `name` failed, execute `pwd`

- bash/ksh function: given a file, cd to the directory it lives
- bash/ksh function: given a file, cd to the directory it lives

            
### If `df` failed, execute `pwd`

- bash/ksh function: given a file, cd to the directory it lives

            


### If `pwd` failed, execute `grep`

- Quickly create an alias for changing into the current directory

            
### If `pwd` failed, execute `cd`

- Quickly create an alias for changing into the current directory

            
### If `pwd` failed, execute `alias`

- Quickly create an alias for changing into the current directory

            
