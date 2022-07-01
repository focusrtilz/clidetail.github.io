---
layout: manual
title:  "lsof - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `lsof`:__ Pipe the result of the given command to `lsof`.

| Command | percentage |
|--------|--------|
| ls | 42% |
| lsof | 42% |
| grep | 14% |



## After

__The commands after `lsof`:__ Pipe the result of `lsof` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 40% |
| w | 23% |
| awk | 19% |
| su | 3% |
| ls | 2% |
| lsof | 2% |
| ps | 1% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `ls` to `lsof`

- View internet connection activity in a browser
- View internet connection activity in a browser
- View internet connection activity in a browser

            
### Pipe `lsof` to `lsof`

- View internet connection activity in a browser
- View internet connection activity in a browser
- View internet connection activity in a browser

            
### Pipe `grep` to `lsof`

- Display any tcp connections to apache

            


### Pipe `lsof` to `grep`

- Print all open regular files sorted by the number of file handles open to each.
- Print all open regular files sorted by the number of file handles open to each.
- Show established network connections
- Find out which process uses an old lib and needs a restart after a system update
- restore the contents of a deleted file for which a descriptor is still available
- View any already in progress copy command in detail
- Look for the process bound to a certain port
- Show whats going on restoring files from a spectrum protect backup
- Show the command line of a process that use a specific port (ubuntu)
- what?s running on a given port on your machine?
- check open ports
- List .log files open by a pid
- Display any udp/tcp connections by process name or by process id
- truncate deleted files from lsof
- View all file descriptors owned by a process
- dynamically list open files for a given process name
- find listening ports by pid
- The program listening on port 8080 through IPv6
- Keep track of diff progress
- Display any tcp connections to apache
- list processes with established tcp connections (without netstat)
- check open ports (both ipv4 and ipv6)
- Autocomplete directories (CWDs) of other ZSH processes (MacOS version)
- Find size in kilobyte of files that are deleted but still in use and therefore consumes diskspace
- Show a listing of open mailbox files (or whatever you want to modify it to show)
- Wich program is listen on port OSX
- Copies currently played song in Audacious to selected directory
- find the process that is using a certain port e.g. port 3000
- Show the processes that use old libs and need a restart
- Find out which process uses an old lib and needs a restart after a system update
- List pr. command in megabytes sum of deleted files that are still in use and therefore consumes diskspace
- Shows what processes need to be restarted after system upgrade
- lsof - cleaned up for just open listening ports, the process, and the owner of the process
- List processes playing sound
- which process is accessing the CDROM
- List all open ports and their owning executables
- find established tcp connections without using netstat!!
- What addresses are your applications talking to?
- check open ports (both ipv4 and ipv6)
- Keep a copy of the raw Youtube FLV,MP4,etc stored in /tmp/
- This will kill all ssh connections from a given host it does give some errors but it does work
- list current   processes  writing to hard drive
- List ReverseSSH ports
- find all open files by named process
- find the delete file ,which is in use
- List all the files that have been deleted while they were still open.
- kill all processes using a directory/file/etc
- identify active network connections
- Grabs Open Files and Then Greps Them

            
### Pipe `lsof` to `w`

- Print all open regular files sorted by the number of file handles open to each.
- show all established tcp connections on os x
- display 10 biggest open files
- see whats getting written into all of the open logfiles under /var/log
- To see which software currently open in directory /var/cache
- truncate deleted files from lsof
- Check how far along (in %) your program is in a file
- Check how far along (in %) your program is in a file
- Check which files are opened by Firefox then sort by largest size.
- Show top running processes by the number of open filehandles they have
- Show top of programms which are open file descriptors now, sorted by count DESC, grouped by process name and pid
- Show apps that use internet connection at the moment.
- Check which files are opened by Firefox then sort by largest size.
- To find the count of each open file on a system (that supports losf)
- give me back my sound card
- Monitor incoming connections of proxies and balancers.
- Autocomplete directories (CWDs) of other ZSH processes (MacOS version)
- List all active access_logs for currently running Apache or Lighttpd process
- Top 15 processes with the largest number of open files
- lsof - cleaned up for just open listening ports, the process, and the owner of the process
- list current   processes  writing to hard drive
- find out which directories in /home have the most files currently open
- find all open files by named process
- pid list by httpd listen port
- Total space used by open but deleted files
- Display IP addresses Pidgin IM Client is connected to
- View open file descriptors for a process.
- Find wich ports you probably want to open in your firewall on a fresh installed machine

            
### Pipe `lsof` to `awk`

- show all established tcp connections on os x
- display 10 biggest open files
- see whats getting written into all of the open logfiles under /var/log
- To see which software currently open in directory /var/cache
- truncate deleted files from lsof
- Check how far along (in %) your program is in a file
- Check how far along (in %) your program is in a file
- Check which files are opened by Firefox then sort by largest size.
- Show top running processes by the number of open filehandles they have
- Show top of programms which are open file descriptors now, sorted by count DESC, grouped by process name and pid
- Show apps that use internet connection at the moment.
- Check which files are opened by Firefox then sort by largest size.
- To find the count of each open file on a system (that supports losf)
- give me back my sound card
- Monitor incoming connections of proxies and balancers.
- List all active access_logs for currently running Apache or Lighttpd process
- Top 15 processes with the largest number of open files
- lsof - cleaned up for just open listening ports, the process, and the owner of the process
- find out which directories in /home have the most files currently open
- pid list by httpd listen port
- Total space used by open but deleted files
- Display IP addresses Pidgin IM Client is connected to
- Find wich ports you probably want to open in your firewall on a fresh installed machine

            
### Pipe `lsof` to `su`

- Check how far along (in %) your program is in a file
- List all active access_logs for currently running Apache or Lighttpd process
- find out which directories in /home have the most files currently open
- Total space used by open but deleted files

            
### Pipe `lsof` to `ls`

- View internet connection activity in a browser
- View internet connection activity in a browser
- View internet connection activity in a browser

            
### Pipe `lsof` to `lsof`

- View internet connection activity in a browser
- View internet connection activity in a browser
- View internet connection activity in a browser

            
### Pipe `lsof` to `ps`

- dynamically list open files for a given process name
- pid list by httpd listen port

            
### Pipe `lsof` to `tail`

- see whats getting written into all of the open logfiles under /var/log

            
### Pipe `lsof` to `sed`

- Shows users and 'virtual users' on your a unix-type system

            
### Pipe `lsof` to `cd`

- which process is accessing the CDROM

            
### Pipe `lsof` to `dig`

- list current   processes  writing to hard drive

            
### Pipe `lsof` to `ssh`

- List ReverseSSH ports

            
### Pipe `lsof` to `ss`

- List ReverseSSH ports

            
### Pipe `lsof` to `mount`

- kill all processes using a directory/file/etc

            
### Pipe `lsof` to `wc`

- View open file descriptors for a process.

            
