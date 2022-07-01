---
layout: manual
title:  "kill - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `kill`:__ Pipe the result of the given command to `kill`.

| Command | percentage |
|--------|--------|
| w | 30% |
| awk | 26% |
| grep | 16% |
| ss | 3% |
| cat | 2% |
| name | 2% |
| mysql | 1% |
| id | 1% |
| sudo | 1% |
| su | 1% |
| ps | 1% |
| wc | 1% |



## After

__The commands after `kill`:__ Pipe the result of `kill` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 41% |
| w | 13% |
| awk | 8% |
| echo | 5% |
| ss | 5% |
| sed | 5% |
| cat | 2% |
| kill | 2% |
| wc | 2% |
| rm | 2% |
| ps | 2% |
| exit | 2% |
| diff | 2% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `w` to `kill`

- Kill any process with one command using program name
- Kill any lingering ssh processes
- search for and kill a process in one blow
- Kill a bunch of processes with the same name
- Command to logout all the users in one command
- kill all process that belongs to you
- Kill all salt running processes
- Kill processes associated with PATTERN
- Kill all Zombie processes one-liner
- Command to logout all the users in one command
- Kill all processes belonging to a user
- This is a nice way to kill processes.. the example below is for firefox!!! substitute firefox for whatever the process name is...
- Reload gnome-panel
- kill all instances of an annoying or endless, thread-spawning process
- kill all pids from $PID
- find and kill a pid for APP
- Kill processes hogging up CPU (Flash after resume)
- give me back my sound card
- Kill all processes that listen to ports begin with 50 (50, 50x, 50xxx,...)
- Find a process by name and automatically kill it
- kill an arbitrary process running on an Android device attached via USB debug cable
- kills all processes for a certain program e.g. httpd
- Kill all processes belonging to a user
- Kill a lot of process once a time
- Kill process by searching something from 'ps' command
- Killing multiplpe process for one program like apache, wget, postfix etc.
- Killing multiplpe process for one program like apache, wget, postfix etc.
- kill all instances of an annoying or endless, thread-spawning process
- Kill all Zombie processes one-liner
- kill all foo process
- kill all running instances of wine and programs runned by it (exe)
- Kill all processes matching a given name
- This will kill all ssh connections from a given host it does give some errors but it does work
- all out
- kill all processes using a directory/file/etc
- Kill all processes belonging to a user
- avoid ssh hangs using jobs
- avoid ssh hangs using jobs
- Kill a process with its name

            
### Pipe `awk` to `kill`

- Kill any process with one command using program name
- Kill any lingering ssh processes
- search for and kill a process in one blow
- Kill a bunch of processes with the same name
- Command to logout all the users in one command
- kill all process that belongs to you
- Kill all salt running processes
- Kill processes associated with PATTERN
- Kill all Zombie processes one-liner
- This is a nice way to kill processes.. the example below is for firefox!!! substitute firefox for whatever the process name is...
- Reload gnome-panel
- kill all instances of an annoying or endless, thread-spawning process
- kill all pids from $PID
- find and kill a pid for APP
- Kill processes hogging up CPU (Flash after resume)
- give me back my sound card
- Kill all processes that listen to ports begin with 50 (50, 50x, 50xxx,...)
- Find a process by name and automatically kill it
- kill an arbitrary process running on an Android device attached via USB debug cable
- kills all processes for a certain program e.g. httpd
- Kill all processes belonging to a user
- Kill a lot of process once a time
- Kill process by searching something from 'ps' command
- Killing multiplpe process for one program like apache, wget, postfix etc.
- Killing multiplpe process for one program like apache, wget, postfix etc.
- kill all instances of an annoying or endless, thread-spawning process
- Kill all Zombie processes one-liner
- kill all foo process
- kill all running instances of wine and programs runned by it (exe)
- Kill all processes matching a given name
- This will kill all ssh connections from a given host it does give some errors but it does work
- all out
- kill all processes using a directory/file/etc
- Kill all processes belonging to a user
- Kill a process with its name

            
### Pipe `grep` to `kill`

- Command to logout all the users in one command
- kill all process that belongs to you
- Auto-kill auto-spawned process
- kill defunct processes by killing their parents
- Look for process by filename in command then kill the process
- Kill multiple instances of a running process
- Command to logout all the users in one command
- ps -ef | grep PROCESS | grep -v grep | awk '{system "kill -9" $2}
- find and kill a pid for APP
- kill all running instances of wine and programs runned by it (exe)
- Command to kill PID
- Command to kill PID
- Kill all processes found in grep
- Kill process you don't know the PID of, when pidof and pgrep are not available.
- Kill multiple Locked connection by a single user in MYSQL DB
- Kill any lingering ssh processes
- Pause and Resume Processes
- find all processes named hunger and force kill, minus the grep itself and output to a file called fu.bar
- kills all php5-fcgi processes for user per name
- Find a process by name and automatically kill it
- kill  some process (same as others) but  parsing to a variable
- Kill all background jobs

            
### Pipe `ss` to `kill`

- Kill all threads from a MySQL user
- Look for process by filename in command then kill the process
- Kill multiple instances of a running process
- kill  some process (same as others) but  parsing to a variable

            
### Pipe `cat` to `kill`

- kill all process that belongs to you
- create disk copy over the net without temp files
- Command to kill PID

            
### Pipe `name` to `kill`

- Kill processes that have been running for more than a week
- Import SQL into MySQL with a progress meter
- kills all php5-fcgi processes for user per name

            
### Pipe `mysql` to `kill`

- Kill all threads from a MySQL user
- Import SQL into MySQL with a progress meter

            
### Pipe `id` to `kill`

- Kill all threads from a MySQL user
- all out

            
### Pipe `sudo` to `kill`

- Command to logout all the users in one command
- Kill all processes that listen to ports begin with 50 (50, 50x, 50xxx,...)

            
### Pipe `su` to `kill`

- Command to logout all the users in one command
- Kill all processes that listen to ports begin with 50 (50, 50x, 50xxx,...)

            
### Pipe `ps` to `kill`

- Kill all processes belonging to a user
- alias  ps | grep

            
### Pipe `wc` to `kill`

- avoid ssh hangs using jobs
- avoid ssh hangs using jobs

            
### Pipe `rm` to `kill`

- Kill all threads from a MySQL user

            
### Pipe `kill` to `kill`

- kill all process that belongs to you

            
### Pipe `diff` to `kill`

- Auto-kill auto-spawned process

            
### Pipe `find` to `kill`

- Kill processes that have been running for more than a week

            
### Pipe `exec` to `kill`

- Kill processes that have been running for more than a week

            
### Pipe `tar` to `kill`

- create disk copy over the net without temp files

            
### Pipe `ip` to `kill`

- create disk copy over the net without temp files

            
### Pipe `exit` to `kill`

- Kill processes hogging up CPU (Flash after resume)

            
### Pipe `netstat` to `kill`

- Kill all processes that listen to ports begin with 50 (50, 50x, 50xxx,...)

            
### Pipe `ln` to `kill`

- Kill all processes that listen to ports begin with 50 (50, 50x, 50xxx,...)

            
### Pipe `nc` to `kill`

- Create a single-use TCP proxy with copy to stdout

            
### Pipe `alias` to `kill`

- alias  ps | grep

            


### Pipe `kill` to `grep`

- Kill any process with one command using program name
- find and kill a zombie process
- Auto-kill auto-spawned process
- Kill a daemon by name, not by PID
- UNIX one-liner to kill a hanging Firefox process
- Kill XMMS for a cron job
- kill all running instances of wine and programs runned by it (exe)
- Kill google chrome process
- kill some pids without specific pid
- Deletes cpu time consuming plugin-containe triggered by firefox
- Force kill all named processes
- Kill the X Server
- kill  some process (same as others) but  parsing to a variable
- Kill all Zombie processes (Guaranteed!)
- Kill all Zombie processes if they accept it!

            
### Pipe `kill` to `w`

- kill all process that belongs to you
- kill all process that belongs to you
- A signal trap that logs when your script was killed and what other processes were running at that time
- Command to kill PID
- Kill the process *group* containing a process named svscan (djb's daemontools)

            
### Pipe `kill` to `awk`

- kill all process that belongs to you
- Command to kill PID
- Kill the process *group* containing a process named svscan (djb's daemontools)

            
### Pipe `kill` to `echo`

- kill all process that belongs to you
- A signal trap that logs when your script was killed and what other processes were running at that time

            
### Pipe `kill` to `ss`

- A signal trap that logs when your script was killed and what other processes were running at that time
- kill  some process (same as others) but  parsing to a variable

            
### Pipe `kill` to `sed`

- Check host port access using only Bash:
- Kill all Zombie processes if they accept it!

            
### Pipe `kill` to `cat`

- kill all process that belongs to you

            
### Pipe `kill` to `kill`

- kill all process that belongs to you

            
### Pipe `kill` to `wc`

- kill all process that belongs to you

            
### Pipe `kill` to `rm`

- A signal trap that logs when your script was killed and what other processes were running at that time

            
### Pipe `kill` to `ps`

- A signal trap that logs when your script was killed and what other processes were running at that time

            
### Pipe `kill` to `exit`

- A signal trap that logs when your script was killed and what other processes were running at that time

            
### Pipe `kill` to `diff`

- Auto-kill auto-spawned process

            
