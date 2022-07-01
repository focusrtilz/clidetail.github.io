---
layout: manual
title:  "diff - Statistics of command combinations using pipe"
tags: statistic
---

## Before

__The commands before `diff`:__ Pipe the result of the given command to `diff`.

| Command | percentage |
|--------|--------|
| diff | 20% |
| w | 16% |
| cat | 6% |
| ssh | 6% |
| ss | 6% |
| grep | 6% |
| awk | 6% |
| host | 4% |
| ps | 4% |
| xargs | 4% |
| vi | 2% |
| kill | 2% |
| df | 2% |
| cp | 2% |
| rev | 2% |
| head | 2% |



## After

__The commands after `diff`:__ Pipe the result of `diff` to the given command.

| Command | Percentage | 
|-------|--------|
| grep | 15% |
| w | 14% |
| awk | 7% |
| diff | 6% |
| sort | 5% |
| ss | 4% |
| find | 4% |
| less | 3% |
| cd | 3% |
| vi | 2% |
| su | 2% |
| tar | 2% |
| xargs | 2% |
| cp | 2% |
| wc | 2% |
| vim | 2% |
| ps | 1% |
| change | 1% |
| tail | 1% |
| cpio | 1% |
| comm | 1% |
| rm | 1% |
| head | 1% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.


### Pipe `diff` to `diff`

- See which files differ in a diff
- svn diff $* | colordiff | lv -c
- Better git diff, word delimited and colorized
- Better git diff, word delimited and colorized
- Paged, colored svn diff
- Edit all different files from 2 directories with gvim in difference mode (gvim -d)
- diff directories, quick cut and paste to view the changes
- diff directories, quick cut and paste to view the changes
- Diff with colour highlighting

            
### Pipe `w` to `diff`

- Auto-kill auto-spawned process
- Auto-kill auto-spawned process
- something like 'git log -p' but for svn
- Validating a file with checksum
- Diff 2 branches, for a type of file & having a string in the diff
- Find the date of the first commit in a git repository
- Find the date of the first commit in a git repository

            
### Pipe `cat` to `diff`

- Diff files over SSH
- Compare a remote file with a local file
- remote diff with side-by-side ordering.

            
### Pipe `ssh` to `diff`

- Diff files over SSH
- Compare a remote file with a local file
- remote diff with side-by-side ordering.

            
### Pipe `ss` to `diff`

- Diff files over SSH
- Compare a remote file with a local file
- remote diff with side-by-side ordering.

            
### Pipe `grep` to `diff`

- Create subversion undo point
- diff directories, quick cut and paste to view the changes
- Diff 2 branches, for a type of file & having a string in the diff

            
### Pipe `awk` to `diff`

- Auto-kill auto-spawned process
- something like 'git log -p' but for svn
- Validating a file with checksum

            
### Pipe `host` to `diff`

- Diff files over SSH
- Compare a remote file with a local file

            
### Pipe `ps` to `diff`

- Auto-kill auto-spawned process
- Auto-kill auto-spawned process

            
### Pipe `xargs` to `diff`

- Find the date of the first commit in a git repository
- Find the date of the first commit in a git repository

            
### Pipe `vi` to `diff`

- Create subversion undo point

            
### Pipe `kill` to `diff`

- Auto-kill auto-spawned process

            
### Pipe `df` to `diff`

- Useful to check if the disks as of same size or not. Helpful in checking Raid configs

            
### Pipe `cp` to `diff`

- cvs diff HEAD and current branch

            
### Pipe `rev` to `diff`

- Check Rubocop offenses in your working branch

            
### Pipe `head` to `diff`

- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.

            


### Pipe `diff` to `grep`

- Using gdiff only select lines that are common between two files
- Check the MD5
- Compares two source directories, one original and one post configure and deletes the differences in the source folder
- Email someone if a web page has been updated.
- Scan your LAN for unauthorized IPs
- diff will usually only take one file from STDIN. This is a method to take the result of two streams and compare with diff. The example I use to compare two iTunes libraries but it is generally applicable.
- Keep track of diff progress
- Find chronological errors or bad timestamps in a Subversion repository
- Get a range of SVN revisions from svn diff and tar gz them
- Edit all different files from 2 directories with gvim in difference mode (gvim -d)
- List only locally modified files with CVS
- Convert diff output to HTML ins/del
- Check Rubocop offenses in your working branch
- Look for free ip's in a given /24 subnet.
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.
- Check fstab volumes and volumes mounted.
- diff directories, quick cut and paste to view the changes
- compile source & then remove the dev tools you needed to install
- Diff 2 branches, for a type of file & having a string in the diff
- most changed files in domains by rdiff-backup output
- Rspec: run specs that were created/changed on my branch only
- diff files ignoring comments and blank lines (lines starting with #)

            
### Pipe `diff` to `w`

- (Git) Revert files with changed mode, not content
- use vim to get colorful diff output
- diff files while disregarding indentation and trailing white space
- Auto-kill auto-spawned process
- Auto-kill auto-spawned process
- Diff two directories by finding and comparing the md5 checksums of their contents.
- Better git diff, word delimited and colorized
- Better git diff, word delimited and colorized
- Check if a web page has changed last time checked.
- Email someone if a web page has been updated.
- Observing the difference between kernel configs after make config was executed to see if anything was changed from last kernel config (Gentoo)
- something like 'git log -p' but for svn
- Copy uncommitted changes from remote git repository
- diff two css files to create an overriding css (e.g. for wordpress child themes)
- Edit all different files from 2 directories with gvim in difference mode (gvim -d)
- diff directories, quick cut and paste to view the changes
- Diff 2 branches, for a type of file & having a string in the diff
- Copy uncommitted changes to remote git repository
- Create a tar of modified/added files since revision 1792.
- display list of files in a directory sorted by amount of lines different with original.txt.
- Copy all file differences to an existing mirror location

            
### Pipe `diff` to `awk`

- (Git) Revert files with changed mode, not content
- Auto-kill auto-spawned process
- Auto-kill auto-spawned process
- Diff two directories by finding and comparing the md5 checksums of their contents.
- Observing the difference between kernel configs after make config was executed to see if anything was changed from last kernel config (Gentoo)
- something like 'git log -p' but for svn
- diff two css files to create an overriding css (e.g. for wordpress child themes)
- Edit all different files from 2 directories with gvim in difference mode (gvim -d)
- diff directories, quick cut and paste to view the changes
- Create a tar of modified/added files since revision 1792.
- Copy all file differences to an existing mirror location

            
### Pipe `diff` to `diff`

- See which files differ in a diff
- svn diff $* | colordiff | lv -c
- Better git diff, word delimited and colorized
- Better git diff, word delimited and colorized
- Paged, colored svn diff
- Edit all different files from 2 directories with gvim in difference mode (gvim -d)
- diff directories, quick cut and paste to view the changes
- diff directories, quick cut and paste to view the changes
- Diff with colour highlighting

            
### Pipe `diff` to `sort`

- Identify differences between directories (possibly on different servers)
- Compare two directory trees.
- Diff two directories by finding and comparing the md5 checksums of their contents.
- Compare two directory trees.
- Diff two directories by finding and comparing the md5 checksums of their contents.
- Using commandoutput as a file descriptor
- Compare two directories
- Compare a remote dir with a local dir

            
### Pipe `diff` to `ss`

- Show word-by-word differences between two latex files, in color
- Identify differences between directories (possibly on different servers)
- Better git diff, word delimited and colorized
- Better git diff, word delimited and colorized
- Paged, colored svn diff
- most changed files in domains by rdiff-backup output
- To help sort through differences in .txt files

            
### Pipe `diff` to `find`

- Identify differences between directories (possibly on different servers)
- Compare two directory trees.
- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Compare two directory trees.
- Compare two directories
- Compare a remote dir with a local dir

            
### Pipe `diff` to `less`

- Show word-by-word differences between two latex files, in color
- Better git diff, word delimited and colorized
- Better git diff, word delimited and colorized
- Paged, colored svn diff
- To help sort through differences in .txt files

            
### Pipe `diff` to `cd`

- Identify differences between directories (possibly on different servers)
- Compare two directory trees.
- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Compare two directory trees.
- Compare two directories

            
### Pipe `diff` to `vi`

- use vim to get colorful diff output
- diff directories, quick cut and paste to view the changes
- colorize your svn diff
- Colored SVN diff

            
### Pipe `diff` to `su`

- Identify differences between directories (possibly on different servers)
- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Compare copies of a file with md5

            
### Pipe `diff` to `tar`

- Check the MD5
- Copy modified files between two Git commits
- generate file list modified since last commit and export to tar file

            
### Pipe `diff` to `xargs`

- Diff 2 file struct - Useful for branch diff and jars diff(uncompressed)
- Copy modified files between two Git commits
- generate file list modified since last commit and export to tar file

            
### Pipe `diff` to `cp`

- Copy uncommitted changes from remote git repository
- Copy uncommitted changes to remote git repository
- Copy modified files between two Git commits
- Copy all file differences to an existing mirror location

            
### Pipe `diff` to `wc`

- Copy uncommitted changes from remote git repository
- Copy uncommitted changes to remote git repository
- display list of files in a directory sorted by amount of lines different with original.txt.

            
### Pipe `diff` to `vim`

- diff directories, quick cut and paste to view the changes
- colorize your svn diff
- Colored SVN diff

            
### Pipe `diff` to `ps`

- Auto-kill auto-spawned process
- Displays user-defined ps output and pidstat output about the top CPU or MEMory users.

            
### Pipe `diff` to `change`

- Check if a web page has changed last time checked.
- Describe differences between files

            
### Pipe `diff` to `tail`

- Figure out your work output for the day
- Diff with Sections/Headers

            
### Pipe `diff` to `cpio`

- Copy uncommitted changes from remote git repository
- Copy uncommitted changes to remote git repository

            
### Pipe `diff` to `comm`

- Undo commit in Mercurial
- Undo several commits by committing an inverse patch.

            
### Pipe `diff` to `rm`

- Describe differences between files
- Diff with colour highlighting

            
### Pipe `diff` to `head`

- Find the date of the first commit in a git repository
- Find the date of the first commit in a git repository

            
### Pipe `diff` to `rev`

- revert the unstaged modifications in a git working directory

            
### Pipe `diff` to `ssh`

- Identify differences between directories (possibly on different servers)

            
### Pipe `diff` to `exec`

- Identify differences between directories (possibly on different servers)

            
### Pipe `diff` to `kill`

- Auto-kill auto-spawned process

            
### Pipe `diff` to `sleep`

- Auto-kill auto-spawned process

            
### Pipe `diff` to `mv`

- Check if a web page has changed last time checked.

            
### Pipe `diff` to `yes`

- diff two css files to create an overriding css (e.g. for wordpress child themes)

            
### Pipe `diff` to `nc`

- Describe differences between files

            
### Pipe `diff` to `zip`

- Compare copies of a file with md5

            
### Pipe `diff` to `ip`

- Compare copies of a file with md5

            
### Pipe `diff` to `more`

- Compare mysql db schema from two different servers

            
