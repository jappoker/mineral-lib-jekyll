import os

def read_cif(filename):
    with open(filename,"r") as f:
        cifdata = f.readlines()
    return cifdata


def find_ineq(cifdata):
    output = []
    for line in cifdata:
        if len(line.split()) !=5:
            pass
        else:
            if "\n" in line:
                line = line.replace("\n","")
            output.append(line)
    return output

def get_cif_display(cifdata):
    texts = ""
    for i in cifdata:
        texts+= i
    texts = texts.replace("'", '\x27')
    if ":" in texts:
        texts.replace(":","-")
    return repr(texts)

def get_output(cifdata):
    for line in cifdata:
        if "_chemical_formula_sum" in line:
            mineral_formula = line.split("'")[1]
        if "_cell_length_a" in line:
            mineral_a = line.split()[1]
        if "_cell_length_b" in line:
            mineral_b = line.split()[1]
        if "_cell_length_c" in line:
            mineral_c = line.split()[1]
        if "_cell_angle_alpha" in line:
            mineral_alpha = line.split()[1]
        if "_cell_angle_beta" in line:
            mineral_beta = line.split()[1]
        if "_cell_angle_gamma" in line:
            mineral_gamma = line.split()[1]
        if "_cell_volume" in line:
            mineral_volume = line.split()[1]
        if "_symmetry_space_group_name" in line:
            mineral_space_group = line.split("'")[1]
        if "_atom_site_U_iso_or_equiv" in line:
            ind = cifdata.index(line)
            mineral_inequiv = find_ineq(cifdata[ind:])
        if "_database_code_amcsd" in line:
            mineral_code = line

    with open("tmp.md", "w") as f:
        f.write("---\nlayout: mineral\ntitle: ")
        f.write(mineral_name)
        f.write("\ndate: 0001-01-01 00: 00: 00 - 0400\ncatalog: true\n\nname: ")
        f.write(mineral_name)
        f.write("\nformula: ")
        f.write(mineral_formula)
        f.write("\nspace_group: ")
        f.write(mineral_space_group)
        f.write("\n\nlattice_parameters:\n    a(Å): ")
        f.write(mineral_a)
        f.write("\n    b(Å): ")
        f.write(mineral_b)
        f.write("\n    c(Å): ")
        f.write(mineral_c)
        f.write("\n    α (°): ")
        f.write(mineral_alpha)
        f.write("\n    β (°): ")
        f.write(mineral_beta)
        f.write("\n    γ (°): ")
        f.write(mineral_gamma)
        f.write("\n    volume (Å<sup>3</sup>): ")
        f.write(mineral_volume)
        f.write("\n\nineqv_atom_position: ")

        for i in mineral_inequiv:
            f.write("\n    - ")
            f.write(i)

        f.write("\n\ncoordi_primitive: ")
        f.write("\n\nstructure_img: ")

        f.write("\ncif: |-\n")
        f.write("    ")
        f.write(get_cif_display(cifdata).replace('"', ""))
        f.write("\n")
        f.write("\n\nstructure_source: \n    name: \n    url:\n    database_code: ")
        f.write(mineral_code)
        f.write("\n\n input:")

        f.write("\n\n---\n")


if __name__ == "__main__":
    mineral_name = "Almandine"
    cifdata = read_cif("../mineralsdata/Almandine/Almandine AMS_DATA.cif")
    output_name = ""
    get_output(cifdata)
