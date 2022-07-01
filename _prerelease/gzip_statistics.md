---
layout: manual
title:  "gzip - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `gzip`:__ Pipe the result of the given command to `gzip`.

| Command | percentage |
|--------|--------|
| du | 10% |
| ss | 9% |
| w | 8% |
| mysql | 8% |
| ssh | 5% |
| name | 5% |
| tar | 4% |
| host | 4% |
| ip | 4% |
| cat | 4% |
| password | 2% |
| su | 2% |
| zip | 2% |
| gzip | 2% |
| head | 1% |
| dd | 1% |
| nc | 1% |
| cal | 1% |
| cp | 1% |
| cpio | 1% |
| sudo | 1% |
| vi | 1% |
| ls | 1% |
| xargs | 1% |
| curl | 1% |
| awk | 1% |
| echo | 1% |



## After

__The commands after `gzip`:__ Pipe the result of `gzip` to the given command.

| Command | Percentage | 
|-------|--------|
| ip | 14% |
| zip | 13% |
| ss | 12% |
| unzip | 7% |
| ssh | 6% |
| tar | 5% |
| gzip | 4% |
| nc | 3% |
| w | 3% |
| dd | 3% |
| ps | 2% |
| date | 2% |
| cd | 2% |
| grep | 2% |
| echo | 2% |
| host | 2% |
| passwd | 1% |
| ftp | 1% |
| cat | 1% |
| bzip2 | 1% |
| df | 1% |
| ls | 1% |
| password | 1% |
| cal | 1% |
| name | 1% |
| mysql | 1% |
| rm | 1% |
| bc | 1% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `du` to `gzip`

- Backup all MySQL Databases to individual files
- backup local MySQL database into a folder and removes older then 5 days backups
- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz
- Backup all MySQL Databases to individual files
- Backup all MySQL Databases to individual files
- Backup a remote database to your local filesystem
- dump the whole database
- Get a MySQL DB dump from a remote machine
- Email an svn dump
- Backup all mysql databases to individual files on a remote server
- backup all data in compressed format
- Script para hacer un acopia d ela base de datos mysql
- Import MySQL db to localhost.
- Backup all databases in a MySQL container
- make pgsql backup and gzip it
- A command to copy mysql tables from a remote host to current host via ssh.
- Dump snapshot of UFS2 filesystem, then gzip it
- get a mysqldump with a timestamp in the filename and gzip it all in one go

            
### Pipe `ss` to `gzip`

- Create a local compressed tarball from remote host directory
- Backup a remote database to your local filesystem
- dump the whole database
- Get a MySQL DB dump from a remote machine
- TCPDUMP & Save Capture to Remote Server w/ GZIP
- Backup all mysql databases to individual files on a remote server
- Backup VPS disk to another host
- back up your commandlinefu contributed commands
- Script para hacer un acopia d ela base de datos mysql
- This generates a unique and secure password with SALT for every website that you login to
- find css or js files, minifiy with in-path-yuicompressor, gzip output, and save into <static-file>.gz
- Import MySQL db to localhost.
- Monitor progress of a command
- A command to copy mysql tables from a remote host to current host via ssh.
- gzip over ssh
- get gzipped logs from webserver to local machine

            
### Pipe `w` to `gzip`

- Backup all MySQL Databases to individual files
- Backup all MySQL Databases to individual files
- Backup all MySQL Databases to individual files
- dump the whole database
- TCPDUMP & Save Capture to Remote Server w/ GZIP
- Backup all mysql databases to individual files on a remote server
- generate an initrd file
- back up your commandlinefu contributed commands
- Script para hacer un acopia d ela base de datos mysql
- tar directory and compress it with showing progress and Disk IO limits
- Get gzip compressed web page using wget.
- Backup all databases in a MySQL container
- A command to copy mysql tables from a remote host to current host via ssh.
- copy working directory and compress it on-the-fly while showing progress
- improve copy file over ssh showing progress

            
### Pipe `mysql` to `gzip`

- Backup all MySQL Databases to individual files
- backup local MySQL database into a folder and removes older then 5 days backups
- Backup all MySQL Databases to individual files
- Backup all MySQL Databases to individual files
- Backup a remote database to your local filesystem
- dump the whole database
- Get a MySQL DB dump from a remote machine
- Backup all mysql databases to individual files on a remote server
- backup all data in compressed format
- Script para hacer un acopia d ela base de datos mysql
- Import MySQL db to localhost.
- Backup all databases in a MySQL container
- A command to copy mysql tables from a remote host to current host via ssh.
- get a mysqldump with a timestamp in the filename and gzip it all in one go

            
### Pipe `ssh` to `gzip`

- Create a local compressed tarball from remote host directory
- Backup a remote database to your local filesystem
- Get a MySQL DB dump from a remote machine
- TCPDUMP & Save Capture to Remote Server w/ GZIP
- Backup VPS disk to another host
- Import MySQL db to localhost.
- A command to copy mysql tables from a remote host to current host via ssh.
- gzip over ssh
- get gzipped logs from webserver to local machine

            
### Pipe `name` to `gzip`

- Backup all MySQL Databases to individual files
- Backup all MySQL Databases to individual files
- Backup a remote database to your local filesystem
- Get a MySQL DB dump from a remote machine
- Backup all mysql databases to individual files on a remote server
- back up your commandlinefu contributed commands
- Import MySQL db to localhost.
- Backup all databases in a MySQL container
- A command to copy mysql tables from a remote host to current host via ssh.
- Find the mounted storages

            
### Pipe `tar` to `gzip`

- copy paste multiple binary files
- Create a local compressed tarball from remote host directory
- move a lot of files over ssh
- Command line progress bar
- Create a tar.gz in a single command
- get gzipped logs from webserver to local machine
- create tar.gz on solaris

            
### Pipe `host` to `gzip`

- Create a local compressed tarball from remote host directory
- Backup a remote database to your local filesystem
- Get a MySQL DB dump from a remote machine
- TCPDUMP & Save Capture to Remote Server w/ GZIP
- Script para hacer un acopia d ela base de datos mysql
- Import MySQL db to localhost.
- A command to copy mysql tables from a remote host to current host via ssh.

            
### Pipe `ip` to `gzip`

- Backup all MySQL Databases to individual files
- Backup all MySQL Databases to individual files
- Backup all mysql databases to individual files on a remote server
- Get gzip compressed web page using wget.
- Check if your webserver supports gzip compression with curl
- A command to copy mysql tables from a remote host to current host via ssh.
- See multiple progress bars at once for multiple pipes with pv

            
### Pipe `cat` to `gzip`

- TCPDUMP & Save Capture to Remote Server w/ GZIP
- Backup VPS disk to another host
- useless load
- Move all but the newest 100 emails to a gzipped archive
- Compress and Backup a disk image
- gzip over ssh
- See multiple progress bars at once for multiple pipes with pv

            
### Pipe `password` to `gzip`

- dump the whole database
- Backup all mysql databases to individual files on a remote server
- Script para hacer un acopia d ela base de datos mysql
- A command to copy mysql tables from a remote host to current host via ssh.

            
### Pipe `su` to `gzip`

- generate a unique and secure password for every website that you login to
- DD with progressbar using pv for backing up entire block device
- Write a listing of all directories and files on the computer to a compressed file.
- This generates a unique and secure password with SALT for every website that you login to
- Find the mounted storages

            
### Pipe `zip` to `gzip`

- Get gzip compressed web page using wget.
- Check if your webserver supports gzip compression with curl
- A command to copy mysql tables from a remote host to current host via ssh.
- See multiple progress bars at once for multiple pipes with pv

            
### Pipe `gzip` to `gzip`

- Get gzip compressed web page using wget.
- Check if your webserver supports gzip compression with curl
- A command to copy mysql tables from a remote host to current host via ssh.
- See multiple progress bars at once for multiple pipes with pv

            
### Pipe `head` to `gzip`

- gzip vs bzip2 at compressing random strings?
- Get gzip compressed web page using wget.

            
### Pipe `dd` to `gzip`

- Backup sda5 partition to ftp ( using pipes and gziped backup )
- Compress and Backup a disk image
- clone a hard drive to a remote directory via ssh tunnel, and compressing the image

            
### Pipe `nc` to `gzip`

- Backup sda5 partition to ftp ( using pipes and gziped backup )
- Get gzip compressed web page using wget.
- Check if your webserver supports gzip compression with curl

            
### Pipe `cal` to `gzip`

- Get a MySQL DB dump from a remote machine
- Script para hacer un acopia d ela base de datos mysql
- Import MySQL db to localhost.

            
### Pipe `cp` to `gzip`

- generate an initrd file
- CPIO better than TAR

            
### Pipe `cpio` to `gzip`

- generate an initrd file
- CPIO better than TAR

            
### Pipe `sudo` to `gzip`

- DD with progressbar using pv for backing up entire block device
- Write a listing of all directories and files on the computer to a compressed file.
- Find the mounted storages

            
### Pipe `vi` to `gzip`

- DD with progressbar using pv for backing up entire block device
- Compress and Backup a disk image

            
### Pipe `ls` to `gzip`

- Write a listing of all directories and files on the computer to a compressed file.
- GZip all files in a directory separately

            
### Pipe `xargs` to `gzip`

- Move all but the newest 100 emails to a gzipped archive
- find css or js files, minifiy with in-path-yuicompressor, gzip output, and save into <static-file>.gz

            
### Pipe `curl` to `gzip`

- back up your commandlinefu contributed commands
- Check if your webserver supports gzip compression with curl

            
### Pipe `awk` to `gzip`

- tar directory and compress it with showing progress and Disk IO limits
- copy working directory and compress it on-the-fly while showing progress
- improve copy file over ssh showing progress

            
### Pipe `echo` to `gzip`

- This generates a unique and secure password with SALT for every website that you login to
- find css or js files, minifiy with in-path-yuicompressor, gzip output, and save into <static-file>.gz

            
### Pipe `grep` to `gzip`

- Compress logs older than 7 days

            
### Pipe `bc` to `gzip`

- TCPDUMP & Save Capture to Remote Server w/ GZIP

            
### Pipe `ps` to `gzip`

- Backup VPS disk to another host

            
### Pipe `wc` to `gzip`

- generate an initrd file

            
### Pipe `rm` to `gzip`

- Move all but the newest 100 emails to a gzipped archive

            
### Pipe `man` to `gzip`

- back up your commandlinefu contributed commands

            
### Pipe `comm` to `gzip`

- back up your commandlinefu contributed commands

            
### Pipe `id` to `gzip`

- Script para hacer un acopia d ela base de datos mysql

            
### Pipe `date` to `gzip`

- Script para hacer un acopia d ela base de datos mysql

            
### Pipe `wget` to `gzip`

- Get gzip compressed web page using wget.

            
### Pipe `sort` to `gzip`

- Rezip a bunch of files

            
### Pipe `exec` to `gzip`

- Backup all databases in a MySQL container

            
### Pipe `find` to `gzip`

- Find the mounted storages

            
### Pipe `sed` to `gzip`

- Migrate wordpress db between two hosts changing the URL on the fly with encryption and compression

            


### Pipe `gzip` to `ip`

- Get a MySQL DB dump from a remote machine
- Recompress all files in current directory from gzip to bzip2
- Speed Up WAN File Transfer With Compression
- &#33719;&#21462;&#21387;&#32553;&#21518;&#30340;&#32593;&#39029;
- Get gzip compressed web page using wget.
- Check if your webserver supports gzip compression with curl
- Import MySQL db to localhost.
- clone a hard drive to a remote directory via ssh tunnel, and compressing the image
- A command to copy mysql tables from a remote host to current host via ssh.
- gzip over ssh
- See multiple progress bars at once for multiple pipes with pv
- Get gzip compressed web page using wget.
- Migrate wordpress db between two hosts changing the URL on the fly with encryption and compression

            
### Pipe `gzip` to `zip`

- Get a MySQL DB dump from a remote machine
- Recompress all files in current directory from gzip to bzip2
- Speed Up WAN File Transfer With Compression
- &#33719;&#21462;&#21387;&#32553;&#21518;&#30340;&#32593;&#39029;
- Get gzip compressed web page using wget.
- Check if your webserver supports gzip compression with curl
- Import MySQL db to localhost.
- A command to copy mysql tables from a remote host to current host via ssh.
- gzip over ssh
- See multiple progress bars at once for multiple pipes with pv
- Get gzip compressed web page using wget.
- Migrate wordpress db between two hosts changing the URL on the fly with encryption and compression

            
### Pipe `gzip` to `ss`

- copy paste multiple binary files
- Backup sda5 partition to ftp ( using pipes and gziped backup )
- move a lot of files over ssh
- Email an svn dump
- Backup all mysql databases to individual files on a remote server
- Encrypted archive with openssl and tar
- clone a hard drive to a remote directory via ssh tunnel, and compressing the image
- A command to copy mysql tables from a remote host to current host via ssh.
- unzip file on local machine copy to remote machine with ssh
- improve copy file over ssh showing progress
- Migrate wordpress db between two hosts changing the URL on the fly with encryption and compression

            
### Pipe `gzip` to `unzip`

- Get a MySQL DB dump from a remote machine
- Speed Up WAN File Transfer With Compression
- &#33719;&#21462;&#21387;&#32553;&#21518;&#30340;&#32593;&#39029;
- Import MySQL db to localhost.
- gzip over ssh
- Get gzip compressed web page using wget.
- Migrate wordpress db between two hosts changing the URL on the fly with encryption and compression

            
### Pipe `gzip` to `ssh`

- move a lot of files over ssh
- Backup all mysql databases to individual files on a remote server
- clone a hard drive to a remote directory via ssh tunnel, and compressing the image
- unzip file on local machine copy to remote machine with ssh
- improve copy file over ssh showing progress
- Migrate wordpress db between two hosts changing the URL on the fly with encryption and compression

            
### Pipe `gzip` to `tar`

- Extract 2 copies of .tar.gz content
- move a lot of files over ssh
- See multiple progress bars at once for multiple pipes with pv
- improve copy file over ssh showing progress
- IBM AIX: Extract a .tar.gz archive in one shot

            
### Pipe `gzip` to `gzip`

- Get gzip compressed web page using wget.
- Check if your webserver supports gzip compression with curl
- A command to copy mysql tables from a remote host to current host via ssh.
- See multiple progress bars at once for multiple pipes with pv

            
### Pipe `gzip` to `nc`

- copy paste multiple binary files
- Encrypted archive with openssl and tar
- Check if your webserver supports gzip compression with curl

            
### Pipe `gzip` to `w`

- Backup sda5 partition to ftp ( using pipes and gziped backup )
- A command to copy mysql tables from a remote host to current host via ssh.
- improve copy file over ssh showing progress

            
### Pipe `gzip` to `dd`

- Email an svn dump
- clone a hard drive to a remote directory via ssh tunnel, and compressing the image
- unzip file on local machine copy to remote machine with ssh

            
### Pipe `gzip` to `ps`

- Run gunzipped sql file in PostGres, adding to the library since I couldnt find this command anywhere else on the web.
- clone a hard drive to a remote directory via ssh tunnel, and compressing the image

            
### Pipe `gzip` to `date`

- Backup sda5 partition to ftp ( using pipes and gziped backup )
- Email an svn dump

            
### Pipe `gzip` to `cd`

- move a lot of files over ssh
- Get gzip compressed web page using wget.

            
### Pipe `gzip` to `grep`

- Check if your webserver supports gzip compression with curl
- Find the mounted storages

            
### Pipe `gzip` to `echo`

- Check if your webserver supports gzip compression with curl
- Compression formats Benchmark

            
### Pipe `gzip` to `host`

- unzip file on local machine copy to remote machine with ssh
- improve copy file over ssh showing progress

            
### Pipe `gzip` to `passwd`

- Backup sda5 partition to ftp ( using pipes and gziped backup )

            
### Pipe `gzip` to `ftp`

- Backup sda5 partition to ftp ( using pipes and gziped backup )

            
### Pipe `gzip` to `cat`

- Backup all mysql databases to individual files on a remote server

            
### Pipe `gzip` to `bzip2`

- Recompress all files in current directory from gzip to bzip2

            
### Pipe `gzip` to `df`

- Get gzip compressed web page using wget.

            
### Pipe `gzip` to `ls`

- Check if your webserver supports gzip compression with curl

            
### Pipe `gzip` to `password`

- A command to copy mysql tables from a remote host to current host via ssh.

            
### Pipe `gzip` to `cal`

- A command to copy mysql tables from a remote host to current host via ssh.

            
### Pipe `gzip` to `name`

- A command to copy mysql tables from a remote host to current host via ssh.

            
### Pipe `gzip` to `mysql`

- A command to copy mysql tables from a remote host to current host via ssh.

            
### Pipe `gzip` to `rm`

- Compression formats Benchmark

            
### Pipe `gzip` to `bc`

- Compression formats Benchmark

            
