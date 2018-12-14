# numpy test

## dot out production 

```python
>>> a=np.array([1,2,3,4])
>>> b=np.array([0.1,2,1])
>>> a=np.reshape(a, len(a), 1)
>>> b=np.reshape(b,(1,len(b)))
>>> a
array([[1],
       [2],
       [3],
       [4]])
>>> b
array([[0, 1, 2, 1]])
>>> a.shape
(4, 1)
>>> b.shape
(1, 4)
>>> c=a*b
>>> c
array([[0, 1, 2, 1],
       [0, 2, 4, 2],
       [0, 3, 6, 3],
       [0, 4, 8, 4]])
>>> a[:2]
array([[1],
       [2]])
>>> c[:2]
array([[0, 1, 2, 1],
       [0, 2, 4, 2]])
>>> c[0:2]
array([[0, 1, 2, 1],
       [0, 2, 4, 2]])
>>> c[0,2]
2
>>> c[-1]
array([0, 4, 8, 4])
>>> c[:-1]
array([[0, 1, 2, 1],
       [0, 2, 4, 2],
       [0, 3, 6, 3]])
>>> c[-2]
array([0, 3, 6, 3])
>>> c[:-2]
array([[0, 1, 2, 1],
       [0, 2, 4, 2]])
>>> c[2,3]
3
>>>
```

## creation

```python
Python 3.6.5 |Anaconda, Inc.| (default, Apr 29 2018, 16:14:56) 
[GCC 7.2.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> import numpy as np
>>> a = np.arange(15)
>>> a
array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14])
>>> a = np.arange(15).reshape(3,5)
>>> a
array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14]])
>>> a.ndim
2
>>> a.shape
(3, 5)
>>> a.dtype.name
'int64'
>>> a.itemsize
8
>>> a.size
15
>>> type(a)
<class 'numpy.ndarray'>
>>> b=np.array([6,7,8])
>>> b
array([6, 7, 8])
>>> type(b)
<class 'numpy.ndarray'>
>>> b=np.array([1.,2.,3.])
>>> b
array([1., 2., 3.])
>>> b.dtype
dtype('float64')
>>> b=np.array([(1,2,3),(4,5,6)])
>>> b
array([[1, 2, 3],
       [4, 5, 6]])
>>> c=np.array([ [1,2],[3,4] ], dtype=complex)
>>> c
array([[1.+0.j, 2.+0.j],
       [3.+0.j, 4.+0.j]])
>>> c=np.zeros((3,4))
>>> c
array([[0., 0., 0., 0.],
       [0., 0., 0., 0.],
       [0., 0., 0., 0.]])
>>> c=np.ones((3,4))
>>> c
array([[1., 1., 1., 1.],
       [1., 1., 1., 1.],
       [1., 1., 1., 1.]])
>>> c.dtype
dtype('float64')
>>> c=np.ones((3,4), dtype=np.int16)
>>> c
array([[1, 1, 1, 1],
       [1, 1, 1, 1],
       [1, 1, 1, 1]], dtype=int16)
>>> c.dtype
dtype('int16')
>>> d=np.empty((2,3))
>>> d
array([[4.64043014e-310, 6.90333808e-310, 1.94241498e-109],
       [3.21142670e-322, 4.64043014e-310, 6.90333808e-310]])
>>> d.dtype
dtype('float64')
>>> np.arange(10, 30, 5)
array([10, 15, 20, 25])
>>> d = np.arange(10, 30, 5)
>>> d
array([10, 15, 20, 25])
>>> d = np.arange(10, 30, 1)
>>> d
array([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
       27, 28, 29])
>>> d.size
20
>>> len(d)
20
>>> np.arange(-1,1,0.1)
array([-1.00000000e+00, -9.00000000e-01, -8.00000000e-01, -7.00000000e-01,
       -6.00000000e-01, -5.00000000e-01, -4.00000000e-01, -3.00000000e-01,
       -2.00000000e-01, -1.00000000e-01, -2.22044605e-16,  1.00000000e-01,
        2.00000000e-01,  3.00000000e-01,  4.00000000e-01,  5.00000000e-01,
        6.00000000e-01,  7.00000000e-01,  8.00000000e-01,  9.00000000e-01])
>>> len(np.arange(-1,1,0.1))
20
>>> from numpy import pi
>>> np.linespace(0,2,9)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: module 'numpy' has no attribute 'linespace'
>>> np.linspace(0,2,9)
array([0.  , 0.25, 0.5 , 0.75, 1.  , 1.25, 1.5 , 1.75, 2.  ])
>>> x = np.linspace(0, 2*pi, 100)
>>> f = np.sin(x)
>>> f
array([ 0.00000000e+00,  6.34239197e-02,  1.26592454e-01,  1.89251244e-01,
        2.51147987e-01,  3.12033446e-01,  3.71662456e-01,  4.29794912e-01,
        4.86196736e-01,  5.40640817e-01,  5.92907929e-01,  6.42787610e-01,
        ....,
       -6.42787610e-01, -5.92907929e-01, -5.40640817e-01, -4.86196736e-01,
       -4.29794912e-01, -3.71662456e-01, -3.12033446e-01, -2.51147987e-01,
       -1.89251244e-01, -1.26592454e-01, -6.34239197e-02, -2.44929360e-16])
>>> c=np.arange(24).reshape(2,3,4)
>>> c
array([[[ 0,  1,  2,  3],
        [ 4,  5,  6,  7],
        [ 8,  9, 10, 11]],

       [[12, 13, 14, 15],
        [16, 17, 18, 19],
        [20, 21, 22, 23]]])
>>> 


```

## Basic Operations

```python
>>> a = np.arange(20,50,10)
>>> a
array([20, 30, 40])
>>> a = np.arange(20,51,10)
>>> a
array([20, 30, 40, 50])
>>> b = np.arange(4)
>>> b
array([0, 1, 2, 3])
>>> c=a-b
>>> c
array([20, 29, 38, 47])
>>> b**2
array([0, 1, 4, 9])
>>> b*2
array([0, 2, 4, 6])
>>> b+1
array([1, 2, 3, 4])
>>> b/2
array([0. , 0.5, 1. , 1.5])
>>> b>1
array([False, False,  True,  True])
>>> c=a**2+b*3+5
>>> c
array([ 405,  908, 1611, 2514])
>>> A=np.arange(20).reshape(4,5)
>>> B=np.arange(50,70).reshape(4,5)
>>> A
array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14],
       [15, 16, 17, 18, 19]])
>>> B
array([[50, 51, 52, 53, 54],
       [55, 56, 57, 58, 59],
       [60, 61, 62, 63, 64],
       [65, 66, 67, 68, 69]])
>>> C=A+B
>>> C
array([[50, 52, 54, 56, 58],
       [60, 62, 64, 66, 68],
       [70, 72, 74, 76, 78],
       [80, 82, 84, 86, 88]])
>>> C=A*B
>>> C
array([[   0,   51,  104,  159,  216],
       [ 275,  336,  399,  464,  531],
       [ 600,  671,  744,  819,  896],
       [ 975, 1056, 1139, 1224, 1311]])
>>> A@B
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: shapes (4,5) and (4,5) not aligned: 5 (dim 1) != 4 (dim 0)
>>> B=np.arange(50,70).reshape(5,4)
>>> A@B
array([[ 620,  630,  640,  650],
       [2070, 2105, 2140, 2175],
       [3520, 3580, 3640, 3700],
       [4970, 5055, 5140, 5225]])
>>> B
array([[50, 51, 52, 53],
       [54, 55, 56, 57],
       [58, 59, 60, 61],
       [62, 63, 64, 65],
       [66, 67, 68, 69]])
>>> A@B
array([[ 620,  630,  640,  650],
       [2070, 2105, 2140, 2175],
       [3520, 3580, 3640, 3700],
       [4970, 5055, 5140, 5225]])
>>> A.dot(B)
array([[ 620,  630,  640,  650],
       [2070, 2105, 2140, 2175],
       [3520, 3580, 3640, 3700],
       [4970, 5055, 5140, 5225]])
>>> a=np.ones((2,3), dtype=int)
>>> b=np.random.random((2,3))
>>> a
array([[1, 1, 1],
       [1, 1, 1]])
>>> b
array([[0.22784024, 0.84182047, 0.26602042],
       [0.16921602, 0.85142975, 0.89487521]])
>>> a+b
array([[1.22784024, 1.84182047, 1.26602042],
       [1.16921602, 1.85142975, 1.89487521]])
>>> a*b
array([[0.22784024, 0.84182047, 0.26602042],
       [0.16921602, 0.85142975, 0.89487521]])
>>> a=np.ones(3, dtype=np.int32)
>>> b=np.linspace(0,pi,3)
>>> a
array([1, 1, 1], dtype=int32)
>>> b
array([0.        , 1.57079633, 3.14159265])
>>> b.dtype
dtype('float64')
>>> c=a+b
>>> c
array([1.        , 2.57079633, 4.14159265])
>>> c.dtype
dtype('float64')
>>> d=np.exp(c*1j)
>>> d
array([ 0.54030231+0.84147098j, -0.84147098+0.54030231j,
       -0.54030231-0.84147098j])
>>> d=np.exp(c*j)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'j' is not defined
>>> d.dtype
dtype('complex128')
>>> d=np.exp(c*1j)
>>> d.dtype
dtype('complex128')
>>> a=np.random.random((2,3))
>>> a
array([[0.74540898, 0.84103877, 0.6074052 ],
       [0.48305707, 0.42448823, 0.23983496]])
>>> a.sum()
3.341233206599572
>>> a.min()
0.2398349602548171
>>> a.max()
0.8410387685610161
>>> print("max:{}, min:{}".format (a.max(), a.min()))
max:0.8410387685610161, min:0.2398349602548171
>>> b=np.arange(20).reshape(4,5)
>>> b.sum(axis=0)
array([30, 34, 38, 42, 46])
>>> b
array([[ 0,  1,  2,  3,  4],
       [ 5,  6,  7,  8,  9],
       [10, 11, 12, 13, 14],
       [15, 16, 17, 18, 19]])
>>> b.sum(axis=1)
array([10, 35, 60, 85])
>>> b.min(axis=1)
array([ 0,  5, 10, 15])
>>> b.max(axis=0)
array([15, 16, 17, 18, 19])
>>> b.cumsum(axis=1)
array([[ 0,  1,  3,  6, 10],
       [ 5, 11, 18, 26, 35],
       [10, 21, 33, 46, 60],
       [15, 31, 48, 66, 85]])



```

## function - util

```python

>>> B=np.arange(3)
>>> B
array([0, 1, 2])
>>> np.exp(B)
array([1.        , 2.71828183, 7.3890561 ])
>>> np.sqrt(B)
array([0.        , 1.        , 1.41421356])
>>> C=np.arange(2,5,1.0)
>>> C
array([2., 3., 4.])
>>> np.append(B, C)
array([0., 1., 2., 2., 3., 4.])
>>> np.add(B,C)
array([2., 4., 6.])
>>> B
array([0, 1, 2])
>>> C
array([2., 3., 4.])
>>> B=C
>>> C=np.arange(2,5,1.0)
>>> C
array([2., 3., 4.])
>>> B
array([2., 3., 4.])
>>> B+C
array([4., 6., 8.])
>>> a=np.arange(10)**3
>>> a
array([  0,   1,   8,  27,  64, 125, 216, 343, 512, 729])
>>> a[2]
8
>>> a[2:5]
array([ 8, 27, 64])
>>> a[:6:2]
array([ 0,  8, 64])
>>> a[:6:3]
array([ 0, 27])
>>> a[:8:2]
array([  0,   8,  64, 216])
>>> a[:8:2] = 100
>>> a
array([100,   1, 100,  27, 100, 125, 100, 343, 512, 729])
>>> a[::-1]
array([729, 512, 343, 100, 125, 100,  27, 100,   1, 100])
>>> for i in a:
...   print(i)
... 
100
1
100
27
100
125
100
343
512
729
>>> def f(x,y):
...   return 10*x+y
... 
>>> b=np.fromfunction(f, (5,4), dtype=int)
>>> b
array([[ 0,  1,  2,  3],
       [10, 11, 12, 13],
       [20, 21, 22, 23],
       [30, 31, 32, 33],
       [40, 41, 42, 43]])
>>> b[2,3]
23
>>> b[0:5,2]
array([ 2, 12, 22, 32, 42])
>>> b[:, 1]
array([ 1, 11, 21, 31, 41])
>>> b[:2, 1]
array([ 1, 11])
>>> b[1:2, 1]
array([11])
>>> b[1:3,]
array([[10, 11, 12, 13],
       [20, 21, 22, 23]])
>>> b[-1]
array([40, 41, 42, 43])
>>> 
>>> 
>>> c=np.arange(12).reshape((2,2,3))**2
>>> c
array([[[  0,   1,   4],
        [  9,  16,  25]],

       [[ 36,  49,  64],
        [ 81, 100, 121]]])
>>> c.shape
(2, 2, 3)
>>> c.ndim
3
>>> c[-1]
array([[ 36,  49,  64],
       [ 81, 100, 121]])
>>> c[1:2]
array([[[ 36,  49,  64],
        [ 81, 100, 121]]])
>>> c[1,...]
array([[ 36,  49,  64],
       [ 81, 100, 121]])
>>> c[...,2]
array([[  4,  25],
       [ 64, 121]])
>>> c[:,:,2]
array([[  4,  25],
       [ 64, 121]])
>>> for row in c:
...   print(row)
... 
[[ 0  1  4]
 [ 9 16 25]]
[[ 36  49  64]
 [ 81 100 121]]
>>> a=np.floor(10* np.random.random((3,4)))
>>> a
array([[9., 9., 2., 2.],
       [8., 6., 2., 0.],
       [0., 5., 4., 7.]])
>>> a.ravel()
array([9., 9., 2., 2., 8., 6., 2., 0., 0., 5., 4., 7.])
>>> a.reshape(4,3)
array([[9., 9., 2.],
       [2., 8., 6.],
       [2., 0., 0.],
       [5., 4., 7.]])
>>> a
array([[9., 9., 2., 2.],
       [8., 6., 2., 0.],
       [0., 5., 4., 7.]])
>>> a.T
array([[9., 8., 0.],
       [9., 6., 5.],
       [2., 2., 4.],
       [2., 0., 7.]])
>>> a.shape
(3, 4)
>>> a.T.shape
(4, 3)
>>> a@a.T
array([[170., 130.,  67.],
       [130., 104.,  38.],
       [ 67.,  38.,  90.]])
>>> a.dot(a.T)
array([[170., 130.,  67.],
       [130., 104.,  38.],
       [ 67.,  38.,  90.]])
>>> 
>>> ㅁ
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'ᄆ' is not defined
>>> ㅁ
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'ᄆ' is not defined
>>> a
array([[9., 9., 2., 2.],
       [8., 6., 2., 0.],
       [0., 5., 4., 7.]])
>>> a.reshape(6)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: cannot reshape array of size 12 into shape (6,)
>>> a.reshape(6,-1)
array([[9., 9.],
       [2., 2.],
       [8., 6.],
       [2., 0.],
       [0., 5.],
       [4., 7.]])
>>> a.reshape(6,-1).T
array([[9., 2., 8., 2., 0., 4.],
       [9., 2., 6., 0., 5., 7.]])
>>> a=np.floor(10*np.random.random(3,3))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "mtrand.pyx", line 819, in mtrand.RandomState.random_sample
TypeError: random_sample() takes at most 1 positional argument (2 given)
>>> a=np.floor(10*np.random.random((3,3)))
>>> a
array([[5., 7., 1.],
       [9., 7., 9.],
       [8., 2., 1.]])
>>> b=np.floor(10*np.random.random((3,3)))
>>> b
array([[3., 7., 0.],
       [8., 3., 4.],
       [8., 7., 4.]])
>>> np.vstack(a,b)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: vstack() takes 1 positional argument but 2 were given
>>> np.vstack((a,b))
array([[5., 7., 1.],
       [9., 7., 9.],
       [8., 2., 1.],
       [3., 7., 0.],
       [8., 3., 4.],
       [8., 7., 4.]])
>>> np.column_stack((a,b))
array([[5., 7., 1., 3., 7., 0.],
       [9., 7., 9., 8., 3., 4.],
       [8., 2., 1., 8., 7., 4.]])
>>> np.hstack((a,b))
array([[5., 7., 1., 3., 7., 0.],
       [9., 7., 9., 8., 3., 4.],
       [8., 2., 1., 8., 7., 4.]])
>>> from numpy import newaxis
>>> a[:newaxis]
array([[5., 7., 1.],
       [9., 7., 9.],
       [8., 2., 1.]])
>>> a
array([[5., 7., 1.],
       [9., 7., 9.],
       [8., 2., 1.]])
>>> 


>>> a=np.arange(12).reshape(3,4)
>>> a
array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11]])
>>> b=a>5
>>> b
array([[False, False, False, False],
       [False, False,  True,  True],
       [ True,  True,  True,  True]])
>>> a[b]
array([ 6,  7,  8,  9, 10, 11])
>>> a[b] = 0
>>> a
array([[0, 1, 2, 3],
       [4, 5, 0, 0],
       [0, 0, 0, 0]])


```

## scipy image

```python

>>> from scipy.misc import imread, imsave, imresize
>>> img=imread('/home/mulder/Pictures/001.png')
>>> print(img.shape, img.dtype)
(645, 1772, 3) uint8
>>> img_r=img*[1,0,0]
>>> imsave('/tmp/rrr.jpg', img_r)
>>> img_g=img*[0,1,0]
>>> imsave('/tmp/ggg.jpg', img_g)
>>> img_b=img*[0,0,1]
>>> imsave('/tmp/bbb.jpg', img_b)




```
