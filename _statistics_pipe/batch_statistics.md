---
layout: manual
title:  "batch - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `batch`:__ Pipe the result of the given command to `batch`.

| Command | percentage |
|--------|--------|
| echo | 26% |
| w | 15% |
| rm | 10% |
| nc | 10% |
| find | 5% |
| exec | 5% |
| awk | 5% |
| cat | 5% |
| ss | 5% |
| man | 5% |
| comm | 5% |



## After

__The commands after `batch`:__ Pipe the result of `batch` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 50% |
| ss | 25% |
| tac | 25% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `echo` to `batch`

- Run a command only when load average is below a certain threshold
- Delete all files in folder without affecting load
- Boot another OS at next startup
- Delay execution until load average falls under 1.5
- Reboot as a different OS in Grub

            
### Pipe `w` to `batch`

- Run a command only when load average is below a certain threshold
- Extract the emoticons regex from a running skype process
- It decripts all pgp files in a selection folder and move the output into a file.

            
### Pipe `rm` to `batch`

- Run a command only when load average is below a certain threshold
- Delete all files in folder without affecting load

            
### Pipe `nc` to `batch`

- Boot another OS at next startup
- Reboot as a different OS in Grub

            
### Pipe `find` to `batch`

- Delete all files in folder without affecting load

            
### Pipe `exec` to `batch`

- Delete all files in folder without affecting load

            
### Pipe `awk` to `batch`

- Extract the emoticons regex from a running skype process

            
### Pipe `cat` to `batch`

- It decripts all pgp files in a selection folder and move the output into a file.

            
### Pipe `ss` to `batch`

- It decripts all pgp files in a selection folder and move the output into a file.

            
### Pipe `man` to `batch`

- Delay execution until load average falls under 1.5

            
### Pipe `comm` to `batch`

- Delay execution until load average falls under 1.5

            


### Pipe `batch` to `grep`

- Extract the emoticons regex from a running skype process
- Run a program transparently, but print a stack trace if it fails

            
### Pipe `batch` to `ss`

- Generate RSA private key and self-signed certificate

            
### Pipe `batch` to `tac`

- Run a program transparently, but print a stack trace if it fails

            
