---
layout: manual
title:  grep command with 10 examples
tags: grep
---

Here we provide 10 easy examples for using the command `grep`.

### Version
Mac BSD General Commands Manual

### 1. Search string in a file
Using command below to search the word `apple` in `vocabulary.txt`.

```
$ grep "apple" vocabulary.txt
```

- **Using `-w` to search with an exact match.**
```
$ grep -w "apple" vocabulary.txt
```
- **Using `-i` to search with case insensitive.**
 ```
$ grep -i "apple" vocabulary.txt
```

### 2. Search string in multiple files

Using the command below to search the word `apple` in `vocabulary1.txt` and `vocabulary2.txt`.

```
$ grep "apple" vocabulary1.txt vocabulary2.txt
```

### 3. Use Regular Expression to search in the file

Using the command below to search the pattern that starts with `apple` and ends with `good` in `vocabulary.txt`.
```
$ grep "apple.*good" vocabulary.txt
```

### 4. Combine with other commands by pipe

Using the command below to show the result of `ps` that contains `python`.

```
$ ps | grep "python"
```

### 5. Search all files recursively

Use the command below to search all `.txt` files in the current directory and all its subdirectories.
```
$ grep -r ".txt" *
```

### 6. Count matches number

Using option `-c` to count how many lines that contain `apple` in `vocabulary.txt`.

```
$ grep -c "apple" vocabulary.txt
```


### 7. Show only the matched string

Using option `-o` to show only the string starts with `apple` and ends with `good` in `vocabulary.txt`.
```
$ grep -o "apple.*good" vocabulary.txt
```

### 8. Show the position of the matched string

Using option `-b` to show the position of `apple` in `vocabulary.txt`.
```
$ grep -b "apple" vocabulary.txt
```


### 9. Inverse Searches in a File

Using option `-v` to show the line that does not contains `apple` in `vocabulary.txt`.

```
$ grep -v "apple" vocabulary.txt
```

### 10. List the name of matching files

Using option `-l` to show which `.txt` file contains the word `apple`.

```
$ grep -l 'apple' *.txt
```
