#pragma once

namespace font {
  void test();
  void begin();
  void end();

  void draw(const char *format, ...);
  // void draw(const char *format);
  void setPosition(float x, float y);
  void setSize(float size);
  float getSize();
  void setColor(unsigned char red, unsigned char green, unsigned char blue);
}
