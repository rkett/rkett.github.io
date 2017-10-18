class: center, middle, title-slide

# Git Continued: Merging and Conflicts

---

# Topic Overview

- Local Merging
- Local Rebasing
- Diff
- Merge/Rebase Conflicts w/ Resolution
- Pull Requests

---

# Quick Recap of Last Git Lab

## Commands to remember:
- Making a branch

```bash
$ git branch <branch_name>
```

- Switching to a branch

```bash
$ git checkout <branch_name>
```

- Shortcut:

```bash
git checkout -b <branch_name>
```

> This is equivalent to creating and switching to a branch at the same time !

---

# Merging Example

> **Note** If you feel like re-creating this example, or playing around with it. I've just done this by creating a repo on github with a readme, cloned it locally, and then proceeded with the following steps.

I've made a README.md with the following lines:

```text
- Line 1: To Stay Same.
- Line 2: Will Create Conflict.
```

This will be our basis for this example and the next one. From there, track this file, and commit.
Now, **switch** to a newly made branch:

```bash
$ git checkout -b readme-fix
```

Edit README.md to show something like:

```text
- Line 1: To Stay Same.
- Line 2: Will Create Conflict. <Change on readme-fix.>
```

---

# Merging Example Continued:

Now, stage and commit this change, then, switch back to **master** and do the same, like so:

```text
- Line 1: To Stay Same.
- Line 2: Will Create Conflict. <Change on master.>
```

> **Note** We have generated a *divergent* commit history, with a conflict. 

Let's try to **merge** (in this case we are merging readme-fix into master) !

```bash
$ git merge readme-fix
Auto-merging README.md
* CONFLICT (content): Merge conflict in README.md
Automatic merge failed; fix conflicts and then commit the result.
```

---
# A Quick Pause

Before attempting to resolve this, let's take a look at the status of our local repo:

```bash
$ git status
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)
You have unmerged paths.
  * (fix conflicts and run "git commit")
  * (use "git merge --abort" to abort the merge)

Unmerged paths:
  (use "git add <file>..." to mark resolution)

  both modified:   README.md

no changes added to commit (use "git add" and/or "git commit -a")
```
> **Note** At any point a merge conflict is introduced, as git has outlined for us, you may abort the merge, or 
  delve into conflict resolution, which is only truly *resolved* when the changes are *added* !

---

# A Quick Pause p2

If you want to get an even deeper understanding, or if you would like to check certain changes accross branches, commits, or even across your HEAD pointer you can make use of the git diff command. From our current example:

```bash
$ git diff readme-fix
diff --git a/README.md b/README.md
index edd4a68..21bab23 100644
--- a/README.md
+++ b/README.md
@@ -5,4 +5,4 @@ Testing out different scenarios for git conflicts.
 ## Test Environment Below:
 
 - Line 1: To Stay Same.
-- Line 2: Will Create Conflict. <Edited on readme-fix branch>
\ No newline at end of file
+- Line 2: Will Create Conflict. <Edited on master branch>
\ No newline at end of file
```

---

# A Quick Pause p3

This is a comparison between the lastest commit on the master branch versus the latest commit on the readme-fix branch. Even before merging we are able to see that *line 2* has conflicting changes on it, while this is not explictly highlighted by git, it can help with pre-emptive changes. Further more, git diff can be used as such:

- Comparing HEAD to last commit (will show nothing if no changes since last commit.)
```bash
$ git diff
```

- Comparing commits
```bash
git diff <commit A> <commit B>
```

> **Note** These are a few examples, most git commands have an incredible amount of utility/options, git diff is a powerful tool for doing quick comparisons across versions of your code.

---

# Resolving Our Conflict:

Take a look at the file in question:
```text
- Line 1: To Stay Same.
<<<<<<< HEAD
- Line 2: Will Create Conflict. <Edited on master branch>
=======
- Line 2: Will Create Conflict. <Edited on readme-fix branch>
>>>>>>> readme-fix
```

In preparation, we know which changes were added on which branch. However, note that the top line is associated with HEAD, this is because our HEAD is on the master branch. We could have merged from a different location and the conflict would change the name accordingly. 

I choose to resolve this by replacing the lines with:

```text
- Line 2: Will Create Conflict. <Conflict Resolved>
```

---

# Resolving Our Conflict p2

As we saw early, to truly resolve the conflict, use git add on the files in question, and finally, commit the changes.

Visually, we may see the merge like so:

```bash
$ git log --oneline --decorate --graph --all
.   b36794f (HEAD -> master) Conflict resolved while trying to merge from readme-fix into master.
|\  
| . 98f9d57 (readme-fix) Added a change to 'line 2' of readme.md.
. | 4992284 Added a change to 'line 2' of readme.md
|/  
. 9cdaf26 (origin/master, origin/HEAD) Added text to readme.md.
. 2aabc91 Initial commit
```

> ***nice.***
---

# References and Images

### Images

```md

```

