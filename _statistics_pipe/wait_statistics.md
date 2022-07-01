---
layout: manual
title:  "wait - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `wait`:__ Pipe the result of the given command to `wait`.

| Command | percentage |
|--------|--------|
| w | 15% |
| sleep | 15% |
| ls | 10% |
| nc | 10% |
| echo | 10% |
| dd | 10% |
| rsync | 5% |
| ping | 5% |
| cat | 5% |
| bc | 5% |
| cd | 5% |



## After

__The commands after `wait`:__ Pipe the result of `wait` to the given command.

| Command | Percentage | 
|-------|--------|
| chmod | 13% |
| w | 13% |
| ss | 13% |
| name | 13% |
| date | 13% |
| less | 6% |
| echo | 6% |
| sed | 6% |
| sort | 6% |
| grep | 6% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `w` to `wait`

- Automatically sync current git project with remote host while editing
- Ping sweep without NMAP
- iso to USB with dd and show progress status

            
### Pipe `sleep` to `wait`

- Ping sweep without NMAP
- pretend to be busy in office to enjoy a cup of coffee
- 'hpc' in the box - starts a maximum of n compute commands modulo n controlled in parallel

            
### Pipe `ls` to `wait`

- Automatically sync current git project with remote host while editing
- download a list of urls

            
### Pipe `nc` to `wait`

- Automatically sync current git project with remote host while editing
- This command uses dd, pv, and dialog command to display an updated progress bar while using the dd command. This is useful to see the status of a dd in progress when creating very large dumps or coping hard disk devices using dd command.

            
### Pipe `echo` to `wait`

- pretend to be busy in office to enjoy a cup of coffee
- 'hpc' in the box - starts a maximum of n compute commands modulo n controlled in parallel

            
### Pipe `dd` to `wait`

- This command uses dd, pv, and dialog command to display an updated progress bar while using the dd command. This is useful to see the status of a dd in progress when creating very large dumps or coping hard disk devices using dd command.
- iso to USB with dd and show progress status

            
### Pipe `rsync` to `wait`

- Automatically sync current git project with remote host while editing

            
### Pipe `ping` to `wait`

- Ping sweep without NMAP

            
### Pipe `cat` to `wait`

- download a list of urls

            
### Pipe `bc` to `wait`

- 'hpc' in the box - starts a maximum of n compute commands modulo n controlled in parallel

            
### Pipe `cd` to `wait`

- iso to USB with dd and show progress status

            


### Pipe `wait` to `chmod`

- Trigger a command each time a file is created in a directory (inotify)
- Immediately put execute permission on any file saved/created in $HOME/bin

            
### Pipe `wait` to `w`

- Trigger a command each time a file is created in a directory (inotify)
- Immediately put execute permission on any file saved/created in $HOME/bin

            
### Pipe `wait` to `ss`

- find examples of multiline idioms in Linux drivers source code
- Block all brute force attacks in realtime (IPv4/SSH)

            
### Pipe `wait` to `name`

- Send an email from the terminal when job finishes
- Send an email from the terminal when job finishes

            
### Pipe `wait` to `date`

- Send an email from the terminal when job finishes
- Send an email from the terminal when job finishes

            
### Pipe `wait` to `less`

- find examples of multiline idioms in Linux drivers source code

            
### Pipe `wait` to `echo`

- Immediately put execute permission on any file saved/created in $HOME/bin

            
### Pipe `wait` to `sed`

- Check host port access using only Bash:

            
### Pipe `wait` to `sort`

- SAR - List top CPU usage spikes over the last month using sar.

            
### Pipe `wait` to `grep`

- Block all brute force attacks in realtime (IPv4/SSH)

            
