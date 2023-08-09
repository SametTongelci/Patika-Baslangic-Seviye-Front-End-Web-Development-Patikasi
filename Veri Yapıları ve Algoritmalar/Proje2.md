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