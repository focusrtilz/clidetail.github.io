---
layout: manual
title:  "xargs - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `xargs`:__ Pipe the result of the given command to `xargs`.

| Command | percentage |
|--------|--------|
| find | 22% |
| w | 14% |
| name | 12% |
| awk | 11% |
| sed | 6% |
| grep | 5% |
| ls | 3% |
| cat | 1% |
| xargs | 1% |
| ps | 1% |
| tail | 1% |
| echo | 1% |
| id | 1% |
| ss | 1% |



## After

__The commands after `xargs`:__ Pipe the result of `xargs` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 19% |
| sort | 14% |
| w | 13% |
| awk | 8% |
| sed | 7% |
| xargs | 5% |
| id | 2% |
| su | 2% |
| tail | 2% |
| less | 1% |
| ss | 1% |
| vi | 1% |
| ls | 1% |
| bc | 1% |
| ip | 1% |
| wc | 1% |
| rm | 1% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `find` to `xargs`

- deleter
- Calculates fake folder checksum based on folder's files' md5sums
- a find and replace within text-based files, to locate and rewrite text en mass.
- Import an entire directory into clearcase
- Link a deep tree of files all into on directory
- sync a directory of corrupted jpeg with a source directory
- grep certain file types recursively
- Remove all .svn directories recursively from a directory
- Search for a string in all files recursively
- Find and delete files over 15 days
- Moving large number of files
- find files between specific date/times and move them to another folder
- List all text files (exclude binary files)
- Counts number of lines (in source code excluding comments)
- List folders containing only PNGs
- Recursive chmod all files and directories within the current directory
- calculate the total size of files in specified directory (in Megabytes)
- Search recursively to find a word or phrase in certain file types, such as C code
- find all files containing a pattern, open them using vi and place cursor to the first match, use 'n' and ':n' to navigate
- catch all the txt files into a start_dir tree and copy them into a single end_dir
- Convert one's Java source file encoding
- Show disk size of files matching a pattern, sorted in increasing size
- Find all videos under current directory using MIME a.k.a not using extension
- Find Files Which Should Be Executable But Are Not
- Get the total length of all video / audio in the current dir (and below) in H:m:s
- copy all Photos from Canon A520 to one place
- Recursively change permissions on directories, leave files alone.
- Recursively change permissions on files, leave directories alone.
- Find and copy scattered mp3 files into one directory
- A function to find the newest file in a directory
- Size for all directories inside the current one
- Change permission for all directories inside the current one
- Change permissions for all files in the current directory
- archlinux:Delete packages from pacman cache that are older than 7 days
- Find corrupted jpeg image files
- Find corrupted jpeg image files
- Show the disk usage for files pointed by symbolic link in a directory
- Create md5sum of files under the current dir excluding some directories
- Count lines of code across multiple file types, sorted by least amount of code to greatest
- Find and replace text within all files within a directory
- find . \( -name \*.cgi -o -name \*.txt -o -name \*.htm -o -name \*.html -o -name \*.shtml \) -print | xargs grep -s pattern
- Find a file and delete it
- Search and replace multiple files with substitution
- Convert uppercase to lowercase extensions
- Find latest modified log
- follow the content of all files in a directory
- rm filenames with spaces
- egrep -r replacement for UNIX systems
- get disk usage sum for files of type
- find files ignoring .svn and its decendents
- find files ignoring .svn and its decendents
- Recursively delete .svn folders
- Stat each file in a directory
- create a backup for all directories from current dir
- Show all symlinks
- can look for large files taking up disk spaces using the cmd
- Recursive replace of directory and file names in the current directory.
- Recursively find top 20 largest files (> 1MB) sort human readable format
- Kill processes that have been running for more than a week
- FAST Search and Replace for Strings in all Files in Directory
- Find biggest 10 files in current and subdirectories and sort by file size
- Find biggest 10 files in current and subdirectories and sort by file size
- Sort file greater than a specified size  in human readeable format including their path and typed by color, running from current directory
- Parallel mysql dump restore
- Get the total length of time in hours:minutes:seconds (HH:MM:SS) of all video (or audio) in the current dir (and below)
- find . -name "*.txt" | xargs sed -i "s/old/new/"
- Keep from having to adjust your volume constantly
- rename all images in folder with original date time from exif data
- Remove lines matching a pattern in files (backup any modified files)
- List by size all of the directories in a given tree.
- change ownership en masse of files owned by a specific user, including files and directories with spaces
- backup and remove files with access time older than 5 days.
- Optimal way of deleting huge numbers of files
- Faster find and move using the find and xargs commands. Almost as fast as locate.
- get diskusage of files modified during the last n days
- List down source files which include another source file
- search and replace in multiple files
- Compile all .less files to .css
- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Recursively remove all empty directories
- find the 10 largest directories
- Find all files containing a word
- Recursively search your directory tree files for a string
- Find inside specific file type function
- find xargs mv
- rename files (in this case pdfs) numerically in date order
- Counts number of lines
- create backup for all files from current dir
- Delete all Vagrant boxes
- Another way to calculate sum size of all files matching a pattern
- DELETE all those duplicate files but one based on md5 hash comparision in the current directory tree
- delete file name space
- Recursively remove .svn directories
- Search through files, ignoring .svn
- Append html-extension to all files in a directory structure that contains html-code.
- count all the lines of code in a directory recursively
- Altera texto dentro dos arquivos retornados pelo comando 'find'  (find and replacing strings on all files in directory)
- count total number of lines of ruby code
- Recursively remove .svn directories from the current location
- Get line count for any file ending with extension recursively rooted at the current directory.
- Remove all .svn folders
- recursive transform all contents of files to lowercase
- Command to rename multiple file in one go
- Move mp3 files to another path with existing subtree structure
- Find files and list them sorted by modification time
- Compare directories (using cmp to compare files byte by byte) to find files of the same name that differ
- archlinux:Delete packages from pacman cache that are older than 7 days
- Across an entire subtree, list not-empty directories that have no child-directories, globally sorted by their respective mtime
- Make a statistic about the lines of code
- gain all mp3s in subfolders w/o encoding
- Recursive chmod all files and directories within the current directory
- Recursive file content search
- Counts the number of TODOs in files with extension EXT found from the current dir.
- Get the total size (in human readable form) of all certain file types from the current directory
- Change permissions on a large number of directories quickly
- Search specified $TEXT1 and Replace that by specified arg ($TEXT2)
- search for text in files. recursive.
- Edit all files found having a specific string found by grep
- Print duplicate files
- recursively detecting files with a BOM
- Get last changed revision to all eclipse projects in a SVN working copy
- Resize images with mogrify with lots of options
- Resize images with mogrify with lots of options
- Simple Gumblar check command
- Recursively grep thorugh directory for string in file.
- Rename all the files in the current directory into their sha1sum
- find str in  in a directory which file extension is .php
- File count into directories
- optimize all png images
- Find class in jar
- Batch Convert SVG to PNG (in parallel)
- Write a shell script that removes files that contain a string
- Find 'foo' string inside files
- recurisvely md5 all files in a tree
- List used Perl libraries in Perl project
- files and directories in the last 1 hour
- Archive every file in /var/logs
- calculate md5 sums for every file in a directory tree
- Summarize total storage used by files obtained by a find command
- find files owned by root and make them your own again
- Prints the latest modified files in a directory tree recursively
- Find inside files two different patterns in the same line and for matched files show number of matched lines
- find . -name "*" -print | xargs grep -s pattern
- find external links in all html files in a directory list
- Recursively find files over a certain age and list in descending size order
- Recursively find files over a certain size and list in descending size order
- View all new log messages in real time with color
- Generate a playlist of all the files in the directory, newer first
- Recursively deletes DIR directories
- View all images
- Find broken symlinks
- Recursive grep of all c++ source under the current directory
- Find/Replace in a bunch of files and keep a log of the changes
- Grep all your PDFs in a row
- Recursive Line Count
- FInd the 10 biggest files taking up disk space
- find and reduce 8x parallel the size of JPG images without loosing quality via jpegoptim
- find and reduce 8x parallel the size of PNG images without loosing quality via optipng
- Show all files sorted by date
- find with high precission (nanoseconds 1/1,000,000,000s) the last changed file.
- Get the Volume labels all bitlocker volumes had before being encrypted
- Replace php short open tags
- Recursively replace a string in files with lines matching string
- find large files
- find and delete files smaller than specific size
- How to find all open files by a process in Solaris 10
- Find Duplicate Files (based on size first, then MD5 hash)
- md5sum for files with bad characters
- Replicate a directory structure from a 'basedir' in a remote server.
- Count music files in each directory
- finds the c files with lines containing 'mcs', in the folders under the current folder
- find *.lock files and delete
- Create a zip file ignoring .svn files
- grep (or anything else) many files with multiprocessor power
- Rezip a bunch of files
- find specified directory and delete it recursively including directories with spaces
- Grep only files matching certain pattern (Advanced)
- Delete all files in current directory that have been modified less than 5 days ago.
- Find and remove files
- Remove string with several escaped characters from all files under given path
- Find and delete thunderbird's msf files to make your profile work quickly again.
- Find Duplicate Files (based on size first, then MD5 hash)
- Recursive find and replace file extension / suffix (mass rename files)
- find all files in the current directory matching name * and searching for a string "mystring". outputs all the filenames that contain the search string.
- Delete large amount of files matching pattern
- Preview All Files in Directory
- Erase empty files
- find out how much space are occuipied by files smaller than 1024K
- List all text files (exclude binary files)
- Find Duplicate Files (based on size first, then MD5 hash)
- Recursively remove all empty directories
- Convert all the png files in a directory to gif in parallel. Requires imagemagick.
- rgrep: recursive grep without .svn
- Replicate a directory structure dropping the files
- Coping files, excluding certain files
- Create a tar of directory structure only
- Count occurrences of a word/token in a file
- Recursive Line Count
- Show directory sizes, refreshing every 2s
- How many lines in your PHP project without comments
- Compress files found with find
- find text in a file
- Find PHP files
- Find text in contents with multiple filename
- sort through source to find most common authors
- Search all files of type *.php for string 'specialFunction' and output the result in searchResult.txt
- Find the biggest files
- Find the biggest files
- remove all CVS directories
- Recursive find and replace in h an cpp files
- Find last modified files in a directory and its subdirectories
- List files containing given search string recursively
- exec chmod to subfiles
- Find the mounted storages
- Ultimate current directory usage command
- Ultimate current directory usage command
- Find directories in pwd, get disk usage, sort results
- add POD stubs recursively to all Perl modules
- Yardstick static analysis report sorted by which JavaScript files have the highest ratio of comments to code.
- Find Duplicate Files, excluding .svn-directories (based on size first, then MD5 hash)
- Collect a lot of icons from /usr/share/icons (may overwrite some, and complain a bit)
- Resize jpg images in the current directory using imagemagick
- Find files and list them sorted by modification time
- Find how much of your life you've wasted coding in the current directory
- Remove all the files except abc in the directory
- Search inside a folder of jar/zip files
- find files containing specifc pattern on filename and specific patternts in its content, open all in textmate
- copy selected folder found recursively under src retaining the structure
- Remove all .svn folders
- move contents of the current directory to the parent directory, then remove current directory.
- Find Files over 20Meg
- Use find to get around Argument list too long problem
- covert m4a audio files to wav
- find ip address in all files in /etc directory
- bzip2 all files in a directory older than 1 week (nicely)
- get md5sum for all files, skipping svn directories
- Recursive convert all print statements in py files from python2 to python3 form
- List all symlinks and see where they link to
- Remove the Apple quarantine
- Recursively remove .svn directories
- Summarise the size of all files matching a simple regex
- Quick findstring recursively in dirs (Alias from long find with xargs cmd)
- Search recursively to find a word in certain file types
- find something
- /bin/rm: Argument list too long.
- /bin/rm: Argument list too long.
- decompiler for jar files using jad
- Remove CVS root files under current directory
- How to archive all the files that are not modified in the last x number of days?
- Find broken symlinks and delete them
- finds all bean ids in all xml files from the current folder
- Parallel recursive convert files to other format and move them in another directory
- Use -t when using find and cp
- Find files and list them sorted by modification time
- a find and replace within text-based files
- Multiple open files and go directly to the line where some string is
- Finds javascript lodash/underscore methods in source code
- Print bitrate of each audio file
- chmod only files
- Clear cassandra snapshots that are older than 30 days
- Recursive remove files by mask
- Delete more than one month old thumbnails from home directory
- play all mp4 files on home directory
- find forms in a symfony 1.2 project
- View all new log messages in real time with color
- Find all files over a set size and displays accordingly
- Better "hours of video" summary for each file/dir in the current directory
- Find all videos under current directory
- Find all files with setuid bit
- Command for getting the list of files with perms, owners, groups info. Useful to find the checksum of 2 machines/images.
- Shows space used by each directory of the root filesystem excluding mountpoints/external filesystems (and sort the output)
- Count the total amount of hours of your music collection
- Search for MP3s from current directory and play them in random order.
- Archive all files that have not been modified in the last days
- Listing all your bundles Entities files to issue a doctrine:generate:entities
- Verbosely delete files matching specific name pattern, older than 15 days.
- Search for a <pattern> string inside all files in the current directory

            
### Pipe `w` to `xargs`

- enable all bash completions in gentoo
- Numeric zero padding file rename
- Kill any process with one command using program name
- Remove all unused shared memory segments for current user
- (Git) Revert files with changed mode, not content
- Move lots files with AWK
- Kill any lingering ssh processes
- find files between specific date/times and move them to another folder
- search for and kill a process in one blow
- Kill a bunch of processes with the same name
- Click on a GUI window and show its process ID and command used to run the process
- this svn script will commit all files excluding those with extensions {.project .classpath .properties .sh .number} and those with Status Modified or Added {M or A}
- Revert all modified files in an SVN repo
- grep files by date and delete
- google search
- Ultimate current directory usage command
- find svn uncommitted files and list their properties
- Get a list of stale AWS security groups
- Recursively change permissions on directories, leave files alone.
- Recursively change permissions on files, leave directories alone.
- A function to find the newest file in a directory
- Find corrupted jpeg image files
- Remove today's installed packages
- kill all process that belongs to you
- Download all images from a 4chan thread
- Kill all salt running processes
- Check CRL expiration time
- quick integer CPU benchmark
- small CPU benchmark with PI, bc and time.
- Kill processes associated with PATTERN
- Show the 1000*1000 and 1024*1024 size of HDs on system
- un-unzip a file
- Search and Replace across multiple files
- find files ignoring .svn and its decendents
- Commit all the changes in your java code
- Purge completely packages on debian / ubuntu
- Delete residues configuration files
- Kill all Zombie processes one-liner
- Remove git branches that do not have a remote tracking branch anymore
- Execute git submodule update in parallel with xargs
- XZIP many catalogs
- Open the current project on Github by typing gh
- remove files and directories with acces time older than a given date
- Short Information about loaded kernel modules
- ascii digital clock
- dynamically list open files for a given process name
- Delete files sorted by dates. Delete all other files except latest N files.
- SVN Clean
- rename all images in folder with original date time from exif data
- easily strace all your apache processes
- Play musical notes from octave of middle C
- add all files not under version control to repository
- Filter Android log output by PID
- Generate a Random (unicast) MAC address
- Purge configuration file of all desinstalled package
- Docker - delete unused images
- Docker - delete all non-running container
- This is a nice way to kill processes.. the example below is for firefox!!! substitute firefox for whatever the process name is...
- Execute AccuRev pop command to retrieve missing files from a workspace.
- Reload gnome-panel
- SVN Add Recursively
- kill all instances of an annoying or endless, thread-spawning process
- Recursively Add Changed Files to Subversion
- sync svn working copy and remote repository (auto adding new files)
- Find out which debian package a command (executable) belongs to on debian-based distros
- remove *.jpg smaller than 500x500
- List all global top level modles, then remove ALL npm packages with xargs
- add untracked/changed items to a git repository before doing a commit and/or sending upstream
- Altera texto dentro dos arquivos retornados pelo comando 'find'  (find and replacing strings on all files in directory)
- kill all pids from $PID
- Add all unversioned files to svn
- find and kill a pid for APP
- Purge configuration files of removed packages on  debian based systems
- automatically add and remove files in subversion
- automatically add and remove files in subversion
- List top ten files/directories sorted by size
- Download 40 top funnyjunk Images to the current directory
- Kill processes hogging up CPU (Flash after resume)
- give me back my sound card
- Kill all processes that listen to ports begin with 50 (50, 50x, 50xxx,...)
- Find a process by name and automatically kill it
- Remove semaphores
- kill an arbitrary process running on an Android device attached via USB debug cable
- Extract the emoticons regex from a running skype process
- kills all processes for a certain program e.g. httpd
- Batch Remove git tags from remote server
- Edit all files found having a specific string found by grep
- Edit all files found having a specific string found by grep
- Kill all processes belonging to a user
- Remove all older kernels then the current running kernel for Ubuntu/Debian base system
- Kill a lot of process once a time
- easily strace all your apache processes
- Git fetch all remote branches
- Add new file under svn version control.
- Clone all remote branches of a specific GitHub repository
- Add all unversioned files to svn
- Kill process by searching something from 'ps' command
- Run a script every time that script is saved (great for script development)
- Download all manuals RedHat 7 (CentOS/Fedora) with one command in Linux
- Export MySQL tables that begin with a string
- the executable that started the currently running oracle databases and the ORACLE_HOME relative to each
- Get bucket policy from a s3 buckets list
- delete some 4 months old docker images, not using force
- Edit all different files from 2 directories with gvim in difference mode (gvim -d)
- find and reduce 8x parallel the size of JPG images without loosing quality via jpegoptim
- find and reduce 8x parallel the size of PNG images without loosing quality via optipng
- Generate SHA1 hash for each file in a list
- Killing multiplpe process for one program like apache, wget, postfix etc.
- Killing multiplpe process for one program like apache, wget, postfix etc.
- How to find all open files by a process in Solaris 10
- Readd all files is missing from svn repo
- easily strace all your apache processes
- Numerically sorted human readable disk usage
- Remove string with several escaped characters from all files under given path
- kill all instances of an annoying or endless, thread-spawning process
- Arch Linux sort installed packages by size
- Remove annoying files from recently extracted zip archive
- Kill all Zombie processes one-liner
- Copy all shared libraries for a binary to directory
- Get the password for PostgreSQL backend db for VMware  vRA
- the executable that started the currently running oracle databases and the ORACLE_HOME relative to each
- kill all foo process
- generate a core dump of a process
- Show directory sizes, refreshing every 2s
- kill all running instances of wine and programs runned by it (exe)
- Kill all processes matching a given name
- compile source & then remove the dev tools you needed to install
- recursivly open all recently crashed vim buffers in restore mode
- Diff 2 branches, for a type of file & having a string in the diff
- easily strace all your apache processes
- make sure you don't add large file to your repository
- Calculate foldersize for each website on an ISPConfig environment
- Ultimate current directory usage command
- Remove all intermediate docker images after build
- Update all Docker Images
- Faciliate the work for lftp ('all' is needed if you wanna use it with getopts, otherwise its enough with the lftp line)
- Get the number of open sockets for a process
- Clear IPC Message Queue
- Docker: Remove all exited docker container
- Marks all manually installed deb packages as automatically installed.
- Docker: Remove all exited docker container
- the executable that started the currently running oracle databases and the ORACLE_HOME relative to each
- delete multiple files from git index that have already been deleted from disk
- copies 20 most recently downloaded mp3 files (such as from Miro) into a directory
- Play flash videos in  VLC
- Play flash videos in  VLC
- Remove all message queues owned by user foo
- Get count of kilobytes brew cleanup would free
- get md5sum for all files, skipping svn directories
- Delete all but the latest 5 files, ignoring directories
- Find Duplicate Files (based on size, name, and md5sum)
- shortcut to immediately view any script with less
- This will kill all ssh connections from a given host it does give some errors but it does work
- Delete all local git branches that have been merged and deleted from remote
- umount all nfs mounts on machine
- Build an exhaustive list of maildir folders for mutt
- Phrack 66 is out, but the .tar.gz is not there yet on phrack.org's website
- delete the files from the given directory except the PDF file
- Create a tar of modified/added files since revision 1792.
- delete unversioned files in a checkout from svn
- How to archive all the files that are not modified in the last x number of days?
- Find the package that installed a command
- Parallel recursive convert files to other format and move them in another directory
- all out
- kill all processes using a directory/file/etc
- get process id with program name
- Delete all aliases for a network interface on a (Free)BSD system
- Retrieve top ip threats from http://isc.sans.org/sources.html and add them into iptables output chain.
- easily strace all your apache *child* processes
- Clear cassandra snapshots that are older than 30 days
- purge half of files in backup directory
- List your largest installed packages.
- Anti DDOS
- Bulk install
- Kill all processes belonging to a user
- Add executable bit to all shell scripts under current directory recursively.
- Kill a process with its name
- sets desktop background using zenity
- Archive all files that have not been modified in the last days
- Replace duplicate files by hardlinks
- Remove all missing SVN files from the repository

            
### Pipe `name` to `xargs`

- untar undo
- a find and replace within text-based files, to locate and rewrite text en mass.
- Import an entire directory into clearcase
- sync a directory of corrupted jpeg with a source directory
- Destroy all ZFS snapshots
- grep certain file types recursively
- Remove all .svn directories recursively from a directory
- Find and delete files over 15 days
- Moving large number of files
- Counts number of lines (in source code excluding comments)
- List folders containing only PNGs
- Search recursively to find a word or phrase in certain file types, such as C code
- catch all the txt files into a start_dir tree and copy them into a single end_dir
- Convert one's Java source file encoding
- Show disk size of files matching a pattern, sorted in increasing size
- Get the total length of all video / audio in the current dir (and below) in H:m:s
- copy all Photos from Canon A520 to one place
- Find and copy scattered mp3 files into one directory
- Find corrupted jpeg image files
- Find corrupted jpeg image files
- Create md5sum of files under the current dir excluding some directories
- Count lines of code across multiple file types, sorted by least amount of code to greatest
- find . \( -name \*.cgi -o -name \*.txt -o -name \*.htm -o -name \*.html -o -name \*.shtml \) -print | xargs grep -s pattern
- Find a file and delete it
- Search and replace multiple files with substitution
- Convert uppercase to lowercase extensions
- Find latest modified log
- get disk usage sum for files of type
- find files ignoring .svn and its decendents
- find files ignoring .svn and its decendents
- Recursively delete .svn folders
- Recursive replace of directory and file names in the current directory.
- Kill processes that have been running for more than a week
- Get the total length of time in hours:minutes:seconds (HH:MM:SS) of all video (or audio) in the current dir (and below)
- find . -name "*.txt" | xargs sed -i "s/old/new/"
- Keep from having to adjust your volume constantly
- Remove lines matching a pattern in files (backup any modified files)
- Faster find and move using the find and xargs commands. Almost as fast as locate.
- List down source files which include another source file
- search and replace in multiple files
- Find all files containing a word
- Find inside specific file type function
- find xargs mv
- rename files (in this case pdfs) numerically in date order
- Counts number of lines
- Delete all Vagrant boxes
- Another way to calculate sum size of all files matching a pattern
- Recursively remove .svn directories
- Counting the source code's line numbers C/C++ Java
- Search through files, ignoring .svn
- count all the lines of code in a directory recursively
- Altera texto dentro dos arquivos retornados pelo comando 'find'  (find and replacing strings on all files in directory)
- Find process tree in friendly format
- count total number of lines of ruby code
- Recursively remove .svn directories from the current location
- Get line count for any file ending with extension recursively rooted at the current directory.
- Remove all .svn folders
- Command to rename multiple file in one go
- Move mp3 files to another path with existing subtree structure
- delete files except some file
- Upgrade pip-installed python packages
- Make a statistic about the lines of code
- gain all mp3s in subfolders w/o encoding
- Recursive chmod all files and directories within the current directory
- Recursive file content search
- Counts the number of TODOs in files with extension EXT found from the current dir.
- Get the total size (in human readable form) of all certain file types from the current directory
- search for text in files. recursive.
- Get last changed revision to all eclipse projects in a SVN working copy
- Get last changed revision to all eclipse projects in a SVN working copy
- Resize images with mogrify with lots of options
- Resize images with mogrify with lots of options
- Exclude dumping of specific tables with same prefix from  a single database
- Counting the source code's line numbers C/C++ Java
- Simple Gumblar check command
- find str in  in a directory which file extension is .php
- optimize all png images
- Find class in jar
- Batch Convert SVG to PNG (in parallel)
- List used Perl libraries in Perl project
- Archive every file in /var/logs
- Summarize total storage used by files obtained by a find command
- Prints the latest modified files in a directory tree recursively
- Find inside files two different patterns in the same line and for matched files show number of matched lines
- find . -name "*" -print | xargs grep -s pattern
- find external links in all html files in a directory list
- Recursively deletes DIR directories
- View all images
- Recursive grep of all c++ source under the current directory
- Grep all your PDFs in a row
- find and reduce 8x parallel the size of JPG images without loosing quality via jpegoptim
- find and reduce 8x parallel the size of PNG images without loosing quality via optipng
- Replace php short open tags
- find *.lock files and delete
- Create a zip file ignoring .svn files
- Rezip a bunch of files
- find specified directory and delete it recursively including directories with spaces
- Find and remove files
- Remove string with several escaped characters from all files under given path
- Find and delete thunderbird's msf files to make your profile work quickly again.
- Recursive find and replace file extension / suffix (mass rename files)
- Clean up the garbage an accidental unzipping makes
- find all files in the current directory matching name * and searching for a string "mystring". outputs all the filenames that contain the search string.
- Delete large amount of files matching pattern
- Convert all the png files in a directory to gif in parallel. Requires imagemagick.
- rgrep: recursive grep without .svn
- Coping files, excluding certain files
- generate a core dump of a process
- Count occurrences of a word/token in a file
- Recursive Line Count
- How many lines in your PHP project without comments
- Compress files found with find
- Find PHP files
- Find text in contents with multiple filename
- sort through source to find most common authors
- Search all files of type *.php for string 'specialFunction' and output the result in searchResult.txt
- remove all CVS directories
- kills all php5-fcgi processes for user per name
- Recursive find and replace in h an cpp files
- Find the mounted storages
- add POD stubs recursively to all Perl modules
- Yardstick static analysis report sorted by which JavaScript files have the highest ratio of comments to code.
- Find Duplicate Files, excluding .svn-directories (based on size first, then MD5 hash)
- Resize jpg images in the current directory using imagemagick
- Find how much of your life you've wasted coding in the current directory
- Remove all the files except abc in the directory
- Search inside a folder of jar/zip files
- find files containing specifc pattern on filename and specific patternts in its content, open all in textmate
- copy selected folder found recursively under src retaining the structure
- Remove all .svn folders
- move contents of the current directory to the parent directory, then remove current directory.
- Use find to get around Argument list too long problem
- covert m4a audio files to wav
- get md5sum for all files, skipping svn directories
- Recursive convert all print statements in py files from python2 to python3 form
- Recursively remove .svn directories
- Delete all apps in a heroku org
- Summarise the size of all files matching a simple regex
- Search recursively to find a word in certain file types
- find something
- /bin/rm: Argument list too long.
- /bin/rm: Argument list too long.
- decompiler for jar files using jad
- Remove CVS root files under current directory
- finds all bean ids in all xml files from the current folder
- Parallel recursive convert files to other format and move them in another directory
- Use -t when using find and cp
- Copy modified files between two Git commits
- Finds javascript lodash/underscore methods in source code
- Clear cassandra snapshots that are older than 30 days
- Recursive remove files by mask
- Clean the /boot directory
- play all mp4 files on home directory
- find forms in a symfony 1.2 project
- generate file list modified since last commit and export to tar file
- Search for MP3s from current directory and play them in random order.
- Listing all your bundles Entities files to issue a doctrine:generate:entities
- Verbosely delete files matching specific name pattern, older than 15 days.

            
### Pipe `awk` to `xargs`

- enable all bash completions in gentoo
- Numeric zero padding file rename
- Kill any process with one command using program name
- Remove all unused shared memory segments for current user
- (Git) Revert files with changed mode, not content
- Move lots files with AWK
- Kill any lingering ssh processes
- search for and kill a process in one blow
- Kill a bunch of processes with the same name
- Click on a GUI window and show its process ID and command used to run the process
- this svn script will commit all files excluding those with extensions {.project .classpath .properties .sh .number} and those with Status Modified or Added {M or A}
- Revert all modified files in an SVN repo
- grep files by date and delete
- Ultimate current directory usage command
- find svn uncommitted files and list their properties
- Remove today's installed packages
- kill all process that belongs to you
- Download all images from a 4chan thread
- Kill all salt running processes
- Check CRL expiration time
- Kill processes associated with PATTERN
- Show the 1000*1000 and 1024*1024 size of HDs on system
- un-unzip a file
- Commit all the changes in your java code
- Purge completely packages on debian / ubuntu
- Delete residues configuration files
- Kill all Zombie processes one-liner
- Remove git branches that do not have a remote tracking branch anymore
- Execute git submodule update in parallel with xargs
- XZIP many catalogs
- Open the current project on Github by typing gh
- remove files and directories with acces time older than a given date
- Short Information about loaded kernel modules
- dynamically list open files for a given process name
- Delete files sorted by dates. Delete all other files except latest N files.
- SVN Clean
- easily strace all your apache processes
- Play musical notes from octave of middle C
- add all files not under version control to repository
- Filter Android log output by PID
- Purge configuration file of all desinstalled package
- Docker - delete unused images
- Docker - delete all non-running container
- This is a nice way to kill processes.. the example below is for firefox!!! substitute firefox for whatever the process name is...
- Execute AccuRev pop command to retrieve missing files from a workspace.
- Reload gnome-panel
- SVN Add Recursively
- kill all instances of an annoying or endless, thread-spawning process
- Recursively Add Changed Files to Subversion
- sync svn working copy and remote repository (auto adding new files)
- remove *.jpg smaller than 500x500
- List all global top level modles, then remove ALL npm packages with xargs
- add untracked/changed items to a git repository before doing a commit and/or sending upstream
- kill all pids from $PID
- Add all unversioned files to svn
- find and kill a pid for APP
- Purge configuration files of removed packages on  debian based systems
- automatically add and remove files in subversion
- automatically add and remove files in subversion
- List top ten files/directories sorted by size
- Download 40 top funnyjunk Images to the current directory
- Kill processes hogging up CPU (Flash after resume)
- give me back my sound card
- Kill all processes that listen to ports begin with 50 (50, 50x, 50xxx,...)
- Find a process by name and automatically kill it
- Remove semaphores
- kill an arbitrary process running on an Android device attached via USB debug cable
- Extract the emoticons regex from a running skype process
- kills all processes for a certain program e.g. httpd
- Batch Remove git tags from remote server
- Edit all files found having a specific string found by grep
- Edit all files found having a specific string found by grep
- Kill all processes belonging to a user
- Remove all older kernels then the current running kernel for Ubuntu/Debian base system
- Kill a lot of process once a time
- easily strace all your apache processes
- Git fetch all remote branches
- Add new file under svn version control.
- Clone all remote branches of a specific GitHub repository
- Add all unversioned files to svn
- Kill process by searching something from 'ps' command
- Download all manuals RedHat 7 (CentOS/Fedora) with one command in Linux
- the executable that started the currently running oracle databases and the ORACLE_HOME relative to each
- delete some 4 months old docker images, not using force
- Edit all different files from 2 directories with gvim in difference mode (gvim -d)
- Killing multiplpe process for one program like apache, wget, postfix etc.
- Killing multiplpe process for one program like apache, wget, postfix etc.
- How to find all open files by a process in Solaris 10
- Readd all files is missing from svn repo
- easily strace all your apache processes
- Numerically sorted human readable disk usage
- kill all instances of an annoying or endless, thread-spawning process
- Arch Linux sort installed packages by size
- Remove annoying files from recently extracted zip archive
- Kill all Zombie processes one-liner
- Copy all shared libraries for a binary to directory
- the executable that started the currently running oracle databases and the ORACLE_HOME relative to each
- kill all foo process
- generate a core dump of a process
- kill all running instances of wine and programs runned by it (exe)
- Kill all processes matching a given name
- compile source & then remove the dev tools you needed to install
- easily strace all your apache processes
- make sure you don't add large file to your repository
- Remove all intermediate docker images after build
- Update all Docker Images
- Faciliate the work for lftp ('all' is needed if you wanna use it with getopts, otherwise its enough with the lftp line)
- Get the number of open sockets for a process
- Clear IPC Message Queue
- Docker: Remove all exited docker container
- Docker: Remove all exited docker container
- the executable that started the currently running oracle databases and the ORACLE_HOME relative to each
- delete multiple files from git index that have already been deleted from disk
- copies 20 most recently downloaded mp3 files (such as from Miro) into a directory
- Play flash videos in  VLC
- Play flash videos in  VLC
- Remove all message queues owned by user foo
- Get count of kilobytes brew cleanup would free
- Delete all but the latest 5 files, ignoring directories
- Find Duplicate Files (based on size, name, and md5sum)
- This will kill all ssh connections from a given host it does give some errors but it does work
- Delete all local git branches that have been merged and deleted from remote
- umount all nfs mounts on machine
- delete the files from the given directory except the PDF file
- Create a tar of modified/added files since revision 1792.
- delete unversioned files in a checkout from svn
- all out
- kill all processes using a directory/file/etc
- get process id with program name
- Delete all aliases for a network interface on a (Free)BSD system
- Retrieve top ip threats from http://isc.sans.org/sources.html and add them into iptables output chain.
- easily strace all your apache *child* processes
- purge half of files in backup directory
- Anti DDOS
- Bulk install
- Kill all processes belonging to a user
- Add executable bit to all shell scripts under current directory recursively.
- Kill a process with its name
- Remove all missing SVN files from the repository

            
### Pipe `sed` to `xargs`

- tail all logs opened by all java processes
- bulk rename files with sed, one-liner
- bulk rename files with sed, one-liner
- Check out hijacked files in clearcase
- do a full file listing of every file found with locate
- Show contents of all git objects in a git repo
- Download all images from a 4chan thread
- Find and delete thunderbird's msf files to make your profile work quickly again.
- Git reset added new files
- Purge application's residual config & orphans
- restore the contents of a deleted file for which a descriptor is still available
- Clean-up release directories keeping the only the latest two
- Deleting Files from svn which are missing
- purge installed but unused linux headers, image, or modules
- Shuffle mp3 files in current folder and play them.
- Show demo of toilet fonts
- Adjust gamma so monitor doesn't mess up your body's clock
- Purge configuration files of removed packages on  debian based systems
- detect the fastest ldap server on a intranet
- Compares two source directories, one original and one post configure and deletes the differences in the source folder
- copy zip files which contains XXX
- pc is ghosted?!
- Get the total length of all videos in the current dir in H:m:s
- add all files not under version control to repository
- Compute the numeric sum of a file
- Video Google download
- Video Google download
- Convert Hex to String
- Generate a Random (unicast) MAC address
- Compile all .less files to .css
- archive all files containing local changes (svn)
- Url Encode
- Move all but the newest 100 emails to a gzipped archive
- Edit all "text" files (exclude binary and directories) in the current directory
- Remove all unused kernels with apt-get
- easily strace all your apache processes
- Edit all files found having a specific string found by grep
- Delete all but latest file in a directory
- See what apache is doing without restarting it in debug mode
- Move itens from subdirectories to current directory
- Remove all zero size files from current directory (not recursive)
- Backup all MySQL Databases to individual files
- Automatically tunnel all ports of running docker instances in boot2docker
- Find/Replace in a bunch of files and keep a log of the changes
- Move all files untracked by git into a directory
- Download all images from a 4chan thread
- md5sum for files with bad characters
- Replicate a directory structure from a 'basedir' in a remote server.
- Mark manually deleted files as deleted in svn
- Get the password for PostgreSQL backend db for VMware  vRA
- Update all outdated Python packages through pip.
- Add new files/directory to subversion repository
- recursivly open all recently crashed vim buffers in restore mode
- Google Authenticator. Setup a user and email them a QR code.
- Scan a gz file for non-printable characters and display each line number and line that contains them.
- Create a false directory structure for testing your commands
- extracting the email-server's ip-address.
- Open browser from terminal to create PR after pushing something in Git in MAC
- Change all xxx.png files' name to xxx@2x.png for iOS
- urldecoding
- Fetch all GPG keys that are currently missing in your keyring
- full text(CJK) search mails and link the result to $MAILDIR/bingo/cur/
- Search and play MP3 from Skreemr
- Recursively remove .svn directories
- Download files linked in a RSS feed
- Get the rough (german) time from Twitter by @zurvollenstunde
- Get the rough (german) time from Twitter by @zurvollenstunde
- rename multiple files with different name, eg converting all txt to csv
- Cleanup remote git repository of all branches already merged into master
- enable all bash completions in gentoo
- urldecoding
- Download files linked in a RSS feed
- Short Information about loaded kernel modules
- What's the weather like?
- What's the weather like?
- See the total amount of data on an AIX machine

            
### Pipe `grep` to `xargs`

- Remove everything except that file
- search installed files of package, that doesn't remember his name well. On rpm systems
- Search through files, ignoring .svn
- Update all Docker Images
- Remove all docker images to cleanup disk
- find all files containing a pattern, open them using vi and place cursor to the first match, use 'n' and ':n' to navigate
- Compress logs older than 7 days
- find files that contain foo, but not bar
- find names of files ending in *log that have both foo and bar
- list all crontabs for users
- Git Global search and replace
- Download all images from a 4chan thread
- Using Grep & Xargs to clean folders
- Matching Strings
- kill defunct processes by killing their parents
- grep across a git repo and open matching files in gedit
- Search and Replace across multiple files
- Parallel file downloading with wget
- Search ruby-files with non-ascii character, but without encoding directive
- FAST Search and Replace for Strings in all Files in Directory
- Arguments too long
- Kill multiple instances of a running process
- Remove lines matching a pattern in files (backup any modified files)
- Replace all tabs with spaces in an application
- remove script from infected html files
- Create md5sum of a directory
- Search and replace in multiple files recursively
- Delete all files and folders except one file/dir
- Get version of loaded kernel module
- Get all files of particular type (say, PDF) listed on some wegpage (say, example.com)
- List packages manually installed with process currently running
- Find process tree in friendly format
- find and kill a pid for APP
- delete files except some file
- Recompress all text files in a subdirectory with lzma
- recursive search and replace old with new string, inside files
- Add all not commited files to svn
- Edit all files found having a specific string found by grep
- Edit all files found having a specific string found by grep
- Prints total line count contribution per user for an SVN repository
- Command to kill PID
- Exclude dumping of specific tables with same prefix from  a single database
- copy audio file from playlist to a floder
- Extract binary from .text section (shellcode)
- Monitor logs in Linux using Tail
- recursive search and replace old with new string, inside files
- Download all files from podcast RSS feed
- Remove string with several escaped characters from all files under given path
- Delete all local git branches that have been merged
- Recursively remove all empty directories
- Remove old kernel packages
- change the all files which contains xxxxx to yyyyyy
- rgrep: recursive grep without .svn
- Diff 2 branches, for a type of file & having a string in the diff
- Download all Red Hat Manuals - A better way by user Flatcap
- kills all php5-fcgi processes for user per name
- delete files containing matching text
- Cross-region delete aws ec2 image
- Rspec: run specs that were created/changed on my branch only
- Check the age of the filesystem
- find files containing specifc pattern on filename and specific patternts in its content, open all in textmate
- Export ms access mdb to mysql sql
- Prints total line count contribution per user for an SVN repository
- One line keylogger
- Play random music from blip.fm
- a find and replace within text-based files
- Multiple open files and go directly to the line where some string is
- Unlock your KDE4 session remotely (for boxes locked by KDE lock utility)
- Count the lines of source code in directory, ignoring files in generated by svn
- Clean the /boot directory
- Remove all but One
- Download files linked in a RSS feed

            
### Pipe `ls` to `xargs`

- Randomize lines (opposite of | sort)
- Move lots files with AWK
- list each file/directory size in a directory
- Copy all images to external hard-drive
- List all symbolic links in current directory
- Generate SHA1 hash for each file in a list
- Arguments too long
- use ImageMagik to convert tint (hue rotation) of an icon set directory.
- extract all tgz in current dir
- Command to rename multiple file in one go
- Prints per-line contribution per author for a GIT repository
- Across an entire subtree, list not-empty directories that have no child-directories, globally sorted by their respective mtime
- Edit all "text" files (exclude binary and directories) in the current directory
- SAR - List top CPU usage spikes over the last month using sar.
- SAR - Get the monthly queue length average using sar -q for both the runq-sz and plist-sz.
- delete multiple files with spaces in filenames (with confirmation)
- Do some learning...
- git remove files which have been deleted
- Get the Volume labels all bitlocker volumes had before being encrypted
- Prints per-line contribution per author for a GIT repository
- GZip all files in a directory separately
- Find running binary executables that were not installed using dpkg
- for newbies, how to get one line info about all /bin programs
- Calculate foldersize for each website on an ISPConfig environment
- Checkout all modified files with spaces with git
- List the size (in human readable form) of all sub folders from the current location
- Show the UUID of a filesystem or partition
- git-rm for all deleted files, including those with space/quote/unprintable characters in their filename/path
- download a list of urls
- Create subdirectory and move files into it
- delete the files from the given directory except the PDF file
- List all file and directory on user's home with details
- Delete more than one month old thumbnails from home directory
- unrar all part1 files in a directory
- sets desktop background using zenity
- See the total amount of data on an AIX machine
- IBM AIX: Verify a sha256sum listing with openssl

            
### Pipe `cat` to `xargs`

- do a full file listing of every file found with locate
- Show contents of all git objects in a git repo
- Copy files from list with hierarchy
- Instant threadpool
- Create SSH key exchange from one host to the other
- Move all located items to folder
- Find running binary executables that were not installed using dpkg
- Delete all files from a locate output
- show a sorted list of directory whose name matches the pattern
- download a list of urls
- Find 'foo' in located files
- Basic sed usage with xargs to refactor a node.js depdendency
- look some php code by some keywords
- locate a filename, make sure it exists and display it with full details
- IBM AIX: Verify a sha256sum listing with openssl

            
### Pipe `xargs` to `xargs`

- sync a directory of corrupted jpeg with a source directory
- Show contents of all git objects in a git repo
- Find corrupted jpeg image files
- Commit all the changes in your java code
- FAST Search and Replace for Strings in all Files in Directory
- Remove lines matching a pattern in files (backup any modified files)
- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Find out current working directory of a process
- Get last changed revision to all eclipse projects in a SVN working copy
- Find Duplicate Files (based on size first, then MD5 hash)
- Find Duplicate Files (based on size first, then MD5 hash)
- Find Duplicate Files, excluding .svn-directories (based on size first, then MD5 hash)
- /bin/rm: Argument list too long.
- Find the package that installed a command

            
### Pipe `ps` to `xargs`

- Destroy all ZFS snapshots
- View All Processess Cmdlines and Environments
- Open the current project on Github by typing gh
- Quickly add a new user to all groups the default user is in
- Find out current working directory of a process
- get some information about the parent process from a given process
- Download all manuals RedHat 7 (CentOS/Fedora) with one command in Linux
- Automatically tunnel all ports of running docker instances in boot2docker
- Docker: Remove all exited docker container
- List docker volumes by container
- Delete all apps in a heroku org
- Clear cassandra snapshots that are older than 30 days
- find forms in a symfony 1.2 project
- What's the weather like?

            
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

            
### Pipe `echo` to `xargs`

- Show contents of all git objects in a git repo
- for too many arguments by *
- run command on a group of nodes in parallel
- Commit all the changes in your java code
- draw rhomb
- Find out current working directory of a process
- Get bucket policy from a s3 buckets list
- grep 'hoge' **/*  => Argument list too long
- Get the Volume labels all bitlocker volumes had before being encrypted
- Ultimate current directory usage command
- List the most recent dates in reverse-chronological order
- Create subdirectory and move files into it
- Phrack 66 is out, but the .tar.gz is not there yet on phrack.org's website
- Print the contents of $VARIABLE, six words at a time
- Better "hours of video" summary for each file/dir in the current directory
- Replace duplicate files by hardlinks
- IBM AIX: Verify a sha256sum listing with openssl

            
### Pipe `id` to `xargs`

- Find all videos under current directory using MIME a.k.a not using extension
- View All Processess Cmdlines and Environments
- change ownership en masse of files owned by a specific user, including files and directories with spaces
- Create SSH key exchange from one host to the other
- Find out current working directory of a process
- get some information about the parent process from a given process
- Remove string with several escaped characters from all files under given path
- find files containing specifc pattern on filename and specific patternts in its content, open all in textmate
- One line keylogger
- Phrack 66 is out, but the .tar.gz is not there yet on phrack.org's website
- all out
- sets desktop background using zenity
- generate file list modified since last commit and export to tar file

            
### Pipe `ss` to `xargs`

- FAST Search and Replace for Strings in all Files in Directory
- Kill multiple instances of a running process
- Compile all .less files to .css
- Compile all .less files to .css
- Create SSH key exchange from one host to the other
- Duplicate installed packages from one machine to the other (RPM-based systems)
- Download all manuals RedHat 7 (CentOS/Fedora) with one command in Linux
- Replicate a directory structure from a 'basedir' in a remote server.
- Get the password for PostgreSQL backend db for VMware  vRA
- generate a core dump of a process
- Phrack 66 is out, but the .tar.gz is not there yet on phrack.org's website
- decompiler for jar files using jad
- Multiple open files and go directly to the line where some string is
- Clear cassandra snapshots that are older than 30 days

            
### Pipe `tar` to `xargs`

- untar undo
- catch all the txt files into a start_dir tree and copy them into a single end_dir
- Clean up after a poorly-formed tar file
- backup and remove files with access time older than 5 days.
- Remove all files previously extracted from a tar(.gz) file.

            
### Pipe `nc` to `xargs`

- Import an entire directory into clearcase
- Search ruby-files with non-ascii character, but without encoding directive
- Find out which debian package a command (executable) belongs to on debian-based distros

            
### Pipe `locate` to `xargs`

- do a full file listing of every file found with locate
- Move all located items to folder
- Delete all files from a locate output
- show a sorted list of directory whose name matches the pattern
- Find 'foo' in located files
- look some php code by some keywords
- locate a filename, make sure it exists and display it with full details

            
### Pipe `top` to `xargs`

- Open current wallpaper on nautilus file-manager (change file-manager name for others)
- Download 40 top funnyjunk Images to the current directory

            
### Pipe `curl` to `xargs`

- geoip information
- Localize a Public IP on a specific interface
- What's the weather like?

            
### Pipe `ifconfig` to `xargs`

- geoip information
- Localize a Public IP on a specific interface
- Read just the IP address of a device

            
### Pipe `head` to `xargs`

- Copying part of the files from one directory to another
- Check whether laptop is running on battery or cable
- set desktop background to highest-rated image from Reddit /r/wallpapers
- Add 10 random unrated songs to xmms2 playlist
- generate a randome 10 character password
- Update the working tree to the latest git commit
- command shell generate random strong password
- Blink Caps Lock on HDD activity
- Get AWS temporary credentials ready to export based on a MFA virtual appliance
- set desktop background to highest-rated image from Reddit /r/wallpapers
- Tail the most recently modified file

            
### Pipe `touch` to `xargs`

- find files between specific date/times and move them to another folder

            
### Pipe `last` to `xargs`

- find files between specific date/times and move them to another folder

            
### Pipe `sudo` to `xargs`

- remove oprhan package on debian based system
- get diskusage of files modified during the last n days
- Export MySQL tables that begin with a string
- Get the Volume labels all bitlocker volumes had before being encrypted
- Delete large amount of files matching pattern
- Find the mounted storages

            
### Pipe `su` to `xargs`

- remove oprhan package on debian based system
- Ultimate current directory usage command
- Clean up after a poorly-formed tar file
- get diskusage of files modified during the last n days
- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Export MySQL tables that begin with a string
- Get the Volume labels all bitlocker volumes had before being encrypted
- Delete large amount of files matching pattern
- Find the mounted storages
- Play flash videos in  VLC
- Create subdirectory and move files into it
- Phrack 66 is out, but the .tar.gz is not there yet on phrack.org's website

            
### Pipe `exec` to `xargs`

- find all files containing a pattern, open them using vi and place cursor to the first match, use 'n' and ':n' to navigate
- Kill processes that have been running for more than a week
- Edit all files found having a specific string found by grep
- Remove string with several escaped characters from all files under given path
- find files containing specifc pattern on filename and specific patternts in its content, open all in textmate
- a find and replace within text-based files

            
### Pipe `rm` to `xargs`

- Convert one's Java source file encoding
- Find Files Which Should Be Executable But Are Not
- Remove lines matching a pattern in files (backup any modified files)
- List docker volumes by container
- /bin/rm: Argument list too long.
- Find all files with setuid bit

            
### Pipe `rev` to `xargs`

- copy all Photos from Canon A520 to one place
- Check Rubocop offenses in your working branch

            
### Pipe `sort` to `xargs`

- List all ubuntu installed packages in a single line
- Show all video files in the current directory (and sub-dirs)
- Btrfs: Find file names with checksum errors
- Get status of LXC
- List packages manually installed with process currently running
- lotto generator
- Download mp3 files linked in a RSS podcast feed
- Sorted, recursive long file listing
- lsof - cleaned up for just open listening ports, the process, and the owner of the process
- lsof - cleaned up for just open listening ports, the process, and the owner of the process
- lotto generator
- umount --rbind mount with submounts

            
### Pipe `man` to `xargs`

- archlinux:Delete packages from pacman cache that are older than 7 days
- use a command's output as arguments for another
- Remove orphaned dependencies on Arch
- Marks all manually installed deb packages as automatically installed.
- Delete all apps in a heroku org

            
### Pipe `jp` to `xargs`

- Find corrupted jpeg image files
- Find corrupted jpeg image files
- Copy all images to external hard-drive
- rm filenames with spaces
- Parallel file downloading with wget
- Resize images with mogrify with lots of options
- Resize images with mogrify with lots of options
- View all images
- find&grep all in once
- Resize jpg images in the current directory using imagemagick

            
### Pipe `comm` to `xargs`

- use a command's output as arguments for another
- generate file list modified since last commit and export to tar file

            
### Pipe `wc` to `xargs`

- quick integer CPU benchmark
- small CPU benchmark with PI, bc and time.

            
### Pipe `cd` to `xargs`

- View All Processess Cmdlines and Environments
- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Phrack 66 is out, but the .tar.gz is not there yet on phrack.org's website

            
### Pipe `mount` to `xargs`

- FAST Search and Replace for Strings in all Files in Directory

            
### Pipe `tac` to `xargs`

- FAST Search and Replace for Strings in all Files in Directory
- Binary clock
- Recursively remove all empty directories
- Recursively remove all empty directories

            
### Pipe `vi` to `xargs`

- Get the total length of time in hours:minutes:seconds (HH:MM:SS) of all video (or audio) in the current dir (and below)
- download a sequence of vim patch

            
### Pipe `du` to `xargs`

- Short Information about loaded kernel modules
- List all global top level modles, then remove ALL npm packages with xargs
- Ultimate current directory usage command

            
### Pipe `date` to `xargs`

- ascii digital clock
- backup and remove files with access time older than 5 days.
- Localize a Public IP on a specific interface

            
### Pipe `cp` to `xargs`

- List down source files which include another source file
- Recursive find and replace in h an cpp files

            
### Pipe `groups` to `xargs`

- Quickly add a new user to all groups the default user is in

            
### Pipe `less` to `xargs`

- Compile all .less files to .css
- Compile all .less files to .css

            
### Pipe `ip` to `xargs`

- Delete all files and folders except one file/dir
- Purge frozen messages in Exim
- Purge frozen messages in Exim
- Upgrade pip-installed python packages
- Run a script every time that script is saved (great for script development)
- Clean up the garbage an accidental unzipping makes
- Remove files unpacked by unzip
- shortcut to immediately view any script with less
- decompiler for jar files using jad
- What's the weather like?

            
### Pipe `diff` to `xargs`

- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Copy modified files between two Git commits
- generate file list modified since last commit and export to tar file

            
### Pipe `ln` to `xargs`

- search for a pattern (regex) in all text files (ignoring binary files) in a directory tree
- Extract binary from .text section (shellcode)

            
### Pipe `alias` to `xargs`

- Recursively search your directory tree files for a string
- rgrep: recursive grep without .svn
- Quick findstring recursively in dirs (Alias from long find with xargs cmd)

            
### Pipe `df` to `xargs`

- rename files (in this case pdfs) numerically in date order
- Get all files of particular type (say, PDF) listed on some wegpage (say, example.com)
- Summarize total storage used by files obtained by a find command
- Prints the latest modified files in a directory tree recursively
- Grep all your PDFs in a row
- Download all Red Hat Manuals - A better way by user Flatcap
- Use -t when using find and cp

            
### Pipe `which` to `xargs`

- Find out which debian package a command (executable) belongs to on debian-based distros
- shortcut to immediately view any script with less
- Find the package that installed a command

            
### Pipe `ssh` to `xargs`

- Create SSH key exchange from one host to the other
- Duplicate installed packages from one machine to the other (RPM-based systems)
- Replicate a directory structure from a 'basedir' in a remote server.

            
### Pipe `dstat` to `xargs`

- Blink Caps Lock on HDD activity

            
### Pipe `exit` to `xargs`

- Kill processes hogging up CPU (Flash after resume)
- Docker: Remove all exited docker container

            
### Pipe `host` to `xargs`

- Duplicate installed packages from one machine to the other (RPM-based systems)
- Replicate a directory structure from a 'basedir' in a remote server.

            
### Pipe `ping` to `xargs`

- Download all recently uploaded pastes on pastebin.com

            
### Pipe `bc` to `xargs`

- Doing some floating point calculations with rounding (e.g. at the 3rd decimal)
- Remove all the files except abc in the directory

            
### Pipe `mysql` to `xargs`

- Export MySQL tables that begin with a string

            
### Pipe `mv` to `xargs`

- Generate SHA1 hash for each file in a list

            
### Pipe `dd` to `xargs`

- Undo Mercurial add before commit

            
### Pipe `change` to `xargs`

- Change string in many files at once and more.

            
### Pipe `zip` to `xargs`

- Clean up the garbage an accidental unzipping makes
- Remove files unpacked by unzip
- decompiler for jar files using jad

            
### Pipe `unzip` to `xargs`

- Clean up the garbage an accidental unzipping makes
- decompiler for jar files using jad

            
### Pipe `password` to `xargs`

- Get the password for PostgreSQL backend db for VMware  vRA

            
### Pipe `vim` to `xargs`

- download a sequence of vim patch

            
### Pipe `ftp` to `xargs`

- download a sequence of vim patch

            
### Pipe `mkdir` to `xargs`

- Collect a lot of icons from /usr/share/icons (may overwrite some, and complain a bit)
- Create subdirectory and move files into it
- Phrack 66 is out, but the .tar.gz is not there yet on phrack.org's website
- decompiler for jar files using jad

            
### Pipe `cal` to `xargs`

- Opens files containing search term in vim with search term highlighted

            
### Pipe `pwd` to `xargs`

- Parallel recursive convert files to other format and move them in another directory

            
### Pipe `dig` to `xargs`

- Get the rough (german) time from Twitter by @zurvollenstunde
- Get the rough (german) time from Twitter by @zurvollenstunde

            
### Pipe `screen` to `xargs`

- Unlock your KDE4 session remotely (for boxes locked by KDE lock utility)

            
### Pipe `uname` to `xargs`

- Clean the /boot directory

            
### Pipe `chmod` to `xargs`

- IBM AIX: Verify a sha256sum listing with openssl

            


### Pipe `xargs` to `grep`

- Find out  how much ram memory has your video (graphic) card
- List all text files (exclude binary files)
- Counts number of lines (in source code excluding comments)
- List folders containing only PNGs
- Find all videos under current directory using MIME a.k.a not using extension
- google search
- Find Files Which Should Be Executable But Are Not
- copy all Photos from Canon A520 to one place
- Matching Strings
- Show the 1000*1000 and 1024*1024 size of HDs on system
- detect the fastest ldap server on a intranet
- Filter Android log output by PID
- Get version of loaded kernel module
- Short Information about loaded kernel modules
- automatically add and remove files in subversion
- Download 40 top funnyjunk Images to the current directory
- Extract the emoticons regex from a running skype process
- Edit all "text" files (exclude binary and directories) in the current directory
- Get last changed revision to all eclipse projects in a SVN working copy
- Counting the source code's line numbers C/C++ Java
- Do some learning...
- Find class in jar
- the executable that started the currently running oracle databases and the ORACLE_HOME relative to each
- Find inside files two different patterns in the same line and for matched files show number of matched lines
- Find broken symlinks
- Get the Volume labels all bitlocker volumes had before being encrypted
- Command to resolve name from Ip address, passing only the last field after seq (C Class for example)
- Count music files in each directory
- Find running binary executables that were not installed using dpkg
- Arch Linux sort installed packages by size
- Check Rubocop offenses in your working branch
- List all text files (exclude binary files)
- for newbies, how to get one line info about all /bin programs
- a function to find the fastest DNS server
- Find the mounted storages
- Report summary of string occurrence by time period (hour) - alternate
- Show the UUID of a filesystem or partition
- the executable that started the currently running oracle databases and the ORACLE_HOME relative to each
- Check the age of the filesystem
- Search inside a folder of jar/zip files
- Play flash videos in  VLC
- finds all bean ids in all xml files from the current folder
- Print bitrate of each audio file
- Better "hours of video" summary for each file/dir in the current directory
- Better "hours of video" summary for each file/dir in the current directory
- Find all videos under current directory
- Short Information about loaded kernel modules
- Find the date of the first commit in a git repository
- Find the date of the first commit in a git repository
- Count the total amount of hours of your music collection
- See the total amount of data on an AIX machine

            
### Pipe `xargs` to `sort`

- Show disk size of files matching a pattern, sorted in increasing size
- Count lines of code across multiple file types, sorted by least amount of code to greatest
- View All Processess Cmdlines and Environments
- Find Duplicate Files (based on size first, then MD5 hash)
- can look for large files taking up disk spaces using the cmd
- Recursively find top 20 largest files (> 1MB) sort human readable format
- Find biggest 10 files in current and subdirectories and sort by file size
- Find biggest 10 files in current and subdirectories and sort by file size
- List by size all of the directories in a given tree.
- find the 10 largest directories
- find the 10 largest directories
- rename files (in this case pdfs) numerically in date order
- DELETE all those duplicate files but one based on md5 hash comparision in the current directory tree
- Print compile time in seconds package by package (Gentoo Distros)
- Find files and list them sorted by modification time
- Across an entire subtree, list not-empty directories that have no child-directories, globally sorted by their respective mtime
- List and count the number of open sessions per user
- Print duplicate files
- Find common groups between two users
- Generate a playlist of all the files in the directory, newer first
- FInd the 10 biggest files taking up disk space
- Show all files sorted by date
- find with high precission (nanoseconds 1/1,000,000,000s) the last changed file.
- Find Duplicate Files (based on size first, then MD5 hash)
- Rezip a bunch of files
- Find Duplicate Files (based on size first, then MD5 hash)
- Find the biggest files
- Find the biggest files
- make sure you don't add large file to your repository
- show a sorted list of directory whose name matches the pattern
- Find last modified files in a directory and its subdirectories
- Ultimate current directory usage command
- Ultimate current directory usage command
- Find directories in pwd, get disk usage, sort results
- Yardstick static analysis report sorted by which JavaScript files have the highest ratio of comments to code.
- Find Duplicate Files, excluding .svn-directories (based on size first, then MD5 hash)
- Finds javascript lodash/underscore methods in source code
- Search for MP3s from current directory and play them in random order.

            
### Pipe `xargs` to `w`

- Calculates fake folder checksum based on folder's files' md5sums
- calculate the total size of files in specified directory (in Megabytes)
- Get the total length of all video / audio in the current dir (and below) in H:m:s
- Show the 1000*1000 and 1024*1024 size of HDs on system
- Short Information about loaded kernel modules
- dynamically list open files for a given process name
- Get version of loaded kernel module
- Counts number of lines
- Calculate your total world compile time. (Gentoo Distros)
- List packages manually installed with process currently running
- Blink Caps Lock on HDD activity
- count total number of lines of ruby code
- Reorder file with max 100 file per folder
- Prints total line count contribution per user for an SVN repository
- Counts the number of TODOs in files with extension EXT found from the current dir.
- Find out current working directory of a process
- Prints total line count contribution per user for an SVN repository
- SAR - List top CPU usage spikes over the last month using sar.
- SAR - Get the monthly queue length average using sar -q for both the runq-sz and plist-sz.
- Rename all the files in the current directory into their sha1sum
- Write a shell script that removes files that contain a string
- Summarize total storage used by files obtained by a find command
- Automatically tunnel all ports of running docker instances in boot2docker
- Find Duplicate Files (based on size first, then MD5 hash)
- the executable that started the currently running oracle databases and the ORACLE_HOME relative to each
- Count occurrences of a word/token in a file
- Get the number of open sockets for a process
- Find Files over 20Meg
- Get count of kilobytes brew cleanup would free
- Prints total line count contribution per user for an SVN repository
- get md5sum for all files, skipping svn directories
- Find Duplicate Files (based on size, name, and md5sum)
- Summarise the size of all files matching a simple regex
- delete the files from the given directory except the PDF file
- Get MAC ID linux command line
- Find all files over a set size and displays accordingly
- Replace duplicate files by hardlinks

            
### Pipe `xargs` to `awk`

- Calculates fake folder checksum based on folder's files' md5sums
- calculate the total size of files in specified directory (in Megabytes)
- Get the total length of all video / audio in the current dir (and below) in H:m:s
- Short Information about loaded kernel modules
- dynamically list open files for a given process name
- Calculate your total world compile time. (Gentoo Distros)
- List packages manually installed with process currently running
- Prints total line count contribution per user for an SVN repository
- Prints total line count contribution per user for an SVN repository
- SAR - List top CPU usage spikes over the last month using sar.
- SAR - Get the monthly queue length average using sar -q for both the runq-sz and plist-sz.
- Write a shell script that removes files that contain a string
- Summarize total storage used by files obtained by a find command
- Find Duplicate Files (based on size first, then MD5 hash)
- the executable that started the currently running oracle databases and the ORACLE_HOME relative to each
- Find Files over 20Meg
- Get count of kilobytes brew cleanup would free
- Prints total line count contribution per user for an SVN repository
- get md5sum for all files, skipping svn directories
- Summarise the size of all files matching a simple regex
- delete the files from the given directory except the PDF file
- Get MAC ID linux command line
- Find all files over a set size and displays accordingly

            
### Pipe `xargs` to `sed`

- Print list of linked dependencies for package.
- Find stock debian package config files that have been modified since installation
- FAST Search and Replace for Strings in all Files in Directory
- Get the total length of all videos in the current dir in H:m:s
- Remove lines matching a pattern in files (backup any modified files)
- Video Google download
- Find Duplicate Files (based on size first, then MD5 hash)
- Compile all .less files to .css
- Another way to calculate sum size of all files matching a pattern
- Rename all the files in the current directory into their sha1sum
- Extract binary from .text section (shellcode)
- Localize a Public IP on a specific interface
- find external links in all html files in a directory list
- Prints per-line contribution per author for a GIT repository
- How many lines in your PHP project without comments
- sort through source to find most common authors
- Finds all of the mailers being used in your rails app
- Get the rough (german) time from Twitter by @zurvollenstunde
- Short Information about loaded kernel modules
- What's the weather like?
- See the total amount of data on an AIX machine

            
### Pipe `xargs` to `xargs`

- sync a directory of corrupted jpeg with a source directory
- Show contents of all git objects in a git repo
- Find corrupted jpeg image files
- Commit all the changes in your java code
- FAST Search and Replace for Strings in all Files in Directory
- Remove lines matching a pattern in files (backup any modified files)
- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Find out current working directory of a process
- Get last changed revision to all eclipse projects in a SVN working copy
- Find Duplicate Files (based on size first, then MD5 hash)
- Find Duplicate Files (based on size first, then MD5 hash)
- Find Duplicate Files, excluding .svn-directories (based on size first, then MD5 hash)
- /bin/rm: Argument list too long.
- Find the package that installed a command

            
### Pipe `xargs` to `id`

- Find all videos under current directory using MIME a.k.a not using extension
- List down source files which include another source file
- Play flash videos in  VLC
- finds all bean ids in all xml files from the current folder
- Better "hours of video" summary for each file/dir in the current directory
- Find all videos under current directory

            
### Pipe `xargs` to `su`

- Get the total length of all video / audio in the current dir (and below) in H:m:s
- Create md5sum of a directory
- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Summarize total storage used by files obtained by a find command
- Find Duplicate Files (based on size first, then MD5 hash)
- Find Duplicate Files (based on size first, then MD5 hash)
- Find Duplicate Files, excluding .svn-directories (based on size first, then MD5 hash)

            
### Pipe `xargs` to `tail`

- scan multiple log subdirectories for the latest log files and tail them
- get diskusage of files modified during the last n days
- Quickly add a new user to all groups the default user is in
- Counting the source code's line numbers C/C++ Java
- Make a statistic about the lines of code
- Find how much of your life you've wasted coding in the current directory

            
### Pipe `xargs` to `less`

- do a full file listing of every file found with locate
- Recursively find top 20 largest files (> 1MB) sort human readable format
- Compile all .less files to .css
- List all file and directory on user's home with details
- look some php code by some keywords

            
### Pipe `xargs` to `ss`

- do a full file listing of every file found with locate
- Recursively find top 20 largest files (> 1MB) sort human readable format
- Compile all .less files to .css
- List all file and directory on user's home with details
- look some php code by some keywords

            
### Pipe `xargs` to `vi`

- Find all videos under current directory using MIME a.k.a not using extension
- Show the 1000*1000 and 1024*1024 size of HDs on system
- Better "hours of video" summary for each file/dir in the current directory
- Find all videos under current directory

            
### Pipe `xargs` to `ls`

- Print list of linked dependencies for package.
- Blink Caps Lock on HDD activity
- Find out current working directory of a process
- Replace duplicate files by hardlinks

            
### Pipe `xargs` to `bc`

- Print list of linked dependencies for package.
- Compute the numeric sum of a file
- Generate a Random (unicast) MAC address
- Generate a Random (unicast) MAC address

            
### Pipe `xargs` to `ip`

- Find stock debian package config files that have been modified since installation
- Move all but the newest 100 emails to a gzipped archive
- Localize a Public IP on a specific interface
- find css or js files, minifiy with in-path-yuicompressor, gzip output, and save into <static-file>.gz

            
### Pipe `xargs` to `wc`

- Counts number of lines
- count total number of lines of ruby code
- Counts the number of TODOs in files with extension EXT found from the current dir.
- Count occurrences of a word/token in a file
- Get the number of open sockets for a process

            
### Pipe `xargs` to `rm`

- Write a shell script that removes files that contain a string
- Find running binary executables that were not installed using dpkg
- Search inside a folder of jar/zip files
- /bin/rm: Argument list too long.

            
### Pipe `xargs` to `cp`

- sync a directory of corrupted jpeg with a source directory
- Reorder file with max 100 file per folder

            
### Pipe `xargs` to `exec`

- Find Files Which Should Be Executable But Are Not

            
### Pipe `xargs` to `tar`

- Copy files from list with hierarchy

            
### Pipe `xargs` to `jp`

- Find corrupted jpeg image files
- Download 40 top funnyjunk Images to the current directory

            
### Pipe `xargs` to `echo`

- quick integer CPU benchmark
- small CPU benchmark with PI, bc and time.

            
### Pipe `xargs` to `cal`

- small CPU benchmark with PI, bc and time.

            
### Pipe `xargs` to `comm`

- Commit all the changes in your java code

            
### Pipe `xargs` to `mysql`

- Parallel mysql dump restore

            
### Pipe `xargs` to `name`

- Short Information about loaded kernel modules
- Command to resolve name from Ip address, passing only the last field after seq (C Class for example)

            
### Pipe `xargs` to `tac`

- draw rhomb

            
### Pipe `xargs` to `ps`

- Blink Caps Lock on HDD activity

            
### Pipe `xargs` to `mkdir`

- Reorder file with max 100 file per folder

            
### Pipe `xargs` to `zip`

- Move all but the newest 100 emails to a gzipped archive
- find css or js files, minifiy with in-path-yuicompressor, gzip output, and save into <static-file>.gz

            
### Pipe `xargs` to `gzip`

- Move all but the newest 100 emails to a gzipped archive
- find css or js files, minifiy with in-path-yuicompressor, gzip output, and save into <static-file>.gz

            
### Pipe `xargs` to `head`

- Prints the latest modified files in a directory tree recursively

            
### Pipe `xargs` to `ftp`

- Get the latest ftp file from ftp server on local machine with lftp and bash. (Piped commands inside lftp).

            
### Pipe `xargs` to `top`

- How many lines in your PHP project without comments

            
### Pipe `xargs` to `nc`

- Google Authenticator. Setup a user and email them a QR code.

            
### Pipe `xargs` to `diff`

- Find the date of the first commit in a git repository
- Find the date of the first commit in a git repository

            
### Pipe `xargs` to `du`

- What's the weather like?

            
### Pipe `xargs` to `ln`

- Replace duplicate files by hardlinks

            
