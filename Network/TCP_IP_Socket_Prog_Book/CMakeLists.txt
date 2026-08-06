cmake_minimum_required(VERSION 3.20)

project(chapter03 LANGUAGES C CXX)

set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Threads REQUIRED)

file(GLOB EXAMPLE_SOURCES CONFIGURE_DEPENDS
        "${CMAKE_CURRENT_SOURCE_DIR}/*/*.c"
        "${CMAKE_CURRENT_SOURCE_DIR}/*/*.cpp"
)

foreach(source_file IN LISTS EXAMPLE_SOURCES)
    get_filename_component(target_name "${source_file}" NAME_WE)

    add_executable("${target_name}" "${source_file}")
    target_link_libraries("${target_name}" PRIVATE Threads::Threads)
endforeach()