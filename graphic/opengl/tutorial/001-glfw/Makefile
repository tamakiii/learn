CLAGS = -I /usr/local/include -I /usr/local/Cellar/glfw/3.2.1/include
LDFLAGS = -framework OpenGL -L /usr/local/Cellar/glfw/3.2.1/lib -lglfw

a.out: sample.cpp
	clang++ $(CFLAGS) sample.cpp $(LDFLAGS)
