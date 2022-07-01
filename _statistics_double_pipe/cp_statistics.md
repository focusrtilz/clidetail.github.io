---
layout: manual
title:  "cp - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `cp`:__ If the given command failed, execute `cp`.

| Command | percentage |
|--------|--------|
| w | 33% |
| free | 16% |
| awk | 16% |
| cp | 16% |
| ss | 16% |



## After

__The commands after `cp`:__ If `cp` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| echo | 50% |
| cp | 10% |
| ss | 10% |
| more | 10% |
| vim | 10% |
| vi | 10% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `w` failed, execute `cp`

- delay execution of a command that needs lots of memory and CPU time until the resources are available
- Re-emerge all ebuilds with missing files (Gentoo Linux)

            
### If `free` failed, execute `cp`

- delay execution of a command that needs lots of memory and CPU time until the resources are available

            
### If `awk` failed, execute `cp`

- delay execution of a command that needs lots of memory and CPU time until the resources are available

            
### If `cp` failed, execute `cp`

- Re-emerge all ebuilds with missing files (Gentoo Linux)

            
### If `ss` failed, execute `cp`

- Lookup autonomous systems of all outgoing http/s traffic

            


### If `cp` failed, execute `echo`

- Check if TCP port 25 is open
- Re-emerge all ebuilds with missing files (Gentoo Linux)
- Check if *hardware* is 32bit or 64bit
- Check if *hardware* is 32bit or 64bit
- Check if *hardware* is 32bit or 64bit

            
### If `cp` failed, execute `cp`

- Re-emerge all ebuilds with missing files (Gentoo Linux)

            
### If `cp` failed, execute `ss`

- Re-emerge all ebuilds with missing files (Gentoo Linux)

            
### If `cp` failed, execute `more`

- Re-emerge all ebuilds with missing files (Gentoo Linux)

            
### If `cp` failed, execute `vim`

- Backup a file before editing it.

            
### If `cp` failed, execute `vi`

- Backup a file before editing it.

            
