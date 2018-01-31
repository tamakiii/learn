#include <GLUT/GLUT.h>

void display()
{
  glClear(GL_COLOR_BUFFER_BIT);
  glutWireTeapot(1);
  glFlush();
}

int main(int argc, char *argv[])
{
  glutInit(&argc, argv);
  glutInitWindowPosition(640, 0);
  glutInitWindowSize(640, 640);
  glutCreateWindow("Title");
  glClearColor(0, 0, 0, 1.0f);
  glutDisplayFunc(display);
  glutMainLoop();
}
