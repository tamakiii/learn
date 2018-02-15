// @link http://yasuharu519.hatenablog.com/entry/2015/04/07/095734
#include <GLFW/glfw3.h>
#include <stdlib.h>
#include <stdio.h>
#include <iostream>
#include <exception>
#include <stdexcept>

static void error_callback(int error, const char* description)
{
  fputs(description, stderr);
}

static void key_callback(GLFWwindow* window, int key, int scancode, int action, int mods)
{
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
    glfwSetWindowShouldClose(window, GL_TRUE);
}

GLFWwindow* createWindow(int width, int height, const char *title, GLFWmonitor *monitor, GLFWwindow *share)
{
  GLFWwindow* window;

  if (!glfwInit()) {
    throw std::runtime_error("Failed to glfwInit()");
  }

  window = glfwCreateWindow(640, 480, "Simple example", NULL, NULL);

  if (!window) {
    glfwTerminate();
    throw std::runtime_error("Failed to glfwCreateWindow()");
  }

  glfwMakeContextCurrent(window);

  return window;
}

void display(GLFWwindow* window)
{
    float ratio;
    int width, height;

    glfwGetFramebufferSize(window, &width, &height);
    ratio = width / (float)height;
    glViewport(0, 0, width, height);
    glClear(GL_COLOR_BUFFER_BIT);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    glOrtho(-ratio, ratio, -1.f, 1.f, 1.f, -1.f);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    glRotatef((float)glfwGetTime() * 50.f, 0.f, 0.f, 1.f);
    glBegin(GL_TRIANGLES);
    glColor3f(1.f, 0.f, 0.f);
    glVertex3f(-0.6f, -0.4f, 0.f);
    glColor3f(0.f, 1.f, 0.f);
    glVertex3f(0.6f, -0.4f, 0.f);
    glColor3f(0.f, 0.f, 1.f);
    glVertex3f(0.f, 0.6f, 0.f);
    glEnd();
    glfwSwapBuffers(window);
    glfwPollEvents();
}

int main(void)
{
  GLFWwindow* window;

  try {
    window = createWindow(640, 480, "Simple example", NULL, NULL);
  } catch (std::exception& e) {
    std::cout << e.what() << std::endl;
    exit(EXIT_FAILURE);
  }

  glfwSetErrorCallback(error_callback);
  
  glfwSwapInterval(1);
  glfwSetKeyCallback(window, key_callback);

  while (!glfwWindowShouldClose(window))
  {
    display(window);
  }

  glfwDestroyWindow(window);
  glfwTerminate();
  exit(EXIT_SUCCESS);
}
