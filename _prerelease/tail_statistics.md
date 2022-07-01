---
layout: manual
title:  "tail - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `tail`:__ Pipe the result of the given command to `tail`.

| Command | percentage |
|--------|--------|
| sort | 15% |
| w | 11% |
| ls | 8% |
| grep | 6% |
| head | 6% |
| ss | 3% |
| sed | 2% |
| echo | 2% |
| name | 2% |
| ps | 2% |
| awk | 2% |
| find | 1% |
| du | 1% |
| cp | 1% |
| history | 1% |
| nc | 1% |
| wc | 1% |
| cat | 1% |
| tail | 1% |
| xargs | 1% |
| cal | 1% |
| df | 1% |



## After

__The commands after `tail`:__ Pipe the result of `tail` to the given command.

| Command | Percentage | 
|-------|--------|
| w | 23% |
| awk | 14% |
| grep | 11% |
| sed | 6% |
| xargs | 4% |
| echo | 3% |
| head | 3% |
| date | 2% |
| rm | 2% |
| ss | 2% |
| tail | 2% |
| cp | 1% |
| sudo | 1% |
| su | 1% |
| ln | 1% |
| ls | 1% |
| sort | 1% |
| cal | 1% |
| id | 1% |
| nc | 1% |
| ps | 1% |
| comm | 1% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `sort` to `tail`

- Find all IP connected to my host through TCP connection and count it
- List top 20 IP from which TCP connection is in SYN_RECV state
- Server load and process monitoring
- sort lines by length
- check squid logs for time value greater than 9000ms
- A function to find the newest file in a directory
- Quickly analyze apache logs for top 25 most common IP addresses.
- display 10 biggest open files
- Top ten (or whatever) memory utilizing processes (with children aggregate) - Can be done without the multi-dimensional array
- Top ten (or whatever) memory utilizing processes (with children aggregate)
- sort lines by length
- Find directory depth
- Show the 20 most CPU/Memory hungry processes
- List 10 largest directories in current directory
- Analyse an Apache access log for the most common IP addresses
- find dis1k space
- find the 10 largest directories
- Change wallpaper random
- See n most used commands in your bash history
- get date time of foler/file created  with du -csh
- 10 files backup rotate in crontab
- List your largest installed packages (on Debian/Ubuntu)
- Updated top ten memory utilizing processes (child/instance aggregation) now with percentages of total RAM
- easily find megabyte eating files or directories
- Analyse compressed Apache access logs for the most commonly requested pages
- Find the 10 users that take up the most disk space
- Show the single most recently modified file in a directory
- Remove all older kernels then the current running kernel for Ubuntu/Debian base system
- find directory with most inodes/files
- Find the largest C/C++ source files in all subdirectories
- Get top 10 largest directories under cwd
- displays working directories 10 largest files in bytes and quickly
- FInd the 10 biggest files taking up disk space
- FInd the 10 biggest files taking up disk space
- FInd the 10 biggest files taking up disk space
- Get top N files in X directory
- Copy the most recent wav file from /media/ to the current folder
- histogram of file size
- Find and display most recent files using find and perl
- Get the file name having biggest size in directory.
- Get the 10 biggest files/folders for the current direcotry
- Recursively find disk usage, sort, and make human readable (for systems without human-readable sort command)
- Print the 10 deepest directory paths
- Display top Keywords from history
- make sure you don't add large file to your repository
- Which files/dirs waste my disk space
- Which files/dirs waste my disk space
- Netstat Connection Check
- Find the source file which contains most number of lines in your workspace
- Quickly analyse an Apache error log
- Thread count by process, sorted + total
- Hunt for the newest file.
- List SMTP connections by host
- Find the 20 biggest directories on the current filesystem
- Display the top ten running processes - sorted by memory usage
- Ranking of the most frequently used commands
- Ranking of the most frequently used commands
- Find the top 10 directories containing the highest number of files
- find all minimum values in file with at least 100 lines

            
### Pipe `w` to `tail`

- Output system statistics every 5 seconds with timestamp
- Get IP address from domain
- compute the total disk space consumed by a list of files
- Server load and process monitoring
- sort lines by length
- Check the total memory usage of processes with a specific name
- Display CPU usage in percentage
- ps to show child thread PIDs
- Watch how many tcp connections there are per state every two seconds.
- Poll and print end of lates modified file
- sort lines by length
- Grep with one result at a time
- Pick a random line from a file
- What is my public IP address
- csv file of ping every minutes
- AIX: get LUN ID for a given filesystem
- Counting the source code's line numbers C/C++ Java
- Show apps that use internet connection at the moment.
- Get your external IP address
- Make a statistic about the lines of code
- Expand shortened URLs
- Get the state (HTTP code) of a resource from its URL
- Watch for blocked NGINX processes for tuning purposes
- Order all files oldest to newest then get the last one touched
- Terrorist threat level text
- Watch and cat the last file to enter a directory
- add random color and external ip address to prompt (PS1)
- easily find megabyte eating files or directories
- Determines latest pdf file downloaded by firefox in ~/Downloads directory
- Print dmesg periodically
- Find and display most recent files using find and perl
- Block all brute force attacks in realtime (IPv4/SSH)
- Find how much of your life you've wasted coding in the current directory
- Create an animated gif from a Youtube video
- Do one ping to a URL,  I use this in a MRTG gauge graph to monitor connectivity
- Get table column names from an MySQL-database in comma-seperated form
- Monitor the Kernel Ring Buffer
- Monitor dynamic changes in the dmesg log.
- Thread count by process, sorted + total
- Get a BOFH excuse
- View latest apache access log
- Generate random sensible passwords, and copy them to the clipboard

            
### Pipe `ls` to `tail`

- Keep the last 10 moodle backups
- Get the 10 biggest files/folders for the current direcotry
- Install 4 new package files
- Quickly analyze apache logs for top 25 most common IP addresses.
- count & sort one field of the log files
- Poll and print end of lates modified file
- see whats getting written into all of the open logfiles under /var/log
- scan multiple log subdirectories for the latest log files and tail them
- Follow the most recently updated log files
- get the oldest file in a directory
- AIX: get LUN ID for a given filesystem
- do anything with the last created (touched, accessed) file in the current dir
- Find latest file in a directory
- Short Information about loaded kernel modules
- Show seconds since modified of newest modified file in directory
- Show seconds since modified of newest modified file in directory
- List directory sorted by last modified date. Tail of it.
- Show the single most recently modified file in a directory
- Open the last modified file of a certain type
- When was your OS installed?
- Watch and cat the last file to enter a directory
- find the longest command in your history
- Determines latest pdf file downloaded by firefox in ~/Downloads directory
- Find top 5 big files
- Get the latest ftp file from ftp server on local machine with lftp and bash. (Piped commands inside lftp).
- get newest jpg picture in a folder
- Delete all folders except the 10 latest ones AND specific excluded ones
- How to backup hard disk timely?
- When was your OS installed?
- Create an animated gif from a Youtube video
- Delete all but the latest 5 files
- Backup to LTO Tape with progress, checksums and buffering
- Listen to a song from youtube with youtube-dl and mpv
- View latest apache access log

            
### Pipe `grep` to `tail`

- get you public ip address
- Decrypt MD5
- Encrypt text to md5
- Download last file from index of
- Easy way to scroll up und down to change to one of <i>n</i> last visited directories.
- Give {Open,True}Type files reasonable names
- adb connect to last IP address
- get the latest version
- Play 89.3 @TheCurrent and get system notifications on song changes.
- Hunt for the newest file.
- Get the IP address
- nmap scan hosts for IP, MAC Address and device Vendor/Manufacturer
- Get the date for the last Saturday of a given month
- Given a file path, unplug the USB device on which the file is located (the file must be on an USB device !)
- Monitor logs in Linux using Tail
- edit, view or execute last modified file with a single key-press
- random git-commit message
- Resolution of a image
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- Block all brute force attacks in realtime (IPv4/SSH)
- Open browser from terminal to create PR after pushing something in Git in MAC
- Go to the next sibling directory in alphabetical order, version 2
- Find the package that installed a command

            
### Pipe `head` to `tail`

- Displays All TCP and UDP Connections
- Displays All TCP and UDP Connections
- get line#1000 from text.
- Mount a partition from within a complete disk dump
- print random commandlinefu.com submission
- Fetch current song from last.fm
- Pick a random line from a file
- Go to the Nth line of file
- Get Futurama quotations from slashdot.org servers
- Extract specific lines from a text file using Stream Editor (sed)
- Jump to a song in your XMMS2 playlist, based on song title/artist
- Print Memory Utilization Percentage For a specific process and it's children
- Get the state (HTTP code) of a resource from its URL
- Tail the most recently modified file
- Print failed units in systemd
- Find artist and title of a music cd, UPC code given (first result only)
- Find artist and title of a music cd, UPC code given (first result only)
- to perform operation line by line in a file without using sed or awk
- Get the amount of users currently registered at the DudaLibre.com Linux Counter.
- Get current stable kernel version string from kernel.org
- Print all the lines between 10 and 20 of a file
- Print just line 4 from a textfile
- Grab the top 5 CLFUContest one-liners
- display memory usage of a process

            
### Pipe `ss` to `tail`

- get you public ip address
- Server load and process monitoring
- Do a quick check on the harware specifications on a set of Linux (RedHat) boxes
- Stores the certificate expiration date on the variable A
- Show some details of recent Leopard Time Machine activity - shell: bash, Mac OSX 10.5
- pipe remote log web server file to lostalgia
- How much RAM is Apache using?
- Reports file systems with disk usage exceeding 90% on the specified host
- Block all brute force attacks in realtime (IPv4/SSH)
- Get table column names from an MySQL-database in comma-seperated form
- View latest apache access log
- Generate random sensible passwords, and copy them to the clipboard

            
### Pipe `sed` to `tail`

- tail all logs opened by all java processes
- Print machine's ipv4 addresses
- Execute the last line of output from the previous command
- get Hong Kong weather infomation from HK Observatory
- Generate background office noise using Digg feeds and OSX.
- Get newest Nmap source code tarball URL.
- change dir to n-th dir that you listed
- Get the ip registered to a domain on OpenWRT
- List last opened tabs in firefox browser
- find all minimum values in file with at least 100 lines

            
### Pipe `echo` to `tail`

- Output system statistics every 5 seconds with timestamp
- compute the total disk space consumed by a list of files
- Check the total memory usage of processes with a specific name
- Grep with one result at a time
- scan multiple log subdirectories for the latest log files and tail them
- Terrorist threat level text
- Listen to a song from youtube with youtube-dl and mpv
- Add an "alert" alias for long running commands

            
### Pipe `name` to `tail`

- Find files and calculate size of result in shell
- Do a quick check on the harware specifications on a set of Linux (RedHat) boxes
- Get the name or user running the process of specified PID
- Unpack magnatune flac album and move artwork into album dir
- Delete all folders except the 10 latest ones AND specific excluded ones
- Go to the next sibling directory in alphabetical order, version 2
- Backup to LTO Tape with progress, checksums and buffering
- Print all the lines between 10 and 20 of a file

            
### Pipe `ps` to `tail`

- cpu and memory usage top 10 under Linux
- cpu and memory usage top 10 under Linux
- Server load and process monitoring
- Get the name or user running the process of specified PID
- How much RAM is Apache using?
- Show seconds since modified of newest modified file in directory
- Get notified when a job you run in a terminal is done, using NotifyOSD
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- Get newest Nmap source code tarball URL.
- grc tail -f
- Thread count by process, sorted + total

            
### Pipe `awk` to `tail`

- Display CPU usage in percentage
- ps to show child thread PIDs
- AIX: get LUN ID for a given filesystem
- Show apps that use internet connection at the moment.
- Expand shortened URLs
- Watch for blocked NGINX processes for tuning purposes
- Order all files oldest to newest then get the last one touched
- add random color and external ip address to prompt (PS1)
- easily find megabyte eating files or directories
- Block all brute force attacks in realtime (IPv4/SSH)

            
### Pipe `find` to `tail`

- Find files and calculate size of result in shell
- follow the content of all files in a directory
- View all new log messages in real time with color
- Delete all folders except the 10 latest ones AND specific excluded ones
- View all new log messages in real time with color

            
### Pipe `du` to `tail`

- Find files and calculate size of result in shell
- show how much diskspace all images in a given directory need
- get diskusage of files modified during the last n days
- Backup to LTO Tape with progress, checksums and buffering
- List your largest installed packages.

            
### Pipe `cp` to `tail`

- cpu and memory usage top 10 under Linux
- cpu and memory usage top 10 under Linux
- Do a quick check on the harware specifications on a set of Linux (RedHat) boxes
- get newest jpg picture in a folder
- List the CPU model name

            
### Pipe `history` to `tail`

- Create a bash script from last n commands
- Easy way to scroll up und down to change to one of <i>n</i> last visited directories.
- Easily find an old command you run
- Get notified when a job you run in a terminal is done, using NotifyOSD
- Easily find an old command you run
- Add an "alert" alias for long running commands

            
### Pipe `nc` to `tail`

- Encrypt text to md5
- Figure out your work output for the day
- Get your external IP address
- Reports file systems with disk usage exceeding 90% on the specified host
- How to backup hard disk timely?

            
### Pipe `wc` to `tail`

- Server load and process monitoring
- Grep with one result at a time
- Pick a random line from a file
- Counting the source code's line numbers C/C++ Java
- Make a statistic about the lines of code
- Find how much of your life you've wasted coding in the current directory

            
### Pipe `cat` to `tail`

- Do a quick check on the harware specifications on a set of Linux (RedHat) boxes
- Quickly analyze apache logs for top 25 most common IP addresses.
- Easily find an old command you run
- Expand shortened URLs
- removing those pesky malformed lines at the end of a text file..
- Watch and cat the last file to enter a directory
- grc tail -f

            
### Pipe `tail` to `tail`

- count & sort one field of the log files
- Poll and print end of lates modified file
- scan multiple log subdirectories for the latest log files and tail them
- pipe remote log web server file to lostalgia
- Follow the most recently updated log files
- tail from the last occurrence of a pattern to the end of the (log) file

            
### Pipe `xargs` to `tail`

- scan multiple log subdirectories for the latest log files and tail them
- get diskusage of files modified during the last n days
- Quickly add a new user to all groups the default user is in
- Counting the source code's line numbers C/C++ Java
- Make a statistic about the lines of code
- Find how much of your life you've wasted coding in the current directory

            
### Pipe `cal` to `tail`

- pipe remote log web server file to lostalgia
- find the longest command in your history
- Find and display most recent files using find and perl
- Reports file systems with disk usage exceeding 90% on the specified host

            
### Pipe `df` to `tail`

- Given a file path, unplug the USB device on which the file is located (the file must be on an USB device !)
- Determines latest pdf file downloaded by firefox in ~/Downloads directory
- Reports file systems with disk usage exceeding 90% on the specified host
- show system installation date

            
### Pipe `enable` to `tail`

- enable all bash completions in gentoo

            
### Pipe `dd` to `tail`

- get you public ip address
- Easy way to scroll up und down to change to one of <i>n</i> last visited directories.

            
### Pipe `vmstat` to `tail`

- Output system statistics every 5 seconds with timestamp

            
### Pipe `date` to `tail`

- Output system statistics every 5 seconds with timestamp
- Find out what the day ends in
- Stores the certificate expiration date on the variable A

            
### Pipe `nslookup` to `tail`

- Get IP address from domain

            
### Pipe `exec` to `tail`

- Find files and calculate size of result in shell
- Delete all folders except the 10 latest ones AND specific excluded ones

            
### Pipe `cd` to `tail`

- Keep the last 10 moodle backups
- Easy way to scroll up und down to change to one of <i>n</i> last visited directories.
- Get the latest ftp file from ftp server on local machine with lftp and bash. (Piped commands inside lftp).

            
### Pipe `sudo` to `tail`

- Install 4 new package files

            
### Pipe `su` to `tail`

- Install 4 new package files
- Display CPU usage in percentage

            
### Pipe `free` to `tail`

- Server load and process monitoring

            
### Pipe `ln` to `tail`

- sort lines by length
- Epoch from time protocol port 37
- Get a BOFH excuse

            
### Pipe `alias` to `tail`

- Easy way to scroll up und down to change to one of <i>n</i> last visited directories.
- zsh suffix to inform you about long command ending
- Get notified when a job you run in a terminal is done, using NotifyOSD

            
### Pipe `uname` to `tail`

- Do a quick check on the harware specifications on a set of Linux (RedHat) boxes

            
### Pipe `clear` to `tail`

- Do a quick check on the harware specifications on a set of Linux (RedHat) boxes
- Grep with one result at a time

            
### Pipe `ssh` to `tail`

- Do a quick check on the harware specifications on a set of Linux (RedHat) boxes
- pipe remote log web server file to lostalgia
- Reports file systems with disk usage exceeding 90% on the specified host

            
### Pipe `host` to `tail`

- Do a quick check on the harware specifications on a set of Linux (RedHat) boxes
- Block all brute force attacks in realtime (IPv4/SSH)

            
### Pipe `netstat` to `tail`

- Watch how many tcp connections there are per state every two seconds.

            
### Pipe `cmp` to `tail`

- sort lines by length

            
### Pipe `mount` to `tail`

- last mounted device

            
### Pipe `vi` to `tail`

- Show some details of recent Leopard Time Machine activity - shell: bash, Mac OSX 10.5
- Go to the Nth line of file
- View latest apache access log

            
### Pipe `lsof` to `tail`

- see whats getting written into all of the open logfiles under /var/log

            
### Pipe `id` to `tail`

- Get the name or user running the process of specified PID

            
### Pipe `service` to `tail`

- Go to the Nth line of file

            
### Pipe `wget` to `tail`

- What is my public IP address
- Terrorist threat level text

            
### Pipe `whatis` to `tail`

- What is my public IP address
- Get your external IP address

            
### Pipe `ip` to `tail`

- What is my public IP address
- Unpack magnatune flac album and move artwork into album dir
- Get your external IP address

            
### Pipe `ping` to `tail`

- csv file of ping every minutes
- Ping your gateway at home
- Do one ping to a URL,  I use this in a MRTG gauge graph to monitor connectivity

            
### Pipe `bc` to `tail`

- Read multiple lines of a file based on regex matching a single line
- Compile CoffeeScript on Mac clipboard to JavaScript and print it

            
### Pipe `traceroute` to `tail`

- Ping your gateway at home

            
### Pipe `zip` to `tail`

- Unpack magnatune flac album and move artwork into album dir

            
### Pipe `unzip` to `tail`

- Unpack magnatune flac album and move artwork into album dir

            
### Pipe `diff` to `tail`

- Figure out your work output for the day
- Diff with Sections/Headers

            
### Pipe `jobs` to `tail`

- zsh suffix to inform you about long command ending

            
### Pipe `jp` to `tail`

- mean color of an image
- get newest jpg picture in a folder

            
### Pipe `man` to `tail`

- Open the last modified file of a certain type
- Install the suggested package when command not found or installed

            
### Pipe `comm` to `tail`

- Open the last modified file of a certain type
- Install the suggested package when command not found or installed

            
### Pipe `curl` to `tail`

- Get the state (HTTP code) of a resource from its URL
- Generate random sensible passwords, and copy them to the clipboard

            
### Pipe `rm` to `tail`

- Get notified when a job you run in a terminal is done, using NotifyOSD
- Get first Git commit hash
- Get first Git commit hash

            
### Pipe `ftp` to `tail`

- Get the latest ftp file from ftp server on local machine with lftp and bash. (Piped commands inside lftp).

            
### Pipe `dmesg` to `tail`

- Print dmesg periodically
- Monitor the Kernel Ring Buffer
- Monitor dynamic changes in the dmesg log.

            
### Pipe `dig` to `tail`

- Resolution of a image

            
### Pipe `rsync` to `tail`

- How to backup hard disk timely?

            
### Pipe `password` to `tail`

- Get table column names from an MySQL-database in comma-seperated form
- Generate random sensible passwords, and copy them to the clipboard

            
### Pipe `mysql` to `tail`

- Get table column names from an MySQL-database in comma-seperated form

            
### Pipe `screen` to `tail`

- Screenshot a part of the screen, upload to S3 and copy URL to clipboard

            
### Pipe `rev` to `tail`

- Find the date of the first commit in a git repository
- Find the date of the first commit in a git repository

            


### Pipe `tail` to `w`

- enable all bash completions in gentoo
- Monitor a file with tail with timestamps added
- speak a chat log file while it's running
- Get the Nth argument of the last command in $HISTFILE
- Tail a log and replace according to a sed pattern
- cpu and memory usage top 10 under Linux
- cpu and memory usage top 10 under Linux
- Server load and process monitoring
- A function to find the newest file in a directory
- Quickly analyze apache logs for top 25 most common IP addresses.
- Print unique ipaddresses as they come in from Apache Access Log File
- tail -f a log file over ssh into growl
- count & sort one field of the log files
- Watch how many tcp connections there are per state every two seconds.
- Get only headers from a website with curl even if it doesn't support HEAD
- Realtime lines per second in a log file
- Unmuting master channel, printing only percent value, while suppressing other outputs
- Delete specific sender in mailq
- Count number of hits per IP address in last 2000 lines of apache logs and print the IP and hits if hits > 20
- Play 89.3 @TheCurrent and get system notifications on song changes.
- Analyse an Apache access log for the most common IP addresses
- Tail postfix current maillog and grep for "criteria"
- Get the IP address
- AIX: get LUN ID for a given filesystem
- Print Memory Utilization Percentage For a specific process and it's children
- show filenames in tail output with color
- Unpack magnatune flac album and move artwork into album dir
- Watch who requests what page from apache logs
- Monitor a file with tail with timestamps added
- Show seconds since modified of newest modified file in directory
- Show seconds since modified of newest modified file in directory
- Real time duplication of Apache app traffic to a second server
- mean color of an image
- Make a statistic about the lines of code
- Run a command for blocks of output of another command
- faster replace sting with dd
- Colorized tail using sed
- When was your OS installed?
- Remove all older kernels then the current running kernel for Ubuntu/Debian base system
- Pipe system log to espeak
- Given a file path, unplug the USB device on which the file is located (the file must be on an USB device !)
- Terrorist threat level text
- show each new entry in system messages as a popup
- Use Growl to monitor your local apache error logs for new messages
- Copy the most recent wav file from /media/ to the current folder
- tail, with specific pattern colored
- colored tail
- display emerge.log date in a human friendly way
- Get the file name having biggest size in directory.
- Annotate tail -f with timestamps
- Recursively find disk usage, sort, and make human readable (for systems without human-readable sort command)
- Get the ip registered to a domain on OpenWRT
- When was your OS installed?
- Open browser from terminal to create PR after pushing something in Git in MAC
- Monitor a file with tail with timestamps added
- Get table column names from an MySQL-database in comma-seperated form
- Get Chromecast opencast pincode
- Grep live log tailing
- Grep live log tailing, tracks file open/close
- Grep live log tailing
- Grep live log tailing
- a tail function for automatic smart output
- Live filter a log file using grep and show x# of lines above and below
- Find the date of the first commit in a git repository
- Find the date of the first commit in a git repository
- display memory usage of a process

            
### Pipe `tail` to `awk`

- enable all bash completions in gentoo
- speak a chat log file while it's running
- Get the Nth argument of the last command in $HISTFILE
- cpu and memory usage top 10 under Linux
- cpu and memory usage top 10 under Linux
- Server load and process monitoring
- A function to find the newest file in a directory
- Quickly analyze apache logs for top 25 most common IP addresses.
- Print unique ipaddresses as they come in from Apache Access Log File
- count & sort one field of the log files
- Watch how many tcp connections there are per state every two seconds.
- Get only headers from a website with curl even if it doesn't support HEAD
- Unmuting master channel, printing only percent value, while suppressing other outputs
- Delete specific sender in mailq
- Count number of hits per IP address in last 2000 lines of apache logs and print the IP and hits if hits > 20
- Analyse an Apache access log for the most common IP addresses
- Tail postfix current maillog and grep for "criteria"
- Get the IP address
- AIX: get LUN ID for a given filesystem
- Print Memory Utilization Percentage For a specific process and it's children
- Watch who requests what page from apache logs
- Monitor a file with tail with timestamps added
- Show seconds since modified of newest modified file in directory
- Show seconds since modified of newest modified file in directory
- Real time duplication of Apache app traffic to a second server
- mean color of an image
- Make a statistic about the lines of code
- When was your OS installed?
- Remove all older kernels then the current running kernel for Ubuntu/Debian base system
- Given a file path, unplug the USB device on which the file is located (the file must be on an USB device !)
- Terrorist threat level text
- Copy the most recent wav file from /media/ to the current folder
- display emerge.log date in a human friendly way
- Get the file name having biggest size in directory.
- Recursively find disk usage, sort, and make human readable (for systems without human-readable sort command)
- Get the ip registered to a domain on OpenWRT
- When was your OS installed?
- Open browser from terminal to create PR after pushing something in Git in MAC
- Get table column names from an MySQL-database in comma-seperated form
- display memory usage of a process

            
### Pipe `tail` to `grep`

- Find all IP connected to my host through TCP connection and count it
- Displays All TCP and UDP Connections
- Displays All TCP and UDP Connections
- Do a quick check on the harware specifications on a set of Linux (RedHat) boxes
- Tail -f: truncate and search
- Watch PHP log, without knowing it's location (gets from php.ini)
- Send murmurd log lines to syslog
- Ping your gateway at home
- show filenames in tail output with color
- compute the qps according to the latest n lines of logs
- Easily find an old command you run
- Filter the output of a file continously using tail and grep
- Filter the output of a file continously using tail and grep
- Not able to data in tee on using dual command like: tail and grep
- tail, with specific pattern colored
- tail, with specific pattern colored
- colored tail
- Easily find an old command you run
- Diff with Sections/Headers
- Block all brute force attacks in realtime (IPv4/SSH)
- SSH monitor
- monitor a tail -f command with multiple processes
- Find the package that installed a command
- Use tail -f effectively by omiting unwanted lines containing particular pattern of words using grep -v.
- Grep live log tailing
- Grep live log tailing, tracks file open/close
- Grep live log tailing
- Grep live log tailing
- Anti DDOS
- Live filter a log file using grep and show x# of lines above and below
- Get the serial numbers from HP RAID
- This is a specialized command for Ericsson CS5.2 - Getting the test case trace on SDP

            
### Pipe `tail` to `sed`

- Tail a log and replace according to a sed pattern
- Download last file from index of
- Mount a partition from within a complete disk dump
- print random commandlinefu.com submission
- Fetch current song from last.fm
- How much RAM is Apache using?
- Jump to a song in your XMMS2 playlist, based on song title/artist
- Show the single most recently modified file in a directory
- Colorized tail using sed
- Find artist and title of a music cd, UPC code given (first result only)
- Find artist and title of a music cd, UPC code given (first result only)
- Get notified when a job you run in a terminal is done, using NotifyOSD
- random git-commit message
- Get the amount of users currently registered at the DudaLibre.com Linux Counter.
- Generate background office noise using Digg feeds and OSX.
- Reports file systems with disk usage exceeding 90% on the specified host
- Add an "alert" alias for long running commands
- List your largest installed packages.

            
### Pipe `tail` to `xargs`

- Keep the last 10 moodle backups
- Poll and print end of lates modified file
- Follow the most recently updated log files
- tail from the last occurrence of a pattern to the end of the (log) file
- Quickly add a new user to all groups the default user is in
- Monitor a file with tail with timestamps added
- FInd the 10 biggest files taking up disk space
- Get the latest ftp file from ftp server on local machine with lftp and bash. (Piped commands inside lftp).
- Re-execute a command using a saved /proc/pid/cmdline file
- Delete all folders except the 10 latest ones AND specific excluded ones
- Delete all but the latest 5 files
- Find the date of the first commit in a git repository
- Find the date of the first commit in a git repository

            
### Pipe `tail` to `echo`

- Monitor a file with tail with timestamps added
- Displays All TCP and UDP Connections
- How much RAM is Apache using?
- zsh suffix to inform you about long command ending
- Show seconds since modified of newest modified file in directory
- Run a command for blocks of output of another command
- Pipe system log to espeak
- Get the latest ftp file from ftp server on local machine with lftp and bash. (Piped commands inside lftp).
- Annotate tail -f with timestamps
- Reports file systems with disk usage exceeding 90% on the specified host
- Hunt for the newest file.

            
### Pipe `tail` to `head`

- Get IP address from domain
- Create a bash script from last n commands
- Get only headers from a website with curl even if it doesn't support HEAD
- Grep with one result at a time
- Get top 10 largest directories under cwd
- To print a specific line from a file
- Print just line 4 from a textfile
- Print just line 4 from a textfile
- Generate random sensible passwords, and copy them to the clipboard

            
### Pipe `tail` to `date`

- Monitor a file with tail with timestamps added
- Monitor a file with tail with timestamps added
- Show seconds since modified of newest modified file in directory
- Annotate tail -f with timestamps
- Monitor a file with tail with timestamps added
- Hunt for the newest file.

            
### Pipe `tail` to `rm`

- Keep the last 10 moodle backups
- Send murmurd log lines to syslog
- Unpack magnatune flac album and move artwork into album dir
- Find artist and title of a music cd, UPC code given (first result only)
- Delete all folders except the 10 latest ones AND specific excluded ones
- Delete all but the latest 5 files

            
### Pipe `tail` to `ss`

- Do a quick check on the harware specifications on a set of Linux (RedHat) boxes
- last mounted device
- pipe remote log web server file to lostalgia
- Print Memory Utilization Percentage For a specific process and it's children
- show each new entry in system messages as a popup
- Use Growl to monitor your local apache error logs for new messages
- display memory usage of a process

            
### Pipe `tail` to `tail`

- count & sort one field of the log files
- Poll and print end of lates modified file
- scan multiple log subdirectories for the latest log files and tail them
- pipe remote log web server file to lostalgia
- Follow the most recently updated log files
- tail from the last occurrence of a pattern to the end of the (log) file

            
### Pipe `tail` to `cp`

- cpu and memory usage top 10 under Linux
- cpu and memory usage top 10 under Linux
- Displays All TCP and UDP Connections

            
### Pipe `tail` to `sudo`

- Displays All TCP and UDP Connections
- Follow the most recently updated log files
- Quickly add a new user to all groups the default user is in

            
### Pipe `tail` to `su`

- Displays All TCP and UDP Connections
- Follow the most recently updated log files
- Quickly add a new user to all groups the default user is in
- Monitor a file with tail with timestamps added
- mean color of an image

            
### Pipe `tail` to `ln`

- tail -f a log file over ssh into growl
- edit, view or execute last modified file with a single key-press
- Use Growl to monitor your local apache error logs for new messages

            
### Pipe `tail` to `ls`

- Get only headers from a website with curl even if it doesn't support HEAD
- Unpack magnatune flac album and move artwork into album dir
- Monitor a log file, filling up all available space in the terminal window and preventing line wrap

            
### Pipe `tail` to `sort`

- see whats getting written into all of the open logfiles under /var/log
- Display top Keywords from history
- filter rails log to count requests sliced in seconds
- Ranking of the most frequently used commands
- Ranking of the most frequently used commands

            
### Pipe `tail` to `cal`

- Get and read log from remote host (works with log on pipe, too)
- read squid logs with human-readable timestamp
- Read Squid logs with human-readable timestamp in Pfsense
- Use Growl to monitor your local apache error logs for new messages
- histogram of file size

            
### Pipe `tail` to `id`

- Send murmurd log lines to syslog
- AIX: get LUN ID for a given filesystem
- Generate background office noise using Digg feeds and OSX.

            
### Pipe `tail` to `nc`

- Tail a log-file over the network
- Get Chromecast opencast pincode
- Tail a log-file over the network

            
### Pipe `tail` to `ps`

- Print Memory Utilization Percentage For a specific process and it's children
- Show seconds since modified of newest modified file in directory
- Function to check whether a regular file ends with a newline
- display memory usage of a process

            
### Pipe `tail` to `comm`

- Print Memory Utilization Percentage For a specific process and it's children
- Easily find an old command you run
- random git-commit message
- display memory usage of a process

            
### Pipe `tail` to `find`

- Tail a log and replace according to a sed pattern

            
### Pipe `tail` to `netstat`

- Displays All TCP and UDP Connections

            
### Pipe `tail` to `tar`

- Mount a partition from within a complete disk dump
- Backup to LTO Tape with progress, checksums and buffering

            
### Pipe `tail` to `rev`

- Give {Open,True}Type files reasonable names

            
### Pipe `tail` to `exit`

- Get only headers from a website with curl even if it doesn't support HEAD
- Tail postfix current maillog and grep for "criteria"

            
### Pipe `tail` to `less`

- last mounted device

            
### Pipe `tail` to `du`

- Quickly add a new user to all groups the default user is in
- FInd the 10 biggest files taking up disk space

            
### Pipe `tail` to `dd`

- Quickly add a new user to all groups the default user is in

            
### Pipe `tail` to `uptime`

- csv file of ping every minutes

            
### Pipe `tail` to `sleep`

- csv file of ping every minutes

            
### Pipe `tail` to `name`

- AIX: get LUN ID for a given filesystem

            
### Pipe `tail` to `mv`

- Unpack magnatune flac album and move artwork into album dir

            
### Pipe `tail` to `df`

- Unpack magnatune flac album and move artwork into album dir
- Reports file systems with disk usage exceeding 90% on the specified host

            
### Pipe `tail` to `jp`

- Unpack magnatune flac album and move artwork into album dir

            
### Pipe `tail` to `tac`

- Check the last 15 package operations (on yum systems)

            
### Pipe `tail` to `man`

- Easily find an old command you run

            
### Pipe `tail` to `top`

- Realtime lines per second in a log file

            
### Pipe `tail` to `more`

- Run a command for blocks of output of another command

            
### Pipe `tail` to `wc`

- faster replace sting with dd

            
### Pipe `tail` to `vim`

- Pipe STDOUT to vim

            
### Pipe `tail` to `vi`

- Pipe STDOUT to vim

            
### Pipe `tail` to `cat`

- Block all brute force attacks in realtime (IPv4/SSH)

            
### Pipe `tail` to `ip`

- Block all brute force attacks in realtime (IPv4/SSH)
- Anti DDOS

            
### Pipe `tail` to `iptables`

- Block all brute force attacks in realtime (IPv4/SSH)

            
### Pipe `tail` to `exec`

- Realtime lines per second in a log file

            
