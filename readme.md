
# One Page Template

Sometimes it's nice to go back to the basics and just build a web-page in one file. 

All that fancy stuff is gone - no transpilation, no types, no minification. Just load the page and go. 

If the whole project can be expressed in one file, it is entirely self-contained and will not deprecate.

It's just plain javascript so you can view the source in your browser directly! 

This is my starter `index.html`. It includes what I consider the essentials to have a fun and flexible prototying environment:

- all cdn imports from the web
- Bootstrap 5 with very nice default styles (this version finally deprecates jquery)
- Vue is the only major framework that can work like this (without transpilation)
- lodash - pretty much the missing standard library for modern javascript
- pug - to let my build up my DOM in the most compact and expressive notation thatn HTML.

I use cdn imports
What I don't worry about:
- types
- source file size

