---
layout: manual
title:  "chmod [absolute mode] || Change file modes with absolute values"
tags: "chmod"
---

### Scenario
When specifying `whom` (__`owner, group, others`__) to have what `permission` (__`read, write, execute`__), we use command __`chmod`__.

### Abbreviation of `chmod` 
__`chmod`__ is the combination of two words, __`change`__ and __`mode`__.

### Manpage Description
Change file __`modes`__ or __`Access Control Lists (ACL)`__.

Modes may be `absolute` or `symbolic`. An absolute mode is an `octal number` constructed from the `sum` of `one or more` of the following values.


__`Special Permission`__
```
4000 (the setuid bit). 
2000 (the setgid bit).
1000 (the sticky bit). 
```

__`Owner Permission`__
```
0400 Allow read by owner.
0200 Allow write by owner.
0100 For files, allow execution by owner.  
     For directories, allow the owner to 
     search in the directory.
```

__`Group Permission`__
```
0040 Allow read by group members.
0020 Allow write by group members.
0010 For files, allow execution 
     by group members. For directories, 
     allow group members 
     to search in the directory.
```

__`Others Permission`__
```
0004 Allow read by others.
0002 Allow write by others.
0001 For files, allow execution by others. 
     For directories allow others 
     to search in the directory.
```

### Detail Explain
We can simply use `ls -l` to see the `ACL` of each file or directory. 

For each entry, the `ACL` shows at the very beginning with a sequence of 10 letters. The letters normally are r (read), w (write), x (execute), s (set uid or gid) and d (directory). 

For example, when you see ACL like this __`drwxr-xr-x`__.

```
Let's give every letter a numeric position.

-    rwx    r-x    r-x
0    123    456    789
```

The letter `-` in position 0 means it is a file. And the letter will be `d` if it is a directory. Then, the following `rwx` is the permission for the owner. It means that the owner has the permission to read, write and excute the file. Next, the following `r-x` is the permission for the group users. It means that the group users has the permission to just read and execute the file. The last 3 are still `r-x`. It is the permission for the `others`. Like the group users, they can just read and execute the file. 

So, if we present the `modes` here in the `absolute numeric number` way. It will be shown like `755`. The first numeric digit is the permission for the `file owner`. And 7 is the sum of (4 + 2 +1) which means the owner can read, write and execute the file. The second numeric digit is the permission for `the group users`. And 5 is the sum of (4 + 1) which means the group users can just read and execute the file. The last numeric digit is the permission for the `others`. And 5 is the sum of (4 + 1) which means the others can just read and execute the file.

So, what if we want to set the `special permissions`? It's simple. Add a numeric digit in front of `755`. If you want to set the `uid`, the mode is `4755`. And it will be `2755` if you want to set the gid. `1755`, yes, set the sticky bit. (The explanation of the special permission will be delivered in our other articles.)

And what will it look like when we set the special permission?

```
4755 (set uid)
-    rws    r-x    r-x
0    123    456    789

2755 (set gid)
-    rwx    r-s    r-x
0    123    456    789

1755 (set sticky bit)
-    rwx    r-x    r-t
0    123    456    789
```

As shown above, the special permission will replace the position of x corresponding to the settings.


### Version
Mac (BSD) command line utilities

### Examples
Here are two examples __`ls -l`__, __`chmod 4755`__.

- __`ls -l`__ List the `permission settings` of directory `test_chmod`

```bash
$ls -l
drwxr-xr-x   2 user  staff   64 May 29 15:20 test_chmod
```

- __`chmod 4755 test_chmod`__ Update the `permission settings` with the setting of `uid`.

```bash
$chmod 4755 test_chmod
$ls -l
drwsr-xr-x   2 user  staff   64 May 29 15:20 test_chmod
```

