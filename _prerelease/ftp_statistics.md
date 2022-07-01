---
layout: manual
title:  "ftp - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `ftp`:__ Pipe the result of the given command to `ftp`.

| Command | percentage |
|--------|--------|
| echo | 17% |
| awk | 11% |
| w | 11% |
| cat | 11% |
| zip | 5% |
| gzip | 5% |
| ip | 5% |
| grep | 5% |
| ssh | 5% |
| ss | 5% |
| host | 5% |
| xargs | 5% |



## After

__The commands after `ftp`:__ Pipe the result of `ftp` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 31% |
| ss | 18% |
| sed | 12% |
| ln | 6% |
| echo | 6% |
| tail | 6% |
| wget | 6% |
| xargs | 6% |
| w | 6% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `echo` to `ftp`

- Download certificate from FTP
- Get the latest ftp file from ftp server on local machine with lftp and bash. (Piped commands inside lftp).
- Download certificate chain from FTP

            
### Pipe `awk` to `ftp`

- Match a URL
- Faciliate the work for lftp ('all' is needed if you wanna use it with getopts, otherwise its enough with the lftp line)

            
### Pipe `w` to `ftp`

- Match a URL
- Faciliate the work for lftp ('all' is needed if you wanna use it with getopts, otherwise its enough with the lftp line)

            
### Pipe `cat` to `ftp`

- Netcat ftp brute force
- SFTP upload through HTTPS proxy

            
### Pipe `zip` to `ftp`

- Backup sda5 partition to ftp ( using pipes and gziped backup )

            
### Pipe `gzip` to `ftp`

- Backup sda5 partition to ftp ( using pipes and gziped backup )

            
### Pipe `ip` to `ftp`

- Backup sda5 partition to ftp ( using pipes and gziped backup )

            
### Pipe `grep` to `ftp`

- ssh autocomplete based on ~/.ssh/config

            
### Pipe `ssh` to `ftp`

- ssh autocomplete based on ~/.ssh/config

            
### Pipe `ss` to `ftp`

- ssh autocomplete based on ~/.ssh/config

            
### Pipe `host` to `ftp`

- ssh autocomplete based on ~/.ssh/config

            
### Pipe `xargs` to `ftp`

- Get the latest ftp file from ftp server on local machine with lftp and bash. (Piped commands inside lftp).

            


### Pipe `ftp` to `grep`

- get the latest version
- Capture all plaintext passwords
- Netcat ftp brute force
- Find dupe files by checking md5sum
- Plaintext credentials sniffing with tcpdump and grep

            
### Pipe `ftp` to `ss`

- Capture all plaintext passwords
- Netcat ftp brute force
- Plaintext credentials sniffing with tcpdump and grep

            
### Pipe `ftp` to `sed`

- Download certificate from FTP
- Download certificate chain from FTP

            
### Pipe `ftp` to `ln`

- Testing ftp server status

            
### Pipe `ftp` to `echo`

- Netcat ftp brute force

            
### Pipe `ftp` to `tail`

- Get the latest ftp file from ftp server on local machine with lftp and bash. (Piped commands inside lftp).

            
### Pipe `ftp` to `wget`

- download a sequence of vim patch

            
### Pipe `ftp` to `xargs`

- download a sequence of vim patch

            
### Pipe `ftp` to `w`

- download a sequence of vim patch

            
