cmake_minimum_required(VERSION 4.1)
project(windows_server_cpp)

set(CMAKE_CXX_STANDARD 20)

add_executable(windows_server_cpp main.cpp)

if(WIN32)
    target_link_libraries(windows_server_cpp ws2_32)
endif()