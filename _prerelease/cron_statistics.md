---
layout: manual
title:  "cron - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `cron`:__ Pipe the result of the given command to `cron`.

| Command | percentage |
|--------|--------|
| grep | 16% |
| echo | 8% |
| cron | 8% |
| dmesg | 8% |
| crontab | 8% |
| passwd | 8% |
| w | 8% |
| ss | 8% |
| man | 8% |
| sed | 8% |
| comm | 8% |



## After

__The commands after `cron`:__ Pipe the result of `cron` to the given command.

| Command | Percentage | 
|-------|--------|
| echo | 11% |
| awk | 11% |
| w | 11% |
| grep | 11% |
| cron | 11% |
| crontab | 11% |
| man | 11% |
| sed | 11% |
| comm | 11% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `grep` to `cron`

- list all crontabs for users
- Remove job from crontab by commandline

            
### Pipe `echo` to `cron`

- send kernel log (dmesg) notifications to root via cron

            
### Pipe `cron` to `cron`

- send kernel log (dmesg) notifications to root via cron

            
### Pipe `dmesg` to `cron`

- send kernel log (dmesg) notifications to root via cron

            
### Pipe `crontab` to `cron`

- send kernel log (dmesg) notifications to root via cron

            
### Pipe `passwd` to `cron`

- Show crontabs for all users

            
### Pipe `w` to `cron`

- Show crontabs for all users

            
### Pipe `ss` to `cron`

- Show crontabs for all users

            
### Pipe `man` to `cron`

- Add a line to crontab using sed

            
### Pipe `sed` to `cron`

- Add a line to crontab using sed

            
### Pipe `comm` to `cron`

- Add a line to crontab using sed

            


### Pipe `cron` to `echo`

- Print a cron formatted time for 2 minutes in the future (for crontab testing)

            
### Pipe `cron` to `awk`

- Print a cron formatted time for 2 minutes in the future (for crontab testing)

            
### Pipe `cron` to `w`

- Print a cron formatted time for 2 minutes in the future (for crontab testing)

            
### Pipe `cron` to `grep`

- Remove job from crontab by commandline

            
### Pipe `cron` to `cron`

- send kernel log (dmesg) notifications to root via cron

            
### Pipe `cron` to `crontab`

- send kernel log (dmesg) notifications to root via cron

            
### Pipe `cron` to `man`

- Add a line to crontab using sed

            
### Pipe `cron` to `sed`

- Add a line to crontab using sed

            
### Pipe `cron` to `comm`

- Add a line to crontab using sed

            
