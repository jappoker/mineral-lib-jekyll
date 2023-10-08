# Instruction to generate mineral data web page

## New Preview: [https://mineralscloud.github.io/resources/mineralsdatabase/](https://mineralscloud.github.io/resources/mineralsdatabase/)
## Old Preview in [https://www.jappoker.com/mineralsdatabase/Acimite.html](https://www.jappoker.com/mineralsdatabase/Acimite.html)

## Install Ruby and jekyll: [Jekyll Installation](https://jekyllrb.com/docs/installation/macos/)

1. Install `Homebrew` and then install `ruby`
```
# Install Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

2. Install `ruby` via `Homebrew`
```
brew install ruby
```

Add the brew ruby path to your shell config:
```
echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.bash_profile
```

3. Install `Jekyll`: local install
```
gem install --user-install bundler jekyll
```
and then get your Ruby version using
```
ruby -v
ruby 2.7.1p83 (2020-03-31 revision a0c7c23c9c)
```
Then append your path file with the following, replacing the `X.X` with the first two digits of your Ruby version.
```
echo 'export PATH="$HOME/.gem/ruby/X.X.0/bin:$PATH"' >> ~/.bash_profile
```

To check that your gem paths point to your home directory run:
```
gem env
```

## Install this webpage repository
1. git clone this repository
```
git clone https://github.com/jappoker/mineral_input_data.git
```

2. go to the folder and then run this in your terminal
```
bundle exec jekyll serve
```
then follow the given local address to see your web page!

## Add/Edit the minerals
1. The mineral data is hosted in two folders:
	- `_posts/`: a markdown file for each mineral containing data and infomation
	
	- `mineralsdata/`: a folder for each mineral contaning images, input files, cif files
	
	each mineral, i.e. Aegirine, it has `_posts/0001-01-01-Acimite.md` and `mineralsdata/Acimite/`.
	
2. Markdown file for `0001-01-01-The_Mineral.md` mineral in `_posts/`, e.g.
	
	In `_posts/0001-01-01-Acimite.md`, the header of this markdown includes:
	
	* ```markdown
	  ---
	  layout: mineral
	  title: "Acmite"
	  date: 0001-01-01 00:00:00 -0400
	  
	  name: Acmite
	  formula: NaFeSi<sub>2</sub>O<sub>6</sub>, Z=4
	  space_group: "#15, C2/c"
	  lattice_parameters:
	      a: 9.6554
	      b: 8.7952
	      c: 5.2942
	      α: 90
	      β: 107.396
	      γ: 90
	      volume(Å<sup>3</sup>): 429.026
	  
	  ineqv_atom_position:
	      -   atom: Na
	          x: 0.00000
	          y: 0.29880
	          z: 0.25000
	          site: 4e
	  
	      -   atom: Fe
	          x: 0.00000
	          y: 0.89900
	          z: 0.25000
	          site: 4e
	          
	          ...
	          
	          ...
	          
	   coordi_primitive:
	      -   atom: Na
	          x: 0.2988
	          y: 0.2988
	          z: 0.25
	  
	      -   atom: Na
	          x: 0.2988
	          y: 0.2988
	          z: 0.25
	          
	       ...
	       
	       ...
	       
	   structure_img: /mineralsdata/Aegirine/Aegirine.png
	  
	  cif: |-
	      long_cif_information_without_quotes
	  
	  structure_source: 
	      name: Almandine
	      url: http://rruff.geo.arizona.edu/AMS/download.php?id=08950.amc&down=amc
	      database_code: _database_code_amcsd 0007689
	  
	  input: /mineralsdata/Aegirine/Aegirine_AMS_DATA.POSCAR.vasp
	  --- 
	  ```
	
	  Do not need to fill all of them! If leave them empty they will now show on the web page.
	
	* The header is included between the 
	
	* ```markdown
	  --- 
	  layout: mineral
	  title: "Acmite"
	  date: 0001-01-01 00:00:00 -0400
	  
	  ....: ....
	  --- 
	  ```
	
	  And everything belown the header will be parsed into normal markdown format.
	
3. Generate Markdown file using `/pyscript/generate_from_cif.py`
	Enter the `/pyscript` folder
	```
	cd pyscript/
	```

	modify the information in `generate_from_cif.py` which lines in the very bottom, for example:
	```Python
	mineral_name = "Almandine"
    cifdata = read_cif("../mineralsdata/Almandine/Almandine AMS_DATA.cif")
    get_output(cifdata)
	```

	then run it! A `tmp.md` will show up in this `pyscript/` folder.
	Add & edit the stuff in the markdown file and copy & paste into `_posts/0001-01-01-***.md`!

4. Note that the numeric subscripts and etc in `formula` should be written in html syntax, i.e. 
	```
	Fe<sub>2</sub>O<sub>3<sub>
	Fe<sup>3+</sup>
	```