---
layout: manual
title:  "scp - Statistics of command combinations using semicolon"
tags: statistic
---

## Before

__The commands before `scp`:__  Execute the given command __before__ `scp`.

| Command | percentage |
|--------|--------|
| w | 40% |
| ls | 20% |
| alias | 20% |
| host | 20% |



## After

__The commands after `scp`:__ Execute the given command __after__ `scp`.

| Command | Percentage | 
|-------|--------|
| rm | 100% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Execute `w` before `scp`

- Search filenames with given pattern; each one is transfered via scp and if succesfull the file is locally deleted. Ideal for filesystem quick maintenance
- Quick and dirty hardware summary

            
### Execute `ls` before `scp`

- Search filenames with given pattern; each one is transfered via scp and if succesfull the file is locally deleted. Ideal for filesystem quick maintenance

            
### Execute `alias` before `scp`

- Quick and dirty hardware summary

            
### Execute `host` before `scp`

- Copy something to multiple SSH hosts with a Bash loop

            


### Execute `rm` after `scp`

- create an screenshot, upload it to your server via scp and then open that screenshot in firefox

            
