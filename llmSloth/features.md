# modifications to laptop

# unique queries
- im going to add another key to the json we send to catbox.
- its going to be "how many times have u created an output", each time u run the script, it increments this count and sends it with the json
- and "how many times have u visited all outputs in total", is just a simple hit counter of how many times ive loaded it
- and what are the highest visited, 
	each time u load a page that has a valid id (an ID with a catbox json that loaded in)
  u increment the number of hits that specific page has in the database
  
- button that gets every id from the array and sorts them by most visited, replaces the #content_layout with it
	this list of most visited ids, presents the title of each id (stored in localstorage), the amount of visits, and the character count
	this is displayed like a spreadsheet, sorted by hits.
```
| Hits | Chars | Title
------------------------------------
  15     20000   Oh boy oh boy!
  12     500000  Heres to nuttin up or shuttin up
```
- button that also lets u export/import the entire json store for the leafstrat website



# queue system
- `kate_longPrompt`, 
	1. my file from desktop gets uploaded there.
	2. i cat via ssh /var/www/html/prompts/status.txt 
	3. if it contains "working", then, simply uploading the file is good enough, it will get queued. exit the ssh.
	4. if it contains "idle", then, i've uploaded it to the server - trigger laptop.sh to start it

	

- so, after laptop.sh has completed a prompt file, sent it to me, etc
- delete that file on their machine
- now, after an iteration, it will delete the file it just did, and then it will see if other files exist in that folder. 
- if there are multiple files, it will choose one at a time until they are all complete. choosing based on oldest first.
files are named after unix timestamps:
```
prompt_1746994954.md
```






	
