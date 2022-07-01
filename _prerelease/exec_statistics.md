---
layout: manual
title:  "exec - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `exec`:__ Pipe the result of the given command to `exec`.

| Command | percentage |
|--------|--------|
| find | 16% |
| exec | 10% |
| name | 8% |
| grep | 8% |
| w | 5% |
| ss | 5% |
| cat | 5% |
| echo | 4% |
| mysql | 4% |
| cd | 2% |
| cp | 2% |
| nc | 2% |
| rm | 2% |
| tar | 1% |
| touch | 1% |
| du | 1% |
| xargs | 1% |
| ssh | 1% |
| su | 1% |
| diff | 1% |
| sort | 1% |
| awk | 1% |
| ps | 1% |
| ip | 1% |
| tail | 1% |



## After

__The commands after `exec`:__ Pipe the result of `exec` to the given command.

| Command | Percentage | 
|-------|--------|
| sort | 17% |
| w | 16% |
| grep | 12% |
| awk | 10% |
| sed | 5% |
| echo | 3% |
| exec | 3% |
| su | 3% |
| xargs | 2% |
| wc | 2% |
| mv | 1% |
| find | 1% |
| ss | 1% |
| nc | 1% |
| name | 1% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `find` to `exec`

- recursively change file name from uppercase to lowercase (or viceversa)
- set create time using file name for files pulled from android camera
- Find non-ASCII and UTF-8 files in the current directory
- Replace lines in files with only spaces/tabs with simple empty line (within current directory - recursive)
- Identify differences between directories (possibly on different servers)
- Calculate comment density of shell scripts in a directory
- Fixing maven POM messed up by a broken release.
- Counting the source code's line numbers C/C++ Java
- find potentially malicious PHP commands used in backdoors and aliked scripts
- Find files of two different extensions and copy them to a directory
- Rename many files in directories and subdirectories

            
### Pipe `exec` to `exec`

- recursively change file name from uppercase to lowercase (or viceversa)
- set create time using file name for files pulled from android camera
- Identify differences between directories (possibly on different servers)
- Calculate comment density of shell scripts in a directory
- mysqlbinlog headers sorted by event time
- Fixing maven POM messed up by a broken release.
- find potentially malicious PHP commands used in backdoors and aliked scripts

            
### Pipe `name` to `exec`

- recursively change file name from uppercase to lowercase (or viceversa)
- Calculate comment density of shell scripts in a directory
- Fixing maven POM messed up by a broken release.
- Counting the source code's line numbers C/C++ Java
- find potentially malicious PHP commands used in backdoors and aliked scripts
- delete a file and links based on inode number.

            
### Pipe `grep` to `exec`

- find php command backdoor
- ShellCheck all the bash/sh script under a specific directory excluding version control
- mysqlbinlog headers sorted by event time
- mysqlbinlog headers sorted by event time
- find potentially malicious PHP commands used in backdoors and aliked scripts
- delete a file and links based on inode number.

            
### Pipe `w` to `exec`

- Set executable permissions only to executable files
- Stat each file in a directory
- Wait for an already launched program to stop before starting a new command.
- A video capture command which can be assigned to a keyboard shortcut.

            
### Pipe `ss` to `exec`

- Identify differences between directories (possibly on different servers)
- find php command backdoor
- find potentially malicious PHP commands used in backdoors and aliked scripts
- Realtime lines per second in a log file

            
### Pipe `cat` to `exec`

- Calculate comment density of shell scripts in a directory
- Fixing maven POM messed up by a broken release.
- Backup all databases in a MySQL container
- IBM AIX: Calculate the SHA256 hashes of a directory without sha256sum

            
### Pipe `echo` to `exec`

- recursively change file name from uppercase to lowercase (or viceversa)
- set create time using file name for files pulled from android camera
- IBM AIX: Calculate the SHA256 hashes of a directory without sha256sum

            
### Pipe `mysql` to `exec`

- backup local MySQL database into a folder and removes older then 5 days backups
- mysql bin log events per minute
- mysqlbinlog headers sorted by event time

            
### Pipe `cd` to `exec`

- recursively change file name from uppercase to lowercase (or viceversa)
- Identify differences between directories (possibly on different servers)

            
### Pipe `cp` to `exec`

- Find non-ASCII and UTF-8 files in the current directory
- Replace lines in files with only spaces/tabs with simple empty line (within current directory - recursive)

            
### Pipe `nc` to `exec`

- find php command backdoor
- Counting the source code's line numbers C/C++ Java

            
### Pipe `rm` to `exec`

- A video capture command which can be assigned to a keyboard shortcut.
- Changing the terminal title to the last shell command

            
### Pipe `tar` to `exec`

- Docker: Copy files from host to container

            
### Pipe `touch` to `exec`

- set create time using file name for files pulled from android camera

            
### Pipe `du` to `exec`

- backup local MySQL database into a folder and removes older then 5 days backups

            
### Pipe `xargs` to `exec`

- Find Files Which Should Be Executable But Are Not

            
### Pipe `ssh` to `exec`

- Identify differences between directories (possibly on different servers)

            
### Pipe `su` to `exec`

- Identify differences between directories (possibly on different servers)

            
### Pipe `diff` to `exec`

- Identify differences between directories (possibly on different servers)

            
### Pipe `sort` to `exec`

- purge old stale messages on a qmail queue

            
### Pipe `awk` to `exec`

- Stat each file in a directory

            
### Pipe `ps` to `exec`

- Wait for an already launched program to stop before starting a new command.

            
### Pipe `ip` to `exec`

- find potentially malicious PHP commands used in backdoors and aliked scripts

            
### Pipe `tail` to `exec`

- Realtime lines per second in a log file

            


### Pipe `exec` to `sort`

- Ultimate current directory usage command
- Identify differences between directories (possibly on different servers)
- Identify differences between directories (possibly on different servers)
- for a particular file system, find all files > 10MBytes, sorted by size
- sorts /dev/random
- Sort files in multiple directories by date
- Find biggest 10 files in current and subdirectories and sort by file size
- Count lines of code across multiple file types, sorted by least amount of code to greatest
- find all file larger than 500M in home dir
- Find multiple filename expressions and sort by date
- Display a numbered list of files bigger than 500K, sorted by size (human readable)
- Find Duplicate Files (based on MD5 hash) -- For Mac OS X
- Create md5sum of a directory
- Find size of the files in this directory tree. (sorted)
- Find files and list them sorted by modification time
- List out classes in of all htmls in directory
- Find the biggest files
- Find the largest C/C++ source files in all subdirectories
- Find top 10 largest files in /var directory (including subdirectories)
- Count lines of code across multiple file types, sorted by least amount of code to greatest
- List top 10 files in filesystem or mount point bigger than 200MB
- finding more large files
- FInd the 10 biggest files taking up disk space
- FInd the 10 biggest files taking up disk space
- find all file larger than 500M
- Count the number of lines of code, returns total
- mysqlbinlog headers sorted by event time
- Find files of particular size in a directory
- Find and delete oldest file of specific types in directory tree
- Find the top most 5 duplicate files in a folder
- Size(k) of directories(Biggest first)
- List RPM packages installed in current tree
- Find the source file which contains most number of lines in your workspace
- Find top 5 big files
- Find Duplicate Files (based on MD5 hash)
- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)
- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)
- List files and sizes
- List mp3 files with less than 320 kbps bitrate.

            
### Pipe `exec` to `w`

- recursively change file name from uppercase to lowercase (or viceversa)
- recursively change file name from uppercase to lowercase (or viceversa)
- Calculate the size in MB of all files of a certain extension
- Find files and calculate size of result in shell
- Find files in current directory which are larger in size (500000k)
- Count number of files in subdirectories
- Current directory disk usage by day for last 90 days in GB
- Sum size of files returned from FIND
- Rename files in a directory in an edited list fashion
- Grab a list of MP3s out of Firefox's cache
- Find the biggest files on your hard drive
- Finds all files from / on down over specified size.
- find all files that have 20 or more MB on every filesystem, change the size and filesystem to your liking
- Find all files over 20MB and print their names and size in human readable format
- Edit all files found having a specific string found by grep
- Make a statistic about the lines of code
- Identifies the file types in a directory and adds or replaces their file extensions.
- Hide the name of a process listed in the `ps` output
- Reorder file with max 100 file per folder
- Find lines of code (LOC) of a filetype in a project.
- Function that counts recursively number of lines of all files in specified folders
- List files above a given threshold
- Count the number of pages of all PDFs in current directory and all subdirs, recursively
- Counting the source code's line numbers C/C++ Java
- Count the number of deleted files
- list folders containing less than 2 MB of data
- list folders containing less than 2 MB of data
- Make a statistic about the lines of code
- Fulltext search in multiple OCR'd pdfs
- Find Files over 20Meg
- Count lines of the founded files
- Sum file sizes of found files
- a find and replace within text-based files
- Find files with size over 100MB and output with better lay-out
- Find all the files more than 10MB, sort in descending order of size and record the output of filenames and size in a text file.
- Reverse Backdoor Command Shell using Netcat

            
### Pipe `exec` to `grep`

- Print names of all video files encoded with h264
- Find non-ASCII and UTF-8 files in the current directory
- quick find executable from locate db
- find string into one pdf file
- command for conky. To update a random command for each 300 sec from commandline.com
- Count files created by date/modification
- scan folder to check syntax error in php files
- Find errors in your php website
- Count the number of pages of all PDFs in current directory and all subdirs, recursively
- Count the number of pages of all PDFs in current directory and all subdirs, recursively
- ShellCheck all the bash/sh script under a specific directory excluding version control
- Find corrupted jpeg image files
- Monitor logs in Linux using Tail
- find and output files content with filtering by filename and specific string
- Calculate comment density of shell scripts in a directory
- Calculate comment density of shell scripts in a directory
- Find for jar's containing a class file
- mysql bin log events per minute
- mysqlbinlog headers sorted by event time
- Find files in multiple TAR files
- List all accessed configuration files while executing a program in linux terminal (improved version)
- Search vmware vmx files if Linux guests are set to sync time to host
- Grep through the text of djvu files and format results
- Fulltext search in multiple OCR'd pdfs
- Count the number of pages of all PDFs in current directory and all subdirs, recursively
- Remove all directories less than 1 MB in size in or below current directory
- Search entire web server for preg_replace /e based php malware.
- Add executable bit to all shell scripts under current directory recursively.

            
### Pipe `exec` to `awk`

- Calculate the size in MB of all files of a certain extension
- Find files and calculate size of result in shell
- Find files in current directory which are larger in size (500000k)
- Current directory disk usage by day for last 90 days in GB
- Sum size of files returned from FIND
- Grab a list of MP3s out of Firefox's cache
- Find the biggest files on your hard drive
- Finds all files from / on down over specified size.
- find all files that have 20 or more MB on every filesystem, change the size and filesystem to your liking
- Find all files over 20MB and print their names and size in human readable format
- Edit all files found having a specific string found by grep
- Identifies the file types in a directory and adds or replaces their file extensions.
- Hide the name of a process listed in the `ps` output
- Find lines of code (LOC) of a filetype in a project.
- List files above a given threshold
- Count the number of pages of all PDFs in current directory and all subdirs, recursively
- list folders containing less than 2 MB of data
- list folders containing less than 2 MB of data
- Make a statistic about the lines of code
- Find Files over 20Meg
- Count lines of the founded files
- Sum file sizes of found files
- Find files with size over 100MB and output with better lay-out
- Find all the files more than 10MB, sort in descending order of size and record the output of filenames and size in a text file.

            
### Pipe `exec` to `sed`

- set create time using file name for files pulled from android camera
- Show demo of toilet fonts
- Search recursive all docx files for SearchTerm and print its name
- Look for a string in one of your codes, excluding the files with svn and ~ (temp/back up files)
- find pictures and renames them appending the containing folder name
- mysqlbinlog headers sorted by event time
- Fixing maven POM messed up by a broken release.
- Remove string with several escaped characters from all files under given path
- Bulk renames with find, sed and a little escaping
- Find Malware in the current and sub directories by MD5 hashes
- Checks the syntax of all PHP files in and below the current working directory
- a find and replace within text-based files
- Manage "legacy" service run control links

            
### Pipe `exec` to `echo`

- recursively change file name from uppercase to lowercase (or viceversa)
- set create time using file name for files pulled from android camera
- Print names of all video files encoded with h264
- Summarize size of all files of given type in all subdirectories (in bytes)
- Rename files in a directory in an edited list fashion
- Calculate comment density of shell scripts in a directory
- Search vmware vmx files if Linux guests are set to sync time to host
- Find Malware in the current and sub directories by MD5 hashes

            
### Pipe `exec` to `exec`

- recursively change file name from uppercase to lowercase (or viceversa)
- set create time using file name for files pulled from android camera
- Identify differences between directories (possibly on different servers)
- Calculate comment density of shell scripts in a directory
- mysqlbinlog headers sorted by event time
- Fixing maven POM messed up by a broken release.
- find potentially malicious PHP commands used in backdoors and aliked scripts

            
### Pipe `exec` to `su`

- Identify differences between directories (possibly on different servers)
- Summarize size of all files of given type in all subdirectories (in bytes)
- Current directory disk usage by day for last 90 days in GB
- List out classes in of all htmls in directory
- OneLiner ICMP sniffer in Python
- Make a statistic about the lines of code
- Sum file sizes of found files

            
### Pipe `exec` to `xargs`

- find all files containing a pattern, open them using vi and place cursor to the first match, use 'n' and ':n' to navigate
- Kill processes that have been running for more than a week
- Edit all files found having a specific string found by grep
- Remove string with several escaped characters from all files under given path
- find files containing specifc pattern on filename and specific patternts in its content, open all in textmate
- a find and replace within text-based files

            
### Pipe `exec` to `wc`

- Count number of files in subdirectories
- Make a statistic about the lines of code
- Reorder file with max 100 file per folder
- Function that counts recursively number of lines of all files in specified folders
- Counting the source code's line numbers C/C++ Java
- Count the number of deleted files

            
### Pipe `exec` to `mv`

- recursively change file name from uppercase to lowercase (or viceversa)
- Identifies the file types in a directory and adds or replaces their file extensions.
- Fixing maven POM messed up by a broken release.
- Manage "legacy" service run control links

            
### Pipe `exec` to `find`

- Set executable permissions only to executable files
- Identify differences between directories (possibly on different servers)
- Calculate comment density of shell scripts in a directory

            
### Pipe `exec` to `ss`

- Identify differences between directories (possibly on different servers)
- Recursive search inside the content of files under current directory - then view the result paginated with 'less'
- Find files modified in the last N days; list sorted by time

            
### Pipe `exec` to `nc`

- List OSX applications and versions.
- Intercept, monitor and manipulate a TCP connection.
- Search vmware vmx files if Linux guests are set to sync time to host

            
### Pipe `exec` to `name`

- Rename files in a directory in an edited list fashion
- find pictures and renames them appending the containing folder name
- Calculate comment density of shell scripts in a directory
- Fulltext search in multiple OCR'd pdfs

            
### Pipe `exec` to `cd`

- recursively change file name from uppercase to lowercase (or viceversa)
- Identify differences between directories (possibly on different servers)

            
### Pipe `exec` to `cal`

- Calculate the size in MB of all files of a certain extension

            
### Pipe `exec` to `tail`

- Find files and calculate size of result in shell
- Delete all folders except the 10 latest ones AND specific excluded ones

            
### Pipe `exec` to `dig`

- set create time using file name for files pulled from android camera

            
### Pipe `exec` to `vi`

- find all files containing a pattern, open them using vi and place cursor to the first match, use 'n' and ':n' to navigate
- Edit all files found having a specific string found by grep

            
### Pipe `exec` to `chmod`

- Set executable permissions only to executable files

            
### Pipe `exec` to `ssh`

- Identify differences between directories (possibly on different servers)

            
### Pipe `exec` to `cat`

- List OSX applications and versions.
- Calculate comment density of shell scripts in a directory

            
### Pipe `exec` to `dd`

- replace old htaccess php AddHandler values with new one

            
### Pipe `exec` to `batch`

- Delete all files in folder without affecting load

            
### Pipe `exec` to `kill`

- Kill processes that have been running for more than a week

            
### Pipe `exec` to `sudo`

- OneLiner ICMP sniffer in Python

            
### Pipe `exec` to `vim`

- Edit all files found having a specific string found by grep

            
### Pipe `exec` to `rm`

- Convert all old SVN repositories in one directory to new format

            
### Pipe `exec` to `less`

- Recursive search inside the content of files under current directory - then view the result paginated with 'less'
- Find files modified in the last N days; list sorted by time

            
### Pipe `exec` to `head`

- Find biggest 10 files in current and subdirectories and sort by file size

            
### Pipe `exec` to `mkdir`

- Reorder file with max 100 file per folder

            
### Pipe `exec` to `jp`

- find pictures and renames them appending the containing folder name

            
### Pipe `exec` to `comm`

- Calculate comment density of shell scripts in a directory

            
### Pipe `exec` to `change`

- Change string in many files at once and more.

            
### Pipe `exec` to `ps`

- Backup all databases in a MySQL container

            
### Pipe `exec` to `zip`

- Backup all databases in a MySQL container

            
### Pipe `exec` to `gzip`

- Backup all databases in a MySQL container

            
### Pipe `exec` to `ip`

- Backup all databases in a MySQL container

            
### Pipe `exec` to `date`

- Backup all databases in a MySQL container
- print your iTunes App for iPhone/iTouch/iPad to show your friends which ones you have

            
### Pipe `exec` to `top`

- print your iTunes App for iPhone/iTouch/iPad to show your friends which ones you have

            
