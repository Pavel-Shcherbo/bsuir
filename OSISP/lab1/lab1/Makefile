CC = gcc
CFLAGS_COMMON = -std=c11 -pedantic -W -Wall -Wextra
CFLAGS_DEBUG = $(CFLAGS_COMMON) -g -ggdb
CFLAGS_RELEASE = $(CFLAGS_COMMON) -Werror

SRCS = main.c
OBJS = $(SRCS:.c=.o)
EXEC = dirwalk

.PHONY: all clean

all: $(EXEC)

$(EXEC): $(OBJS)
ifeq ($(MODE),debug)
	$(CC) $(CFLAGS_DEBUG) $(OBJS) -o $(EXEC)
else
	$(CC) $(CFLAGS_RELEASE) $(OBJS) -o $(EXEC)
endif

%.o: %.c
	$(CC) $(CFLAGS_COMMON) -c $< -o $@

clean:
	rm -f $(OBJS) $(EXEC)
