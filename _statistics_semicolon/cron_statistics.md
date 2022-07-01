---
layout: manual
title:  "cron - Statistics of command combinations using semicolon"
tags: statistic
---

## Before

__The commands before `cron`:__  Execute the given command __before__ `cron`.

| Command | percentage |
|--------|--------|
| cron | 23% |
| echo | 23% |
| dmesg | 7% |
| ls | 7% |
| passwd | 7% |
| w | 7% |
| ss | 7% |
| sed | 7% |
| crontab | 7% |



## After

__The commands after `cron`:__ Execute the given command __after__ `cron`.

| Command | Percentage | 
|-------|--------|
| echo | 41% |
| cron | 17% |
| crontab | 17% |
| cat | 5% |
| dmesg | 5% |
| man | 5% |
| comm | 5% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Execute `cron` before `cron`

- See crontabs for all users that have one
- print crontab entries for all the users that actually have a crontab
- Add a line to crontab using sed

            
### Execute `echo` before `cron`

- send kernel log (dmesg) notifications to root via cron
- Show crontabs for all users
- Show crontabs for all users

            
### Execute `dmesg` before `cron`

- send kernel log (dmesg) notifications to root via cron

            
### Execute `ls` before `cron`

- print crontab entries for all the users that actually have a crontab

            
### Execute `passwd` before `cron`

- print crontab entries for all the users that actually have a crontab

            
### Execute `w` before `cron`

- print crontab entries for all the users that actually have a crontab

            
### Execute `ss` before `cron`

- print crontab entries for all the users that actually have a crontab

            
### Execute `sed` before `cron`

- Add a line to crontab using sed

            
### Execute `crontab` before `cron`

- Add a line to crontab using sed

            


### Execute `echo` after `cron`

- See crontabs for all users that have one
- Print a cron formatted time for 2 minutes in the future (for crontab testing)
- send kernel log (dmesg) notifications to root via cron
- print crontab entries for all the users that actually have a crontab
- print crontab entries for all the users that actually have a crontab
- Show crontabs for all users
- Show crontabs for all users

            
### Execute `cron` after `cron`

- See crontabs for all users that have one
- print crontab entries for all the users that actually have a crontab
- Add a line to crontab using sed

            
### Execute `crontab` after `cron`

- See crontabs for all users that have one
- print crontab entries for all the users that actually have a crontab
- Add a line to crontab using sed

            
### Execute `cat` after `cron`

- See crontabs for all users that have one

            
### Execute `dmesg` after `cron`

- send kernel log (dmesg) notifications to root via cron

            
### Execute `man` after `cron`

- Add a line to crontab using sed

            
### Execute `comm` after `cron`

- Add a line to crontab using sed

            
