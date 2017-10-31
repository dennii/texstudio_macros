# TeXstudio macros

This repository will collect any useful macros that I've written for the LaTeX IDE [TeXstudio](http://www.texstudio.org/). Currently, there is only one macro, which attempts to replicate Mathematica's `Esc-<letter>-Esc` input method for symbols (particularly, Greek letters).

To use this macro, create a new "Script" macro in TeXstudio, copy the Javascript code into the text box, and put the character `¦` in the "Trigger" field. By default, the shortcut will be `Shift+Fn` (for some `n`). Setting `Esc` as the shortcut will need to be done manually through TeXstudio's options. If the macro has been added to TeXstudio, and `Esc` has been set as its shortcut, then typing `Esc-a-Esc` should enter `\alpha`, `Esc-A-Esc` should enter `\Alpha`, etc. (The beginning of the Javascript file contains the substitutions implemented; more substitutions can also be added here.)
