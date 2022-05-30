---
layout: manual
title:  "chmod [symbolic mode] - BSD Commands Manual"
---
###### tags: `chmod`

### Scenario
When specifying `whom` (__`owner, group, others`__) to have what `permission` (__`read, write, execute`__), we use command __`chmod`__.

### Abbreviation of `chmod` 
__`chmod`__ is the combination of two words, __`change`__ and __`mode`__.

### Manpage Description
Change file __`modes`__ or __`Access Control Lists (ACL)`__.

Modes may be `absolute` or `symbolic`.The symbolic mode is described by a simple grammar.


### Detail Explain

The grammar is simple.
__`Who (who)`__ __`op (has/doesn't has)`__  __`perm (permission)`__.

The __`who`__ symbols are __`u (user), g (group), o (others) and a (all, equivalent to ugo)`__.

The __`op`__ symbos are __`+, - and =`__. 

__`+`__: Set or change permission if specified.
__`-`__: Clear the specified permission.
__`=`__: Reset permission with specified values. This op clears all permissions before setting the new ones.

The __`perm`__ (permission) symbols are __`r (read), s (set uid or gid), t (sticky), w (write), x (execute), X (execute, if the entry is a directory), u (the user permission), g (the group permission) and o (the other permission)`__.

Now let's look at some examples.

Let's say if a file has a 755 permission. And we'd like the group users to gain the write permission. We can use __`chmod g+w file`__ to grant the write permission. Now we'll have a 775 permission to this file.

And if we'd like to remove the execute permission from the `others`. We can use __`chmod o-x file`__ to remove the execute permission. Now we'll have a 754 permission to this file.

And if we'd like to reset permission for the group users. We can use __`chmod g=w file`__. Now we'll have a 725 permission to this file.

### Version
Mac (BSD) command line utilities

### Examples
Here are three examples __`chmod g+w`__, __`chmod o-x`__ and __`chmod g=w`__ to a __`755`__ permission file.

- __`chmod g+w`__ Add write permission of `test_chmod` to the group users.

```bash
$ls -l
drwxr-xr-x   2 user  staff   64 May 29 15:20 test_chmod
$chmod g+w test_chmod
$ls -l
drwxrwxr-x   2 user  staff   64 May 29 15:20 test_chmod
```

- __`chmod o-x`__ Clear execute permission of `test_chmod` to the other users.

```bash
$ls -l
drwxr-xr-x   2 user  staff   64 May 29 15:20 test_chmod
$chmod o-x test_chmod
$ls -l
drwxr-xr--   2 user  staff   64 May 29 15:20 test_chmod
```

- __`chmod g=w`__ Reset permission of `test_chmod` to the group users.

```bash
$ls -l
drwxr-xr-x   2 user  staff   64 May 29 15:20 test_chmod
$chmod g=w test_chmod
$ls -l
drwx-w-r-x   2 user  staff   64 May 29 15:20 test_chmod
```
