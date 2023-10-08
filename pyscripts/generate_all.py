import os
import subprocess

def read_cif(filename):
    with open(filename, "r") as f:
        cifdata = f.readlines()
    return cifdata


def find_ineq(cifdata):
    output = []
    for line in cifdata:
        if len(line.split()) != 5:
            pass
        else:
            if "\n" in line:
                line = line.replace("\n", "")
            output.append(line)
    return output


def get_cif_display(cifdata):
    texts = ""
    for i in cifdata:
        texts += i
    texts = texts.replace("'", '\x27')
    if ":" in texts:
        texts=texts.replace(":", "-")
    return repr(texts)


def get_output(cifdata, mineral_name,f):
    mineral_inequiv = ""
    mineral_formula = ""
    mineral_code = ""
    mineral_space_group =""
    mineral_volume = ""
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

    f.write("---\nlayout: mineral\ntitle: ")
    f.write(mineral_name)
    f.write("\ndate: 0001-01-01 00:00:00 -0400\ncatalog: true\n\nname: ")
    f.write(mineral_name)
    f.write("\nformula: ")
    f.write(mineral_formula)
    f.write("\nspace_group: ")
    f.write(mineral_space_group)
    f.write("\n\nlattice_parameters:\n    a (Å): ")
    f.write(mineral_a)
    f.write("\n    b (Å): ")
    f.write(mineral_b)
    f.write("\n    c (Å): ")
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
    f.write("\n\nstructure_source: \n    name:\n    url:\n    database_code: ")
    f.write(mineral_code)
    f.write("\n\ninput:")

    f.write("\n\n---\n")
    f.close()


if __name__ == "__main__":

    minerals_data_diir = "../mineralsdata/"

    cif_dir = "../mineralsdata/CIF/"
    cif_list = os.listdir(cif_dir)
    cif_list.remove(".DS_Store")
    mineral_name_list = [i.replace(".cif","") for i in cif_list]
    
    md_dir = "../_posts/"
    md_name_list = ["0001-01-01-%s.md" % i for i in mineral_name_list]
    
    for mineral in mineral_name_list:
        cif_name = "%s.cif"%mineral
        cif_path = os.path.join(cif_dir,cif_name)
        md_name = "0001-01-01-%s.md" % mineral
        md_path = os.path.join(md_dir,md_name)
        min_data_folder = os.path.join(minerals_data_diir, mineral)

        if not os.path.exists(min_data_folder):
            subprocess.run("mkdir '%s'"%min_data_folder, shell=True)
        subprocess.run(["cp '%s' '%s'"%( cif_path, min_data_folder)], shell=True)

        # if os.path.exists(md_path):
        #     print(md_path)

    # mineral_name = "Almandine"
        cifdata = read_cif(cif_path)
        with open(md_path,"w") as f:
            get_output(cifdata, mineral,f)
