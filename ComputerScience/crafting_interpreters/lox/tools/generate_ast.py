import argparse
import logging
from pathlib import Path


def main():
    parser = argparse.ArgumentParser()

    parser.add_argument("output_dir")
    args = parser.parse_args()
    if not args.output_dir:
        logging.error("output_dir is not provided")
        logging.error("Usage: generate_ast <output directory>")
        return

    define_ast(args.output_dir, "Expr", [
        "Binary: Expr left, Token operator, Expr right",
        "Grouping: Expr expression",
        "Literal: Object value",
        "Unary: Token operator, Expr right",
    ])

def define_ast(output_dir, base_name, types):
    path = Path(output_dir) / f"{base_name}.java"
    path.parent.mkdir(parents=True, exist_ok=True)
    with open(path, "w", encoding="utf-8") as file:
        file.write("package lox;\n")
        file.write("\n")
        file.write("import java.util.List;\n")
        file.write("\n")
        file.write("abstract class " + base_name + " {\n")
        for type in types:
            class_name = type.split(":")[0].strip()
            fields = type.split(":")[1].strip()
            define_type(file, base_name, class_name, fields)
            file.write("\n")
        file.write("}")

def define_type(file, base_name, class_name, fields):
    file.write("    static class " + class_name + " extends " + base_name + " {\n")

    file.write("        " + class_name+ "(" + fields + ") {\n")
    fiedlList = fields.split(", ")
    for field in fiedlList:
        name = field.split(" ")[1]
        file.write("            this." + name + " = " + name + ";\n")

    file.write("        }\n")
    file.write("\n")
    for field in fiedlList:
        file.write("        final " + field + ";\n")
    file.write("    }\n")

if __name__ == "__main__":
    main()