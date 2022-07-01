---
layout: manual
title:  "scp - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `scp`:__ Pipe the result of the given command to `scp`.

| Command | percentage |
|--------|--------|
| ls | 20% |
| grep | 20% |
| ssh | 20% |
| ss | 20% |
| host | 20% |



## After

__The commands after `scp`:__ Pipe the result of `scp` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 25% |
| ss | 25% |
| name | 12% |
| less | 12% |
| dd | 12% |
| ip | 12% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `ls` to `scp`

- Search filenames with given pattern; each one is transfered via scp and if succesfull the file is locally deleted. Ideal for filesystem quick maintenance

            
### Pipe `grep` to `scp`

- ssh autocomplete based on ~/.ssh/config

            
### Pipe `ssh` to `scp`

- ssh autocomplete based on ~/.ssh/config

            
### Pipe `ss` to `scp`

- ssh autocomplete based on ~/.ssh/config

            
### Pipe `host` to `scp`

- ssh autocomplete based on ~/.ssh/config

            


### Pipe `scp` to `grep`

- display information about the CPU
- Remote copy in batch, exclude specified pattern

            
### Pipe `scp` to `ss`

- Quick and dirty hardware summary
- Get file from remote system

            
### Pipe `scp` to `name`

- display information about the CPU

            
### Pipe `scp` to `less`

- Quick and dirty hardware summary

            
### Pipe `scp` to `dd`

- Get file from remote system

            
### Pipe `scp` to `ip`

- Get file from remote system

            
