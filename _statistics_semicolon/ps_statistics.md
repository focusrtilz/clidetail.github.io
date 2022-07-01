---
layout: manual
title:  "ps - Statistics of command combinations using semicolon"
tags: statistic
---

## Before

__The commands before `ps`:__  Execute the given command __before__ `ps`.

| Command | percentage |
|--------|--------|
| w | 15% |
| grep | 9% |
| ps | 9% |
| awk | 8% |
| echo | 4% |
| name | 3% |
| ip | 2% |
| cat | 2% |
| date | 2% |
| ss | 2% |
| ls | 2% |
| id | 2% |
| find | 2% |
| head | 2% |
| su | 2% |
| sed | 2% |
| nc | 1% |
| curl | 1% |
| tail | 1% |
| free | 1% |
| host | 1% |
| sort | 1% |



## After

__The commands after `ps`:__ Execute the given command __after__ `ps`.

| Command | Percentage | 
|-------|--------|
| w | 11% |
| ps | 9% |
| grep | 8% |
| echo | 7% |
| su | 5% |
| sleep | 3% |
| kill | 3% |
| sed | 3% |
| ss | 3% |
| ip | 2% |
| cat | 2% |
| awk | 2% |
| id | 2% |
| ls | 2% |
| name | 2% |
| sudo | 1% |
| rm | 1% |
| cp | 1% |
| dd | 1% |
| tail | 1% |
| password | 1% |
| sort | 1% |
| curl | 1% |
| df | 1% |
| cal | 1% |
| host | 1% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Execute `w` before `ps`

- Measures download speed on eth0
- Find processes blocked on IO
- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz
- Show memory usage of all docker / lxc containers (works on CoreOS)
- Destroy all unmapped Brightbox Cloud IPs
- Backup all MySQL Databases to individual files
- A signal trap that logs when your script was killed and what other processes were running at that time
- Muestra el crecimiento de un archivo por segundo
- Auto-kill auto-spawned process
- Recursively set the files to ignore in all folders for svn
- where am I in google map?
- Print heap addresses and size
- Linux zsh one-liner to Determine which processes are using the most swap space currently
- view the 10 most cpu using processes in browser
- Save your open windows to a file so they can be opened after you restart
- How fast is the connexion to a URL, some stats from curl
- Show memory usage of all docker / lxc containers
- see who is on this machine
- Print Memory Utilization Percentage For a specific process and it's children
- Periodically run a command without hangups, and send the output to your e-mail
- Search and play youtube videos directly to terminal (no X needed)
- Updated top ten memory utilizing processes (child/instance aggregation) now with percentages of total RAM
- Show seconds since modified of newest modified file in directory
- Show number of connections per remote IP
- kill all running instances of wine and programs runned by it (exe)
- Watch for blocked NGINX processes for tuning purposes
- Backup all databases in a MySQL container
- Check if your desired password is already available in haveibeenpwnd database. This command uses the API provided by HIBP
- Log your internet download speed
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- Grep ip addresses from access attempts to a page and add them to an ipset referenced by an iptables rule
- Create a log file of Nvidia graphics card temperatures using nvidia-smi
- Watch all postgres processes, sorted by memory use
- Query VirusTotal Hash DB using a Public APIKEY
- Display the tree of all instance of a particular  process
- Monitor memory fine-grained usage (e.g. firefox)
- Connect to FreeWifi hotspot (France) and keep the connection active
- display memory usage of a process

            
### Execute `grep` before `ps`

- Measures download speed on eth0
- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz
- Show memory usage of all docker / lxc containers (works on CoreOS)
- Destroy all unmapped Brightbox Cloud IPs
- psg (ps grep) function if you don't have pgrep or don't know how to use it
- Auto-kill auto-spawned process
- Show the command line of a process that use a specific port (ubuntu)
- Recursively set the files to ignore in all folders for svn
- Print heap addresses and size
- Print heap addresses and size
- Fix all the commit log messages from a user of a bad subversion client
- Show memory usage of all docker / lxc containers
- split a postscript file
- Search and play youtube videos directly to terminal (no X needed)
- Updated top ten memory utilizing processes (child/instance aggregation) now with percentages of total RAM
- Download all MegaTokyo strips
- Watch for blocked NGINX processes for tuning purposes
- psgrep
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- List your installed Chromium extensions (with url to each page)
- Grep ip addresses from access attempts to a page and add them to an ipset referenced by an iptables rule
- Create a log file of Nvidia graphics card temperatures using nvidia-smi
- Show Network IP and Subnet
- Display the tree of all instance of a particular  process

            
### Execute `ps` before `ps`

- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz
- Show memory usage of all docker / lxc containers (works on CoreOS)
- Destroy all unmapped Brightbox Cloud IPs
- psg (ps grep) function if you don't have pgrep or don't know how to use it
- Auto-kill auto-spawned process
- Print heap addresses and size
- Linux zsh one-liner to Determine which processes are using the most swap space currently
- Show public IPv4 and IPv6
- Show memory usage of all docker / lxc containers
- Blink Caps Lock on HDD activity
- Search and play youtube videos directly to terminal (no X needed)
- Show seconds since modified of newest modified file in directory
- postgresql : drop all sequences from the public schema
- postgresql : drop all tables from a schema
- Convert every eps in a directory to pdf
- Watch for blocked NGINX processes for tuning purposes
- Watch for blocked NGINX processes for tuning purposes
- psgrep
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- Create a log file of Nvidia graphics card temperatures using nvidia-smi
- Watch all postgres processes, sorted by memory use
- Docker.io Stop and Remove all processes
- Show Network IP and Subnet
- List mp3 files with less than 320 kbps bitrate.

            
### Execute `awk` before `ps`

- Measures download speed on eth0
- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz
- Show memory usage of all docker / lxc containers (works on CoreOS)
- Destroy all unmapped Brightbox Cloud IPs
- Muestra el crecimiento de un archivo por segundo
- Auto-kill auto-spawned process
- Print heap addresses and size
- Linux zsh one-liner to Determine which processes are using the most swap space currently
- Show memory usage of all docker / lxc containers
- Print Memory Utilization Percentage For a specific process and it's children
- Search and play youtube videos directly to terminal (no X needed)
- Updated top ten memory utilizing processes (child/instance aggregation) now with percentages of total RAM
- Show seconds since modified of newest modified file in directory
- Show number of connections per remote IP
- Watch for blocked NGINX processes for tuning purposes
- Check if your desired password is already available in haveibeenpwnd database. This command uses the API provided by HIBP
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- Grep ip addresses from access attempts to a page and add them to an ipset referenced by an iptables rule
- Create a log file of Nvidia graphics card temperatures using nvidia-smi
- Monitor memory fine-grained usage (e.g. firefox)
- display memory usage of a process

            
### Execute `echo` before `ps`

- Change Title of Terminal Window to Verbose Info useful at Login
- Monitor system load and print out top offending processes
- A signal trap that logs when your script was killed and what other processes were running at that time
- Add page numbers to a PDF
- List all groups and the user names that were in each group
- Show public IPv4 and IPv6
- Get the gravatar UTL for a given email address
- Check if your desired password is already available in haveibeenpwnd database. This command uses the API provided by HIBP
- find co-ordinates of a location
- find co-ordinates of a location
- find co-ordinates of a location
- Find the svn directory that a commit was made in.  Usefull if you have many projects in one repository.

            
### Execute `name` before `ps`

- Backup all MySQL Databases to individual files
- Print heap addresses and size
- Print heap addresses and size
- postgresql : drop all sequences from the public schema
- postgresql : drop all tables from a schema
- Easy file sharing from the command line using transfer.sh
- List your installed Chromium extensions (with url to each page)
- List mp3 files with less than 320 kbps bitrate.

            
### Execute `ip` before `ps`

- Destroy all unmapped Brightbox Cloud IPs
- Backup all MySQL Databases to individual files
- where am I in google map?
- Show public IPv4 and IPv6
- get a list of top 1000 sites from alexa
- Show Network IP and Subnet

            
### Execute `cat` before `ps`

- Monitor system load and print out top offending processes
- Backup all databases in a MySQL container
- find co-ordinates of a location
- find co-ordinates of a location
- find co-ordinates of a location
- Query VirusTotal Hash DB using a Public APIKEY
- Print out which hosts are not running specific process

            
### Execute `date` before `ps`

- Monitor system load and print out top offending processes
- Disaster Snapshot (procmail)
- Create a log file of Nvidia graphics card temperatures using nvidia-smi
- Find processes stuck in dreaded
- Backup a directory structure
- monitor what processes are waiting for IO interrupts

            
### Execute `ss` before `ps`

- A signal trap that logs when your script was killed and what other processes were running at that time
- Print heap addresses and size
- Print heap addresses and size
- Find highest context switches
- Grep ip addresses from access attempts to a page and add them to an ipset referenced by an iptables rule
- Monitor memory fine-grained usage (e.g. firefox)

            
### Execute `ls` before `ps`

- Muestra el crecimiento de un archivo por segundo
- Show the command line of a process that use a specific port (ubuntu)
- look what's running
- Show seconds since modified of newest modified file in directory
- Displays the number of unread messages on your gmail at the top right corner of your terminal
- Export all Stremio movie names
- Create a log file of Nvidia graphics card temperatures using nvidia-smi

            
### Execute `id` before `ps`

- Show the command line of a process that use a specific port (ubuntu)
- Search and play youtube videos directly to terminal (no X needed)
- Extract the emoticons regex from a running skype process
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- Create a log file of Nvidia graphics card temperatures using nvidia-smi
- Better PS aliases
- Display the tree of all instance of a particular  process

            
### Execute `find` before `ps`

- Recursively set the files to ignore in all folders for svn
- find co-ordinates of a location
- find co-ordinates of a location
- find co-ordinates of a location
- List mp3 files with less than 320 kbps bitrate.

            
### Execute `head` before `ps`

- Print heap addresses and size
- Print Memory Utilization Percentage For a specific process and it's children
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- Watch all postgres processes, sorted by memory use
- display memory usage of a process

            
### Execute `su` before `ps`

- Get the gravatar UTL for a given email address
- Search and play youtube videos directly to terminal (no X needed)
- This will allow you to browse web sites using "-dump" with elinks while you still are logged in
- Watch for blocked NGINX processes for tuning purposes
- Watch for blocked NGINX processes for tuning purposes
- Check if your desired password is already available in haveibeenpwnd database. This command uses the API provided by HIBP
- Monitor memory fine-grained usage (e.g. firefox)

            
### Execute `sed` before `ps`

- split a postscript file
- Print github url for the current url
- Easy file sharing from the command line using transfer.sh
- find co-ordinates of a location
- find co-ordinates of a location

            
### Execute `nc` before `ps`

- Search google.com on your terminal
- postgresql : drop all sequences from the public schema
- Check if your desired password is already available in haveibeenpwnd database. This command uses the API provided by HIBP
- Google verbatim search on your terminal

            
### Execute `curl` before `ps`

- where am I in google map?
- Show public IPv4 and IPv6
- Search and play youtube videos directly to terminal (no X needed)
- Download all MegaTokyo strips

            
### Execute `tail` before `ps`

- Print Memory Utilization Percentage For a specific process and it's children
- Show seconds since modified of newest modified file in directory
- display memory usage of a process

            
### Execute `free` before `ps`

- Print Memory Utilization Percentage For a specific process and it's children
- Updated top ten memory utilizing processes (child/instance aggregation) now with percentages of total RAM
- display memory usage of a process

            
### Execute `host` before `ps`

- postgresql : drop all sequences from the public schema
- postgresql : drop all tables from a schema
- Print out which hosts are not running specific process

            
### Execute `sort` before `ps`

- Export all Stremio movie names
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- List your installed Chromium extensions (with url to each page)
- Grep ip addresses from access attempts to a page and add them to an ipset referenced by an iptables rule

            
### Execute `ifconfig` before `ps`

- Measures download speed on eth0
- Show Network IP and Subnet

            
### Execute `mysql` before `ps`

- Backup all MySQL Databases to individual files

            
### Execute `rm` before `ps`

- A signal trap that logs when your script was killed and what other processes were running at that time
- This will allow you to browse web sites using "-dump" with elinks while you still are logged in

            
### Execute `diff` before `ps`

- Auto-kill auto-spawned process

            
### Execute `cp` before `ps`

- Show the command line of a process that use a specific port (ubuntu)
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.

            
### Execute `lsof` before `ps`

- Show the command line of a process that use a specific port (ubuntu)

            
### Execute `pwd` before `ps`

- Recursively set the files to ignore in all folders for svn

            
### Execute `du` before `ps`

- Fix all the commit log messages from a user of a bad subversion client

            
### Execute `man` before `ps`

- Pretty man pages under X
- Better PS aliases

            
### Execute `df` before `ps`

- Pretty man pages under X

            
### Execute `dd` before `ps`

- Open search engines from terminal
- Show Network IP and Subnet

            
### Execute `top` before `ps`

- get a list of top 1000 sites from alexa
- Docker.io Stop and Remove all processes

            
### Execute `zip` before `ps`

- get a list of top 1000 sites from alexa

            
### Execute `unzip` before `ps`

- get a list of top 1000 sites from alexa

            
### Execute `nohup` before `ps`

- Periodically run a command without hangups, and send the output to your e-mail

            
### Execute `ln` before `ps`

- Search and play youtube videos directly to terminal (no X needed)
- postgresql : drop all sequences from the public schema

            
### Execute `sleep` before `ps`

- Visual alert with keyboard LEDs
- Display the tree of all instance of a particular  process

            
### Execute `netstat` before `ps`

- Show number of connections per remote IP

            
### Execute `kill` before `ps`

- kill all running instances of wine and programs runned by it (exe)

            
### Execute `killall` before `ps`

- kill all running instances of wine and programs runned by it (exe)

            
### Execute `vi` before `ps`

- Export all Stremio movie names
- Create a log file of Nvidia graphics card temperatures using nvidia-smi

            
### Execute `export` before `ps`

- Better PS aliases

            
### Execute `comm` before `ps`

- Better PS aliases

            
### Execute `exec` before `ps`

- List mp3 files with less than 320 kbps bitrate.

            


### Execute `w` after `ps`

- Show memory usage of all docker / lxc containers (works on CoreOS)
- start a vnc server session to connect to a gdm login screen
- kill all process that belongs to you
- Pulls FTP password out of Plesk database.
- Auto-kill auto-spawned process
- Linux zsh one-liner to Determine which processes are using the most swap space currently
- Linux zsh one-liner to Determine which processes are using the most swap space currently
- Get a PostgreSQL servers version
- Save your open windows to a file so they can be opened after you restart
- Pulls email password out of Plesk database for given email address.
- Count open file handles for a specific user ID
- Show memory usage of all docker / lxc containers
- Search and play youtube videos directly to terminal (no X needed)
- Get ipv4 remote address bad score using wafsec.com free reputation service api
- postgresql : drop all sequences from the public schema
- postgresql : drop all tables from a schema
- all java -Xmx values in a system, add them up
- Find all PowerPC applications on OS X
- Watch for blocked NGINX processes for tuning purposes
- Define a word from Linux Terminal
- Download a TiVo Show
- Chrome sucks
- Chrome sucks
- If you want to calculate the average on-the-fly
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- Download German word pronounciation as mp3 file
- check a list of domains registered on godaddy
- Show Network IP and Subnet
- Dropbox login using only curl, sed and bash

            
### Execute `ps` after `ps`

- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz
- Show memory usage of all docker / lxc containers (works on CoreOS)
- Destroy all unmapped Brightbox Cloud IPs
- psg (ps grep) function if you don't have pgrep or don't know how to use it
- Auto-kill auto-spawned process
- Print heap addresses and size
- Linux zsh one-liner to Determine which processes are using the most swap space currently
- Show public IPv4 and IPv6
- Show memory usage of all docker / lxc containers
- Blink Caps Lock on HDD activity
- Search and play youtube videos directly to terminal (no X needed)
- Show seconds since modified of newest modified file in directory
- postgresql : drop all sequences from the public schema
- postgresql : drop all tables from a schema
- Convert every eps in a directory to pdf
- Watch for blocked NGINX processes for tuning purposes
- Watch for blocked NGINX processes for tuning purposes
- psgrep
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- Create a log file of Nvidia graphics card temperatures using nvidia-smi
- Watch all postgres processes, sorted by memory use
- Docker.io Stop and Remove all processes
- Show Network IP and Subnet
- List mp3 files with less than 320 kbps bitrate.

            
### Execute `grep` after `ps`

- Show memory usage of all docker / lxc containers (works on CoreOS)
- Get internal and external IP addresses
- psg (ps grep) function if you don't have pgrep or don't know how to use it
- psg (ps grep) function if you don't have pgrep or don't know how to use it
- Auto-kill auto-spawned process
- Print heap addresses and size
- look what's running
- Basic search for Quassel PostgreSQL database
- Get a PostgreSQL servers version
- Show memory usage of all docker / lxc containers
- Display any tcp connections to apache
- split a postscript file
- Get ipv4 remote address bad score using wafsec.com free reputation service api
- Watch for blocked NGINX processes for tuning purposes
- Testing ftp server status
- psgrep
- psgrep
- 'micro' ps aux (by mem/cpu)
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- check a list of domains registered on godaddy
- Watch all postgres processes, sorted by memory use
- Show Network IP and Subnet
- Show Network IP and Subnet

            
### Execute `echo` after `ps`

- Display a quote of the day in notification bubble
- Show memory usage of all docker / lxc containers (works on CoreOS)
- Find which process is using a port on Solaris
- Show public IPv4 and IPv6
- How much RAM is Apache using?
- Show memory usage of all docker / lxc containers
- Print Memory Utilization Percentage For a specific process and it's children
- The Hidden PS
- Sort I/O activity by PID number.
- Testing ftp server status
- psgrep
- psgrep
- Kill process you don't know the PID of, when pidof and pgrep are not available.
- Twitter Account Validator
- Function that outputs dots every second until command completes
- alias  ps | grep
- Create a log file of Nvidia graphics card temperatures using nvidia-smi
- Print out which hosts are not running specific process
- Backup a directory structure
- display memory usage of a process

            
### Execute `su` after `ps`

- Clear disk space by retaining only currently running Docker containers and only currently required Docker images.
- Recursively list all of the files in a directory, group them by extension and calculate the average of the file sizes in each group
- Display CPU usage in percentage
- Linux zsh one-liner to Determine which processes are using the most swap space currently
- Shows a specific process memory usage
- Get ipv4 remote address bad score using wafsec.com free reputation service api
- Update a namecheap @ A record to point to your current internet-facing IP address
- Cleanup Docker
- Watch for blocked NGINX processes for tuning purposes
- Watch for blocked NGINX processes for tuning purposes
- Kill all processes found in grep
- Monitor memory fine-grained usage (e.g. firefox)
- Apache memory usage
- Pull Total Memory Usage In Virtual Environment

            
### Execute `sleep` after `ps`

- Find processes blocked on IO
- Auto-kill auto-spawned process
- Wait for an already launched program to stop before starting a new command.
- Periodically run a command without hangups, and send the output to your e-mail
- Hypnosis
- Hypnosis
- Log your internet download speed
- Schedule one job after another (running).
- Connect to FreeWifi hotspot (France) and keep the connection active

            
### Execute `kill` after `ps`

- Slow down IO heavy process
- kill all process that belongs to you
- Auto-kill auto-spawned process
- Locate a list of processes by process name that need to be killed
- kill all running instances of wine and programs runned by it (exe)
- Kill all processes found in grep
- Kill any lingering ssh processes
- Kill google chrome process
- Find a process by name and automatically kill it
- kill  some process (same as others) but  parsing to a variable

            
### Execute `sed` after `ps`

- Get internal and external IP addresses
- Get a PostgreSQL servers version
- split a postscript file
- Pull Total Memory Usage In Virtual Environment
- Find the correct PID
- Get docker port mappings for all running containers
- Dropbox login using only curl, sed and bash
- List mp3 files with less than 320 kbps bitrate.

            
### Execute `ss` after `ps`

- Pulls FTP password out of Plesk database.
- Pulls email password out of Plesk database for given email address.
- postgresql : drop all sequences from the public schema
- Update a namecheap @ A record to point to your current internet-facing IP address
- Clone all github repos of a user
- psgrep
- Chrome sucks
- Create higher quality gif from videos
- Watch all postgres processes, sorted by memory use
- Dropbox login using only curl, sed and bash

            
### Execute `ip` after `ps`

- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz
- Destroy all unmapped Brightbox Cloud IPs
- Show public IPv4 and IPv6
- Get ipv4 remote address bad score using wafsec.com free reputation service api
- Easy file sharing from the command line using transfer.sh
- Show Network IP and Subnet
- Show Network IP and Subnet

            
### Execute `cat` after `ps`

- Show memory usage of all docker / lxc containers (works on CoreOS)
- kill all process that belongs to you
- Print heap addresses and size
- Show memory usage of all docker / lxc containers
- Watch all postgres processes, sorted by memory use
- Check every URL redirect (HTTP status codes 301/302) with curl

            
### Execute `awk` after `ps`

- Show memory usage of all docker / lxc containers (works on CoreOS)
- Auto-kill auto-spawned process
- Linux zsh one-liner to Determine which processes are using the most swap space currently
- Show memory usage of all docker / lxc containers
- Watch for blocked NGINX processes for tuning purposes
- If you want to calculate the average on-the-fly

            
### Execute `id` after `ps`

- Pulls FTP password out of Plesk database.
- Find which process is using a port on Solaris
- Pulls email password out of Plesk database for given email address.
- cpu process limitation for specific processname like java,kibana
- Search and play youtube videos directly to terminal (no X needed)
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.

            
### Execute `ls` after `ps`

- count processes with status
- Random (sfw, 1920x1080) wallpaper from wallbase.cc
- Count open file handles for a specific user ID
- Blink Caps Lock on HDD activity
- Display any tcp connections to apache
- psgrep

            
### Execute `name` after `ps`

- Pulls email password out of Plesk database for given email address.
- postgresql : drop all tables from a schema
- Convert every eps in a directory to pdf
- psgrep
- Twitter Account Validator
- Checks your unread Gmail from the command line
- List your installed Chromium extensions (with url to each page)

            
### Execute `sudo` after `ps`

- Clear disk space by retaining only currently running Docker containers and only currently required Docker images.
- Cleanup Docker
- Kill all processes found in grep

            
### Execute `rm` after `ps`

- Clear disk space by retaining only currently running Docker containers and only currently required Docker images.
- Cleanup Docker
- Docker.io Stop and Remove all processes

            
### Execute `cp` after `ps`

- walk in a directory for specific files and copy it to desired destination
- cpu and memory usage top 10 under Linux
- cpu and memory usage top 10 under Linux
- cpu process limitation for specific processname like java,kibana

            
### Execute `dd` after `ps`

- Get internal and external IP addresses
- check a list of domains registered on godaddy
- Initialise git in working directory with latest Visual Studio .gitignore [Windows]
- Show Network IP and Subnet

            
### Execute `tail` after `ps`

- Display CPU usage in percentage
- ps to show child thread PIDs
- Watch for blocked NGINX processes for tuning purposes
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.

            
### Execute `password` after `ps`

- Pulls FTP password out of Plesk database.
- Pulls email password out of Plesk database for given email address.
- Dropbox login using only curl, sed and bash

            
### Execute `sort` after `ps`

- List all groups and the user names that were in each group
- Watch all postgres processes, sorted by memory use
- List mp3 files with less than 320 kbps bitrate.

            
### Execute `curl` after `ps`

- Show public IPv4 and IPv6
- delete all bitbucket repos via rest API v2 (req: jq and curl)
- Get ipv4 remote address bad score using wafsec.com free reputation service api
- Dropbox login using only curl, sed and bash

            
### Execute `df` after `ps`

- Pretty man pages under X
- Convert every eps in a directory to pdf
- Create a system overview dashboard on F12 key
- Render man page in *temporary* PDF (works in Gnome)

            
### Execute `cal` after `ps`

- Print Memory Utilization Percentage For a specific process and it's children
- Get ipv4 remote address bad score using wafsec.com free reputation service api
- Show Network IP and Subnet
- display memory usage of a process

            
### Execute `host` after `ps`

- postgresql : drop all sequences from the public schema
- postgresql : drop all tables from a schema
- Testing ftp server status

            
### Execute `dig` after `ps`

- walk in a directory for specific files and copy it to desired destination

            
### Execute `zip` after `ps`

- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz

            
### Execute `gzip` after `ps`

- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz

            
### Execute `du` after `ps`

- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz

            
### Execute `ifconfig` after `ps`

- Get internal and external IP addresses
- Show Network IP and Subnet

            
### Execute `wc` after `ps`

- kill all process that belongs to you
- Count open file handles for a specific user ID

            
### Execute `exit` after `ps`

- A signal trap that logs when your script was killed and what other processes were running at that time

            
### Execute `diff` after `ps`

- Auto-kill auto-spawned process
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.

            
### Execute `head` after `ps`

- Random (sfw, 1920x1080) wallpaper from wallbase.cc
- Get a PostgreSQL servers version

            
### Execute `bc` after `ps`

- How much RAM is Apache using?

            
### Execute `xargs` after `ps`

- git clone all user repos
- Play flash videos in  VLC

            
### Execute `killall` after `ps`

- Locate a list of processes by process name that need to be killed

            
### Execute `lsof` after `ps`

- Display any tcp connections to apache

            
### Execute `date` after `ps`

- Show seconds since modified of newest modified file in directory
- Update a namecheap @ A record to point to your current internet-facing IP address

            
### Execute `man` after `ps`

- postgresql : drop all tables from a schema

            
### Execute `clear` after `ps`

- The Hidden PS

            
### Execute `batch` after `ps`

- Extract the emoticons regex from a running skype process

            
### Execute `ssh` after `ps`

- Clone all github repos of a user

            
### Execute `ln` after `ps`

- Testing ftp server status

            
### Execute `ping` after `ps`

- psgrep

            
### Execute `comm` after `ps`

- Ignore a directory in SVN, permanently

            
### Execute `dstat` after `ps`

- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.

            
### Execute `whois` after `ps`

- check a list of domains registered on godaddy

            
### Execute `mv` after `ps`

- Git autocomplete

            
### Execute `vi` after `ps`

- Render man page in *temporary* PDF (works in Gnome)

            
### Execute `nc` after `ps`

- Render man page in *temporary* PDF (works in Gnome)

            
### Execute `passwd` after `ps`

- Dropbox login using only curl, sed and bash

            
