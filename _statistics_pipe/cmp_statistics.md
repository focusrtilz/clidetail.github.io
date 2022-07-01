---
layout: manual
title:  "cmp - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `cmp`:__ Pipe the result of the given command to `cmp`.

| Command | percentage |
|--------|--------|
| sed | 40% |
| find | 20% |
| echo | 20% |
| ping | 20% |



## After

__The commands after `cmp`:__ Pipe the result of `cmp` to the given command.

| Command | Percentage | 
|-------|--------|
| tail | 12% |
| wc | 12% |
| w | 12% |
| cat | 12% |
| mkdir | 12% |
| rm | 12% |
| ssh | 12% |
| ss | 12% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `sed` to `cmp`

- Are the two lines anagrams?
- Are the two lines anagrams?

            
### Pipe `find` to `cmp`

- Compare directories (using cmp to compare files byte by byte) to find files of the same name that differ

            
### Pipe `echo` to `cmp`

- Ping sweep without NMAP

            
### Pipe `ping` to `cmp`

- Ping sweep without NMAP

            


### Pipe `cmp` to `tail`

- sort lines by length

            
### Pipe `cmp` to `wc`

- Count number of bytes that are different between 2 binary files

            
### Pipe `cmp` to `w`

- Count number of bytes that are different between 2 binary files

            
### Pipe `cmp` to `cat`

- Send your terminfo to another machine

            
### Pipe `cmp` to `mkdir`

- Send your terminfo to another machine

            
### Pipe `cmp` to `rm`

- Send your terminfo to another machine

            
### Pipe `cmp` to `ssh`

- Send your terminfo to another machine

            
### Pipe `cmp` to `ss`

- Send your terminfo to another machine

            
