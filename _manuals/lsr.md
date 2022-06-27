---
layout: manual
title:  "ls -r | Display the results reversely"
tags: "ls"
---

### Scenario
When using a command line interface of mac machine, we use command __`ls`__ to list directory contents.

### Options `-r` for `ls` 
__r__ is the abbreviation of __reverse__.

### Manpage Description
Reverse the order of the sort to get reverse lexicographical order or the oldest entries first or largest files last, if combined with sort by size.

### Detail Explain
When typing the `ls` command, the terminal prompts files and directories (if there are) with lexicorgraphical order.

There are four types of directory names and file names. A lexicorgraphical order lists types of files or directories in the following order.

1. Hidden directory names or files names with __`UPPER`__ case. 
2. Hidden directory names or files names with __`lower`__ case.
3. Directory names or file names with __`UPPER`__ case.
4. Directory names or file names with __`lower`__ case.

Please notes that directories and file names in every type above is listed with __`lexicorgraphical`__ order. 

So, when typing __`ls`__ with __`-r`__, the list order is reversed as follows:

1. Directory names or file names with __`lower`__ case.
2. Directory names or file names with __`UPPER`__ case.
3. Hidden directory names or files names with __`lower`__ case.
4. Hidden directory names or files names with __`UPPER`__ case.

Please notes that directories and file names in every type above is listed with __`reverse lexicorgraphical`__ order. 

__When combining `ls -r` with sort by `size` `-S`__, the largest file is the last to show.

As for the manpage description `the oldest entries show first`, we still need further investigation on it.

### Version
Mac (BSD) command line utilities

### Examples
Here are four examples __`ls -l`__, __`ls -lr`__, __`ls -lS`__ and __`ls -lSr`__.

- __`ls -l`__ list the details of directory contents with lexicorgraphical order.

```bash
$ls -l

total 128
drwxr-xr-x   2 user  staff    64 May 24 14:10 AB
-rw-r--r--   1 user  staff   138 Mar 14 15:11 Pi
-rw-r--r--   1 user  staff    13 Mar 14 14:15 RE.md
-rw-r--r--   1 user  staff  1207 May  2 14:30 ca.txt
-rw-r--r--   1 user  staff    64 Mar 16 10:33 cr.sh
-rw-r--r--   1 user  staff    15 Mar 17 10:32 dr.py
-rw-r--r--   1 user  staff   147 May 10 11:10 em.json
-rw-r--r--   1 user  staff  1207 May  2 14:27 ma.txt
drwxr-xr-x  91 user  staff  2912 May 24 08:55 no
-rw-r--r--   1 user  staff   580 Apr 28 10:44 pr.txt
-rw-r--r--   1 user  staff   353 Apr 23 13:58 ra.py
-rw-r--r--   1 user  staff   176 Apr 27 16:15 re.py
drwxr-xr-x   3 user  staff    96 Mar 18 10:30 re
-rw-r--r--   1 user  staff   410 May 11 14:38 se.py
-rw-r--r--   1 user  staff   261 Apr 22 10:57 she.py
-rw-r--r--   1 user  staff   239 Mar 22 14:27 shd.py
-rw-r--r--   1 user  staff  4503 May  2 14:27 te.py
-rw-r--r--   1 user  staff   386 Apr 28 10:33 va.py
```

- __`ls -lr`__ list the details of directory contents with reverse lexicorgraphical order.

```bash
$ls -lr 

total 128
-rw-r--r--   1 user  staff   386 Apr 28 10:33 va.py
-rw-r--r--   1 user  staff  4503 May  2 14:27 te.py
-rw-r--r--   1 user  staff   239 Mar 22 14:27 shd.py
-rw-r--r--   1 user  staff   261 Apr 22 10:57 she.py
-rw-r--r--   1 user  staff   410 May 11 14:38 se.py
drwxr-xr-x   3 user  staff    96 Mar 18 10:30 re
-rw-r--r--   1 user  staff   176 Apr 27 16:15 re.py
-rw-r--r--   1 user  staff   353 Apr 23 13:58 ra.py
-rw-r--r--   1 user  staff   580 Apr 28 10:44 pr.txt
drwxr-xr-x  91 user  staff  2912 May 24 08:55 no
-rw-r--r--   1 user  staff  1207 May  2 14:27 ma.txt
-rw-r--r--   1 user  staff   147 May 10 11:10 em.json
-rw-r--r--   1 user  staff    15 Mar 17 10:32 dr.py
-rw-r--r--   1 user  staff    64 Mar 16 10:33 cr.sh
-rw-r--r--   1 user  staff  1207 May  2 14:30 ca.txt
-rw-r--r--   1 user  staff    13 Mar 14 14:15 RE.md
-rw-r--r--   1 user  staff   138 Mar 14 15:11 Pi
drwxr-xr-x   2 user  staff    64 May 24 14:10 AB
```

- __`ls -lS`__ list directory contents with sort by size.

```bash
$ls -lS

total 128
-rw-r--r--   1 user  staff  4503 May  2 14:27 te.py
drwxr-xr-x  91 user  staff  2912 May 24 08:55 no
-rw-r--r--   1 user  staff  1207 May  2 14:30 ca.txt
-rw-r--r--   1 user  staff  1207 May  2 14:27 ma.txt
-rw-r--r--   1 user  staff   580 Apr 28 10:44 pr.txt
-rw-r--r--   1 user  staff   410 May 11 14:38 se.py
-rw-r--r--   1 user  staff   386 Apr 28 10:33 va.py
-rw-r--r--   1 user  staff   353 Apr 23 13:58 ra.py
-rw-r--r--   1 user  staff   261 Apr 22 10:57 she.py
-rw-r--r--   1 user  staff   239 Mar 22 14:27 shd.py
-rw-r--r--   1 user  staff   176 Apr 27 16:15 re.py
-rw-r--r--   1 user  staff   147 May 10 11:10 em.json
-rw-r--r--   1 user  staff   138 Mar 14 15:11 Pi
drwxr-xr-x   3 user  staff    96 Mar 18 10:30 re
drwxr-xr-x   2 user  staff    64 May 24 14:10 AB
-rw-r--r--   1 user  staff    64 Mar 16 10:33 cr.sh
-rw-r--r--   1 user  staff    15 Mar 17 10:32 dr.py
-rw-r--r--   1 user  staff    13 Mar 14 14:15 RE.md
```

- __`ls -lSr`__ list directory contents with sort by size and then, reverse.

```bash
$ls -lSr

total 128
-rw-r--r--   1 user  staff    13 Mar 14 14:15 RE.md
-rw-r--r--   1 user  staff    15 Mar 17 10:32 dr.py
-rw-r--r--   1 user  staff    64 Mar 16 10:33 cr.sh
drwxr-xr-x   2 user  staff    64 May 24 14:10 AB
drwxr-xr-x   3 user  staff    96 Mar 18 10:30 re
-rw-r--r--   1 user  staff   138 Mar 14 15:11 Pi
-rw-r--r--   1 user  staff   147 May 10 11:10 em.json
-rw-r--r--   1 user  staff   176 Apr 27 16:15 re.py
-rw-r--r--   1 user  staff   239 Mar 22 14:27 shd.py
-rw-r--r--   1 user  staff   261 Apr 22 10:57 she.py
-rw-r--r--   1 user  staff   353 Apr 23 13:58 ra.py
-rw-r--r--   1 user  staff   386 Apr 28 10:33 va.py
-rw-r--r--   1 user  staff   410 May 11 14:38 se.py
-rw-r--r--   1 user  staff   580 Apr 28 10:44 pr.txt
-rw-r--r--   1 user  staff  1207 May  2 14:27 ma.txt
-rw-r--r--   1 user  staff  1207 May  2 14:30 ca.txt
drwxr-xr-x  91 user  staff  2912 May 24 08:55 no
-rw-r--r--   1 user  staff  4503 May  2 14:27 te.py
```
