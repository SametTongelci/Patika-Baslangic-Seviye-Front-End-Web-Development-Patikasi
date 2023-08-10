# Merge Sort
[16,21,11,8,12,22] -> Merge Sort

Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
Big-O gösterimini yazınız.

---

### ÇÖZÜM

Step 1: [16,21,11], [8,12,22]
Step 2: [16,21] [11], [8,12] [22]
Step 3: [16] [21] [11], [8] [12] [22]
Step 4: [16, 21] [11], [8, 12] [22]
Step 5: [11, 16, 21], [8, 12, 22] 
Step 6: [8, 11, 12, 16, 21, 22]

Big-O gösterimi: Merge Sort algoritmasının zaman karmaşıklığı **O(n logn)**'dir, burada "n" dizinin eleman sayısını temsil eder.

```
        [16  21  11  8  12  22]
        /   /   /     \   \   \
       /    /   /      \    \   \
       [16  21  11]     [8  12  22]
       /    /    \       /  /    \ 
      /    /      \     /  /      \
     [16  21]    [11]  [8  12]    [22]
     /     |      /     |   \       \
    /      |     /      |    \       \
   [16]   [21]  [11]    [8]   [12]   [22]
    \      |     |      \     |       /
     \     |     |       \    |      /
     [16  21]    [11]    [8  12]   [22]
      \    \       /      \   \     / 
       \    \     /        \   \   /
       [11  16  21]       [8  12  22]
             \               /
              \             /
           [8  11  12  16  21  22]
```


---

<div id="contact">

## Connect with me:

  <a href="https://www.linkedin.com/in/samet-tongelci/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-onvhHUdW1Us%2FYI52e9j4eKI%2FAAAAAAAAE4c%2F6s9wzOpIDYcAo4YmTX1Qg51OlwMFmilFACLcBGAsYHQ%2Fs1600%2FLogo%252BLinkedin.png&f=1&nofb=1&ipt=edb59a1b216c55e3eb63ef45526e2243b3e4291e82b7893c9945047490037ee8&ipo=images" width="66x"> </a>  &nbsp;   <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=sametongelci@gmail.com"><img src="https://img.icons8.com/ios-glyphs/60/000000/new-post.png" height="55px"/></a>

 </div>

[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=%2318f9ee&size=22&lines=Thanks+for+visiting)](https://git.io/typing-svg)