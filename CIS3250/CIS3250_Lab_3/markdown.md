class: center, middle, title-slide

![](https://git-scm.com/images/logo@2x.png)

> *(multiplayer notepad)*

---

# today: crash course on git and github

### By the end you should know how to:

- setup your local git 
- clone a repo. from a server
- stage/unstage files
- commit changes
- amend commits
- push commits
- add/switch to a branch
- setup a remote for branch
- make changes to said branch
- push changes to remote

---


# Where to get; what to use.

### Command-line tool (CLT) Location and Information Hub:
> https://git-scm.com/

### Reference Book:
> https://git-scm.com/book/en/v2

### Extra:
> https://rkett.github.io/

---

# Setup environment

###Configure Name and Email
```bash
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
```

> **Note**: This should be done after you have created a github account.

### Check Settings
```bash
$ git config user.name
John Doe
$ git config user.email
johndoe@example.com
```

---

# Creating a local repo: cloning.

```bash
$ git clone [url]
```

> **Note**: Most of you will only need to use **git clone** to copy your repo. from your team github repo. to your local working directory. However, know that **git init** is also possible, but significantly more work.

### ex.

```bash
$ git clone https://github.com/rkett/rkett.github.io.git myfirstrepo
Cloning into 'myfirstrepo'...
remote: Counting objects: 89, done.
remote: Compressing objects: 100% (57/57), done.
remote: Total 89 (delta 24), reused 85 (delta 20), pack-reused 0
Unpacking objects: 100% (89/89), done.
$ ls
Labs		myfirstrepo
```

---

# Staging

New files or file alterations are tracked by git.

```bash
$ git status
On branch cis3250-lab-3
* Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   CIS3250/CIS3250_Lab_3/markdown.md

no changes added to commit (use "git add" and/or "git commit -a")
```

using, 

```bash
$ git add [file]
```

we may *stage* the modified file. 

```bash
* Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

	modified:   CIS3250/CIS3250_Lab_3/markdown.md
```
			
---

# Tracking

### Files **not** tracked will not be staged, or considered for committing.

```bash
$ echo "hi mom" > track_me.txt
$ git status
On branch cis3250-lab-3
* Untracked files:
  (use "git add <file>..." to include in what will be committed)

	track_me.txt

* nothing added to commit but untracked files present (use "git add" to track)
```
So, when adding new files, always remember to **git add** them.

---

# Atomic Batteries to Power! Turbines to Speed!

### So, you've made changes, they won't last if you don't **commit** to them. 

After staging, you can may use:

```bash
$ git commit -m "<message goes here>"
```

This creates a fallback point, and a log of all changes you've **staged** up to this point into a commit entry:

```bash
$ git commit -m "Added info. to 'commit' slide for lab3."
* [cis3250-lab-3 cb90feb] Added info. to 'commit' slide for lab3.
 1 file changed, 39 insertions(+), 1 deletion(-)
 ```

---

# I've made a terrible mistake.

Amending a commit

```bash
$ git add CIS3250/
$ git commit -m "Test for --amend."
* [cis3250-lab-3 d632955] Test for --amend.
```

*changes made:*

```bash
$ git add CIS3250/
$ git commit --amend
* [cis3250-lab-3 4eabce1] Test for --amend.
 Date: Thu Sep 21 20:48:03 2017 -0400
 1 file changed, 1 deletion(-)
```

---

# I've made a terrible mistake, again.

Unstaging a file:

```bash
$ git reset HEAD [file]
```

Unmodifiying a file:

```bash
$ git checkout -- [file]
```

---

# References and Images


[1]: https://www.jstor.org/stable/255537
[2]: https://web.archive.org/web/20131126152919/http://www-public.it-sudparis.eu:80/~gibson/Teaching/CSC7003/ReadingMaterial/Wilson03.pdf

### Articles

```md 
(1) The Harmonogram of Karol Adamiecki. The Academy of Management Journal. Vol. 18, (1975), pp. 358-364. Found at: <https://www.jstor.org/stable/255537>
(2) Gantt charts: A centenary appreciation. European Journal of Operational Research. Vol. 149, (2003), pp. 430–437. Found at: <https://web.archive.org/web/20131126152919/http://www-public.it-sudparis.eu:80/~gibson/Teaching/CSC7003/ReadingMaterial/Wilson03.pdf>
```

### Images

```md
Henry Gantt: https://en.wikipedia.org/wiki/Henry_Gantt#/media/File:Henry_L._Gantt.jpg
Coffee Cup: https://image.freepik.com/free-icon/coffee-cup-outline_318-39738.jpg
```
