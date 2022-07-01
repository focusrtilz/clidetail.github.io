---
layout: manual
title:  "gzip - Statistics of command combinations using semicolon"
tags: statistic
---

## Before

__The commands before `gzip`:__  Execute the given command __before__ `gzip`.

| Command | percentage |
|--------|--------|
| w | 20% |
| name | 13% |
| ip | 10% |
| mysql | 10% |
| find | 6% |
| grep | 3% |
| ps | 3% |
| awk | 3% |
| mkdir | 3% |
| password | 3% |
| ss | 3% |
| cd | 3% |
| sort | 3% |
| sed | 3% |
| rev | 3% |
| exec | 3% |
| cat | 3% |



## After

__The commands after `gzip`:__ Execute the given command __after__ `gzip`.

| Command | Percentage | 
|-------|--------|
| rm | 12% |
| exec | 12% |
| history | 12% |
| echo | 12% |
| ip | 6% |
| w | 6% |
| name | 6% |
| mysql | 6% |
| find | 6% |
| tar | 6% |
| mv | 6% |
| date | 6% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Execute `w` before `gzip`

- Backup all MySQL Databases to individual files
- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz
- Backup all MySQL Databases to individual files
- Backup all MySQL Databases to individual files
- Backup all mysql databases to individual files on a remote server
- Backup all databases in a MySQL container

            
### Execute `name` before `gzip`

- Backup all MySQL Databases to individual files
- Backup all MySQL Databases to individual files
- Backup all mysql databases to individual files on a remote server
- gzip only that files that are not gzipped and are not open by any process

            
### Execute `ip` before `gzip`

- Backup all MySQL Databases to individual files
- Backup all MySQL Databases to individual files
- Backup all mysql databases to individual files on a remote server

            
### Execute `mysql` before `gzip`

- Backup all MySQL Databases to individual files
- Backup all MySQL Databases to individual files
- Backup all mysql databases to individual files on a remote server

            
### Execute `find` before `gzip`

- Move all but the newest 100 emails to a gzipped archive
- gzip only that files that are not gzipped and are not open by any process

            
### Execute `grep` before `gzip`

- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz

            
### Execute `ps` before `gzip`

- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz

            
### Execute `awk` before `gzip`

- for x in `psql -e\l | awk '{print $1}'| egrep -v "(^List|^Name|\-\-\-\-\-|^\()"`; do pg_dump -C $x | gzip > /backups/$x-back.gz

            
### Execute `mkdir` before `gzip`

- Extract 2 copies of .tar.gz content

            
### Execute `password` before `gzip`

- Backup all mysql databases to individual files on a remote server

            
### Execute `ss` before `gzip`

- Backup all mysql databases to individual files on a remote server

            
### Execute `cd` before `gzip`

- generate an initrd file

            
### Execute `sort` before `gzip`

- Move all but the newest 100 emails to a gzipped archive

            
### Execute `sed` before `gzip`

- Move all but the newest 100 emails to a gzipped archive

            
### Execute `rev` before `gzip`

- Move all but the newest 100 emails to a gzipped archive

            
### Execute `exec` before `gzip`

- gzip only that files that are not gzipped and are not open by any process

            
### Execute `cat` before `gzip`

- Backup all databases in a MySQL container

            


### Execute `rm` after `gzip`

- backup local MySQL database into a folder and removes older then 5 days backups
- Rezip a bunch of files

            
### Execute `exec` after `gzip`

- backup local MySQL database into a folder and removes older then 5 days backups
- Backup files older than 1 day on /home/dir, gzip them, moving old file to a dated file.

            
### Execute `history` after `gzip`

- generate a unique and secure password for every website that you login to
- This generates a unique and secure password with SALT for every website that you login to

            
### Execute `echo` after `gzip`

- Check if your webserver supports gzip compression with curl
- Compression formats Benchmark

            
### Execute `ip` after `gzip`

- Backup all MySQL Databases to individual files

            
### Execute `w` after `gzip`

- Backup all MySQL Databases to individual files

            
### Execute `name` after `gzip`

- Backup all MySQL Databases to individual files

            
### Execute `mysql` after `gzip`

- Backup all MySQL Databases to individual files

            
### Execute `find` after `gzip`

- backup local MySQL database into a folder and removes older then 5 days backups

            
### Execute `tar` after `gzip`

- move a lot of files over ssh

            
### Execute `mv` after `gzip`

- Backup files older than 1 day on /home/dir, gzip them, moving old file to a dated file.

            
### Execute `date` after `gzip`

- Backup files older than 1 day on /home/dir, gzip them, moving old file to a dated file.

            
