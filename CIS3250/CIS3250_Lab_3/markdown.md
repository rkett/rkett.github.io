class: center, middle, title-slide

![](https://git-scm.com/images/logo@2x.png)

> *(multiplayer notepad)*

---

# today: crash course on git and github

### By the end you should know how to:

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
