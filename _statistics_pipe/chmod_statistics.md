---
layout: manual
title:  "chmod - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `chmod`:__ Pipe the result of the given command to `chmod`.

| Command | percentage |
|--------|--------|
| find | 17% |
| cat | 12% |
| w | 12% |
| ss | 10% |
| ssh | 8% |
| id | 7% |
| echo | 7% |
| wait | 3% |
| ip | 3% |
| grep | 1% |
| exec | 1% |
| touch | 1% |
| rm | 1% |
| name | 1% |
| ls | 1% |
| sed | 1% |
| dd | 1% |
| host | 1% |
| awk | 1% |



## After

__The commands after `chmod`:__ Pipe the result of `chmod` to the given command.

| Command | Percentage | 
|-------|--------|
| w | 18% |
| sed | 18% |
| mkdir | 18% |
| rm | 9% |
| echo | 9% |
| awk | 9% |
| ss | 9% |
| xargs | 9% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `find` to `chmod`

- Recursive chmod all files and directories within the current directory
- Recursively change permissions on directories, leave files alone.
- Recursively change permissions on files, leave directories alone.
- Change permission for all directories inside the current one
- Change permissions for all files in the current directory
- Recursive chmod all files and directories within the current directory
- Change permissions on a large number of directories quickly
- exec chmod to subfiles
- Remove executable bit from all files in the current directory recursively, excluding other directories
- chmod only files

            
### Pipe `cat` to `chmod`

- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id
- Copy ssh keys to user@host to enable password-less ssh logins with permissions alignment.
- Create Bash script to change modification time of files
- having root on server, add user's public key to his keys (no password required)
- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id
- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id
- IBM AIX: Calculate the SHA256 hashes of a directory without sha256sum

            
### Pipe `w` to `chmod`

- Recursively change permissions on directories, leave files alone.
- Recursively change permissions on files, leave directories alone.
- Create a listing of all possible permissions and their octal representation.
- Trigger a command each time a file is created in a directory (inotify)
- Immediately put execute permission on any file saved/created in $HOME/bin
- ls output with mode in octal
- Add executable bit to all shell scripts under current directory recursively.

            
### Pipe `ss` to `chmod`

- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id
- Copy ssh keys to user@host to enable password-less ssh logins with permissions alignment.
- having root on server, add user's public key to his keys (no password required)
- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id
- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id
- IBM AIX: Verify a sha256sum listing with openssl

            
### Pipe `ssh` to `chmod`

- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id
- Copy ssh keys to user@host to enable password-less ssh logins with permissions alignment.
- having root on server, add user's public key to his keys (no password required)
- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id
- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id

            
### Pipe `id` to `chmod`

- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id
- Copy ssh keys to user@host to enable password-less ssh logins with permissions alignment.
- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id
- Copy your ssh public key to a server from a machine that doesn't have ssh-copy-id

            
### Pipe `echo` to `chmod`

- Create Bash script to change modification time of files
- Encrypt and password-protect execution of any bash script, Version 2
- Encrypt and password-protect execution of any bash script
- IBM AIX: Calculate the SHA256 hashes of a directory without sha256sum

            
### Pipe `wait` to `chmod`

- Trigger a command each time a file is created in a directory (inotify)
- Immediately put execute permission on any file saved/created in $HOME/bin

            
### Pipe `ip` to `chmod`

- Create Bash script to change modification time of files
- Encrypt and password-protect execution of any bash script

            
### Pipe `grep` to `chmod`

- Set executable permissions only to executable files

            
### Pipe `exec` to `chmod`

- Set executable permissions only to executable files

            
### Pipe `touch` to `chmod`

- Create a listing of all possible permissions and their octal representation.

            
### Pipe `rm` to `chmod`

- Trigger a command each time a file is created in a directory (inotify)

            
### Pipe `name` to `chmod`

- Recursive chmod all files and directories within the current directory

            
### Pipe `ls` to `chmod`

- ls output with mode in octal

            
### Pipe `sed` to `chmod`

- Encrypt and password-protect execution of any bash script, Version 2

            
### Pipe `dd` to `chmod`

- Encrypt and password-protect execution of any bash script

            
### Pipe `host` to `chmod`

- having root on server, add user's public key to his keys (no password required)

            
### Pipe `awk` to `chmod`

- Add executable bit to all shell scripts under current directory recursively.

            


### Pipe `chmod` to `w`

- Create a listing of all possible permissions and their octal representation.
- vi a new file with execution mode

            
### Pipe `chmod` to `sed`

- Immediately put execute permission on any file saved/created in $HOME/bin
- ls output with mode in octal

            
### Pipe `chmod` to `mkdir`

- find php command backdoor
- find potentially malicious PHP commands used in backdoors and aliked scripts

            
### Pipe `chmod` to `rm`

- Create a listing of all possible permissions and their octal representation.

            
### Pipe `chmod` to `echo`

- Create a listing of all possible permissions and their octal representation.

            
### Pipe `chmod` to `awk`

- Create a listing of all possible permissions and their octal representation.

            
### Pipe `chmod` to `ss`

- Generate RSA private key and self-signed certificate

            
### Pipe `chmod` to `xargs`

- IBM AIX: Verify a sha256sum listing with openssl

            
