#from perlin_noise import PerlinNoise
# Library used above: https://pypi.org/project/perlin-noise/

print("DataBuilder V1.0")
file = open("output.csv", "w")
file.write("x, y, z" + "\n")

def generateMegaCube():
    for i in range(100):
        for j in range(10):
            for k in range(10):
                if (i % 2 * j == 0 or j % 2 * i == 0 or k % 2 * k == 0):
                    file.write(str(i) + ',' + str(j) + ',' + str(k) + "\n")

#def generatePerlinTerrain(in_seed):

    #noise = PerlinNoise(octaves=2, seed=in_seed)

    #for i in range(30):
        #for j in range(30):
            #for k in range(30):
                    #file.write(str(i) + ',' + str(((noise([k/10, j/10, i/10]) * 10))) + ',' + str((j)) + "\n")


def generatePyramid():
    for i in range(-100, 100):
            for j in range(-100, 100):
                k = 1-abs(i+j)-abs(j-i)
                file.write(str(i) + ',' + str(k) + ',' + str(j) + "\n")


generatePyramid()
file.close()
