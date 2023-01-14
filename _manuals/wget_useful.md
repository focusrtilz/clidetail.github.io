---
layout: manual
title: "Useful commands with wget"
tags: wget
---

This is a list of useful commands utilizing `wget`. The examples provided were generated through an experiment using chatGPT to describe the command and provide examples.

### Download entire website recursively locally.

This command will download the entire example.com website, including all pages, images, and other files linked to from the main page, and will save them in the current directory.

Note: Be aware that downloading entire websites, especially large ones, can take a lot of time and disk space. Also, some websites may disallow or limit access by web scraping tools.

- -r : This option tells wget to download the website recursively, meaning it will follow links and download all pages, images, and other files linked to from the main page.
- -np : This option tells wget not to follow links that point outside of the website being downloaded, which will prevent it from downloading files from external sites.
- -k : This option tells wget to convert all links to local links, which will make the website work properly when viewed offline.
- -p : This option tells wget to download any necessary files to display the pages properly, such as images and stylesheets.

```
$ wget -r -np -k -p http://example.com
```