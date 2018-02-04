// @link https://qiita.com/usagi/items/f34976a3d3011506ff7d
#define GLM_SWIZZLE
#include <iostream>
#include <glm/glm.hpp>
#include <glm/ext.hpp>
#include <glm/gtx/string_cast.hpp>

auto main()
  -> int
{
  {
    auto a = glm::vec2( 3, 4 );
    std::cout
      << "a: " << a.x << " " << a.y << "\n"
      << "length(a): " << glm::length( a ) << "\n"
      ;
  }

  {
    auto p = glm::vec4( 2, 3, 4, 5 );
    auto q = glm::vec4( 3, 4, 5, 6 );
    auto n = p + q;
    auto m = p * q;

    std::cout
      << "n ( operator+ ): " << n.x << " " << n.y << " " << n.z << " " << n.w << "\n"
      << "m ( operator* ): " << m.x << " " << m.y << " " << m.z << " " << m.w << "\n"
      ;
  }

  {
    glm::mat4 m;
    std::cout << glm::to_string( m ) << "\n";
    m *= 3.14f;
    std::cout << glm::to_string( m ) << "\n";
  }

  {
    glm::mat4 m;

    m[0][1] = 1.73f;

    for ( auto a = 0; a < 4; ++a )
      for ( auto b = 0; b < 4; ++b )
        std::cout << m[a][b] << " ";

    std::cout
      << "\n"
      << glm::to_string( m ) << "\n"
      << *( reinterpret_cast< float* >( &m ) + 1 ) << "\n"
      ;
  }

  {
    std::cout
      << std::boolalpha
      << "pod            : " << std::is_pod<glm::vec4>::value << "\n"
      << "standard layout: " << std::is_standard_layout<glm::vec4>::value << "\n"
      << "trivial        : " << std::is_trivial<glm::vec4>::value << "\n"
      ;
  }

  {
    int e;

    // 絶対値: glm::abs(x)
    std::cout << glm::to_string( glm::abs( glm::vec3( 1, -1, -3 ) ) ) << "\n";
    // 天井値: glm::ceil(x)
    std::cout << glm::to_string( glm::ceil( glm::vec2( M_PI, -M_PI ) ) ) << "\n";
    // 抑え込み: glm::clamp(x, min, max)
    std::cout << glm::clamp( M_PI * 2, 0.0, M_PI / 2 ) << "\n";
    // 浮動小数点数の整数型表現を取得 : floatBitsToInt( f ) floatBitsToUint( f )
    std::cout << std::hex << glm::floatBitsToUint( 1 ) << "\n";
    // 床値: floor(x)
    std::cout << glm::to_string( glm::floor( glm::vec2( M_PI, -M_PI ) ) ) << "\n";
    // 融合積和算 : fma(a, b, c)
    std::cout << glm::floor( glm::fma( 1, 2, 3 ) ) << "\n";
    // 仮数 : fract( f )
    std::cout << glm::fract( M_PI ) << "\n";
    // 指数部と仮数部の分離 : glm::frexp( f, e )
    std::cout << glm::frexp( M_PI, e ) << "\n";
    // 整数型を浮動小数点数へ変換 : intBitsToFloat uintBitsToFloat
    std::cout
      << std::hex << glm::floatBitsToUint( M_PI ) << "\n"
      << glm::uintBitsToFloat( 0x40490fdbu ) << "\n"
      ;
    // 無限大の判定 : isinf( f )
    std::cout << std::boolalpha << glm::isinf( M_PI / 0 ) << "\n";
    // 非数の判定 : isnan( f )
    std::cout << std::boolalpha << glm::isinf( 0. / 0 ) << "\n";
    // 指数部と仮数部から浮動小数点数を生成 : ldexp( x, e )
    std::cout << std::ldexp( 0.785398f, 2 ) << "\n";
    // （次元毎の）最大値 : glm::max( a, b )
		{
      glm::vec3 a( 1, 7, -M_PI );
      glm::vec3 b( 2, 3, std::cos(M_PI) );
      std::cout << glm::to_string( glm::max( a, b ) ) << "\n";
		}
    // （次元毎の）最小値 : glm::min( a, b )
    {
      glm::vec3 a( 1, 7, -M_PI );
      glm::vec3 b( 2, 3, std::cos(M_PI) );
      std::cout << glm::to_string( glm::min( a, b ) ) << "\n";
    }
    // 線形合成 : glm::mix( x, y, a )
    {
      glm::vec3 a( 1, 7, -M_PI );
      glm::vec3 b( 2, 3, std::cos(M_PI) );
		  std::cout << glm::to_string( glm::mix( a, b, 4. / 5 ) ) << "\n";
    }
    // （負数や浮動小数点数対応の）剰余算 : glm::mod( x, y )
    std::cout
      // 480 [degrees] => 120 [degrees]
      << glm::mod(  M_PI * 8 / 3 , M_PI * 2 ) << "\n"
      // -270 [degrees] => 90 [degrees]
      << glm::mod( -M_PI * 3 / 2 , M_PI * 2 )
      ;
    // 整数部と少数部の分離 : glm::modf( x, i )
    {
      glm::vec2 x( M_PI, -M_PI );
      glm::vec2 i;
      std::cout << glm::to_string( glm::modf( x, i ) ) << "\n";
      std::cout << glm::to_string( i );
    }
    // 最近傍の整数への丸め : glm::round( x )
    {
      glm::vec2 x( M_PI, -M_PI );
      std::cout << glm::to_string( glm::round( x ) ) << "\n";
    }
    // 最近傍の整数への偶数丸め : glm::roundEven( x )
    {
      glm::vec4 x( -1.5, -0.5, 0.5, 1.5 );
      std::cout << glm::to_string( glm::roundEven( x ) ) << "\n";
    }
    // 符号を取得 : glm::sign( x )
    {
      glm::vec4 x( -1.5, -0.5, 0.5, 1.5 );
      std::cout << glm::to_string( glm::sign( x ) ) << "\n";
    }
    // クリッピングされたエルミート補間値の取得 : glm::smoothstep( e1, e2, x )
    {
      glm::vec4 e1( 0, 0, 0, 0 );
      glm::vec4 e2( 100, 100, 100, 100 );
      glm::vec4 x( -20, 20, 40, 120 );
      std::cout << glm::to_string( glm::smoothstep( e1, e2, x ) ) << "\n";
    }
    // 閾値による判定 : glm::step
    {
      glm::vec4 e( 20, 20, 20, 20 );
      glm::vec4 x(  0, 10, 20, 30 );
      std::cout << glm::to_string( glm::step( e, x ) ) << "\n";
    }
    // 零方向への丸め : glm::trunc( x )
    {
      glm::vec4 x( -1.5, -0.5, 0.5, 1.5 );
      std::cout << glm::to_string( glm::trunc( x ) ) << "\n";
    }
  }

  // https://github.com/bolero-MURAKAMI/Sprout
  // https://github.com/bolero-MURAKAMI/Sprout/blob/09181940789f135c292e9c336d8ceffca0b1bec3/sprout/math/constants.hpp
}

