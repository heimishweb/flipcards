-- HTML
INSERT INTO flipcard (category, question, answer) VALUES ('html','Where does the link for CSS file go in the html?','Within head tags.');
INSERT INTO flipcard (category, question, answer) VALUES ('html','What does CDN stand for?','Content delivery network');
INSERT INTO flipcard (category, question, answer) VALUES ('html','What is the difference between HTML elements and tags?','An HTML tag is an indication to a web browser of how a web page should displayed, but an HTML element is an individual component of HTML. HTML elements are created using HTML tags.');
INSERT INTO flipcard (category, question, answer) VALUES ('html','Name at least 3 HTML layout elements.','header, nav, section, article, aside and footer');
INSERT INTO flipcard (category, question, answer) VALUES ('html','What are the list types available in HTML?','Ordered list, Unordered list, Definition list, Menu list, Directory list');
INSERT INTO flipcard (category, question, answer) VALUES ('html','What are the storage types of HTML5','Session Storage and Local Storage');
INSERT INTO flipcard (category, question, answer) VALUES ('html','What is the Get and Post Method?','GET s use to request the data from server and POST is used for submitting the data to a server.');

-- JAVASCRIPT
INSERT INTO flipcard (category, question, answer) VALUES ('Javascript', 'Name three javascript datatypes.', 'String, Number, Boolean, Undefined, Null, Object, Array, Function, typeOf operator');
INSERT INTO flipcard (category, question, answer) VALUES ('Javascript', 'What are global variables and what are problems you can run into while using them?', 'Global variables are available throughout the length of the code, that is, they have no scope. The problems that are faced by using global variables are the clash of variable names of local and global scope. Also, it is difficult to debug and test the code that relies on global variables.');
INSERT INTO flipcard (category, question, answer) VALUES ('Javascript', 'What would be the result of 3 + 2 + "7"', 'Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57.');
INSERT INTO flipcard (category, question, answer) VALUES ('Javascript', 'Explain the difference between "==" and "==="?', '"==" checks only for equality in value whereas "===" is a stricter equality test and returns false if either the value or the type of the two variables are different.');
INSERT INTO flipcard (category, question, answer) VALUES ('Javascript', 'What is "this" keyword in JavaScript?', '"This" keyword refers to the object from where it was called.');
INSERT INTO flipcard (category, question, answer) VALUES ('Javascript', 'What does JSON stand for and what is it used for?', 'JSON stands for JavaScript Object Notation and it is a lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a web page');
INSERT INTO flipcard (category, question, answer) VALUES ('Javascript','What is the difference between synchronous and asynchronous code.','Aynchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn’t have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user.');

-- CSS
INSERT INTO flipcard (category, question, answer) VALUES ('css','If you wanted to include CSS code inside html file, what tag do you use?', 'style tag');
INSERT INTO flipcard (category, question, answer) VALUES ('css','What does !important do?','It causes the corresponding styling code to override other existing parameters for that feature.');
INSERT INTO flipcard (category, question, answer) VALUES ('css','What is the difference between a class selector and and id selector?','In the CSS, a class selector is a name preceded by a full stop (“.”) and an ID selector is a name preceded by a hash character (“#”). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.');
INSERT INTO flipcard (category, question, answer) VALUES ('css','What are the advantages of using an external stylesheet','(1) You can control the styles of multiple documents from one file (2) Once changed/updated, the changes are reflected on all other pages that reference the stylesheet (3) It makes it easier to maintain larger websites');
INSERT INTO flipcard (category, question, answer) VALUES ('css','What is the box model and what are its elements?', 'The CSS box model is used to define the design and layout of elements of CSS. The elements of the box model include content, padding, border and margin.');
INSERT INTO flipcard (category, question, answer) VALUES ('css','Name then elements of the CSS Box Model','Content, Padding, Border and Margin');
INSERT INTO flipcard (category, question, answer) VALUES ('css','Name the parts of CSS syntax.','Selector, Property and Value. Proberty & Value make up the Declaration Block');

-- MYSQL
INSERT INTO flipcard (category, question, answer) VALUES ('sql', 'What does ORM stand for and what is its purpose', 'Object Relational Mapping (ORM) is the technique of accessing a relational database using an object-oriented programming language. Object Relational Mapping is a way for Javascript programs to manage database data by "mapping" database tables to classes and classes to rows in those tables.');
INSERT INTO flipcard (category, question, answer) VALUES ('sql', 'What syntax would you use to combine a table named "dog" with an "id" column to a table named "owner" that has a matching "ownerId" column?', 'SELECT * FROM dog INNER JOIN owner ON dog.id = owner.ownerId;');
INSERT INTO flipcard (category, question, answer) VALUES ('sql', 'What does CMS stand for and what is it used for?', 'CMS stands for Content Management System and it is a software application or set of related programs that are used to create and manage digital content. Content Management Systems are typically used for enterprise content management (ECM) and web content management (WCM).');
INSERT INTO flipcard (category, question, answer) VALUES ('sql','The default port number of MySQL is?','3306');
INSERT INTO flipcard (category, question, answer) VALUES ('sql','Inner, Left and Right are all what in mySQL','Joins');
INSERT INTO flipcard (category, question, answer) VALUES ('sql','Name at least 3 string types,','SET, BLOB, ENUM, CHAR, TEXT, VARCHAR');
INSERT INTO flipcard (category, question, answer) VALUES ('sql','What will this query do? SELECT * FROM TABLE LIMIT 10','Retrieve 10 rows of all columns from a table');
