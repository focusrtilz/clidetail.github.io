---
layout: manual
title:  "curl - Statistics of command combinations using double pipe"
tags: statistic
---

## Before

__The commands before `curl`:__ If the given command failed, execute `curl`.

| Command | percentage |
|--------|--------|



## After

__The commands after `curl`:__ If `curl` failed, execute the given command.

| Command | Percentage | 
|-------|--------|
| echo | 50% |
| sleep | 10% |
| ping | 10% |
| jp | 10% |
| man | 10% |
| date | 10% |



## Related Scenarios

Below are the scenarios for all command combinations above.

The description in the table is referenced from and can be used to search the one-line-command or the scripts in the website of CommandLineFu.




### If `curl` failed, execute `echo`

- Google Spell Checker
- Check CRL expiration time
- Wait for Web service to spin up, aka alert me when the server stops returning a 503
- Check a server is up. If it isn't mail me.
- Update twitter with curl

            
### If `curl` failed, execute `sleep`

- Wait for Web service to spin up, aka alert me when the server stops returning a 503

            
### If `curl` failed, execute `ping`

- Check a server is up. If it isn't mail me.

            
### If `curl` failed, execute `jp`

- Check a server is up. If it isn't mail me.

            
### If `curl` failed, execute `man`

- Update twitter with curl

            
### If `curl` failed, execute `date`

- Update twitter with curl

            
