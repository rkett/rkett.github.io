class: center, middle, title-slide-lab3

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

**NOTE**: Using **git checkout** like so *WILL* remove the changes you've made to a file (including an overwrite of the file). Be careful when using it like so. Also, be extra careful when using any **git reset** command/flag/option. It can lead to headaches.

---

class: center, middle,

![](https://tctechcrunch2011.files.wordpress.com/2013/01/github-logo.png?w=450&h=400&crop=1)

---

# Remotes

Github allows you to create and access a **remote** git. Cloning the repo. as we did earlier, created a git index which includes the *automatic* assignment of your **remotes**.

Visually,

```bash
$ git remote -v
origin	https://github.com/rkett/rkett.github.io (fetch)
origin	https://github.com/rkett/rkett.github.io (push)
```

*Remote*'s are then server-side directories that one can *fetch* from and *push* to. For an indepth picture try: 

```bash
$ git remote show origin
```

---

# Branching

To create a branch simply use:

```bash
$ git branch [branch name]
```

To switch branches use:

```bash
$ git checkout [branch name]
```

ex.

```bash
$ git checkout cis3250-lab-3
Switched to branch 'cis3250-lab-3'
* Your branch is up-to-date with 'origin/cis3250-lab-3'.
```

**Note**: You might notice when you first switch to a branch, you do not get the message about *origin/[branch name]* this is because we must set a *remote* for this local branch. This is done on the next slides.

---

# Branching pt. 2

To see your branches use:

```bash
$ git branch -v
* cis3250-lab-3 0cc91ca Merge pull request #1 from rkett/cis3250-lab-3
  demo          0cc91ca Merge pull request #1 from rkett/cis3250-lab-3
  master        0cc91ca Merge pull request #1 from rkett/cis3250-lab-3
  testing       2d74ac0 Removed git test lines from css/custom.css.'
```

Your shell will tell you wich branch you are currently on, as of now, I am on the *cis3250-lab-3* branch.

To track changes on branches, and to display where each branch is currently pointing:

```bash
* $ git log --oneline --decorate --graph --all
o   0cc91ca (HEAD -> cis3250-lab-3, origin/master, origin/cis3250-lab-3, master, demo) Merge pull request #1 from rkett/cis3250-lab-3
|\  
| o d750974 Pull request demo.
|/  
o 5744792 Added 'push' slide to lab3.
o db1d40e Finished 'remote's' slide for lab3
o 2c4e6fd Added images; remote's slide for lab3.
```

---

# Branching pt. 3

- Branches may be modified and updated in the same way as your singular master branch was previously.
- Branches however, introduce more complicated working directory conditions.

ex. 

```bash
$ git checkout cis3250-lab-3
Switched to branch 'cis3250-lab-3'
...
$ echo 'meow' > cat.txt
$ ls
* CIS3250		cat.txt		css		images		index.html
$ git checkout master 
Switched to branch 'master'
Your branch is up-to-date with 'origin/master'.
$ ls
* CIS3250		css		images		index.html
```

---

# Beam me up Scotty!

As an important aside, we must learn how to **push** our changes to our remote git: 

```bash
$ git push 
```

using this:

```bash
$ git push
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 621 bytes | 0 bytes/s, done.
Total 5 (delta 3), reused 0 (delta 0)
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To https://github.com/rkett/rkett.github.io
* 2c4e6fd..db1d40e  cis3250-lab-3 -> cis3250-lab-3
```

You can even view this change here:

```bash
https://github.com/rkett/rkett.github.io/commit/db1d40e112e780055aacba2e850fb9192251a013
```

---

# Pushing from a branch.

If you have created a branch, switched to it, made changes, staged those changes and finally committed them, you may want to think about showing your peers what changes you've made on your branch. However, when you try this for the first time notice:

```bash
$ git push
fatal: The current branch demo has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin demo
```

When using that supplied command:

```bash
$  git push --set-upstream origin demo
…
To https://github.com/rkett/rkett.github.io
 * [new branch]      demo -> demo
Branch demo set up to track remote branch demo from origin.
```

You may see this here:

```bash
https://github.com/rkett/rkett.github.io/branches
```

---

# References and Images

### Images

```md
Git logo: https://git-scm.com/images/logo@2x.png
Github Logo: https://tctechcrunch2011.files.wordpress.com/2013/01/github-logo.png?w=450&h=400&crop=1
```

