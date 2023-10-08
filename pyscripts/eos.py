import numpy as np
V0 = 429.40
B0 = 117
B0p = 3.2
x = np.linspace(300,440,41)
xp = V0 / x
y = 3/2 * B0 *(xp**(7/3) - xp**(5/3)) * (1+3/4*(B0p-4)*(xp**(2/3)-1)) 

print(list(y), list(x))