---
layout: manual
title:  Tar command with 10 examples
tags: tar
---

Here we provide 10 easy examples for using the command `tar`.

### Version
Mac BSD General Commands Manual

### 1. Archive files to `.tar`

Using options `cvf` to archive all `.txt` files in the current directory into `archive.tar`.

```
$ tar cvf archive.tar *.txt
```

### 2. Extract `.tar`

Using options `xvf` to extract all files in `archive.tar`.

```
$ tar xvf archive.tar
```

### 3. Compress and archive files into `.tar.gz`

Using options `xvzf` to compress and archive all `.txt` files in the current directory into `archive.tar.gz`.

```
$ tar cvzf archive.tar.gz *.txt
```

### 4. Extract `.tar.gz`

Using options `xvzf` to extract all files in `archive.tar.gz`.

```
$ tar xvzf archive.tar.gz
```

### 5. List the contents from `.tar`

Using options `tvf` to list all files inside `archive.tar`.

```
$ tar tvf archive.tar
```

### 6. List the contents from `.tar.gz`
Using options `tvf` to list all files inside `archive.tar.gz`.

```
$ tar tvf archive.tar.gz
```

### 7. Extract specific files from `.tar`
Using options `xvf` to extract `hello1.txt` and `hello2.txt` in `archive.tar`.


- **Single file**
```
$ tar xvf archive.tar hello1.txt
```
- **Multiple files**
```
$ tar xvf archive.tar "hello1.txt" "hello2.txt"
```

### 8. Extract specific files from `.tar.gz` file
Using options `zxvf` to extract `hello1.txt` and `hello2.txt` in `archive.tar.gz`.

- **Single file**
```
$ tar zxvf archive.tar hello1.txt
```
- **Multiple files**
```
$ tar zxvf archive.tar "hello1.txt" "hello2.txt"
```

### 9. Extract a group of files

Using options `--wildcards` to extract all `.txt` files in `archive.tar`.

- Extract `.tar`
```
$ tar xvf archive.tar --wildcards `*.txt`
```

- Extract `.tar.gz`
```
$ tar zxvf archive.tar --wildcards `*.txt`
```

### 10. Add file/directory in an archived file

Using options `rvf` to add a file or a directory into `archive.tar`.

- Add the file `hello.txt` into `tar`
```
$ tar rvf archive.tar hello.txt
```

- Add the file `hello.txt` into `tar.gz`
```
$ tar rvf archive.tar.gz hello.txt
```

- Add the directory `src` into `tar`
```
$ tar rvf archive.tar src
```

- Add the directory `src` into `tar.gz`
```
$ tar rvf archive.tar.gz src
```
