#include <GLUT/GLUT.h>
#include <stdio.h>

int windowWidth = 800;
int windowHeight = 600;

void display(void) {
  glClear(GL_COLOR_BUFFER_BIT);
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  gluOrtho2D(0, windowWidth, windowHeight, 0); // Orthographic projection

  glMatrixMode(GL_MODELVIEW);
  glLoadIdentity();

  glTranslatef(windowWidth/2, windowHeight/2, 0);

  static float angle;
  if (++angle >= 360) {
    angle = 0;
  }

  glRotatef(angle, 0, 0, 1);

  glScalef(256, 256, 1);
  glutWireTeapot(1);
  glutSwapBuffers();
}

void timer(int value) {
  glutPostRedisplay();
  glutTimerFunc(1000/60, timer, 0);
}

void reshape(int width, int height) {
  printf("reshape: %d,%d", width, height);
  windowWidth = width;
  windowHeight = height;
  glViewport(0, 0, windowWidth, windowHeight);
}

int main(int argc, char *argv[])
{
  glutInit(&argc, argv);
  glutInitWindowPosition(640, 0);
  glutInitWindowSize(windowWidth, windowHeight);
  glutCreateWindow("Title");
  glClearColor(0, 0, 0, 1.0f);
  glutDisplayFunc(display);
  glutTimerFunc(0, timer, 0);
  glutReshapeFunc(reshape);
  glutMainLoop();
}
