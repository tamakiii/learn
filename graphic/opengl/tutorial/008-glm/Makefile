build: build/main build/sub

build/%:
	# https://stackoverflow.com/questions/14228856/how-to-compile-c-with-c11-support-in-mac-terminal
	clang++ -std=c++11 -stdlib=libc++ -framework GLUT -framework OpenGL $(@F).cpp -o $(@F).o

clean: clean/main clean/sub

clean/%:
	rm -rf $(@F).o

