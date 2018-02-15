# @link http://postd.cc/makefile-c-projects/
# @link http://shin.hateblo.jp/entry/2012/05/26/231036
.PHONY: clean

TARGET ?= a.out
SRC_DIRS ?= .
CXX := clang++

SRCS := $(shell find $(SRC_DIRS) -name '*.cpp' -or -name '*.c' -or -name '*.s')
OBJS := $(addsuffix .o,$(basename $(SRCS)))
DEPS := $(OBJS:.o=.d)

INC_DIRS := $(shell find $(SRC_DIRS) -type d)
INC_FLAGS := $(addprefix -I,$(INC_DIRS))

CPPFLAGS ?= $(INC_FLAGS) -MMD -MP -std=c++11 -stdlib=libc++
LDFLAGS ?= -framework GLUT -framework OpenGL

$(TARGET): $(OBJS)
	$(CXX) $(LDFLAGS) $(OBJS) -o $@ $(LOADLIBES) $(LDLIBS)

clean:
	$(RM) $(TARGET) $(OBJS) $(DEPS)

-include $(DEPS)

