# Binary Search Tree

[7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.

Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

## ÇÖZÜM

- root olarak ilk eleman olan 7 yi seçersek:
- 5, 7'nin solundadır.
- 1, 5'in solundadır.
- 8, 7'nin sağındadır.
- 3, 5'in solunda, 1'in sağındadır.
- 6, 7'nin solunda, 5'in sağındadır.
- 0, 1'in solundadır.
- 9, 8'nin sağındadır.
- 4, 7'nin solunda, 3'ün sağındadır.
- 2, 7'nin solunda, 1'in sağındadır.

```
         7
       /   \
      5     8
     / \     \
    1   6     9
   / \
  0   3
     / \
    2   4
```