---
layout: manual
title:  "service - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `service`:__ If the given command failed, execute `service`.

| Command | percentage |
|--------|--------|
| w | 50% |
| nc | 50% |



## After

__The commands after `service`:__ If `service` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| cat | 16% |
| locate | 16% |
| head | 16% |
| vim | 16% |
| sed | 16% |
| vi | 16% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### If `w` failed, execute `service`

- Check a server is up. If it isn't mail me.

            
### If `nc` failed, execute `service`

- Check a server is up. If it isn't mail me.

            


### If `service` failed, execute `cat`

- Check apache config syntax and restart or edit the file

            
### If `service` failed, execute `locate`

- Check apache config syntax and restart or edit the file

            
### If `service` failed, execute `head`

- Check apache config syntax and restart or edit the file

            
### If `service` failed, execute `vim`

- Check apache config syntax and restart or edit the file

            
### If `service` failed, execute `sed`

- Check apache config syntax and restart or edit the file

            
### If `service` failed, execute `vi`

- Check apache config syntax and restart or edit the file

            
