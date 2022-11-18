---
layout: manual
title: "The most used options of the command"
tags: "options"
---

Here we provide the most used options example in the command.
The command options are referenced from TLDR.

### top
 - `top`
 - `top -o mem`
 - `top -o cpu -O time`
 - `top -user user_name`

### cat
 - `cat path/to/file`
 - `cat path/to/file1 path/to/file2 > path/to/output_file`
 - `cat path/to/file1 path/to/file2 >> path/to/output_file`
 - `cat -n path/to/file`
 - `cat -v -t -e path/to/file`

### man
 - `man command`
 - `man 7 command`
 - `man -f command`
 - `man --path`
 - `man -w command`
 - `man command --locale=locale`
 - `man -k "search_string"`

### wget
 - `wget https://example.com/foo`
 - `wget --output-document bar https://example.com/foo`
 - `wget --page-requisites --convert-links --wait=3 https://example.com/somepage.html`
 - `wget --mirror --no-parent https://example.com/somepath/`
 - `wget --limit-rate=300k --tries=100 https://example.com/somepath/`
 - `wget --user=username --password=password https://example.com`
 - `wget --continue https://example.com`
 - `wget --directory-prefix path/to/directory --input-file URLs.txt`

### locate
 - `locate "pattern"`
 - `locate */filename`
 - `sudo /usr/libexec/locate.updatedb`

### alias
 - `alias`
 - `alias word="command"`
 - `alias word`
 - `unalias word`
 - `alias rm="rm --interactive"`
 - `alias la="ls --all"`

### ping
 - `ping "hostname"`
 - `ping -c count "host"`
 - `ping -i seconds "host"`
 - `ping -n "host"`
 - `ping -a "host"`
 - `ping --apple-time "host"`

### echo
 - `echo "Hello World"`
 - `echo "My path is $PATH"`
 - `echo -n "Hello World"`
 - `echo "Hello World" >> file.txt`
 - `echo -e "Column 1\tColumn 2"`

### shutdown
 - `shutdown -h now`
 - `shutdown -s now`
 - `shutdown -r now`
 - `shutdown -r "+5"`
 - `shutdown -h 1300`
 - `shutdown -r 4205101130`

### df
 - `df`
 - `df -h`
 - `df path/to/file_or_directory`
 - `df -i`
 - `df -x squashfs -x tmpfs`

### pwd
 - `pwd`
 - `pwd -P`

### less
 - `less source_file`
 - `<Space> (down), b (up)`
 - `G (end), g (start)`
 - `/something`
 - `?something`
 - `F`
 - `v`
 - `q`

### touch
 - `touch path/to/file`
 - `touch -t YYYYMMDDHHMM.SS path/to/file`
 - `touch -d "-1 hour" path/to/file`
 - `touch -r path/to/file1 path/to/file2`
 - `touch path/to/file{1,2,3}.txt`

### free

### uname
 - `uname`
 - `uname -mp`
 - `uname -srv`
 - `uname -n`
 - `uname -a`

### tail
 - `tail -n count path/to/file`
 - `tail -n +count path/to/file`
 - `tail -c count path/to/file`
 - `tail -f path/to/file`
 - `tail -F path/to/file`
 - `tail -n count -s seconds -f path/to/file`

### grep
 - `grep "search_pattern" path/to/file`
 - `grep --fixed-strings "exact_string" path/to/file`
 - `grep --recursive --line-number --binary-files=without-match "search_pattern" path/to/directory`
 - `grep --extended-regexp --ignore-case "search_pattern" path/to/file`
 - `grep --context|before-context|after-context=3 "search_pattern" path/to/file`
 - `grep --with-filename --line-number --color=always "search_pattern" path/to/file`
 - `grep --only-matching "search_pattern" path/to/file`
 - `cat path/to/file | grep --invert-match "search_pattern"`

### head
 - `head -n count_of_lines filename`
 - `head -c number_in_bytes filename`

### clear
 - `clear`
 - `clear -x`
 - `clear -T type_of_terminal`
 - `clear -V`

### kill
 - `kill process_id`
 - `kill -l`
 - `kill %job_id`
 - `kill -1|HUP process_id`
 - `kill -2|INT process_id`
 - `kill -9|KILL process_id`
 - `kill -17|STOP process_id`
 - `kill -SIGUSR1 -group_id`

### curl
 - `curl http://example.com --output filename`
 - `curl --remote-name http://example.com/filename`
 - `curl --fail --remote-name --location --continue-at - http://example.com/filename`
 - `curl --data 'name=bob' http://example.com/form`
 - `curl --header 'X-My-Header: 123' --request PUT http://example.com`
 - `curl --data '{"name":"bob"}' --header 'Content-Type: application/json' http://example.com/users/1234`
 - `curl --user myusername:mypassword http://example.com`
 - `curl --cert client.pem --key key.pem --insecure https://example.com`

### ps
 - `ps aux`
 - `ps auxww`
 - `ps aux | grep string`
 - `ps --user $(id -u) -F`
 - `ps --user $(id -u) f`
 - `ps -o ppid= -p pid`
 - `ps --sort size`

### ssh
 - `ssh username@remote_host`
 - `ssh -i path/to/key_file username@remote_host`
 - `ssh username@remote_host -p 2222`
 - `ssh username@remote_host -t command command_arguments`
 - `ssh -D 1080 username@remote_host`
 - `ssh -L 9999:example.org:80 -N -T username@remote_host`
 - `ssh -J username@jump_host username@remote_host`
 - `ssh -A username@remote_host`

### history
 - `history`
 - `history 20`
 - `history -c`
 - `history -w`
 - `history -d offset`

### mkdir
 - `mkdir directory`
 - `mkdir directory_1 directory_2 ...`
 - `mkdir -p path/to/directory`

### rmdir
 - `rmdir path/to/directory`
 - `rmdir -p path/to/directory`

### mv
 - `mv source target`
 - `mv source1 source2 source3 target_directory`
 - `mv -f source target`
 - `mv -i source target`
 - `mv -n source target`
 - `mv -v source target`

### cd
 - `cd path/to/directory`
 - `cd ..`
 - `cd`
 - `cd ~username`
 - `cd -`
 - `cd /`

### find
 - `find root_path -name '*.ext'`
 - `find root_path -path '**/path/**/*.ext' -or -name '*pattern*'`
 - `find root_path -type d -iname '*lib*'`
 - `find root_path -name '*.py' -not -path '*/site-packages/*'`
 - `find root_path -maxdepth 1 -size +500k -size -10M`
 - `find root_path -name '*.ext' -exec wc -l {} \;`
 - `find root_path -daystart -mtime -7`
 - `find root_path -type f -empty -delete`

### ls
 - `ls -1`
 - `ls -a`
 - `ls -F`
 - `ls -la`
 - `ls -lh`
 - `ls -lS`
 - `ls -ltr`
 - `ls -d */`
 - `ls -1`
 - `ls -a`
 - `ls -F`
 - `ls -la`
 - `ls -lh`
 - `ls -lS`
 - `ls -ltr`
 - `ls -d */`

### cp
 - `cp path/to/source_file.ext path/to/target_file.ext`
 - `cp path/to/source_file.ext path/to/target_parent_directory`
 - `cp -R path/to/source_directory path/to/target_directory`
 - `cp -vR path/to/source_directory path/to/target_directory`
 - `cp -i *.txt path/to/target_directory`
 - `cp -L link path/to/target_directory`

### sudo
 - `sudo less /var/log/syslog`
 - `sudo --edit /etc/fstab`
 - `sudo --user=user --group=group id -a`
 - `sudo !!`
 - `sudo --login`
 - `sudo --shell`
 - `sudo --login --user=user`
 - `sudo --list`

### chown
 - `chown user path/to/file_or_directory`
 - `chown user:group path/to/file_or_directory`
 - `chown -R user path/to/directory`
 - `chown -h user path/to/symlink`
 - `chown --reference=path/to/reference_file path/to/file_or_directory`

### chmod
 - `chmod u+x path/to/file`
 - `chmod u+rw path/to/file_or_directory`
 - `chmod g-x path/to/file`
 - `chmod a+rx path/to/file`
 - `chmod o=g path/to/file`
 - `chmod o= path/to/file`
 - `chmod -R g+w,o+w path/to/directory`
 - `chmod -R a+rX path/to/directory`

### tar
 - `tar cf target.tar file1 file2 file3`
 - `tar czf target.tar.gz file1 file2 file3`
 - `tar czf target.tar.gz --directory=path/to/directory .`
 - `tar xvf source.tar[.gz|.bz2|.xz]`
 - `tar xf source.tar[.gz|.bz2|.xz] --directory=directory`
 - `tar caf target.tar.xz file1 file2 file3`
 - `tar tvf source.tar`
 - `tar xf source.tar --wildcards "*.html"`

### rm
 - `rm path/to/file path/to/another/file`
 - `rm -r path/to/directory`
 - `rm -rf path/to/directory`
 - `rm -i file(s)`
 - `rm -v path/to/directory/*`

